import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export function ButtonNav({ title, icon: Icon, isChat = false, first = false }: { title: string, icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>, isChat?: boolean, first?: boolean }) {
    
    return (
        <div className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl ${first ? 'bg-[#4D98FF]' : 'hover:bg-[#393E5A] hover:shadow-sm hover:shadow-[#393E5A]'} relative duration-300 cursor-default`}>
            <Icon className="size-5 text-white" strokeWidth={2.5} />
            <span className="font-medium text-white text-sm">{title}</span>
            {isChat && <div className="bg-red-700 h-4 w-4 rounded-full flex justify-center items-center absolute top-2 left-7">
                <span className="text-[10px] font-medium text-white ">3</span>
            </div>}
        </div>
    )
}