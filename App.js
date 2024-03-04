import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Hola')}>
        <Text>Fucckkkk!</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
