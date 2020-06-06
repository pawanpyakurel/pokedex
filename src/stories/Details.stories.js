import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

import { Details } from "../components/Details";

storiesOf("Details", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("Details", () => (
    <Details _id ={1} />
));