const express = require("express");
const router = express.Router();
const {getCats, createCat, getCat, updateCat, deleteCat, searchCats} =  require("../controllers/catController");


router.get("/", getCats)
router.get("/search", searchCats)
router.get("/:id", getCat)
router.post("/", createCat)
router.put("/:id", updateCat)
router.delete("/:id", deleteCat)

module.exports = router 