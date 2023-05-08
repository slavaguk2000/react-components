import {Box, styled} from "@mui/material";

export const LoaderRotatingWrapper = styled(Box)`
  animation: swing 2s ease-in-out infinite;
  translate: -2px -5px;
  transform-origin: 55% 55%;

  @keyframes swing {
    0%, 100% {
      transform: rotate(-75deg);
    }
    50% {
      transform: rotate(-15deg);
    }
  }
`;

export const LoaderStaticWrapper = styled(Box)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  display: flex;
  justify-content: center;
`;