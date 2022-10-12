import React from 'react';
import { Text, ButtonRounded } from '@components';
import { Image, View } from 'react-native';
import mailDevice from '@assets/welcome-wave.png';
import Styles from './styles';

const Welcome = ({ navigation }) => {

  const nextPage = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.containerImage}>
        <Image
          style={Styles.imageBackground}
          source={mailDevice}
        />
      </View>
      <View style={Styles.marginH20}>
        <Text h18 bold textGray>Welcome</Text>
        <Text h10 semibold textGray>Challenge Rick and Morty</Text>
        <View style={Styles.buttonSkip}>
          <ButtonRounded size='md' white onPress={nextPage}>
            <Text h10 orange2 bold center>
              Skip
            </Text>
          </ButtonRounded>
        </View>

      </View>
    </View>
  );
}


export default Welcome;