import { HeroSection } from '@/components/HeroSection';
import { Card } from '@/components/motion/Card';
import { H2 } from '@/components/shared/typography';
import { Trip } from '@/pages/api/trip';
import { headers } from 'next/headers';
import Link from 'next/link';

export async function getData(): Promise<Trip []> {
    const headerList = headers();
    const host = headerList.get('host');

    console.log('get data')

    const res = await fetch(`http://${host}/api/popularTrips`, {
      method: 'POST',
    });

    console.log('got a response')
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json() as Promise<Trip[]>;
  }

const mockExploreTrips = [
  {
    name: 'Vegas Baby',
  },
  {
    name: 'San Diego Sun',
  },
  {
    name: 'Viva Mexico',
  },
  {
    name: 'Hawaii Honeymoon',
  },
];

export default async function HomeLanding() {
  const trips = await getData();
  console.log(trips, 'trips.... hmmm');

  return (
    <div>
      <HeroSection />
      <div className="mt-2 text-slate-800">
        <H2>Explore Trips</H2>
        <div className="flex flex-wrap gap-4 py-6">
          {trips.length && trips.map((trip: Trip) => (
            <Link key={trip.id} href={`/trip/${trip.id}`}>
              <Card whileHover={{ scale: 1.05 }}>
                <span className=" text-slate-800 md:text-lg">{trip.location}</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
