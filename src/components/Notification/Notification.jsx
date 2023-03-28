import css from "components/Notification/Notification.module.css"
import PropTypes from 'prop-types';


export function Notification ({message}) {
    return (
        <p className={css.info}>{message}</p>
    )
};

Notification.propTypes = {
    message: PropTypes.string.isRequired
}
