import { HeroSection } from '@/components/HeroSection';
import { Card } from '@/components/motion/Card';
import { H2 } from '@/components/shared/typography';
import prisma from '@/lib/prisma';
import { Trip } from '@prisma/client';
import Link from 'next/link';

async function getData(): Promise<Trip[]> {
  const popularTrips = await prisma.trip.findMany();
  return popularTrips;
}

export default async function HomeLanding() {
  const trips = await getData();

  return (
    <div>
      <HeroSection />
      <div className="mt-2 text-slate-800">
        <H2>Explore Trips</H2>
        <div className="flex flex-wrap gap-4 py-6">
          {trips.length &&
            trips.map((trip: Trip) => (
              <Link key={trip.id} href={`/trip/${trip.id}`}>
                <Card whileHover={{ scale: 1.05 }}>
                  <span className=" text-slate-800 md:text-lg">
                    {trip.location}
                  </span>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
