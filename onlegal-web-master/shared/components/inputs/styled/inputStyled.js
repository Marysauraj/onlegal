import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import styled from "styled-components";
import theme from "../../../theme";

export const InputLabelStyled = styled(InputLabel)`
  color: ${theme.palette.secondary.main};
  font-size: 0.875rem;
  margin-bottom: 8px;
`;

export const InputStyled = styled(InputBase)`
  width: 100%;

  input,
  textarea {
    border-radius: 4px;
    position: relative;
    background-color: #f7f7fb;
    border: 1px solid #e2e2e2;
    padding: 10px 12px;
    ${(props) =>
      props.type === "number" ? "width:20%; min-width:150px;" : "width:100%;"}

    &:focus {
      border-color: ${theme.palette.primary.main};
    }

    /* Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    [type="number"] {
      -moz-appearance: textfield;
    }
  }

  &.error {
    input,
    textarea {
      border: 1px solid ${theme.palette.error.main};

      &:focus {
        border-color: ${theme.palette.error.main};
      }
    }
  }
`;
