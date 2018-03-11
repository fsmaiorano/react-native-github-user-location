import React, { Component } from 'react';
import {
  View,
  Modal,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';

export default class App extends Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    modalVisible: true,
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <MapView
            onLongPress={() => this.setState({ modalVisible: false })}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: -27.2177659,
              longitude: -49.6451598,
              latitudeDelta: 0.0042,
              longitudeDelta: 0.0031,
            }}
          />

        </Modal>

      </View>
    );
  }
}
