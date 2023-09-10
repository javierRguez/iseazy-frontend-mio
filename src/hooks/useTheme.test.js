import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import useTheme from './useTheme';

describe('useTheme', () => {
  it('should throw an error if used outside ThemeProvider', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.error).toEqual(expect.any(Error));
    expect(result.error.message).toBe('useTheme must be used within a ThemeProvider');
  });

  it('should return the context value when used within ThemeProvider', () => {
    const testTheme = {
      text: {
        primary: '#333333',
        secondary: '#FFFFFF',
      },
      background: {
        card: '#F4F4F4',
        primary: '#F4F4F4',
        modal: '#FFFFFF',
        modalOverlay: '#00000099',
        avatar: "#E7E8E8"
      },
      button: {
        primary: '#E50A4F',
        primaryHover: '#C0073F',
        primaryActive: '#A0052E',
      },
    }

    const darkTheme = {
      text: {
        primary: '#EDEDED',
        secondary: '#FFFFFF'
      },
      background: {
        card: '#F4F4F4',
        primary: '#1E1E1E',
        modal: '#333333',
        modalOverlay: '#00000099',
        avatar: "#444444"
      },
      button: {
        primary: '#E50A4F',
        primaryHover: '#C0073F',
        primaryActive: '#A0052E',
      },
    };
    const wrapper = ({ children }) => (
      <ThemeContext.Provider value={testTheme}>
        {children}
      </ThemeContext.Provider>
    );
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current).toEqual(testTheme);
  });
});