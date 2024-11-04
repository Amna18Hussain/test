import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addUser } from '../store/taskSlice';



function AddTask() {

    const [input, setInput] = useState([])
   
   
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: uuid4(),
            title: input,
           

        }

        console.log('Form Data', newTask);

        dispatch(addUser(newTask))

        setInput('')
        





    }






    return (
        <>
            <div className='.main'>
                <h1>AddTask</h1>
                </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="input">
                        <input type="text"
                            placeholder='Task Title'
                            value={input}
                            onChange={(e) => setInput(e.target.value)} />
                    </div>

                   

                   

                    <div className="btn">
                        <button>Add Task</button>
                    </div>
                </div>

            </form>
        </>
    )
}

export default AddTask