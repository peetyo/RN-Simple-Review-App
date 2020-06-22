import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View styles={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View style={styles.headerText}>
  <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    // width: Dimensions.get('screen').width,
    // height: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
    textAlign: 'center'
  },
  icon: {
    position: 'absolute',
    left: 16,
    zIndex: 1
  }
});