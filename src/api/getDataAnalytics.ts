import { Request, Response } from "express";
import savaData from "../model/Savedata";

export const getDataAnalytics = async (req: Request, res: Response) => {

    const analyticsData = await savaData.aggregate([
        {
            $facet: {
                pages: [
                    { $group: { _id: "$page", count: { $sum: 1 } } },
                    { $project: { _id: 0, page: "$_id", count: 1 } }
                ],
                browsers: [
                    { $group: { _id: "$browser", count: { $sum: 1 } } },
                    { $project: { _id: 0, browser: "$_id", count: 1 } }
                ],
                devices: [
                    { $group: { _id: "$device", count: { $sum: 1 } } },
                    { $project: { _id: 0, device: "$_id", count: 1 } }
                ],
                operatingSystems: [
                    { $group: { _id: "$os", count: { $sum: 1 } } },
                    { $project: { _id: 0, os: "$_id", count: 1 } }
                ],
                countries: [
                    { $group: { _id: "$country", count: { $sum: 1 } } },
                    { $project: { _id: 0, country: "$_id", count: 1 } }
                ],
                timezones: [
                    { $group: { _id: "$timezone", count: { $sum: 1 } } },
                    { $project: { _id: 0, timezone: "$_id", count: 1 } }
                ]
            }
        }
    ]);


    const data = analyticsData[0];

    res.json(data);

};
