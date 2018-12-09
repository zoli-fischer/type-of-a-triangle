import React from 'react';
import PropTypes from 'prop-types';
import './TriangleDrawing.less';
import Formatter from '../../Classes/Formatter/Formatter';

//  eslint-disable-next-line react/prefer-stateless-function
export default class TriangleDrawing extends React.Component {
    render() {
        const { type } = this.props;
        return (
            <section className="ts-bg-blue">
                <div className={`triangle ${type}`}>
                    <div className="inner">
                        <div className="sideA" />
                        <div className="sideB" />
                        <div className="sideC" />
                    </div>
                    <div className="questionSign">!?</div>
                    <div className="question">I&#39;m waiting for valid data...</div>
                    <div className="label">{Formatter.capitalizeFirst(type)}</div>
                </div>
            </section>
        );
    }
}

TriangleDrawing.propTypes = {
    type: PropTypes.string.isRequired,
};
