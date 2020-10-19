const { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } = require("./userTypes")

const intialState = {
    loading: false,
    users: [],
    error: ''
}


const reducer = (state = intialState, action ) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS: 
            return {
                loading : false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading : false,
                users: [],
                error: action.payload
            }
    }
}