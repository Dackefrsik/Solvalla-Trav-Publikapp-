import { View, Text, StyleSheet } from 'react-native'


const Index = () =>{
  return (
    <View>
      <Text style={styles.text}>Solvalla Trav</Text>
    </View>
  )
}

export default Index;

const styles = StyleSheet.create({
  text: {
    marginTop: 80,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})