import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from '../../components/footer/Footer'

test('Renders Lost Pet Finder Footer', () => {
  render(<Footer title={'Floof Finders'} />)
  const linkElement = screen.getByText('Floof Finders')
  expect(linkElement).toBeInTheDocument();
})
