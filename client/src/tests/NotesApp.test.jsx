import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotesApp from '../components/NotesApp';

describe('NotesApp', () => {
  // Test 1: Renders the component and initial elements
  test('renders the NotesApp component', () => {
    render(<NotesApp />);

    // Check if the heading is rendered
    expect(screen.getByText(/My Notes App/i)).toBeInTheDocument();

    // Check if the input and button are rendered
    expect(screen.getByPlaceholderText(/Add a new note/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add Note/i })).toBeInTheDocument();
  });
 
});
