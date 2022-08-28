import express from "express";

import {
  getCivById,
  getAllCivs,
  addCiv,
  updateCiv,
  deleteCiv,
} from "../models/civsModels.js";

//ROUTER FOR /Civ
const civRouter = express.Router();

//GET ALL Civ S
civRouter.get("/", async function (req, res) {
    console.log("GET request for all Civilisations")
  const responseObject = {
    success: true,
    message: "returned all Civilisations",
    payload: await getAllCivs(),
  };
  res.status(200).json(responseObject);
});

// GET  BY ID
civRouter.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  console.log(`GET request for Civilisation  with id of ${id}`)
  const responseObject = {
    success: true,
    message: "returned Civilisation with ${id}",
    payload: await getCivById(id),
  };
  res.status(200).json(responseObject);
});

//REPLACE A Civ  BY ID
civRouter.put("/:id", async function (req, res) {
    const id = Number(req.params.id);
    console.log(`PUT request for Civilisation  with id of ${id}`)  
  const updatedCiv = req.body;
  const responseObject = {
    success: true,
    message: "returned all Civilisations",
    payload: await updateCiv(id, updatedCiv),
  };
  res.status(200).json(responseObject);
});

//ADD A NEW Civ 
civRouter.post("/", async function (req, res) {
  const newCiv = req.body;
  console.log(`POST request for new Civilisation  : ${JSON.stringify(newCiv)}`);
  const responseObject = {
    success: true,
    message: `added new Civ : ${JSON.stringify(newCiv)}`,
    payload: await addCiv(newCiv),
  };
  res.status(200).json(responseObject);
});

//DELETE A Civ 
civRouter.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  console.log(`DELETE request for Civilisation  with id of ${id}`)
  const responseObject = {
    success: true,
    message: `Civilisation deleted with id of ${id}`,
    payload: await deleteCiv(id),
  };
  res.status(200).json(responseObject);
});

export default civRouter;
