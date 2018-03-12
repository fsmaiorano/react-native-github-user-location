import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';

export default class App extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
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

  getUser = () => {
    const { username, region } = this.state;
    console.tron.log(username);
    console.tron.log(region);
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
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <View style={styles.containerTitle}>
                <Text style={styles.modalTitle}>Adicionar novo local</Text>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Usuário no Github"
                  underlineColorAndroid="transparent"
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
                />
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonCancel]}
                    onPress={() => this.setState({ modalVisible: false })}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonSave]}
                    onPress={this.getUser}
                  >
                    <Text style={styles.buttonText}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        </Modal>


      </View>
    );
  }
}
