import React from 'react';
import ReactDOM from 'react-dom';
import FormField from './FormField';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormField side="A" onChange={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
