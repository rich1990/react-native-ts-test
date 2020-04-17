import React, {useState, useContext} from 'react';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios';
import {Dimensions, StyleSheet, Text, View, Button} from 'react-native';

const {height} = Dimensions.get('screen');

const App = () => {

  const [colums, setColumns] = useState(['id', 'name', 'lastname','actions'])
  const [data, setData] = useState([])

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, paddingTop: 100, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });


  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      let array = [];
      console.log(res.data)
      res.data.length && res.data.map(data => {
        array.push ([data.name, data.name, data.email, data.username]);
      })      
      setData(array)  
    })
    .catch(console.log)
  }


  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text>Riccardo Table Ajax request example</Text>
        <Button
          title="reload data"
          onPress={getData}
        />
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={colums}/>
          <Rows data={data} textStyle={styles.text}/>
        </Table>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
