const DONE = 'DONE';
const REJECTED = 'REJECTED';
const PENDING = 'PENDING';

const createAsyncReducer = (name, initalState) => (state = { isLoading: false, data: initalState }, action) => {
    const { type } = action;
    switch (type) {
      case name + '_' + PENDING:
        return {...state, isLoading: true }
      case name + '_' + DONE:
        return {...state,
          data: action.payload,
          isLoading: false
        }
      case name + '_' + REJECTED:
        return {...state,
          isLoading: false,
          err: action.payload
        }
      default:
        return state
    }
}

export default createAsyncReducer;