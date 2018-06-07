import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from './button';

const stories = storiesOf('Buttons', module);

stories.add(
    'Label',
    withInfo({ inline: true })(
        () => (
            <Button
                label="example label"
            />
        )
    )
);

stories.add(
    'Label with active class',
    withInfo({ inline: true })(
        () => (
            <Button
                label="example label"
                active={true}
            />
        )
    )
);

stories.add(
    'Label with action',
    withInfo({ inline: true })(
        () => (
            <Button
                label="example label"
                onClick={action('onClick')}
            />
        )
    )
);