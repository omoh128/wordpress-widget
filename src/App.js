import React from 'react';
import Chart from './components/chart';

import Dropdown from './components/Dropdown';


const App = () => {
    return (
        <div>
            <h2 className='app-title'></h2>
            <Dropdown />
            <Chart />
        </div>
     );
}

export default App; 