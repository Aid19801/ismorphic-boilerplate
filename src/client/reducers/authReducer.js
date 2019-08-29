import { GET_UID } from '../actions';

export default (state = { uid: '' }, action)=>{
    switch(action.type){
        // case FETCH_CURRENT_USER: return action.payload.data || false;
        
        case GET_UID:
            console.log('getUid: ', action)
            return {
                ...state,
                uid: action.uid,
            }

        default: return state;
    }
}