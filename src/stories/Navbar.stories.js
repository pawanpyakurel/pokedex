import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

import { Navbar } from "../components/Navbar";

storiesOf("Navbar", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("Navbar", () => (
    <Navbar />
));