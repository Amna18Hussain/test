import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../store/taskSlice';
// import { useNavigate } from "react-router-dom"


function Edit({ task }) {
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(task.title);

    // const navigate = useNavigate();
   
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask({ id: task.id, title }));
        setEdit(false);
    };


    // const handleView = () =>{
    //     navigate('/view-task')

    // }

    return (
        <div>
            {edit ? (
                <div>
                    EditTask
                    <div>
                        <div className="input">
                            <input type="text"
                                placeholder='Task Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>

                       

                     

                        <div className="btn">
                            <button onClick={handleEdit}>Save</button>
                            <button onClick={() => setEdit(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <button onClick={() => setEdit(true)}>
                        Edit
                    </button>

                    {/* <button onClick={handleView}>
                        view
                    </button> */}

                </>
            )}
        </div>
    );
}

export default Edit;
