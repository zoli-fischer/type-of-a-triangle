import React from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import './App.less';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.refMoreInfo = React.createRef();
        this.readMore = this.readMore.bind(this);
    }

    componentDidMount() {
        this.refMoreInfo.current.setAttribute('data-ts.title', 'Links');
    }

    readMore() {
        this.refMoreInfo.current.setAttribute('data-ts.open', true);
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
                                                <p>
                                                    <span>Type in the lengths of a triangle&apos;s three sides. </span>
                                                    <a href="javascript:{}" onClick={this.readMore}>Click here to read more.</a>
                                                </p>
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
                <aside data-ts="Aside" ref={this.refMoreInfo}>
                    <div data-ts="Panel">
                        <p><a href="http://www.cut-the-knot.org/triangle/Triangles.shtml" rel="noopener noreferrer" target="_blank">Triangle Classification</a></p>
                        <p><a href="https://mathbitsnotebook.com/Geometry/SegmentsAnglesTriangles/SATTriangleTypes.html" rel="noopener noreferrer" target="_blank">Types of Triangles</a></p>
                        <p><a href="https://www.dummies.com/education/math/geometry/identifying-scalene-isosceles-and-equilateral-triangles/" rel="noopener noreferrer" target="_blank">Identifying scalene, isosceles, and equilateral triangles</a></p>
                        <p><a href="https://www.infoplease.com/science-health/numbers-and-formulas/triangles" rel="noopener noreferrer" target="_blank">Triangles</a></p>
                    </div>
                </aside>
            </React.Fragment>
        );
    }
}
