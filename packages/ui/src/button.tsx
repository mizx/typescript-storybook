import React, { Component, MouseEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

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

type Props = IProps & RouteComponentProps<{}>;

export class ButtonComponent extends Component<Props> {

    public static defaultProps: Partial<Props> = {
        active: false
    }

    public render() {
        return (
            <button
                onClick={this.props.onClick}
                className={this.props.active ? 'active' : undefined}
            >
                {this.props.match.url}
            </button>
        )
    }
}

export default withRouter(ButtonComponent);