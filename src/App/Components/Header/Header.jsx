import React from 'react';
import logoPng from 'assets/favicon.png';
import packageJson from '../../../../package.json';
import './Header.less';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '1234',
        };
        const { index } = this.state;
        console.log(index);
    }

    render() {
        return (
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
    }
}
