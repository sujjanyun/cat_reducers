import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_SET_NAME, ACTION_SET_ACTIVITY } from './actionTypes';

export const actionNap = () => {
    return {
        type: ACTION_NAP
    }
}

export const actionEat= () => {
    return {
        type: ACTION_EAT
    }
}

export const actionPlay = () => {
    return {
        type: ACTION_PLAY
    }
}

export function actionSetName(name) {
    return {
        type: ACTION_SET_NAME,
        payload: {
            name
        }
    }
}

export function actionSetActivity(activity) {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: {
            activity
        }
    }
}