import React from 'react';
import { Text as RNText } from 'react-native';
import StyleHelper from '@utils/styleHelper';

const Text = ({ ...props }) => {

  const baseStyle = {
    ...StyleHelper.extractTypographyValue(props),
    ...StyleHelper.extractVariationValue(props),
    ...StyleHelper.extractTextAlign(props),
    ...StyleHelper.extractColorValue(props),
  };


  return (
    <RNText
      allowFontScaling={false}
      style={[baseStyle, props.style]}
    >
      {props.children}
    </RNText>
  );
};


export default Text;