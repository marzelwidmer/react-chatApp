import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    state ={
        inputName : ''
    }
    render() {
        return (
            <View>
                <Text style={styles.title}>
                    Enter yout name :
                </Text>
                <TextInput style={styles.nameInput} 
                    placeholder='Johne Doe'
                    onChangeText={(text) =>{
                        this.setState({
                            inputName : text
                        })
                    }}
                    value={this.state.inputName}
                />
                <TouchableOpacity onPress={() =>{
                        // navigate to second screen and pass it the name
                       // alert(this.state.inputName);
                        Actions.chat({
                            inputName : this.state.inputName
                        })
                    }}
                >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20
  },
  nameInput: {
    padding : 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    color : 'black',
    margin: 20,
    fontSize: 20
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20
  }
});

export default Home;
