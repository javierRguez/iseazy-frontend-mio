import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.button.primary};
`
const Label = styled.p`
  color: ${(props) => props.theme.text.secondary};
  font-size: 1.6rem;
  font-weight: 700;
`

const StartButton = ({ currentTheme, label, onClick }) => {
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
