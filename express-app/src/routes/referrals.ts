import { Router } from "express";
import { addReferral, getReferrals } from "../handlers/referrals";

const router = Router();

router.get("/", getReferrals);
router.post("/", addReferral);

export default router;