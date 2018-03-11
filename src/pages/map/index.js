import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableHighlight,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';

export default class App extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    modalVisible: false,
    region: {
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  render() {
    console.tron.log(this.state.region);
    return (
      <View style={styles.container}>
        <MapView
          onLongPress={() => this.setState({ modalVisible: true })}
          provider={PROVIDER_GOOGLE}
          onRegionChange={this.onRegionChange}
          style={styles.map}
          region={this.state.region}
        />
        <Modal

          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View>
            <View>
              <Text>Modal</Text>
              <TouchableHighlight onPress={() => this.setState({ modalVisible: false })}>
                <Text>Cancelar</Text>
              </TouchableHighlight>
            </View>
          </View>

        </Modal>


      </View>
    );
  }
}
