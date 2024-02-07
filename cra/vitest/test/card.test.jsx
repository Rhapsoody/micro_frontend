import React from 'react';
import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Card from "../../remote/src/components/card";
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

test('The component card renders a welcome message for the specified user', () => {
    const userNameTest = "Paul" 
    const { getByTestId } = render(<Card userName={userNameTest} />);
    const welcomeMessage = getByTestId('welcome-message');

    expect(welcomeMessage).not.toBeNull();
    expect(welcomeMessage.textContent).toContain(`Bienvenue ${userNameTest}`);
});