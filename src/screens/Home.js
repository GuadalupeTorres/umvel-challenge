import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import mailDevice from '@assets/welcome-wave2.png';
import arrowRight from '@assets/icons/arrow-right.png';
import back from '@assets/icons/goBack.png';

import Styles from './styles';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '@store/actions/characters.actions';
import {
  Text,
  Search,
  ButtonRounded,
  ImageComponent
} from '@components';
import { cleanDataList, saveDetailCharacters } from '../store/actions/characters.actions';
import { scale, verticalScale } from 'react-native-size-matters';


const Home = ({ navigation }) => {
  const redux = useSelector(state => state);
  const dispatch = useDispatch();
  const data = redux?.characters;
  const nextPage = data?.nextPage?.next;
  const [offset, setOffset] = useState(1);
  const [filterData, setFilterData] = useState(data?.dataCharacters);

  useEffect(() => {
    dispatch(cleanDataList());
    dispatch(getCharacters(offset));
  }, []);


  useEffect(() => {
    if (filterData !== null) {
      setFilterData([...filterData, ...data?.dataCharacters]);
    } else {
      setFilterData(data?.dataCharacters);
    }
  }, [nextPage]);

  useEffect(() => {

    setFilterData(data?.dataCharactersFilter);
  }, [data?.dataCharactersFilter]);


  const goBack = () => {
    navigation.goBack(null);
  };


  const pagination = () => {
    dispatch(getCharacters(nextPage));
    setOffset(nextPage)
  }

  const searchFilter = (text) => {
    dispatch(getCharacters(offset, text));

  }


  const listCharacters = filterData?.map((item) => {

    const saveData = () => {
      navigation.navigate('Details')
      dispatch(saveDetailCharacters(item));
    }
    return (
      <TouchableOpacity style={[Styles.list]} onPress={saveData}>
        <View style={Styles.flexRow}>
          <View style={[Styles.flexRow, Styles.alignItemCenter]}>
            <Image
              style={Styles.imageAvatar}
              source={{ uri: item?.image }}
            />
            <View style={Styles.divider10} />
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
      <ImageComponent source={mailDevice} height={verticalScale(190)}>
        <TouchableOpacity style={[Styles.containerImageSecond]} onPress={goBack}>
          <Image
            style={Styles.imageBack}
            source={back}
          />
        </TouchableOpacity>
      </ImageComponent>
      <Text h18 semibold orange2 style={[Styles.heading, Styles.marginH20]}>Character List</Text>
      <View style={Styles.marginH20}>
        <Search label={'Search'} onFill={(code) => searchFilter(code)} />
      </View>
      <ScrollView style={{ flexGrow: 0 }}>
        <View style={Styles.ScrollView}>
          {listCharacters}
        </View>

      </ScrollView>
      <View style={[Styles.alignItemCenter, Styles.marginV12]}>
        <ButtonRounded size='md' white onPress={pagination}>
          <Text h10 orange2 bold center>
            Page {nextPage === null || nextPage === undefined ? 1 : nextPage - 1} to {data?.nextPage?.pages}
          </Text>
        </ButtonRounded>
      </View>
    </View>
  );
}

export default Home;