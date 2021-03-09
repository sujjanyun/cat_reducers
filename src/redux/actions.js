import { ACTION_SET_ACTIVITY, ACTION_ADD_CAT } from './actionTypes';

export const setActivity = (activity) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            activity
        }
    }
}

export const addCat = (name, activity) => {
    return {
        type: ACTION_ADD_CAT,
        payload: {
            name,
            activity
        }
    }
}