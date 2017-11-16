import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Chat extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>Hello {this.props.name} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 20
    }
  });
export default Chat;
