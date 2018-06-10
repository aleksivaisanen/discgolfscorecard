import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default class AddHoleItem extends React.Component {
    constructor() {
        super();
        this.state = {
            value : 3,
        };
      }
    
    render() {
        
        return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.text}>Hole {this.props.holeNumber}</Text>
            </View>
            <View style = {styles.itemContainer}>
                <Text style={styles.text}>Par</Text>
                <Text style= {styles.text}> </Text>
                <NumericInput
                value={this.state.value} 
                onChange={
                    val => this.setState({
                        value : val }) 
                    }
                minValue = {1}
                maxValue = {10}
                editable = {false}
                textColor={'#fff'}
                containerStyle={styles.numericInput}
                />
            </View>         
        </View>
        );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 50,
    width:'95%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#5998ff',
    margin: 10,
    padding: 10
  },
  itemContainer:{
    flex:1,
    flexDirection:'row'
  },
  text:{
      fontSize:24,
      color:'#fff',
  },
  numericInput:{
    height:34,
    marginLeft:10
  }
});
