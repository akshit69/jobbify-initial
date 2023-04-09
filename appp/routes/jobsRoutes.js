import express from "express";
const router = express.Router();

import {
  createJob,
  getAllJobs,
  updateJobs,
  deleteJob,
  showStats,
} from "../controllers/jobsControlleer.js";

router.route("/").post(createJob).get(getAllJobs);

// remeember about :id

router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJobs);

export default router;
