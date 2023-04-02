import { Container } from '../components/Container';
import { Button } from '../components/Button';

const MainPage = () => {
	return (
		<Container>

			<div className='mainPage'>
				<div className='mainPage-left'>
					<div className="mainPage-title">
						<h1>Зарабатывайте<br /> больше<br /> <span className='gradient1'>с WELBEX</span></h1>
						<h2>Развиваем и контролируем<br /> продажи за вас</h2>
					</div>
				</div>

				<div className='mainPage-right'>
					<div className='mainPage-description'>
						<h2>Вместе с <span className='gradient2'>бесплатной</span><br /> <span className='gradient2'> консультацией</span> мы дарим:</h2>

						<div className='desktopOnly'>

							<ul className='bullets'>
								<li className='bullets-item'>
									<div className='bullets-item_title'>Виджеты</div>
									<div className='bullets-item_desc'>30 готовых решений</div>
								</li>

								<li className='bullets-item'>
									<div className='bullets-item_title'>Dashboard</div>
									<div className='bullets-item_desc'>с показателями вашего бизнеса</div>
								</li>

								<li className='bullets-item'>
									<div className='bullets-item_title'>Skype аудит</div>
									<div className='bullets-item_desc'>отдела продаж и CRM системы</div>
								</li>

								<li className='bullets-item'>
									<div className='bullets-item_title'>35 дней</div>
									<div className='bullets-item_desc'>использования CRM</div>
								</li>
							</ul>

							<Button>Получить консультацию</Button>

						</div>

						<div className='mobileOnly'>
							<ul className='bullets'>
								<li className='bullets-item'>
									<div className='bullets-item_title bullets-item_title__mobile'>Skype аудит</div>
								</li>

								<li className='bullets-item'>
									<div className='bullets-item_title bullets-item_title__mobile'>30 виджетов</div>
								</li>

								<li className='bullets-item'>
									<div className='bullets-item_title bullets-item_title__mobile'>Dashboard</div>
								</li>

								<li className='bullets-item'>
									<div className='bullets-item_title bullets-item_title__mobile'>Месяц аmoCRM</div>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>

		</Container>
	);
};

export { MainPage };