import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

const HailstoneSequence: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [sequence, setSequence] = useState<number[]>([]);

  const generateHailstone = (n: number): number[] => {
    const seq: number[] = [];
    while (n !== 1) {
      seq.push(n);
      n = (n % 2 === 0) ? n / 2 : n * 3 + 1;
    }
    seq.push(1);
    return seq;
  };

  const handleGenerate = () => {
    const n = parseInt(number);
    if (n > 0) {
      setSequence(generateHailstone(n));
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter a positive number:</Text>
      <TextInput value={number} onChangeText={setNumber} placeholder="Positive number" keyboardType="numeric" />
      <Button title="Generate Sequence" onPress={handleGenerate} />
      <ScrollView style={{ marginTop: 20 }}>
        {sequence.map((num, idx) => (
          <Text key={idx}>{num}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default HailstoneSequence;
