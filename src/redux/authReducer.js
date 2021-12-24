// initial state
const initialState = {
    user: null,
    profile_pic: ''
}

// action types
const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_USER = 'UPDATE_USER';

// action builders
export function setUser (user){
    return {
        type: SET_USER,
        payload: user
    }
}

export const updateUser = (user) => ({
   type:UPDATE_USER,
   payload: {
       username:user.username,
       profilePic: user.profile_pic
   }
});

export const logout = () => {
   return {
       type: LOGOUT_USER
   }
}

const GET_USER = 'GET_USER';

export function getUser(){
    return {
        type: GET_USER
    }
}

// reducer
export default function authReducer(state = initialState, action){
    switch (action.type){
        case SET_USER:
            return {...state, user: action.payload}
        case GET_USER:
            return {
                ...state
            }
       case UPDATE_USER:
           return {
               ...state,
               username: action.payload.username,
               profilePic: action.payload.profilePic,
           }
        case LOGOUT_USER:
           return {
               ...state,
               username: '',
               profilePic: '',
       }
        default:
            return {...state}
    }
}