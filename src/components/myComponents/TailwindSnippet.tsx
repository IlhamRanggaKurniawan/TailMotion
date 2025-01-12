"use client"

import { useState } from "react";
import { Input } from "../ui/input";
import { Check, ClipboardList } from "lucide-react";

const TailwindSnippet = ({ code }: { code: string }) => {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);

        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        }, 3000)
    };

    return (
        <div className="bg-secondary py-4 px-2 rounded-md relative shadow-lg space-y-2 md:px-4">
            <h4 className="text-lg font-bold">Tailwind CSS Code</h4>
            <div className="relative">
                <Input className="bg-background h-12 pr-10" readOnly value={code}/>
                {isCopied ? (
                    <button className="absolute right-2 top-0 h-full">
                        <Check />
                    </button>
                ) : (
                    <button onClick={copyToClipboard} className="absolute right-2 top-0 h-full">
                        <ClipboardList />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TailwindSnippet;
