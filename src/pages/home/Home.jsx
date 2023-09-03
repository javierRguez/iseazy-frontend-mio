import { t } from 'i18next'
import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'
import StartButton from '../../components/start-button/StartButton'

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
  return (
    <AppContainer
      theme={currentTheme}
      className="w-screen h-screen flex justify-center items-center"
    >
      <div>
        <AppTitle theme={currentTheme}>{t('title')}</AppTitle>
      </div>
      <div>
        <StartButton
          currentTheme={currentTheme}
          label={t('home.startButton')}
          onClick={() => console.log('dentro')}
        />
      </div>
    </AppContainer>
  )
}

export default Home
