import prisma from "db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    success: boolean;
    data?: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const zones = await prisma.zone.findMany();
        res.status(200).json({ success: true, data: zones });
    } catch (error) {
        res.status(200).json({ success: false });
    }
}