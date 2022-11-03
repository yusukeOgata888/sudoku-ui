import * as Actions from './actions';
import initialState from '../store/initialState';

export const LoginReducer = (state = initialState.users, action: { type: any; payload: any; }) => {
    switch(action.type) { 
        case Actions.SIGH_IN:
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }
}
 
export default LoginReducer;