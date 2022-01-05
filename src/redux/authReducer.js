// initial state
const initialState = {
    user_redux: {
        user_name: null,
        profile_pic: '',
        highest_score: 0
    }
}

// action types
const SET_USER = 'SET_USER'
const LOGOUT_USER = 'LOGOUT_USER';
const UPDATE_USER = 'UPDATE_USER';

// action builders
export function setUser (user){
    return {
        type: SET_USER,
        payload: user
    }
}

export const updateUser = (user) => ({
   type: UPDATE_USER,
   payload: {
       username: user.user_name,
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
            return {...state, user_redux: action.payload}
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
                user_redux: {
                    user_name: null,
                    profile_pic: '',
                    highest_score: 0
                }
            }
        default:
            return {...state}
    }
}