import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FindMinimum: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [num3, setNum3] = useState<string>('');
  const [minimum, setMinimum] = useState<number | null>(null);

  const handleFindMinimum = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    const c = parseFloat(num3);
    setMinimum(Math.min(a, b, c));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter three numbers:</Text>
      <TextInput value={num1} onChangeText={setNum1} placeholder="First number" keyboardType="numeric" />
      <TextInput value={num2} onChangeText={setNum2} placeholder="Second number" keyboardType="numeric" />
      <TextInput value={num3} onChangeText={setNum3} placeholder="Third number" keyboardType="numeric" />
      <Button title="Find Minimum" onPress={handleFindMinimum} />
      {minimum !== null && <Text>Minimum: {minimum}</Text>}
    </View>
  );
};

export default FindMinimum;
