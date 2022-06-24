import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import {render, screen } from '@testing-library/react'
import Header from './Header';

describe('Header Component', () =>{
    it('should render the correct header',async () =>{
        render(<Header />)
         
        const LogoImage =  await screen.findAllByAltText('logo minha lista')
        expect(LogoImage).toBeInTheDocument()
    })
})