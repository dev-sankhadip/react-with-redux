// import axios from 'axios'

const todosLIst=[
    {title:"milk", des:"Buy mulk from Bjojar dokan"},
    {title:"egg", des:"Buy egg from Kaku r dokan"}
]

const userLIst=[
    {id:1, name:"sankhadip samanta", email:"sankha@gmail.com"},
    {id:2, name:"raja samanta", email:"raja@gmail.com"}
]

const initialState={
    todos:todosLIst,
    users:userLIst
}

const todos=(state=initialState , action)=>
{
    switch(action.type)
    {
        case "ADD_TODO":
            const todos=[...state.todos,{
                title:action.data.title,
                des:action.data.des
            }]
            console.log(todos);
            const dupState=Object.assign(state, {todos});
            console.log(dupState);
            return {
                ...state,todos
            }
            break;
        case "UPDATE_TODO":
            console.log(action.data);
            break;
        case "DELETE_TODO":
            console.log("hitted");
            console.log(action.id);
            return state;
            break;
        case "FETCH_TODO":
            console.log(action.data);
            break;
        default:
            return state;
    }
}

export default todos;