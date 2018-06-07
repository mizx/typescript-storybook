import React, { Component } from 'react';

interface IProps {
    active?: boolean;
    label: string;
}

export class Button extends Component<IProps> {

    public render() {
        return (
            <button
                className={this.props.active ? 'active' : undefined}
            >
                {this.props.label}
            </button>
        )
    }
}

export default Button;