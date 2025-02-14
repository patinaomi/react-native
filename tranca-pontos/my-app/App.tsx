import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  //const [first, setFirst] = useState(second);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tranca Pontos</Text>
      <Text style={styles.subtitle}>O app para você se divertir com seus amigos!</Text>
      <Image source={require('./assets/icon.png')} style={{width: 120, height: 120}}/>
      <Button title='Botao 1' color={'lightcoral'}/>
      <Text style={[styles.title, styles.player1]}>0</Text>
      <Button title='Botao 2' color={'lightcoral'} onPress={() => alert('teste')}/>
      <Text style={[styles.title, styles.player2]}>0</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  player1: {
    color: "blue",
  },
  player2: {
    color: "lime",
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
    color: "gray",
  }
});
