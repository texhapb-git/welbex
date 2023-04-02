import styles from './Phone.module.scss';

const Phone = () => {
	return (
		<div className={styles.phone}>
			<a href="tel:+75555555555">+7 555 555-55-55</a>
		</div>
	);
};

export { Phone };