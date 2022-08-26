import { Alert, Link } from "@mui/material"

export default function AlertComponent(props) {
    return (
        <Link key={`L-Key ${alert.alertId}`} href={props.alert.alertLink ? props.alert.alertLink : '#'}><Alert key={`A-Key ${alert.alertId}`} severity={props.alert.alertType}>{props.alert.alertText ? props.alert.alertText : ''} </Alert></Link>
    )
};
