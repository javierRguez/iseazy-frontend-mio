import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'

import GameBoardContainer from '../../containers/GameBoardContainer'

const Container = styled.div`
  background-color: ${(props) => props.theme.background.primary};
  
`


const Dashboard = () => {
  const { currentTheme } = useTheme()
  return <Container className="w-full h-full flex justify-center items-center" theme={currentTheme}>
    <GameBoardContainer />


  </Container>
}

export default Dashboard
