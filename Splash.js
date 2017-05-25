import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titulowrapper}>
          <Text style={styles.titulo}>SplasScreen</Text>
        </View>
        <View>
          <Text style={styles.subtitulo}>by HardCoders</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#27ae60',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitulo: {
    color: 'white',
    fontWeight: '200'
  },
  titulowrapper: {
    justifyContent: 'center',
    flex: 1
  }
});
