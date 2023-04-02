import { Container } from '../Container';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { Phone } from '../Phone';
import { Socials } from '../Socials';

import mobileLinks from '../../config/mobileMenu.json';


import styles from './HeaderMobile.module.scss';


const HeaderMobile = () => {
	return (
		<>
			<div className={styles.headerMobile}>

				<Container>

					<div className={styles.headerMobileMenu}>
						<Navbar className="mobileMenu" items={mobileLinks} />
					</div>

				</Container>

			</div >

		</>
	);
};

export { HeaderMobile };