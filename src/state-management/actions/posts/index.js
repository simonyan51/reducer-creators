import actionTypes from "../../constants/actionTypes";


export const postsPending = () => {
    return {
        type: actionTypes.POSTS_PENDING
    }
}

export const postsDone = payload => {
    return {
        type: actionTypes.POSTS_DONE,
        payload
    }
}


export const postsRejected = payload => {
    return {
        type: actionTypes.POSTS_REJECTED,
        payload
    }
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(postsPending());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dispatch(postsDone(json)))
        .catch(err => dispatch(postsRejected(err)))
    }
}