import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { scale } from 'react-native-size-matters';
import Colors from '@styles/Colors';
import Styles from './styles';

const ButtonRounded = ({
  size = 'sm',
  white,
  orange,
  children,
  containerStyle = {},
  style = {},
  ...props
}) => {

  const btnSize = { width: getBtnSize(size) };

  const whiteColor = [Colors.white,Colors.white];
  const orangeColor = [Colors.orange1,Colors.orange2];

  let color;
  switch (true) {
    case white:
      color = whiteColor;
      break;
    case orange:
      color = orangeColor;
      break;
    default:
      color = orangeColor;
  }
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={color}
      style={[Styles.wrapper, style,btnSize]}
    >
      <TouchableOpacity style={[Styles.wrapper, btnSize, containerStyle]}  {...props}>
        { children }
      </TouchableOpacity>
    </LinearGradient>
  );  
};


function getBtnSize(size) {
  const sizes = {
    lg: scale(200),
    md: scale(100),
    sm: scale(50)
 
  };
  return sizes[size];
};

export default ButtonRounded;