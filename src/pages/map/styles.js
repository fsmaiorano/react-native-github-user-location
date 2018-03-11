import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

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
    borderColor: colors.lightGray,
    borderRadius: metrics.borderRadius,
    flexDirection: 'row',
  },
  modalContent: {
    backgroundColor: colors.light,
    padding: metrics.basePadding,
    marginRight: metrics.baseMargin * 2,
    marginLeft: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
    flex: 1,
  },
});

export default styles;
