import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types'
import uuid from 'uuid'

const AlertState = props => {

    const initialState = [];

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    //Set alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid.v4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        });

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
    }


    return (
        //value is where you pass the state and actions for other components to access
        <AlertContext.Provider value={{
            alerts: state,
            setAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;