import { StyleSheet } from 'react-native';
import {  verticalScale } from 'react-native-size-matters';
import Colors from '@styles/Colors';


const Styles = StyleSheet.create({
  wrapper: {
    height        : verticalScale(30),
    alignItems    : 'center',
    justifyContent: 'center',
    borderRadius  : verticalScale(30),
    borderColor   : Colors.orange1,
    borderWidth   : verticalScale(1)
  }
});

export default Styles;