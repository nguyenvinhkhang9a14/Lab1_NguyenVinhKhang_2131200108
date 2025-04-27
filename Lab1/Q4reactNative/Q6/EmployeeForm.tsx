import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const EmployeeInfoScreen: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [occupation, setOccupation] = useState<string>('');

  const handleUpdate = () => {
    Alert.alert('Success', 'Information updated successfully!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Full Name:</Text>
      <TextInput value={fullName} onChangeText={setFullName} placeholder="Enter full name" />

      <Text>Age:</Text>
      <TextInput value={age} onChangeText={setAge} placeholder="Enter age" keyboardType="numeric" />

      <Text>Occupation:</Text>
      <TextInput value={occupation} onChangeText={setOccupation} placeholder="Enter occupation" />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

export default EmployeeInfoScreen;
