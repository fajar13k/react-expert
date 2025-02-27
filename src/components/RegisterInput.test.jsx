/**
 * - RegisterInput test scenarios
 *   - it should render name, email, and password inputs and register button
 *   - it should call register function with name, email, and password when register button is clicked
 *   - it should update on change when name input is typed
 *   - it should update on change when email input is typed
 *   - it should update on change when password input is typed
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

import RegisterInput from './RegisterInput';

// Mock the useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('RegisterInput Component', () => {
  it('should render name, email, and password inputs and register button', async () => {
    // Arrange
    render(<RegisterInput register={vi.fn()} />);

    // Assert
    expect(await screen.findByPlaceholderText('name')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('email')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('password')).toBeInTheDocument();
    expect(await screen.findByText('register')).toBeInTheDocument();
  });

  it('should call register function with email, and password when register button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);

    const nameInput = await screen.findByPlaceholderText('name');
    const emailInput = await screen.findByPlaceholderText('email');
    const passwordInput = await screen.findByPlaceholderText('password');
    const registerButton = await screen.findByText('register');

    // Action
    fireEvent.change(nameInput, { target: { value: 'fajar' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);

    // Assert
    expect(mockRegister).toHaveBeenCalledWith({
      name: 'fajar',
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('should update on change when name input is typed', async () => {
    // Arrange
    render(<RegisterInput register={vi.fn()} />);

    // Action
    const nameInput = await screen.findByPlaceholderText('name');
    fireEvent.change(nameInput, { target: { value: 'fajar' } });

    // Assert
    expect(nameInput.value).toBe('fajar');
  });

  it('should update on change when email input is typed', async () => {
    // Arrange
    render(<RegisterInput register={vi.fn()} />);

    // Action
    const emailInput = await screen.findByPlaceholderText('email');
    fireEvent.change(emailInput, { target: { value: 'email@example.com' } });

    // Assert
    expect(emailInput.value).toBe('email@example.com');
  });

  it('should update on change when password input is typed', async () => {
    // Arrange
    render(<RegisterInput register={vi.fn()} />);

    // Action
    const passwordInput = await screen.findByPlaceholderText('password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Assert
    expect(passwordInput.value).toBe('password123');
  });
});