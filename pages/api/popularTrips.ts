import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { Trip } from '@/pages/api/trip';

export type Trips = Trip[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prismaResponse = await prisma.trip.findMany();
  res.status(200).json(prismaResponse);
}
