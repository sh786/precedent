import { H1 } from "@/components/shared/typography";

export async function getData() {
  const res = await fetch(`http://localhost:3000/api/hello`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data)

  return (
    <H1 className="bg-gradient-to-r from-sky-400 to-slate-600 bg-clip-text text-transparent">
      TripIt
    </H1>
  );
}
