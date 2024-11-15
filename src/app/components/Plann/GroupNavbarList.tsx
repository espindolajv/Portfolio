import { AddButtonNav } from "./AddButtonNav"
import { ListButtonNav } from "./ListButtonNav"


interface GroupNavbarProps {
    children?: React.ReactNode
    text: string
}

export function GroupNavbarList({ text }: GroupNavbarProps) {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="font-bold text-lg">{text}</h2>
            <div className="flex flex-col gap-1.5">
                <ListButtonNav text={'Tarefas de Casa'} tasks={6} id={''} />
                <AddButtonNav text="Create new task" />
            </div>
        </div>
    )
}