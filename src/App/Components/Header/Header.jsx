import React from 'react';
import logoPng from 'assets/favicon.png';
import packageJson from '../../../../package.json';
import './Header.less';

const App = () => (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6 logo">
                    <img src={logoPng} alt="{packageJson.title}" />
                    {packageJson.title}
                </div>
                <div className="col-6 text-right">
                    <span>Version:</span>
                    {packageJson.version}
                </div>
            </div>
        </div>
    </header>
);

export default App;
