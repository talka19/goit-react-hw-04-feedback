import css from "components/Section/Section.module.css"
import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
      <section className={css.section}>
       <h2 className={css.title}>{title}</h2>
       {children}
      </section>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired, 
    children: PropTypes.element
}