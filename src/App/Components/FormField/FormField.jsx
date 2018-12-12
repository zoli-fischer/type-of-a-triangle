import React from 'react';
import PropTypes from 'prop-types';
import Triangle from '../../Classes/Triangle/Triangle';

export default class FormField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            valid: true,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { side, onChange } = this.props;
        onChange(side, event.target.value);

        this.setState({
            value: event.target.value,
            valid: event.target.value.length === 0 ? true : Triangle.isValidPositiveNr(event.target.value),
        });
    }

    render() {
        const { value, valid } = this.state;
        const { side } = this.props;
        return (
            <fieldset>
                <label htmlFor={`side${side}`} className={!valid ? 'ts-error' : null}>
                    <span>
                        <span>Side </span>
                        <b>{side.toUpperCase()}</b>
                    </span>
                    <input type="number" id={`side${side}`} value={value} onChange={this.handleChange} maxLength="8" />
                </label>
                {
                    !valid ? (
                        <dl className="ts-errors">
                            <dt>Invalid number format</dt>
                            <dd>Please insert a positive number</dd>
                        </dl>
                    ) : null
                }
            </fieldset>
        );
    }
}

FormField.propTypes = {
    side: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
