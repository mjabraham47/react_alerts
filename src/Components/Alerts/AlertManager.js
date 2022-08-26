import React, { useContext, useEffect } from 'react';
import AlertComponent from './AlertComponent';
import { AlertContext } from '../../App';
import { List, ListItem } from '@mui/material';

export const alertReducer = (state, action) => {
    switch (action.type) {
        case 'remove':
            return { ...state, alerts: state.alerts.filter(alert => alert.alertId !== action.payload.alertId) }
        case 'add':
            return { alerts: [...state.alerts, action.payload] }
        default:
            return state

    }
}

export function AlertManager() {
    const { state, dispatch } = useContext(AlertContext);

    // useEffect(() => {
    //     if (state.alerts.length > 0 ) {
    //         let intervalId = setInterval(dispatch({
    //             type: 'remove', payload:
    //                 state.alerts[state.alerts.length - 1]
    //         }), state.alerts[state.alerts.length - 1].alertTimeLimit + 1000)
    //         clearInterval(intervalId)
    //     }
    // }, [state.alerts]);

    const deleteAlert = (alert) => {
        dispatch({
            type: 'remove', payload: alert
        })
    }
    return (
        <List>
            {state.alerts.map(alert => {
                return (<ListItem key={`LI-Key ${alert.alertId}`}><AlertComponent key={`AC-Key ${alert.alertId}`} alert={alert} /><span onClick={() => deleteAlert(alert)}>Remove</span></ListItem>)
            })}
        </List>
    )
};