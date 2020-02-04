import store from "../store/store";

export const addTodo=(data)=>
{
    store.dispatch({
        type:"ADD_TODO",
        data:data
    })
}



export const deleteTodo=(id)=>
{
    return (dispatch)=>
    {
        dispatch({
            type:"DELETE_TODO",
            id
        })
        // dispatch(addTodoStarted());
    }
}

const addTodoStarted = () => ({
    type: "DELETE_TODO"
  });