import { HeroSection } from '@/components/HeroSection';
import { Card } from '@/components/motion/Card';
import { H2 } from '@/components/shared/typography';

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

export default function Page() {
  return (
    <div>
      <HeroSection />
      <div className=" text-slate-800">
        <H2>Explore Trips</H2>
        <div className="flex flex-wrap gap-4 py-6">
          {mockExploreTrips.map((trip) => (
            <Card key={trip.name}>
              <span className=" text-slate-800 md:text-lg">{trip.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
