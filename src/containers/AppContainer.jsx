import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import styled from 'styled-components';
import ThemeToggle from '../components/theme-toggle/ThemeToggle';

const Background = styled.div`
background-color: ${(props) => props.theme.background.primary};
position:relative;
`;

const ToggleContainer = styled.div`
  position: absolute;
  margin:1.5rem;
  right: 0;
  z-index:999;
`;

const Container = styled.div`
background-color: ${(props) => props.theme.background.primary};
  &.animate__animated {
    animation-duration: 0.5s;
  }
`;

const AppContainer = ({ children }) => {
  const { currentTheme } = useTheme()
  const location = useLocation();

  useEffect(() => {
    const container = document.getElementById('app-container');
    const rootContainer = document.getElementById('root');
    container.classList.remove('animate__slideOutLeft');
    container.classList.remove('animate__animated');

    container.classList.add('animate__animated');
    container.classList.add('animate__slideInRight');
    rootContainer.style.overflow = 'hidden';
  }, [location]);

  return (
    <Background theme={currentTheme}>
      <ToggleContainer >
        <ThemeToggle />
      </ToggleContainer>
      <Container className='w-screen h-screen' theme={currentTheme} id='app-container'>{children}</Container>
    </Background>
  )

}

export default AppContainer