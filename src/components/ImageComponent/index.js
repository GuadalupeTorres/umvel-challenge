import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';

import styles from './styles';

const ImageComponent = ({
  source,
  height,
  width,
  style = {},
  children,
  ...rest
}) => {
  return (
    <View style={{ height, width }}>
      <ImageBackground
        source={source}
        style={[styles.imageContainer, style]}
        {...rest}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

ImageComponent.propTypes = {
  height: PropTypes.number.isRequired,
  width : PropTypes.number.isRequired
};

export default ImageComponent;
