/**
 * - LoginInput test scenarios
 *   - it should render email and password inputs and login button
 *   - it should calls login function with email and password when login button is clicked
 *   - it should update on change when email input is typed
 *   - it should update on change when password input is typed
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

import LoginInput from './LoginInput';

// Mock the useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('LoginInput Component', () => {
  it('should render email and password inputs and login button', async () => {
    // Arrange
    render(<LoginInput login={vi.fn()} />);

    // Assert
    expect(await screen.findByPlaceholderText('email')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('password')).toBeInTheDocument();
    expect(await screen.findByText('login')).toBeInTheDocument();
  });

  it('should calls login function with email and password when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);

    const emailInput = await screen.findByPlaceholderText('email');
    const passwordInput = await screen.findByPlaceholderText('password');
    const loginButton = await screen.findByText('login');

    // Action
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // Assert
    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('should update on change when email input is typed', async () => {
    // Arrange
    render(<LoginInput login={vi.fn()} />);

    // Action
    const emailInput = await screen.findByPlaceholderText('email');
    fireEvent.change(emailInput, { target: { value: 'email@example.com' } });

    // Assert
    expect(emailInput.value).toBe('email@example.com');
  });

  it('should update on change when password input is typed', async () => {
    // Arrange
    render(<LoginInput login={vi.fn()} />);

    // Action
    const passwordInput = await screen.findByPlaceholderText('password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Assert
    expect(passwordInput.value).toBe('password123');
  });
});