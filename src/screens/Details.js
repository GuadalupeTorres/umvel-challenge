import React from 'react';
import { Image, View } from 'react-native';
import mailDevice from '@assets/welcome-wave2.png';
import { verticalScale } from 'react-native-size-matters';
import Colors from '@styles/Colors';
import Styles from './styles';
import {
  Text,
  ButtonRounded,
  ImageComponent
} from '@components';

//redux
import { useSelector } from 'react-redux';


const Details = ({ navigation }) => {
  const redux = useSelector(state => state);
  const data = redux?.characters;
  const dataDetail = data?.detailCharacterIndex;


  const goBack = () => {
    navigation.goBack(null);
  };

  return (
    <View style={Styles.container}>

      <ImageComponent source={mailDevice} height={verticalScale(190)} />
      <Text h18 semibold orange2 style={[Styles.heading, Styles.marginH20]}>Detail Character</Text>
      <View style={{ flex: 1 }}>
        <View style={[Styles.card, Styles.shadowProp]}>
          <Image
            style={[Styles.imageDetail, Styles.heading]}
            source={{ uri: dataDetail?.image }}
          />
          <View>
            <Text h18 bold textGray style={Styles.heading}>
              {dataDetail?.name}
            </Text>
          </View>
          <Text h14 textGray regular style={Styles.heading}><Text h14 textGray medium style={Styles.heading}>Gender:</Text>{' '}{dataDetail?.gender}</Text>
          <Text h14 textGray regular style={Styles.heading}><Text h14 textGray medium style={Styles.heading}>Specie:</Text>{' '}{dataDetail?.species}</Text>
          {dataDetail?.type && (
            <Text h14 textGray regular style={Styles.heading}><Text h14 textGray medium style={Styles.heading}>Type:</Text>{' '}{dataDetail?.type}</Text>
          )}
          <Text h14 orange2 medium style={Styles.heading}>Status:<Text h14 textGray semibold style={[Styles.heading, { color: dataDetail?.status === 'Alive' ? 'green' : dataDetail?.status === 'Dead' ? 'red' : Colors.textGray }]}>{' '}{dataDetail?.status}</Text></Text>
        </View>
      </View>
      <View style={[Styles.buttonSkip, Styles.buttonFlexEnd]}>
        <ButtonRounded size='md' white onPress={goBack}>
          <Text h10 orange2 bold center>
            Back
          </Text>
        </ButtonRounded>
      </View>
    </View>
  );
}

export default Details;