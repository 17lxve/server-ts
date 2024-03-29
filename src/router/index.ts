// Imports
import getEndpoints from "express-list-endpoints";
import testRoutes from "./test";
import exampleRoutes from "./example";
import server from "../app";
import { Router } from "express";

function init() {
  // Create a router for general use
  const router = Router();

  // Add the routes to the router
  // Simple routes
  router.get("/", (req, res) => res.send({ msg: "Hello World from Timmy!" }));
  router.get("/routes", (req, res) =>
    res.send(
      getEndpoints(server).map(
        (endpoint) => `${endpoint.methods} ${endpoint.path}`,
      ),
    ),
  );

  // Grouped routes
  router.use("/test", testRoutes);
  router.use("/example", exampleRoutes);
  // Return the router
  return router;
}

// Exports
export default init();
