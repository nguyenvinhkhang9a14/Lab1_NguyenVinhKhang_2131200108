/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import Data from './Question4/Data';
import Square from './Question4/Square';
import style from './Question4/style';
import { ScrollView } from 'react-native';

import EmployeeInfoScreen from './Q6/EmployeeForm';

export default function App() {
  return (
    //Q4
    // <ScrollView style={style.container}>
    //   {Data.map((item, index) =>
    //   (
    //     <Square key={item} text={`Sqaure ${index + 1}`} />
    //   )
    //   )}
    // </ScrollView>
    //Q6
    <EmployeeInfoScreen />
  );
}
