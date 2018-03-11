import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  modalView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: colors.light,
  },
});

export default styles;
