import styled from "styled-components";
import { CircularProgress, Backdrop } from "@material-ui/core";

const StyledBackdrop = styled(Backdrop)`
  && {
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    z-index: 99999;
  }
`;

const Loading = ({ show }) => (
  <StyledBackdrop open={show}>
    <CircularProgress />
  </StyledBackdrop>
);

export default Loading;
