/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

// Favicons and web manifest (files live in /static).
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon-ico" rel="icon" href="/favicon.ico" sizes="any" />,
    <link key="favicon-32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
    <link key="favicon-16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />,
    <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,
    <link key="manifest" rel="manifest" href="/site.webmanifest" />,
  ])
}
