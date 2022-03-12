import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../../components/header/Header'

test('Renders Lost Pet Finder Header', () => {
  render(<Header />)
  const linkElement = screen.getByText('Lost Pet Finder 9000')
  expect(linkElement).toBeInTheDocument();
})
