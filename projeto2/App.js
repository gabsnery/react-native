/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';



import 
{
  Platform,  
  StyleSheet,  // estilos - trabalhar com sintaxe semelhante ao css
  Text,  //representa qualquer tipo de texto - padrao 14px
  View, //tipo a div
  Button,
  ScrollView
} 
from 'react-native';

const geraNumeroAleatorio = () =>{
  var numero_aleatorio = Math.random();
 var lista = [10,20,30,40]
  numero_aleatorio = Math.floor(numero_aleatorio * 10);

  //[a, b, c, d] = [10,20,30,40];
  ({nome, idade, sexo} ={nome: 'José', idade : 33, sexo:'M'});

  alert(nome);
}

const estilo
export default class App extends Component {
  render() {
    return (
      
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Button
          title = "Gerar um número randomico"
          onPress = {geraNumeroAleatorio}
          />
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit lorem ...</Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit lorem ...</Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit lorem ...</Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit lorem ...</Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit lorem ...</Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit lorem ...</Text>
        </View>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum sit lorem ...</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  postContainer:{
    margin :20,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius:3
  },
  postTitle:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:1
  }
});
