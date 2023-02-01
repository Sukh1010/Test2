import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

import upload from "../multerConfig.js";

const router = express.Router();

router.get("/", getUser);
router.put("/:_id", updateUser);
router.delete("/:_id", deleteUser);
// router.post("/uploads", upload.single("file"), createUser);
router.post("/uploads", upload.array("file", 5), createUser);

export default router;
