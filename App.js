import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', key: '1'},
    { name: 'peter', key: '2'},
    { name: 'tina', key: '3'},
    { name: 'lea', key: '4'},
    { name: 'fran', key: '5'},
    { name: 'matej', key: '6'},
    { name: 'lewis', key: '7'},
    { name: 'kevin', key: '8'},
  ]);

  const clickHandler = () => {
    setName('petar');
    setPerson({name: 'luigi', age: 45});
  }

  return (
    <View style={styles.container}>
      <ScrollView>

        { people.map((person)=> (
            <View style={styles.item} key={person.key}>
              <Text>{person.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
