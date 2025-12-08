import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./some-external-dependency', () => ({
  someExternalDependencyMethod: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    render(<CoreFunctionalityComponent />);
  });

  test('renders the component without crashing', () => {
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(someExternalDependencyMethod).toHaveBeenCalled();
  });

  test('displays error message when an error occurs', async () => {
    someExternalDependencyMethod.mockRejectedValueOnce(new Error('Mock Error'));
    await screen.findByText(/error occurred/i);
  });

  test('handles loading state properly', async () => {
    const mockPromise = new Promise((resolve) => setTimeout(() => resolve(), 100));
    jest.spyOn(CoreFunctionalityComponent.prototype, 'fetchData').mockImplementationOnce(() => mockPromise);

    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    await mockPromise;
    expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
  });

  test('is accessible', () => {
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    expect(someExternalDependencyMethod).toHaveBeenCalled();
  });

  test('mocks external dependencies correctly', () => {
    someExternalDependencyMethod.mockReturnValueOnce({ data: 'mockedData' });
    render(<CoreFunctionalityComponent />);
    const mockData = screen.getByText(/mockedData/i);
    expect(mockData).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./some-external-dependency', () => ({
  someExternalDependencyMethod: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    render(<CoreFunctionalityComponent />);
  });

  test('renders the component without crashing', () => {
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles user interactions correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(someExternalDependencyMethod).toHaveBeenCalled();
  });

  test('displays error message when an error occurs', async () => {
    someExternalDependencyMethod.mockRejectedValueOnce(new Error('Mock Error'));
    await screen.findByText(/error occurred/i);
  });

  test('handles loading state properly', async () => {
    const mockPromise = new Promise((resolve) => setTimeout(() => resolve(), 100));
    jest.spyOn(CoreFunctionalityComponent.prototype, 'fetchData').mockImplementationOnce(() => mockPromise);

    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
    await mockPromise;
    expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
  });

  test('is accessible', () => {
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label');
    fireEvent.click(button);
    expect(someExternalDependencyMethod).toHaveBeenCalled();
  });

  test('mocks external dependencies correctly', () => {
    someExternalDependencyMethod.mockReturnValueOnce({ data: 'mockedData' });
    render(<CoreFunctionalityComponent />);
    const mockData = screen.getByText(/mockedData/i);
    expect(mockData).toBeInTheDocument();
  });
});