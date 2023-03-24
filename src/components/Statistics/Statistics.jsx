import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
   return (
    <>
     <ul className={css.stat}>
        <li className={css.text}>Good: <span className={css.digit}>{good}</span></li>
        <li className={css.text}>Neutral: <span className={css.digit}>{neutral}</span></li>
        <li className={css.text}>Bad: <span className={css.digit}>{bad}</span></li>
        <li className={css.text}>Total: <span className={css.digit}>{total}</span></li>
        <li className={css.text}>Positive feedback: <span className={css.digit}>{positivePercentage}%</span></li>
     </ul>
    </>
   )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired,  
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.number.isRequired, 
}