import { StyleSheet } from 'react-native';
import Colors from '@styles/Colors';
import { scale, verticalScale } from 'react-native-size-matters';

export default StyleSheet.create({
  viewContain:{
    width: '100%'
  },
  container: {
    flexDirection : 'row',
    height        : verticalScale(40),
    justifyContent: 'center',
    alignItems:'center',
    borderWidth   : 0.5,
    borderColor: Colors?.textGray, 
    borderRadius  : scale(20),
    marginBottom:verticalScale(15)
  },
  iconSearch:{
    width:scale(20),
    height:verticalScale(20),
    marginRight:scale(10) 
  },
  inputSearch:{
    flex:1,
    height: verticalScale(42), 
    color: Colors?.textGray, 
    fontSize: 15, 
    paddingLeft: '4%' 
  },
  containerImgSearch:{
    flex: 0.4,
    alignItems:'flex-end'
  }
  
});