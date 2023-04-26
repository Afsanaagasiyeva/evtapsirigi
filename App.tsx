import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res.toString());
  };

  const subtract = () => {
    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res.toString());
  };

  const multiply = () => {
    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res.toString());
  };

  const divide = () => {
    const res = parseFloat(num1) / parseFloat(num2);
    setResult(res.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Calculator</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Enter first number"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Enter second number"
      />
      <View style={styles.buttons}>
        <Button title="+" onPress={add} />
        <Button title="-" onPress={subtract} />
        <Button title="*" onPress={multiply} />
        <Button title="/" onPress={divide} />
      </View>
      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
