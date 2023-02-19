import {Box, styled} from "@mui/material";

export const BeforeAfterImageWrapper = styled(Box)((props) => ({
    position: 'relative',
    cursor: props.changeCursor ? 'ew-resize' : undefined,
}));

export const ImageWrapper = styled(Box)`
  height: 100%;
  overflow: hidden;
  -moz-user-select: none; 
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  pointer-events: none;
`

export const SecondImageWrapper = styled(ImageWrapper)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`

export const SliderWrapper = styled(Box)((props) => ({
    position: 'absolute',
    top: 0,
    left: props.left,
    height: '100%',
    transform: 'translate(-50%)',
}));

export const DividingLine = styled(Box)((props) => ({
    height: '100%',
    backgroundColor: props.backgroundColor,
    transform: 'translate(-50%)',
}));

export const HoverListener = styled(Box)`
  position: absolute;
  top: 0;
  transform: translate(-50%);
  height: 100%;
  width: 3000%;
  
  :hover {
    & + * > * {
      visibility: visible;
    }
  }
`

export const DividingLineSliderWrapper = styled(Box)`
  display: flex;
  position: absolute;
  top: 0;
  transform: translate(-50%);
  align-items: center;
  height: 100%;
  cursor: ew-resize;
  visibility: hidden;

  :active{
    visibility: visible;
  }
  
  :hover {
    visibility: visible;
  }
`

export const ExampleDividingSlider = styled(Box)`
  width: 10px;
  height: 50px; 
  background-color: white;
  border-radius: 3px;
`;
