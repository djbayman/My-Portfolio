/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.ts",
  serverBuildPath: "functions/_worker.js",
  ignoredRouteFiles: ["**/.*"],
};
