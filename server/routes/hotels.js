import express from "express";

import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAll,
  getHotelRooms,
  getOne,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE

router.post("/", verifyAdmin, createHotel);

// UPDATE

router.put("/:id", verifyAdmin, updateHotel);

// DELETE

router.delete("/:id", verifyAdmin, deleteHotel);

// GET(one specific)

router.get("/find/:id", getOne);

// GET ALL

router.get("/", getAll);

// COUNT BY CITY

router.get("/countByCity", countByCity);

// COUNT BY TYPE

router.get("/countByType", countByType);

// GET ALL ROOMS

router.get("/room/:id", getHotelRooms);

export default router;
