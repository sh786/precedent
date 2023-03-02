import { Textarea } from "@/components/shared/ui/Textarea";
import { H2 } from "@/components/shared/typography";
import { Button } from "@/components/shared/ui/Button";

export default function Page() {
  return (
    <div className="rounded-md bg-slate-800 p-6">
      <H2 className="mb-4">What are you looking for in your trip?</H2>
      <Textarea className="mb-4" placeholder="Type your message here." />
      <Button className="float-right">Generate</Button>
    </div>
  );
}
