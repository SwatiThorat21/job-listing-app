const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/job");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const databaseName = "jobportal";

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: databaseName,
});

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "job-listing-app",
    time: new Date().toString(),
    status: "active",
  });
});

//register routes
app.use("/auth", authRoutes);
app.use("/job", jobRoutes);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(
        `Server running sucessfully on http://localhost:${process.env.PORT}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
