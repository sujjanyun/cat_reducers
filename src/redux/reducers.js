import { ACTION_SET_ACTIVITY, ACTION_NEW_CAT } from './actionTypes';

export const cat = (state, action) => {
    switch(action.type) {
        case ACTION_SET_ACTIVITY:
            return {
				...state,
				activity: action.payload.activity,
            };
        case ACTION_NEW_CAT:
            const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return {
                ...state,
                id: { name: action.payload.name,
                activity: action.payload.activity,
            },
        };
        default:
            return state;
    }
};