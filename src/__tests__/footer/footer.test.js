import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../../components/footer/Footer'

test('Renders Lost Pet Finder Footer', () => {
  render(<Footer />)
  // const linkElement = screen.getByText('@2022 Floof Finders')
  const linkElement = screen.getByTestId('header')
  expect(linkElement).toBeInTheDocument();
})
