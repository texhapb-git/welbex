import { Container } from '../Container';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Phone } from '../Phone';
import { Socials } from '../Socials';

import headerLinks from '../../config/headerMenu.json';


import styles from './Header.module.scss';


const Header = () => {
	return (
		<>
			<header className={styles.header}>

				<Container>
					<div className={styles.headerContainer}>

						<div className={styles.headerLeft}>
							<div className={styles.headerLogo}>
								<Logo />
							</div>

							<div className={styles.headerMenuBlock}>
								<Navbar className="headerMenu" items={headerLinks} />
							</div>
						</div>

						<div className={styles.headerRight}>
							<Phone />
							<Socials type="header" />
						</div>
					</div>
				</Container>

			</header >

		</>
	);
};

export { Header };