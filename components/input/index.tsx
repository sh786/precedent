'use client';
import { useState, useRef } from "react";
import { Textarea } from "@/components/shared/ui/Textarea";
import { H2 } from "@/components/shared/typography";
import { Button } from "@/components/shared/ui/Button";

export async function getData(text: string) {
    const res = await fetch(`${window.location.origin}/api/prompt`, {method: 'POST', body: text});
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
}

export default function Input() {
    const [response, setResponse] = useState(null);

    const inputRef = useRef<HTMLTextAreaElement>(null);

    const onClick = async () => {
        console.log(inputRef);
        if (inputRef && inputRef.current && inputRef.current.value) {
            const data = await getData(inputRef.current.value);
            console.log(data);
            setResponse(data.text);
        }
    };

    return (
      <div className="rounded-md bg-slate-800 p-6">
        {response && <H2 className="mb-4">{response}</H2>}
        <Textarea className="mb-4" placeholder="Type your message here." ref={inputRef} />
        <Button className="float-right" onClick={() => onClick()}>Generate</Button>
      </div>
    );
  }
  