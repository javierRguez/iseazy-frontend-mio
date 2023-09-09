import React from 'react';
import styled from 'styled-components';
import clockIcon from '../../assets/icon/clock.png'
import { formatTime } from '../../utils/utils';

const TimerContainer = styled.div`
  text-align: center;
  display:flex;
  align-items:center;
`;

const IconContainer = styled.div`
width: 32px;
 height: 32px;
 margin-right:10px;
`;

const ClockIcon = styled.div`
 width: 100%;
  height: 100%;  
  background-image: url(${clockIcon});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
`;

const Label = styled.p`
 color: ${(props) => props.theme.text.primary};
  font-size: 3.75rem;
  font-weight: 700;
`;

const Timer = ({ time, currentTheme }) => {
  const formattedTime = formatTime(time);
  return (
    <TimerContainer>
      <IconContainer >
        <ClockIcon />
      </IconContainer>
      <Label theme={currentTheme}>
        {formattedTime}
      </Label>
    </TimerContainer>
  );
};

export default Timer;