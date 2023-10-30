type Props = {
    numb: number
    task: string
    borrarTarea: () => void
}

export const Tarea = ({task, borrarTarea, numb}: Props) => {
    console.log('borrarTarea', borrarTarea)
    console.log('key', numb)
    return (
        <div className="task">
            <span>{task}</span>
            <span>{numb}</span>
            <button onClick={borrarTarea}>Borrar</button>

        </div>
    )
}