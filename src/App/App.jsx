import React from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.less';

export default class App extends React.Component {
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
            <React.Fragment>
                <Header />
                <main data-ts="Main">
                    <div data-ts="MainContent">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                                    <div className="divider double" />
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12">
                                                <h1>Find out whether a triangle is equilateral, isosceles or scalene</h1>
                                                <p>Type in the lengths of a triangle&apos;s three sides</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    <section>
                                        <div className="divider" />
                                        <Form />
                                        <div className="divider" />
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
