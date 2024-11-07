import {Button} from "./Button";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type Props = {
    title: string
    tasks: TaskType[]
}

export const Todolist = ({title, tasks}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'} onClick={() => alert('click-clack')}/>
            </div>
            {
                tasks.length !== 0 ?
                    <ul>
                        {
                            tasks.map((task: TaskType) => {
                                return (
                                    <li key={task.id}>
                                        <input type="checkbox" checked={task.isDone}/>
                                        <span>{task.title}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    : <p>Тасок нет</p>
            }
            <div>
                <Button title={'All'} onClick={() => alert('All')}/>
                <Button title={'Active'} onClick={() => alert('Active')}/>
                <Button title={'Completed'} onClick={() => alert('Completed')}/>
            </div>
        </div>
    );
};