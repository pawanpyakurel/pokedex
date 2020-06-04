import { colors } from "../../config/theme";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
width: 100%;
padding: 0rem;
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex: 1;
  &__input {
    width: 100%;
    background: ${colors.darkBackground};
    color: ${colors.text};
    padding: 1.5rem 1.5rem;
    margin-right: -3rem;
    border-radius: 50rem;
    border: 0;
    outline: none;
    transition: all 0.5s;
    &:hover {
    }
    &::placeholder {
      color: ${colors.text};
    }
  }
  &__icon {
    position: relative;
    right: 10px
    display: flex;
    align-content: center;
    vertical-align: middle;
    // margin-right: 5rem;
    border: none;
    outline: none;
    background-color: transparent;
    align-self: center;
    color: ${colors.text};
    &:hover {
      cursor: pointer;
    }
  }
}
`;

export { SearchBarWrapper}