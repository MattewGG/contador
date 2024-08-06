import React, {useState} from 'react';

import { StyleSheet, Text, View, Button, Pressable, TextInput, place  } from 'react-native';

export default function App() {
  const [count, setCount] = useState (0);
  const [text, setText] = useState('Valor inicial');
  const handlerSum = () => setCount(count + 1);
  const OnePiece = () => setCount(count - 1);
  const handlerText = (text) => setText(text);


  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Contador</Text>
      <Text> O valor do contador é {count}</Text>
      <Pressable style={styles.button} onPress={handlerSum}> <Text style={styles.Text}> Soma </Text> </Pressable> 
      <Pressable style={styles.button} onPress={OnePiece}> <Text style={styles.Text}> Subtrai </Text> </Pressable>
      <TextInput style={styles.inputText}
        placeholder='Digite aqui'
        onChangeText={handlerText} 
      >
    
      </TextInput>

      <Text> O texto digitado é {text} </Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'grey',
    
  },


  Text:{
    color: 'black',
    fontFamily: 'monospace',
  },

  Title:{
    fontFamily: 'monospace',
    fontSize: 50,

  },

  inputText:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    padding: 20,
    width: '80%'


  }

 
});

