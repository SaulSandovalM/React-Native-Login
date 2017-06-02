import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import Splash from './Splash';
import Login from './src/components/Login/Login';
import Inicio from './src/components/Inicio/Inicio';

var NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index) {
    return (
      <TouchableHighlight onPress={() => {
        if (index > 0) {
          navigator.pop();
        }
      }}>
        <Text style={{
          marginTop: 10,
          marginLeft: 20
        }}>Atras</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route, navigator, index) {
    return null;
  },
  Titulo: function(route, navigator, index) {
    return (
      <Text style={{
        marginTop: 10
      }}>{route.name}</Text>
    )
  }
};

export default class Autolavado extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Login':
        return (<Login navigator={navigator} route={route}/>);
      case 'Inicio':
        return (<Inicio navigator={navigator} route={route}/>)
    }
  }

  render() {
    return (
      <Navigator style={{backgroundColor: '#fff'}}
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene= {(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
      }
    }
    navigationBar={
           <NavigationExperimental.Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}/>
        }
    />//cierra navigator
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('Autolavado', () => Autolavado);
