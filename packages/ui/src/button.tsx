import React, { Component, MouseEvent } from 'react';

interface IProps {
    /** apply active classname */
    active?: boolean;
    /** label for button */
    label: string;
    /** color to apply to button */
    color?: 'blue' | 'green';
    /**
     * callback for when button is clicked
     * note: this can still be called when disabled
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export class Button extends Component<IProps> {

    static defaultProps: Partial<IProps> = {
        active: false,
        color: 'blue'
    }

    public render() {
        return (
            <button
                onClick={this.props.onClick}
                className={this.props.active ? 'active' : undefined}
            >
                {this.props.label}
            </button>
        )
    }
}

export default Button;