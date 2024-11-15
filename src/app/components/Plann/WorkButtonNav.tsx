import { useMyContext } from "@/context/context";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";

interface WorkButtonNavProps {
    colorD: string,
    name: string,
    id: string
}

const colorPick = (color: string) => {
    const colors = {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        black: 'bg-zinc-900',
        violet: 'bg-violet-500'
    }

    switch (color) {
        case 'red':
            return colors.red
        case 'blue':
            return colors.blue
        case 'green':
            return colors.green
        case 'black':
            return colors.black
        case 'violet':
            return colors.violet
    }
}

export function WorkButtonNav({ colorD, name, id }: WorkButtonNavProps) {
    const { color } = useMyContext()
    
    return (
        <div className="relative">
            <Link href={`/workspace/${id}`} className={`flex items-center rounded-md pl-10 gap-2 px-3 py-2 w-56 ${color ? 'hover:bg-zinc-200' : 'hover:bg-zinc-700'} duration-500  cursor-default`}>
                <div className="flex justify-between items-center flex-1 max-w-56">
                    <h3 className="text-sm font-medium truncate">{name}</h3>
                    <div className={`${colorPick(colorD)} rounded-full h-3 w-3`}></div>
                </div>
            </Link>
            <button 
                className={`${color ? 'hover:bg-zinc-200' : 'hover:bg-zinc-700'} rounded-[4px] p-0.5 absolute bottom-2 left-3 duration-300  cursor-default`}
            >
                <EllipsisVertical strokeWidth={2} className="size-4 bg-transparent text-zinc-500" />
            </button>
        </div>
    )
}