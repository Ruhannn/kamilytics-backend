import { Request, Response } from "express";
import savaData from "../model/Savedata";

export const getDataAnalytics = async (req: Request, res: Response) => {

    const analyticsData = await savaData.find();

    const posts = analyticsData.map(data => ({
        Time: data.time,
        Page: data.page,
        Browser: data.browser,
        OS: data.os,
        Device: data.device,
        Country: data.country,
        Timezone: data.timezone,
    }));

    res.json(posts);

};
