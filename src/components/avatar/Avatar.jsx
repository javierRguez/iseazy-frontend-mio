import React from 'react'
import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'


const AvatarContainer = styled.div`
  background-color: ${(props) => props.theme.background.avatar};
  width: 130px;
  height: 130px;
  /* UI Properties */
  background: #E7E8E8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
`

const AvatarImage = styled.div`
  width: 100%;
  height: 100%;  
  background-image: url(${props => props.src});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
`

const Avatar = ({ src }) => {
  const { currentTheme } = useTheme()

  return (
    <AvatarContainer className='rounded-full' theme={currentTheme}><AvatarImage src={src} /></AvatarContainer>
  )
}

export default Avatar