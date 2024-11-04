import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTodo } from '../store/taskSlice'
import Edit from './Edit'


function Tasklist() {




  const tasks = useSelector((state) => state.tasks.tasks)

  const dispatch = useDispatch();



  useEffect(() => {

    dispatch(fetchTodo())


  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

 


  return (
    <>
      <div className="task-container">
        <div className="task-title" >Task Lists</div>

        <ul>
          {tasks.map((task, index) => (
            <li key={task.id || index}>
              <div>
               
               
                <p>Task: {task.title}</p>
              </div>
              <div className="button-group">

                <Edit task={task} />

                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>



    </>
  )
}

export default Tasklist