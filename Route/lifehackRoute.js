const express = require("express");
const router = express.Router();
const lifehackController = require("../Controller/lifehackController");

router.param("id", (req, res, next, val) => {
  console.log(`Id: ${val}`);
  next();
});
router
  .route("/:id")
  .get(lifehackController.getsinglelifehacks)
  .delete(lifehackController.deletelifehack)
  .patch(lifehackController.updatelifehack);
router.route("/").get(lifehackController.getalllifehack).post(lifehackController.createlifehack);

module.exports = router;
