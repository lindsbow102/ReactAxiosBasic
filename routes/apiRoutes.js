const axios = require("axios");
const router = require("express").Router();
const OMDBURL = "https://www.omdbapi.com/?t=";
const OMDBAPIKEY = "&apikey=trilogy";
const BANDSURL = "https://rest.bandsintown.com/artists/";
const BANDSAPIKEY = "/events/?app_id=lindsey";

router.get("/moviesearch", (req, res) => {
  axios
    .get(OMDBURL + req.query.t + OMDBAPIKEY)
    // .then(({ data: { results } }) => res.json(results))
    .then(({ data }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

// router.get("/concertsearch", (req, res) => {
//     axios
//     .get("https://rest.bandsintown.com/artists/" + req.params.artist + BANDSAPIKEY)
//     .then(({ data }) => res.json(data))
//     .catch(err => res.status(422).json(err));
//   });

router.get("/concertsearch", (req, res) => {
  axios
    .get(
        "https://rest.bandsintown.com/artists/" + req.params.artist + BANDSAPIKEY
    )
    .then(({ data }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

router.get("/recipes", (req, res) => {
    axios
      .get("http://www.recipepuppy.com/api/", { params: req.query })
      // .then(({ data: { results } }) => res.json(results))
      .then(({ data: { results }}) => res.json(results))
      .catch(err => res.status(422).json(err));
  });

module.exports = router;
