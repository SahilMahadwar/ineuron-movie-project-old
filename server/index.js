const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
<<<<<<< HEAD
const errorHandler = require("./middleware/error");
=======
>>>>>>> 243b68f1133ffaf56dd7ed6cf860cfc7b9728cb2

//Load env vars
dotenv.config({ path: "../.env" });

// Connect to db
connectDB();

<<<<<<< HEAD
//Route Files
const auth = require("./routes/auth");

=======
>>>>>>> 243b68f1133ffaf56dd7ed6cf860cfc7b9728cb2
//Create App
const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("short"));
}

// Mount routers
app.use("/api/v1/auth", auth);

// Api Home
app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

<<<<<<< HEAD
// 404 Endpoint
=======
app.get("/hello", async (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

>>>>>>> 243b68f1133ffaf56dd7ed6cf860cfc7b9728cb2
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Ineuron Movie API  running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server and exit process
  server.close(() => process.exit(1));
});
