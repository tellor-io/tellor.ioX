const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/2",
    createProxyMiddleware({
      target: "https://api.twitter.com",
      changeOrigin: true,
    })
  );
};
