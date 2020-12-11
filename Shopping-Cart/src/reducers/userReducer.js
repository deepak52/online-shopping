export const user = ( state = {}, action )=> {
    if( action.type === '@user/saga_action/load_user') {
      state = action.payload;
    }
    return state;
  }
  
  export const message = ( state={}, action )=> {
    if( action.type === '@user/saga_action/message') {
      state = action.payload;
    } else if(action.type === '@user/saga_action/reset') {
      state = {}
    }
    return state;
  }

  export const navigate = ( state = {}, action ) => {
    if(action.type === '@user/saga_action/redirect_user') {
      state = action.payload
    } else {
      state = {}
    }
    return state
  }
  