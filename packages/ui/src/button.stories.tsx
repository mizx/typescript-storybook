import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import Button, { ButtonComponent } from './button';

const stories = storiesOf('Buttons', module);

stories.addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>);

stories.add(
    'Label',
    withInfo({
        inline: true,
        propTables: [ButtonComponent as any],
        text: 'test text'
    })(
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