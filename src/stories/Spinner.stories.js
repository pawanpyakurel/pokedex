import React from 'react';

// storybook
import {storiesOf} from '@storybook/react'
import {Decorator} from './decorator'

// custom components
import { Spinner } from "../components/Spinner";

storiesOf('Spinner',module)
.addDecorator(Decorator)
.add('default',()=><Spinner/>)
  