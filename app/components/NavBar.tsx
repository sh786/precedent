import { P, Large } from "@/components/shared/typography";
import { Plane } from "lucide-react";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="flex items-center rounded-b-xl bg-slate-800 py-4 px-6 text-white">
      <Link href="/">
        <Large className="text-2xl tracking-wider">TripIt</Large>
      </Link>
      <div className="ml-auto flex">
        <Link href="/create">
          <P className="flex items-center">
            <Plane size={16} className="mr-1" /> Create a Trip
          </P>
        </Link>
      </div>
    </nav>
  );
}
