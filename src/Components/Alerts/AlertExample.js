import React, { useContext, useState } from 'react';
import { AlertContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';

export default function AlertExample(props) {
    const { state, dispatch } = useContext(AlertContext);
    const [alertText, setAlertText] = useState('');
    const [alertLink, setAlertLink] = useState('');
    const [alertTimeLimit, setAlertTimeLimit] = useState(10);
    const [alertType, setAlertType] = useState(props.options[2].value)

    const handleSubmit = event => {
        event.preventDefault();
        const alertId = uuidv4();
        dispatch({
            type: 'add', payload: {
                alertText, alertLink, alertTimeLimit, alertType, alertId
            }
        })
        setAlertText('');
        setAlertLink('');
        setAlertTimeLimit(10);
        setAlertType('info')
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Alert</h1>
            <input value={alertText} placeholder='Text of Alert' onChange={event => setAlertText(event.target.value)}></input>
            <input value={alertLink} placeholder='Link' onChange={event => setAlertLink(event.target.value)}></input>
            <input value={alertTimeLimit} type='number' placeholder='Time Limit' onChange={event => setAlertTimeLimit(event.target.value)}></input>
            <select value={alertType} onChange={event => setAlertType(event.target.value)}>
                <option value={props.options[0].value}>
                    {props.options[0].text}
                </option>
                <option value={props.options[1].value}>
                    {props.options[1].text}
                </option>
                <option value={props.options[2].value}>
                    {props.options[2].text}
                </option>
                <option value={props.options[3].value}>
                    {props.options[3].text}
                </option>
            </select>
            <button type='submit'>Submit Alert</button>
        </form>
    )
}