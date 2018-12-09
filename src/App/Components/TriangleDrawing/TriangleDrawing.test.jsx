import React from 'react';
import ReactDOM from 'react-dom';
import TriangleDrawing from './TriangleDrawing';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TriangleDrawing type="equilateral" />, div);
    ReactDOM.unmountComponentAtNode(div);
});
