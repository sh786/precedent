import { Textarea } from "@/components/shared/ui/Textarea";
import { H2 } from "@/components/shared/typography";
import Input from "@/components/input";

export default async function Page() {
  return (
    <div className="rounded-md bg-slate-800 p-6">
      <H2 className="mb-4">What are you looking for in your trip?</H2>
      <Input />
    </div>
  );
}
