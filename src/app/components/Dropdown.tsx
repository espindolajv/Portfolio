import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

export function DropDown({ children, style, height, title }: { children: React.ReactNode, style: string, height: string, title: string }) {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2 relative">
                <button
                    className={`flex items-center text-xl font-bold text-start gap-4 ${open ? 'justify-between w-full' : 'justify-start w-36'} duration-300 transition-all`}
                    onClick={handleOpen}
                >
                    <h2 className="font-semibold">{title}</h2>
                    <TiArrowSortedDown className={`${open ? 'rotate-0 ' : '-rotate-90'} duration-300`} />
                </button>
            </div>
            <div className={`${open ? `opacity-100 h-[${height}px]` : 'opacity-0 h-[0px]'} ${style} duration-300 transition-all py-2`}>
                {children}
            </div>
        </div>
    )
}