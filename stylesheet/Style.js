import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    backgroundColor: '#193441'
  },
  inputContainer : {
    flex: 7,
    backgroundColor: '#3E606F'
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#3E606F'
  },
  inputButtonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  inputButtonHighlight: {
    backgroundColor: '#375663'
  }
})

export default Style;