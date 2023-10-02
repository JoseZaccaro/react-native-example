import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }} style={styles.logo} />
      <StatusBar style="auto" translucent={false} backgroundColor='white' />

    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(0 0 0 / 0.2)',
    paddingHorizontal: 10,
    marginVertical: 10,
    display: 'flex',
    alignItems: 'flex-end'
  },
  logo: {
    width: 50,
    height: 50,
  },

});


export default Header