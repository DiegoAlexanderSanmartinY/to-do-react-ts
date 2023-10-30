import { useState } from 'react';
import { ListaTareas } from './ListaTareas';

export const TodoApp = () => {

    const [ newTask, setNewTask ] = useState<string>('')
    const [ listaTareas, setListaTareas ] = useState<string[]>([]) 
   
    const handleAddTask = () => {
        if(newTask.trim() === '') return
        setListaTareas(
            () => [...listaTareas, newTask]
        )
        setNewTask('')
    }

    const handleBorrarTarea = (index: number) => {
       setListaTareas(
        listaTareas => listaTareas.filter( ( _,i ) => i !== index )
       ) 
    }


    return (
        <div>
            <h1>Lista de tareas</h1>
            <div>
                <input
                type='text'
                value={ newTask }
                onChange={ (e) => setNewTask(e.target.value) }
                placeholder="New task"
                >
                </input>
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={ listaTareas } borrarTarea= {handleBorrarTarea}></ListaTareas>
        </div>
    )
}