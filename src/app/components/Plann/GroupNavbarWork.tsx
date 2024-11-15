import { WorkButtonNav } from "./WorkButtonNav"


interface GroupNavbarProps {
    children?: React.ReactNode
    text: string
}

export function GroupNavbarWork({ text }: GroupNavbarProps) {

    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold text-lg">{text}</h2>
            <div className="flex flex-col gap-1.5">
                <WorkButtonNav colorD={'blue'} name={'Devs'} id={''} />
                <WorkButtonNav colorD={'red'} name={'Design'} id={''} />
            </div>
        </div>
    )
}