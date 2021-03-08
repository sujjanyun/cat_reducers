import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actionTypes';

function cat(state=[], action) {
    switch(action.type) {
        case ACTION_NAP: 
            return {
                activity: 'napping',
            };
        case ACTION_EAT: 
            return {
                activity: 'eating',
            };
        case ACTION_PLAY:
            return {
                activity: 'playing',
            };
        case ACTION_SET_NAME:
            return [
				...state,
				action.payload
            ];
        case ACTION_SET_ACTIVITY:
            return [
				// ...state,
				// action.payload
            ];
        default:
            return state;
    }
};