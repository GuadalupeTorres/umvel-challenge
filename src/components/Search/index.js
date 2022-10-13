import React, { useState } from 'react';
import { TextInput,View ,Image} from 'react-native';
import search from '@assets/icons/search.png';
import Colors from '@styles/Colors';
import Styles from './styles';



const Search = ({label,onFill,...props}) => {

   const [value, onChangeText] = useState('');
 
 
   const onSearchFilter = (text) => {
    onChangeText(text);
    onFill(text);
  };


  return(
    <View style={{ width: '100%' }}>
      <View style={Styles.container}>
      <TextInput
        onChangeText={text => onSearchFilter(text)}
        value={value}
        placeholder={label}
        placeholderTextColor={Colors?.textGray}
        style={Styles.inputSearch}
      />
      <View style={{ flex: 0.4,alignItems:'flex-end' }}>
        <Image source={search} style={Styles.iconSearch} />
      </View>
      </View>
    </View>
  );
};
export default Search;