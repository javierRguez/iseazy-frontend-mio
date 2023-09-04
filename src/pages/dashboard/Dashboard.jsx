import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  
`


const Dashboard = () => {
  const { currentTheme } = useTheme()
  return <AppContainer className="w-full h-full flex justify-center items-center" theme={currentTheme}>Dashboard</AppContainer>
}

export default Dashboard
