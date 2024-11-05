import { Router } from "express";
import { saveDataAnalytics } from "./saveDataAnalytics";
import { getDataAnalytics } from "./getDataAnalytics";



const router = Router();

router.post('/saveData', saveDataAnalytics);
router.get('/getdata', getDataAnalytics);




export default router;
