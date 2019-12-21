import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';

class SplashScreen extends React.Component {
  
  render() {

    return (
      
      <View style={[styles.container, { backgroundColor: 'gray' }]}>
        <Image source={require ('C:/Ennext/assets/logo.jpg')}
               style={{ width:wp('100%'),height:hp('100%') }}/>
      </View> 
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <WebView
        source={{ uri: 'https://ennexthzq.com/' }}
        style={{ marginTop: 2 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
  
});