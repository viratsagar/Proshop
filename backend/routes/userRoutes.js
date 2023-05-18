import express from "express";
import {
  userAuth,
  getUserprofile,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/login", userAuth);
router.route("/profile").get(protect, getUserprofile);
router.post("/", registerUser);

export default router;
