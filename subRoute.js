const express = require("express");
const db = require("./data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allCars = await db("*").from("cars");
    res.status(200).json(allCars);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const newcar = {
    vin: req.body.vin,
    make: req.body.make,
    model: req.body.model,
    milleage: req.body.milleage,
    transmissionType: req.body.transmissionType,
    carStatus: req.body.carStatus
  };
  try {
    const add = await db.insert(newcar).into("cars");
    res.status(200).json(newcar);
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
