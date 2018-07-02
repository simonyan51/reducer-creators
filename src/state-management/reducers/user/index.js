import createReducer from "../../../core/helpers/createReducer";
import actionTypes from "../../constants/actionTypes";


const handleAddUser = (state, action) => {
    return [...state, action.payload];
}

const userReducer = createReducer([], {
    [ actionTypes.ADD_USER ]: handleAddUser
});

export default userReducer;