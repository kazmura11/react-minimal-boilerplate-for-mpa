import React from 'react';
import { render } from 'react-dom';

import Hello from './components/hello';

render(
    <div>
        <Hello />
    </div>,
    document.getElementById('app')
);