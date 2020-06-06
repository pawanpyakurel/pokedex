import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

import { Types } from "../components/Types";

const isvisible = true;
const closeTypes =()=>{
    isvisible = false;
}

storiesOf("Types", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("Types", () => (
    <Types />
));