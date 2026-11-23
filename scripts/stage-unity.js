/**
 * Stage the Unity WebGL build into static/Game with content-hashed filenames.
 *
 * Source:  unity/            (tracked, .unityweb files in Git LFS)
 * Output:  static/Game/      (generated, git-ignored; Gatsby serves it at /Game)
 *
 * Each .unityweb file is written as <name>.<hash>.unityweb and the build
 * configs (*.json) are rewritten to match, so the files can be cached as
 * immutable (see vercel.json) and a changed file always gets a new URL.
 * The hash goes in the filename, not a ?query, because UnityLoader checks
 * URLs with endsWith(".unityweb").
 *
 * This runs before Gatsby (prebuild/predevelop) so every consumer of the
 * build output, including Vercel's Gatsby integration, sees the final files.
 */
const crypto = require("crypto")
const fs = require("fs")
const path = require("path")

const root = path.join(__dirname, "..")
const srcDir = path.join(root, "unity")
const outDir = path.join(root, "static", "Game")
const URL_KEYS = ["dataUrl", "wasmCodeUrl", "wasmFrameworkUrl"]

if (!fs.existsSync(srcDir)) {
  console.error(`stage-unity: ${srcDir} not found`)
  process.exit(1)
}

fs.rmSync(outDir, { recursive: true, force: true })

const hashed = {} // "Build/test.data.unityweb" -> "Build/test.data.<hash>.unityweb"

function hashedName(rel) {
  if (!hashed[rel]) {
    const buf = fs.readFileSync(path.join(srcDir, rel))
    // Guard against an un-fetched Git LFS pointer reaching production.
    if (buf.length < 1024 && buf.toString("utf8").startsWith("version https://git-lfs")) {
      throw new Error(`stage-unity: ${rel} is a Git LFS pointer; enable LFS for this checkout`)
    }
    const hash = crypto.createHash("sha256").update(buf).digest("hex").slice(0, 12)
    hashed[rel] = rel.replace(/\.unityweb$/, `.${hash}.unityweb`)
  }
  return hashed[rel]
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : [path.relative(srcDir, full)]
  })
}

const files = walk(srcDir)

// Configs first: they decide which .unityweb files get hashed names.
for (const rel of files.filter(f => f.endsWith(".json"))) {
  const config = JSON.parse(fs.readFileSync(path.join(srcDir, rel), "utf8"))
  const dir = path.dirname(rel)
  for (const key of URL_KEYS) {
    if (config[key] && config[key].endsWith(".unityweb")) {
      config[key] = path.basename(hashedName(path.join(dir, config[key])))
    }
  }
  fs.mkdirSync(path.join(outDir, dir), { recursive: true })
  fs.writeFileSync(path.join(outDir, rel), JSON.stringify(config, null, 2) + "\n")
}

// Everything else: hashed copies of referenced .unityweb files, plain copies otherwise.
for (const rel of files.filter(f => !f.endsWith(".json"))) {
  if (rel.endsWith(".unityweb") && !hashed[rel]) continue // not referenced by any config
  const dest = path.join(outDir, hashed[rel] || rel)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(path.join(srcDir, rel), dest)
}

console.log(`stage-unity: staged ${Object.keys(hashed).length} hashed files into static/Game`)
