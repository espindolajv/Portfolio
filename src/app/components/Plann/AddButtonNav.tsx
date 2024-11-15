import { useMyContext } from "@/context/context";
import { Plus  } from "lucide-react";

export function AddButtonNav({ text }: { text: string }) {
    const { color } = useMyContext()

    return (
        <button className={`flex items-center rounded-md gap-2 px-3 py-2 w-56 ${color ? 'hover:bg-zinc-200' : 'hover:bg-zinc-700'} duration-500  cursor-default`} >
            <div className="rounded-[4px] p-0.5"><Plus strokeWidth={2} className="size-4 bg-transparent text-zinc-500"/></div>
            <div className="flex justify-between items-center flex-1">
                <h3 className="text-sm font-medium">{text}</h3>
            </div>
        </button>
    )
}