import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

import { SearchBar } from "../components/SearchBar";

storiesOf("SearchBar", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("SearchBar", () => (
    <SearchBar />
));