express = require("express");
dotenv = require("dotenv");
const logger = require("./Middleware/logger");
const morgan = require("morgan");
const connectDB = require('./config/db');



//load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

//Route Files
const bootcamps = require("./routes/bootcamps");

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(logger);

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `App listening on port ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
