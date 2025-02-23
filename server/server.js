require("dotenv").config(); // Load environment variables
const env = require("./env");

const cookieParser = require("cookie-parser");
const passport = require("passport");
const express = require("express");
const helmet = require("helmet");
const path = require("node:path");
const hbs = require("hbs");

const helpers = require("./handlers/helpers.handler");
const renders = require("./handlers/renders.handler");
const asyncHandler = require("./utils/asyncHandler");
const locals = require("./handlers/locals.handler");
const links = require("./handlers/links.handler");
const routes = require("./routes");
const utils = require("./utils");

// Run cron jobs only on the primary instance (useful for PM2 clustering)
if (!env.NODE_APP_INSTANCE || env.NODE_APP_INSTANCE === "0") {
  require("./cron");
}

// Initialize passport authentication
require("./passport");

// Create Express app
const app = express();

// Trust proxy (for deployments behind reverse proxies like Vercel)
if (env.TRUST_PROXY) {
  app.set("trust proxy", true);
}

// Security middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use("/images", express.static("custom/images"));
app.use("/css", express.static("custom/css", { extensions: ["css"] }));
app.use(express.static("static"));

app.use(passport.initialize());
app.use(locals.isHTML);
app.use(locals.config);

// Configure Handlebars (HBS) as the templating engine
app.set("view engine", "hbs");
app.set("views", [
  path.join(__dirname, "../custom/views"),
  path.join(__dirname, "views"),
]);
utils.registerHandlebarsHelpers();

// Redirect custom domain homepage if necessary
app.use(asyncHandler(links.redirectCustomDomainHomepage));

// Render HTML pages
app.use("/", routes.render);

// API routes
app.use("/api/v2", routes.api);
app.use("/api", routes.api);

// Redirect short links
app.get("/:id", asyncHandler(links.redirect));

// Handle 404 errors
app.get("*", renders.notFound);

// Global error handling middleware
app.use(helpers.error);

// Start the server (for local development)
if (require.main === module) {
  app.listen(env.PORT, () => {
    console.log(`> Server running at http://localhost:${env.PORT}`);
  });
}

// Export for Vercel
module.exports = app;
