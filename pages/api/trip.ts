import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export type Trip = {
    id: string,
    gptResponse: string,
    prompt: string,
    location: string,
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.body;
    console.log('id handler', id)
    const prismaResponse = await prisma.trip.findFirst(
        {
            where: {
                id,
            },
        }
    );

    console.log(prismaResponse);

    res.status(200).json({});
}
