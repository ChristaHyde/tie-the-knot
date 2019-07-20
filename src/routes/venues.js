var Venue = require("../models/venue");

module.exports = function (app) {
  // [HTTP METHOD] endpoint | what it does
  // [GET] /api.venues | Get all venues
  app.get("/api/venues/:userId", function (req, res) {
    const { userId } = req.params;
    Venue.find({ userId }).then(function (venues) {
      res.json(venues);
    });
  });

  // Create a new venue
  app.post("/api/venues", function (req, res) {
    Venue.create(req.body).then(function (venue) {
      res.json(venue);
    });
  });


  // Update a new venue
  app.put("/api/venues/:id", async function (req, res) {
    const { id } = req.params;
    const selector = { _id: id };
    const upd = {
      $set: req.body
    };
    console.log('update venue', JSON.stringify(selector), JSON.stringify(upd));
    const result = await Venue.updateOne(selector, upd);
    res.json({ result });
  });


  // Delete an example by id
  app.delete("/api/venues/:id", function (req, res) {
    console.log('id', req.params.id)
    Venue.deleteOne({ where: { id: ObjectId(req.params.id) } }).then(function (venue) {
      res.json(venue);
    });
  });
};
