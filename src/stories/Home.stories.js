import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

import { Home } from "../containers/index";

storiesOf("Home", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("Home", () => (
    <Home _id={1}/>
));