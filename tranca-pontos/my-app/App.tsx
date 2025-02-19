import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);

  const pontuadorJogador1 = () => {
    setPlayer1(currentValue => currentValue + 1);
  }; 

  const pontuadorJogador2 = () => {
    setPlayer2(currentValue => currentValue + 1);
  };

  function reset(points: number) {
    setPlayer1(points);
    setPlayer2(points);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tranca Pontos</Text>
      <Text style={styles.subtitle}>O app para você se divertir com seus amigos!</Text>
      <Image source={require('./assets/icon.png')} style={{width: 120, height: 120}}/>
      <Button title='Botao 1' color={'lightcoral'} onPress={() => pontuadorJogador1()} />
      <Text style={[styles.title, styles.player1]}>0</Text>
      <Button title='Botao 2' color={'lightcoral'} onPress={() => pontuadorJogador2()} />
      <Text style={[styles.title, styles.player2]}>0</Text>
      <TouchableOpacity style={styles.button} onPress={() => reset(0)}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  player1: {
    color: 'blue',
  },
  player2: {
    color: 'lime',
  },
  container: {
    flex: 1,
    backgroundColor: 'lightsteelblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  button: {
    marginVertical: 24,
    backgroundColor: 'orange',
    paddingVertical: 16,
  }
});
