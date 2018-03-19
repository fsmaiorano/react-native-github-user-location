import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapActions } from 'store/ducks/map';

import styles from './styles';

class Map extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    getGithubUserRequest: PropTypes.func.isRequired,
    map: PropTypes.shape({
      region: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        latitudeDelta: PropTypes.number,
        longitudeDelta: PropTypes.number,
      }),
      userSearch: PropTypes.string,
      user: PropTypes.shape(),
    }).isRequired,
  }

  state = {
    username: '',
    modalVisible: false,
  }

  componentDidMount = () => {
    this.setState({ region: this.props.map.region });
  }

  onRegionChange = (region) => {
    this.setState({ region });
  }

  getUser = () => {
    const { username, coordinate } = this.state;
    this.props.getGithubUserRequest(username, coordinate);
  }

  setCoordinates = (event) => {
    const { coordinate } = event.nativeEvent;

    this.setState({ coordinate, modalVisible: true });

    // this.props.getGithubUserRequest(username, coordinate);
  }


  render() {
    const { users } = this.props.map;
    return (
      <View style={styles.container}>
        <MapView
          onLongPress={this.setCoordinates}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.region}
        />
        { users && users.map(u => (
          <MapView.Marker
            key={u.id}
            coordinate={u.coordinate}
            title={u.login}
            description={u.bio}
          >
            <Image style={styles.marker} source={{ uri: u.avatar_url }} />
          </MapView.Marker>
        ))}


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

const mapStateToProps = state => ({
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
