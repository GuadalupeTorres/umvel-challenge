import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView ,TouchableOpacity} from 'react-native';
import mailDevice from '@assets/welcome-wave2.png';
import arrowRight from '@assets/icons/arrow-right.png';
import back from '@assets/icons/goBack.png';

import Styles from './styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '@store/actions/characters.actions';
import { 
  Text, 
  ButtonRounded,
  ImageComponent
} from '@components';
import { saveDetailCharacters } from '../store/actions/characters.actions';
import { scale,verticalScale } from 'react-native-size-matters';


const Home = ({ navigation }) => {
  const redux = useSelector(state => state);
  const dispatch = useDispatch();
  const data = redux?.characters;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getCharacters(2));
  }, []);


  const pagination = () => {

  }


  const listCharacters = data?.dataCharacters?.map((item) => {
  
    const saveData =()=>{
      navigation.navigate('Details')
      dispatch(saveDetailCharacters(item));
    }
    return(
    <TouchableOpacity style={[Styles.list]} onPress={saveData}>
      <View style={Styles.flexRow}>
        <View style={[Styles.flexRow, Styles.alignItemCenter]}>
          <Image
            style={Styles.imageAvatar}
            source={{ uri: item?.image }}
          />
          <View style={{ width: 10 }} />
          <Text h12 semibold textGray>{item?.name}</Text>
        </View>
        <View style={Styles.containerArrowRight}>
          <Image
            style={Styles.imageArrowRight}
            source={arrowRight}
          />
        </View>
      </View>
    </TouchableOpacity>
    );
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.containerImageSecond}>
        <Image
          style={Styles.imageBackground}
          source={mailDevice}
        />
      </View>
      
      <Text h18 semibold orange2 style={[Styles.heading,Styles.marginH20]}>Character List</Text>
      <ScrollView style={{ flexGrow: 0 }}>
        <View style={Styles.ScrollView}>
          {listCharacters}
        </View>    
        <View style={[Styles.alignItemCenter,{marginBottom:25}]}>
          <ButtonRounded size='md' white onPress={pagination}>
            <Text h10 orange2 bold center>
              Load More
            </Text>
          </ButtonRounded>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;