import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../contexts/ThemeContext';
import Home from './Home';

jest.mock('i18next', () => ({
  t: (str) => str,
}));

describe('<Home />', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('home.startButton')).toBeInTheDocument();
  });

  it('should navigate to dashboard when start button is clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <div id="app-container">
          <ThemeProvider>
            <Home />
          </ThemeProvider>
        </div>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('home.startButton'));
    expect(container.querySelector('#app-container').classList).toContain(
      'animate__animated'
    );
    expect(container.querySelector('#app-container').classList).toContain(
      'animate__slideOutLeft'
    );
  });
});