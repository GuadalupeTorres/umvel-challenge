import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Colors from '@styles/Colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerImage: {
    width: '100%',
    height: '80%'
  },
  imageBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  containerImageSecond: {
    width: '100%',
    height: verticalScale(30),
    paddingHorizontal: scale(10)
  },
  ScrollView: {
    flex: 0.4,
    marginBottom: verticalScale(10)
  },
  list: {
    flex: 1,
    borderColor: Colors?.orange2,
    borderWidth: 1,
    borderRadius: verticalScale(6),
    margin: verticalScale(10),
    padding: verticalScale(5),
    justifyContent: 'center'
  },
  marginH20: {
    marginHorizontal: scale(20)
  },
  buttonSkip: {
    flex: 1,
    alignItems: 'flex-end',
    margin: scale(10)
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  alignItemCenter: {
    alignItems: 'center'
  },
  imageAvatar: {
    width: verticalScale(30),
    height: verticalScale(30),
    borderRadius: verticalScale(30)
  },
  imageArrowRight: {
    width: scale(15),
    height: verticalScale(15)
  },
  containerArrowRight: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  heading: {
    marginBottom: verticalScale(13),
  },
  imageDetail: {
    width: scale(80),
    height: verticalScale(80),
    borderRadius: verticalScale(6)
  },
  card: {
    backgroundColor: 'white',
    borderRadius: verticalScale(8),
    paddingVertical: verticalScale(45),
    paddingHorizontal: scale(25),
    marginVertical: verticalScale(10),
    marginHorizontal: scale(10),
    borderColor: Colors.orange2,
    borderWidth: 0.3
  },
  shadowProp: {
    shadowOffset: { width: 0, height: 5 },
    shadowColor: Colors.orange2,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  buttonFlexEnd: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: verticalScale(50)
  },
  imageBack: {
    width: scale(38),
    height: verticalScale(38)
  },
  marginV12: {
    marginVertical: verticalScale(12)
  },
  divider10: {
    width: scale(10)
  }


});

export default styles;