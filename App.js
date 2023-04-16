import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const App = () => {
  const [letraSelecionada, setLetraSelecionada] = useState('');

  const handleClick = (letra) => {
    setLetraSelecionada(letra);
  }

  const renderBotao = (letra) => {
    return (
      <TouchableOpacity key={letra} style={styles.botao} onPress={() => handleClick(letra)}>
        <Text style={styles.textoBotao}>{letra.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }

  const renderPronuncia = () => {
    if (letraSelecionada) {
      const letraMinuscula = letraSelecionada.toLowerCase();
      const pronuncia = obterPronuncia(letraMinuscula);
      return (
        <View style={styles.pronuncia}>
          <Text style={styles.textoPronuncia}>Letra: {letraSelecionada.toUpperCase()}</Text>
          <Text style={styles.textoPronuncia}>Maiúscula: {letraSelecionada.toUpperCase()}</Text>
          <Text style={styles.textoPronuncia}>Minúscula: {letraSelecionada.toLowerCase()}</Text>
          <Text style={styles.textoPronuncia}>Pronúncia: {pronuncia}</Text>
        </View>
      );
    }
  }

  const obterPronuncia = (letra) => {
    switch (letra) {
      case 'a':
        return 'á';
      case 'b':
        return 'bê';
      case 'c':
        return 'cê';
      case 'd':
        return 'dê';
      case 'e':
        return 'é';
      case 'f':
        return 'éfe';
      case 'g':
        return 'gê';
      case 'h':
        return 'agá';
      case 'i':
        return 'i';
      case 'j':
        return 'jóta';
      case 'k':
        return 'cá';
      case 'l':
        return 'éle';
      case 'm':
        return 'ême';
      case 'n':
        return 'êne';
      case 'o':
        return 'ó';
      case 'p':
        return 'pê';
      case 'q':
        return 'quê';
      case 'r':
        return 'érre';
      case 's':
        return 'ésse';
      case 't':
        return 'tê';
      case 'u':
        return 'u';
      case 'v':
        return 'vê';
      case 'w':
        return 'dáblio';
      case 'x':
        return 'xis';
      case 'y':
        return 'ípsilon';
      case 'z':
        return 'zê';
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.botoesContainer}>
        {alfabeto.map((letra) => renderBotao(letra))}
      </View>
      {renderPronuncia()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
