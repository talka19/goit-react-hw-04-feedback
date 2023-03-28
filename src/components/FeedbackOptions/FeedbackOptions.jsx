import css from "components/FeedbackOptions/Feedback.module.css"
import PropTypes from 'prop-types';

export function FeedbackOptions ({ options, onLeaveFeedback }) {
    return (
        <div className={css.button__container}>
            {options.map(option => {
                return (
                <button type="button" onClick={onLeaveFeedback}
                    key={option}
                    className={css.button}>
                    {option}
                </button>
            );
            })}
        </div>
            
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired 
}



