import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SumFirstLastDigit: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    if (number.length > 0) {
      const firstDigit = parseInt(number[0]);
      const lastDigit = parseInt(number[number.length - 1]);
      setResult(firstDigit + lastDigit);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter a number:</Text>
      <TextInput value={number} onChangeText={setNumber} keyboardType="numeric" />
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== null && <Text>Sum of first and last digit: {result}</Text>}
    </View>
  );
};

export default SumFirstLastDigit;
