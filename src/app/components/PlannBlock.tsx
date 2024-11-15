import { useMyContext } from "@/context/context";
import { GroupNavbarList } from "./Plann/GroupNavbarList";
import { GroupNavbarWork } from "./Plann/GroupNavbarWork";
import { Logo } from "./Plann/Logo";

export function PlannBlock() {
    const { color } = useMyContext()

    return (
        <>
            <div className={`w-full h-full ${color ? 'bg-white text-black' : 'bg-zinc-800 text-white'} px-4 pb-4 pt-7 text-2xl flex flex-col gap-11 rounded-tl-lg rounded-bl-lg cursor-default overflow-hidden duration-300`}>
                <nav className="p-10 flex flex-col gap-10 items-start w-72">
                    <Logo />
                    <GroupNavbarList text="Lists" />
                    <GroupNavbarWork text="Workspace" />
                </nav>
            </div>
        </>
    )
}