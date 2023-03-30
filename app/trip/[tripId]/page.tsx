import { H2 } from '@/components/shared/typography';
import { Trip } from '@/pages/api/trip';
import { headers } from 'next/headers';

export async function getData(tripId: string): Promise<Trip> {
  const headerList = headers();
  const host = headerList.get('host');

  const res = await fetch(`http://${host}/api/trip`, {
    method: 'POST',
    body: tripId,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Trip>;
}

export default async function Page({ params }: { params: { tripId: string } }) {
  const { tripId } = params;

  const trip = await getData(tripId);

  console.log(tripId, 'tripId', trip);

  return (
    <div className="rounded-md bg-slate-800 p-6">
      <H2 className="mb-4">Trip </H2>
    </div>
  );
}
