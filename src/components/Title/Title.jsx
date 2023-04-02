import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const Title = ({ text }) => {
	return (
		<div className={styles.title}>{text}</div>
	);
};

Title.propTypes = {
	text: PropTypes.string.isRequired
};

export { Title };