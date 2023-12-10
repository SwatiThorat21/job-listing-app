const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/job')

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "job-listing-app",
    time: new Date().toString(),
    status: "active",
  });
});

//register routes
app.use('/auth', authRoutes);
// app.use('/api/job', jobRoutes);

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
