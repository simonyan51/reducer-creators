import actionTypes from "../../constants/actionTypes";

export const usersPending = payload => {
    return {
        type: actionTypes.USERS_PENDING
    }
}

export const usersDone = payload => {
    return {
        type: actionTypes.USERS_DONE,
        payload: [...payload]
    }
}

export const usersRejected = payload => {
    return {
        type: actionTypes.USERS_REJECTED,
        payload: {...payload}
    }
}

export const addUser = payload => {
    return {
        type: actionTypes.ADD_USER,
        payload
    }
}