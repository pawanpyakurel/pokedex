import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

import { ProgressBar } from "../components/ProgressBar";

storiesOf("ProgressBar", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("ProgressBar", () => (
    <ProgressBar _id={1}/>
));