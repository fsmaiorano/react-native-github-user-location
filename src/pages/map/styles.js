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
  containerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    color: colors.gray,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: 42,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancel: {
    backgroundColor: colors.cancelAction,
    marginRight: 7.5,
  },
  buttonSave: {
    backgroundColor: colors.confirmAction,
    marginLeft: 7.5,
  },
  buttonText: {
    fontSize: 14,
  },
  input: {
    marginTop: metrics.baseMargin * 2,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: metrics.baseRadius,
  },

  marker: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: colors.white,
  },
});

export default styles;
