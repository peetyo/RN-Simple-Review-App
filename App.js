import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1'},
    { name: 'peter', id: '2'},
    { name: 'tina', id: '3'},
    { name: 'lea', id: '4'},
    { name: 'fran', id: '5'},
    { name: 'matej', id: '6'},
    { name: 'lewis', id: '7'},
    { name: 'kevin', id: '8'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        // must use item here, not a custom param name.
        renderItem={({ item })=>(
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>

        { people.map((person)=> (
            <View style={styles.item} key={person.key}>
              <Text>{person.name}</Text>
            </View>
        ))}
      </ScrollView> */}
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
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
    width: 150
  }
});
