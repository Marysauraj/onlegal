import styled from "styled-components";
import theme from "../../../theme";

export const ErrorMessageStyled = styled.p`
  font-family: Inter;
  color: ${theme.palette.error.main};
  font-size: 0.815rem;
  line-height: 1.25rem;
  padding: 5px 0 0;
  white-space: break-spaces;
`;
