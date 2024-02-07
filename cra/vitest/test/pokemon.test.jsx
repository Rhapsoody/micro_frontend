import React from 'react';
import { expect, test, describe } from 'vitest';
import FetchData from '../../host/src/components/pokemonData';
import { render, screen, fireEvent } from '@testing-library/react';
//import Pokemon from "../../host/src/components/card";
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;



//     /*test('welcom', () => {
//         const { getByTestId } = render(<Card userName={userNameTest} />);
//         const welcomeMessage = getByTestId('welcome-message');
//         expect(welcomeMessage).not.toBeNull();
//         expect(welcomeMessage.textContent).toContain(`Bienvenue ${userNameTest}`);
//     });*/
    
//     test('pikachu', async ()=> {
//         render(<FetchData />);
    
//         const search = screen.getByPlaceholderText('search...');
//         const button  = screen.getByText('submit');
    
//         fireEvent.change(search, {target: {value: 'pikachu'}});
    
//         fireEvent.click(button);
    
//         expect(button).toHaveBeenCalled();
    
    
//     })



test('Test pokemon component', () => {
   console.log('test')
});