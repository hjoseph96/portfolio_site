/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};

// Cache-bust the Unity build: rename each .unityweb file in the build output to
// include a content hash (test.data.<hash>.unityweb) and point the build
// configs at the new names. The files can then be cached as immutable (see
// vercel.json) and a changed file always gets a new URL. The hash goes in the
// filename, not a ?query, because UnityLoader checks URLs with
// endsWith(".unityweb").
exports.onPostBuild = ({ reporter }) => {
  const crypto = require(`crypto`)
  const fs = require(`fs`)
  const path = require(`path`)

  const buildDir = path.join(__dirname, `public`, `Game`, `Build`)
  if (!fs.existsSync(buildDir)) return

  const urlKeys = [`dataUrl`, `wasmCodeUrl`, `wasmFrameworkUrl`]
  const configs = fs.readdirSync(buildDir).filter(f => f.endsWith(`.json`))
  const renamed = {} // original name -> hashed name (files can be shared by configs)

  const versioned = file => {
    if (!renamed[file]) {
      const hash = crypto
        .createHash(`sha256`)
        .update(fs.readFileSync(path.join(buildDir, file)))
        .digest(`hex`)
        .slice(0, 12)
      renamed[file] = file.replace(/\.unityweb$/, `.${hash}.unityweb`)
    }
    return renamed[file]
  }

  for (const name of configs) {
    const configPath = path.join(buildDir, name)
    const config = JSON.parse(fs.readFileSync(configPath, `utf8`))
    for (const key of urlKeys) {
      if (config[key] && config[key].endsWith(`.unityweb`)) {
        config[key] = versioned(config[key])
      }
    }
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2))
  }

  for (const [from, to] of Object.entries(renamed)) {
    fs.renameSync(path.join(buildDir, from), path.join(buildDir, to))
  }
  reporter.info(`unity: versioned ${Object.keys(renamed).length} files in ${configs.join(`, `)}`)
}
