import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ListView,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import clrs from '../Utils/clrs';


export default class Main extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const data = [
      "Alem", "Semhar", "Daniel", "Mikey", "Eddi", "Fortuna", "Wegahta"
    ];

    this.state = { artists: dataSource.cloneWithRows(data) };
  }

  renderRow = (text, sId, rId) => {
    return (
      <Text /*styles={}*/>
        { rId }. {text}
      </Text>
    )
  }


  render() {
    const { artists } = this.state;

    return (

      <View style={ styles.container }>
        <StatusBar barstyle='light-content' />

        <TextInput style={ styles.searchBox } />

        <ListView dataSource={ artists }
          style={{ flex:1, alignSelf: 'stretch' }}
          renderRow={ this.renderRow } />
      </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: clrs.white,
  },
  searchBox: {
    height: 40,
    borderColor: clrs.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: "800"
  }
})
