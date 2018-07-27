const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case 'GET_TODOLIST':
            const data = action.data;
            return data.map(d=>{
                d.id -= 1;
                d.text = d.name;
                d.completed = false;
                return d;
            });
        default:
            return state
    }
};

export default todos