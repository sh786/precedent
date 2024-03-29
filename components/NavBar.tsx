import { P, Large, Small } from '@/components/shared/typography';
import { Plane } from 'lucide-react';
import Link from 'next/link';
import { Div } from '@/components/motion/Div';

export function NavBar() {
  return (
    <nav className="flex items-center rounded-b-xl p-4 text-slate-800 sm:px-6">
      <Div whileHover={{ scale: 1.05 }}>
        <Link
          href="/"
          className="flex flex-col items-baseline gap-x-2 gap-y-1 md:flex-row"
        >
          <Large className="text-3xl font-extrabold tracking-wide">
            <span>Trip</span>
            <span className="text-camel-orange">It</span>
          </Large>
          <Small className="text-xs text-slate-700 md:text-sm">
            build your next vacation today
          </Small>
        </Link>
      </Div>
      <Div
        className="ml-auto flex rounded-full bg-slate-800 px-4 py-2 text-white shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <Link href="/build">
          <P className="flex items-center text-sm md:text-base">
            <Plane size={16} className="mr-1" /> Build a Trip
          </P>
        </Link>
      </Div>
    </nav>
  );
}
