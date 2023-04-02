import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { SvgIcon } from '../SvgIcon';

import styles from './Socials.module.scss';

const Socials = ({ type }) => {
	return (
		<div className={`${styles.socials} ${styles[type]}`}>
			<div className={styles.item}>
				<Link to="#"><SvgIcon name="telegram" /></Link>
			</div>

			<div className={styles.item}>
				<Link to="#"><SvgIcon name="viber" /></Link>
			</div>

			<div className={styles.item}>
				<Link to="#"><SvgIcon name="whatsapp" /></Link>
			</div>
		</div>
	);
};

Socials.defaultProps = {
	type: ''
};

Socials.propTypes = {
	type: PropTypes.string
};

export { Socials };