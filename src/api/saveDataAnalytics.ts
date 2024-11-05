import { Request, Response } from "express";
import savaData from "../model/Savedata";

export const saveDataAnalytics = async (req: Request, res: Response) => {
    const { time, page, browser, os, device, country, timezone } = req.body;
    const analyticsData = new savaData({
        time,
        page,
        browser,
        os,
        device,
        country,
        timezone
    });

    await analyticsData.save();
    res.json("donee")
};