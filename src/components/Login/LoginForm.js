import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  Alert
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <TextInput placeholder="Nombre de Usuario o email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next" onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address" autoCapitalize="none" autoCorrect={false} style={styles.input}/>
        <TextInput placeholder="Constraseña"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go" secureTextEntry style={styles.input}
          ref={(input) => this.passwordInput = input}/>
        <TouchableOpacity style={styles.buttonContainer} onPress={(this.onLogin.bind(this))}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onLogin() {
    Alert.alert('Acceso', 'Te has reguistrado con nosotros', [
      {
        text: 'Aceptar',
        onPress: (this.aceptar.bind(this))
      }, {
        text: 'Cancelar',
        onPress: (this.cancelar.bind(this))
      }
    ])
  }

  aceptar() {
    this.props.navigator.push({
      title: 'Inicio',
      name: 'Inicio',
      passProps: {}
    });
  }
  cancelar() {
    console.log('Login cancelado')
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
})
