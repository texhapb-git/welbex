import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo_welbex.png';
import styles from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Link to="/">
				<img src={logoImg} alt="logo" />
				<div className={styles.text}>крупный интегратор CRM<br /> в Росcии и ещё 8 странах</div>
			</Link>
		</div>
	);
};

export { Logo };