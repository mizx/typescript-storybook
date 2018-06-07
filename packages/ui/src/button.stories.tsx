import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from './button';

const stories = storiesOf('Buttons', module);

stories.add(
    'Label',
    () => (
        <Button label="example label" />
    )
)