import { Alert } from 'react-bootstrap';

const Notification = ({ variant, children }) => {
    return (
    <Alert variant={variant} style={{margin: '2rem auto'}}>
        {children}
    </Alert>);
}

Notification.default = {
    variant: 'info'
}

export default Notification;