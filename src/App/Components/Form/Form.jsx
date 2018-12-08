import React from 'react';
import FormField from '../FormField/FormField';
import Triangle from '../../Classes/Triangle/Triangle';
import Str from '../../Classes/String/String';

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sideA: 0, // eslint-disable-line react/no-unused-state
            sideB: 0, // eslint-disable-line react/no-unused-state
            sideC: 0, // eslint-disable-line react/no-unused-state
            inequality: false,
            type: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillUpdate(nextProps, nextState) {
        this.updateType(nextState);
    }

    handleChange(side, value) {
        this.setState({ [`side${side}`]: Triangle.strToNr(value) });
    }

    updateType(state) {
        const allValidPositiveNr = Triangle.isValidPositiveNr(state.sideA)
                                && Triangle.isValidPositiveNr(state.sideB)
                                && Triangle.isValidPositiveNr(state.sideC);
        const inequality = allValidPositiveNr && !Triangle.isValid(state.sideA, state.sideB, state.sideC);
        const type = Triangle.getType(state.sideA, state.sideB, state.sideC);
        this.setState({
            inequality,
            type,
        });
        if (type && state.type !== type) {
            window.ts.ui.Notification.success(Str.capitalizeFirst(type));
        }
    }

    render() {
        const { inequality, type } = this.state;
        return (
            <form data-ts="Form">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <FormField side="A" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <FormField side="B" onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <FormField side="C" onChange={this.handleChange} />
                        </div>
                    </div>
                    {
                        inequality ? (
                            <div className="row">
                                <div className="col-md-12">
                                    <div data-ts="Note">
                                        <i className="ts-icon-error" />
                                        <p>Side lengths do not adhere to the triangle inequality theorem.</p>
                                        <p>Which states that the sum of the side lengths of any 2 sides of a triangle must exceed the length of the third side</p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    <p>{type}</p>
                </div>
            </form>
        );
    }
}
