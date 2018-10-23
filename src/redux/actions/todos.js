export const addTodo = (text) => dispatch => {
    return dispatch({
        type: 'ADD_TODO',
        text
    });
}

export const removeTodo = (id) => dispatch => {
    return dispatch({
        type: 'REMOVE_TODO',
        id
    });
}