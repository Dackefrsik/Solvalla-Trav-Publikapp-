import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const News = () => {
  return (
    <View>
      <Text style={styles.text}>News</Text>
    </View>
  )
}

export default News

const styles = StyleSheet.create({
  text:{
    marginTop: 80,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})