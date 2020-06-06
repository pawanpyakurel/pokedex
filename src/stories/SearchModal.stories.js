import React from 'react';

// storybook
import { storiesOf } from "@storybook/react";
import { Decorator, withProvider } from "./decorator";

import { SearchModal } from "../components/SearchModal";

const isvisible = true;
const closeSearchModal =()=>{
    isvisible = false;
}

storiesOf("SearchModal", module)
  .addDecorator(withProvider)
  .addDecorator(Decorator)
  .add("SearchModal", () => (
    <SearchModal  visible={isvisible} hideModal={closeSearchModal}/>
));