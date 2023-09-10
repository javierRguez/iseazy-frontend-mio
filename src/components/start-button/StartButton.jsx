import React from 'react'
import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'

const Button = styled.button`
  background-color: ${(props) => props.theme.button.primary};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color:${(props) => props.theme.button.primaryHover};  
  }
  &:active {
    transform: scale(0.95);
    background-color:${(props) => props.theme.button.primaryActive};
  }
`
const Label = styled.p`
  color: ${(props) => props.theme.text.secondary};
  font-size: 1.6rem;
  font-weight: 700;
`

const StartButton = ({ label, onClick }) => {
  const { currentTheme } = useTheme()

  return (
    <Button
      onClick={onClick}
      className="rounded-full px-16 py-5"
      theme={currentTheme}
    >
      <Label theme={currentTheme}>{label}</Label>
    </Button>
  )
}

export default StartButton
