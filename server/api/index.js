const router = require("express").Router();

router.use("/puppies", require("./puppies")); // matches all requests to  /api/puppies/
// router.use('/users', require('./users')); // matches all requests to /api/users/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

//Error 404 handling
router.use(function(req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
