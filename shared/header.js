import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.imageBackground}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
        <View style={styles.headerText}>
          <Text style={styles.headerText}>
          <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
          {' ' + title}
          </Text>
        </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  imageBackground: {
    
  },
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
  },
  headerImage: {
    width: 26,
    height: 26
  }
});