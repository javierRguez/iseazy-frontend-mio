import styled from 'styled-components';
import useTheme from '../../hooks/useTheme';


const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.theme === "light" ? "#ccc" : "#222")};
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: ${(props) => (props.theme === "light" ? "4px" : "34px")};
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;


const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch>
      <Input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
      <Slider theme={theme}></Slider>
    </Switch>
  );
};

export default ThemeToggle;