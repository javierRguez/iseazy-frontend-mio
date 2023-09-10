import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';  // Asegúrate de ajustar la ruta para que apunte al componente correcto

jest.mock('../../hooks/useTheme', () => ({
  __esModule: true, // esto es necesario para que funcione como un módulo ES6
  default: () => ({
    currentTheme: {
      background: {
        card: 'someBackground'
      }
    }
  })
}));

describe('Card component', () => {
  it('should render without crashing', () => {
    render(<Card />);
    expect(screen.getByTestId('card-test')).toBeInTheDocument();
  });

  it('should call onClick when the card is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Card onClick={mockOnClick} locked={false} />);

    fireEvent.click(screen.getByTestId('card-test'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should not call onClick when the card is locked', () => {
    const mockOnClick = jest.fn();
    render(<Card onClick={mockOnClick} locked={true} />);

    fireEvent.click(screen.getByTestId('card-test'));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  // ...otros test que quieras realizar
});