import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Post from './components/Post';


export default class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef7777',
  },
  content:{
    backgroundColor:'#ef7777',
    flex:1,
  },
  header:{
    backgroundColor:'#fff',
    alignItems:'center',
    height:80,
  },
  headerText:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:45,
  }
});
