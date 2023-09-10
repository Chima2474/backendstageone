const express = require("express");
const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  const { slack_name, track } = req.query;

  const currentTime = new Date();
  utc_time = Math.floor(currentTime.getTime() / 1000);
  const dayOfWeek = currentTime.getDay();

  // Define an array of day names for human-readable output
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (slack_name && track) {
    return res.status(200).json({
      status_code: 200,
      slack_name: "emmanuel chima",
      track: "Backend",
    });
  }

  if (slack_name) {
    return res
      .status(200)
      .json({ status_code: 200, slack_name: "emmanuel chima" });
  }
  if (track) {
    return res.status(200).json({ status_code: 200, track: "Backend" });
  }

  res.status(200).json({
    status_code: 200,
    slack_name: "emmanuel chima",
    current_day: dayNames[dayOfWeek],
    utc_time,
    track: "backend",
    github_file_url:
      "https://github.com/Chima2474/backendstageone/blob/main/app.js",
    github_repo_url: "https://github.com/Chima2474/backendstageone",
  });
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`server is listening on port ${port}`);
});
