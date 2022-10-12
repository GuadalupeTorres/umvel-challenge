const white = '#FFFFFF';
const textGray = '#686868';
const orange1 = '#FDAD8F';
const orange2 = '#FD8A83';

const Colors = {
  white,
  textGray,
  orange1,
  orange2,
  get: value => {
    if (Colors[value]) {
      const returnValue = { color: Colors[value] };
      return returnValue;
    }
    return null;
  }
};

export default Colors;