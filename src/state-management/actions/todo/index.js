import actionTypes from "../../constants/actionTypes";

export const addTodo = payload => {
    return {
        type: actionTypes.ADD_TODO,
        payload
    };
}

export const todosPending = () => {
    return {
        type: actionTypes.TODO_PENDING
    }
}

export const todosDone = () => {
    return {
        type: actionTypes.TODO_DONE
    }
}


export const todosRejected = () => {
    return {
        type: actionTypes.TODO_REJECTED
    }
}