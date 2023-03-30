import { H2 } from '@/components/shared/typography';
import prisma from '@/lib/prisma';
import { Trip } from '@prisma/client';

async function getData(tripId: string): Promise<Trip | null> {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
    },
  });
  return trip;
}

export default async function Page({ params }: { params: { tripId: string } }) {
  const { tripId } = params;

  const trip = await getData(tripId);

  return (
    <div className="rounded-md bg-slate-800 p-6">
      <H2 className="mb-4">Trip </H2>
      <pre>{JSON.stringify(trip)}</pre>
    </div>
  );
}
