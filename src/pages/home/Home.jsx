import { t } from 'i18next'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import useTheme from '../../hooks/useTheme'
import StartButton from '../../components/start-button/StartButton'
import Avatar from '../../components/avatar/Avatar';
import avatarImage from '../../assets/icon/app-icon.png'

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background.primary};
`

const AppTitle = styled.p`
  color: ${(props) => props.theme.text.primary};
  font-size: 4.3rem;
  font-weight: 700;
`

const Home = () => {
  const { currentTheme } = useTheme()
  const navigate = useNavigate();
  const onClickButton = () => {
    const container = document.getElementById('app-container');
    container.classList.add('animate__animated');
    container.classList.add('animate__slideOutLeft');

    setTimeout(() => {
      navigate('dashboard');
    }, 500);
  }

  return (
    <AppContainer
      theme={currentTheme}
      className="w-full h-full flex justify-center items-center"
    >
      <div className='flex flex-col justify-center items-center'>
        <div>
          <Avatar currentTheme={currentTheme} src={avatarImage} />
        </div>
        <div className='mt-5'>
          <AppTitle theme={currentTheme}>{t('title')}</AppTitle>
        </div>
        <div className='mt-20'>
          <StartButton
            currentTheme={currentTheme}
            label={t('home.startButton')}
            onClick={onClickButton}
          />
        </div>
      </div>

    </AppContainer>
  )
}

export default Home
