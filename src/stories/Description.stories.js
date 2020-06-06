import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

// json data
import description from "./json/description.json";

import { Description } from "../components/Description";

storiesOf("Description", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("Description", () => (
    <Description _id ={1} />
  ));