import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import Colors from '@styles/Colors';


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  containerImage:{
    width: '100%', 
    height: '80%'
  },
  imageBackground:{
    flex: 1, 
    width: null, 
    height: null, 
    resizeMode: 'cover'
  },
  list:{
    flex:1,
    borderColor:Colors?.orange2,
    borderWidth:1,
    borderRadius:verticalScale(6),
    margin:verticalScale(10),
    padding:verticalScale(5),
    justifyContent:'center'
  },
  marginH20:{
    marginHorizontal: 20
  },
  buttonSkip:{
    flex:1, 
    alignItems:'flex-end',
    margin:20
  }

});

export default styles;