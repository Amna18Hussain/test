import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AddTask from "../components/AddTask"


const initialState = {
    tasks: [],
    loading: false,
    error: null,
    status: 'All'
}

export const fetchTodo = createAsyncThunk('/fetchTodo', async () => {


    const data = await response.json()
    const limit = data.slice(0, 8)

    return limit.map(task => (
        {
            id: task.id,
            title: task.title,


        }
    ))
})

const taskSlice = createSlice({
    name: 'tasks',
    initialState,


    reducers: {

        addUser: (state, action) => {
            state.tasks.push(action.payload)
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map(task => (
                task.id === action.payload.id ? action.payload : AddTask
            ))
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }




    },




    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.loading = false,
                    state.tasks = action.payload

            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message
            })

    }
})


export default taskSlice.reducer
export const { addUser, editTask, deleteTask } = taskSlice.actions