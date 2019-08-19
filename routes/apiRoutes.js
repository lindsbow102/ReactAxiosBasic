const axios = require("axios");
const router = require("express").Router();
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

router.get("/concerts", (req, res) => {
  axios
  .get(BASEURL + req.query.t + APIKEY)
  // .then(({ data: { results } }) => res.json(results))
  .then(({ data }) => res.json(data))
  .catch(err => res.status(422).json(err));
});

module.exports = router;
