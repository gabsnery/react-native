/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const geraNumeroAleatorio = () => {
  let NumeroAleatorio = Math.random();
  //let lista = [10, 20, 30, 40];

  NumeroAleatorio = Math.floor(NumeroAleatorio * 10);

  //[a, b, c, d] = [10,20,30,40];
  //({ nome, idade, sexo } = { nome: 'José', idade: 33, sexo: 'M' });

  // eslint-disable-next-line no-undef
  alert(NumeroAleatorio);
};

const style = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#5A9',
    height: 80,
  }
};

export default class App extends Component {
  render() {
    return (
      <Text style={style.estiloTexto}>Frases do Dia</Text>
    );
  }
}

