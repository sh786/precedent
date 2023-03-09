import { H2 } from "@/components/shared/typography";
import { PromptInput } from "@/app/components/PromptInput";

export default async function Page() {
  return (
    <div className="rounded-md bg-slate-800 p-6">
      <H2 className="mb-4">What are you looking for in your trip?</H2>
      <PromptInput />
    </div>
  );
}
