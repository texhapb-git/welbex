import { Container } from '../Container';
import { Navbar } from '../Navbar';

import { Link } from 'react-router-dom';

import { Title } from '../Title';
import { Phone } from '../Phone';
import { Socials } from '../Socials';
import { Address } from '../Address';

import styles from './Footer.module.scss';

import footerLinks1 from '../../config/footerMenu1.json';
import footerLinks2 from '../../config/footerMenu2.json';
import footerLinks3 from '../../config/footerMenu3.json';



const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footerContainer}>

					<div className={styles.footerLeft}>
						<div className={styles.footerMenu}>
							<Title text="О компании" />
							<div className={styles.footerMenuContainer}>
								<div className={styles.footerMenuCol}>
									<Navbar className="footerMenu" items={footerLinks1} />
								</div>
							</div>
						</div>

						<div className={styles.footerMenu}>
							<Title text="Меню" />
							<div className={styles.footerMenuContainer}>
								<div className={styles.footerMenuCol}>
									<Navbar className="footerMenu" items={footerLinks2} />
								</div>

								<div className={styles.footerMenuCol}>
									<Navbar className="footerMenu" items={footerLinks3} />
								</div>

							</div>
						</div>
					</div>

					<div className={styles.footerRight}>
						<Title text="Контакты" />
						<div className={styles.footerContacts}>
							<Phone />
							<Socials />
							<Address />
						</div>
					</div>

				</div>

				<div className={styles.footerBottom}>
					<div className={styles.footerCopyright}>©WELBEX 2022. Все права защищены.</div>

					<div className={styles.footerPolicy}>
						<Link to="#">Политика конфиденциальности</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export { Footer };