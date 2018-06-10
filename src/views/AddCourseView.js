import React from 'react';
import { StyleSheet, View, StatusBar, Text, FlatList } from 'react-native';
import { Button, FormLabel, FormInput} from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';
import AddHoleItem from '../components/AddHoleItem.js';

export default class AddCourseView extends React.Component {
    constructor() {
      super();
      this.state = {
          value : 1,
          array : [1]
      };
    }
    static navigationOptions = {
        title: "ADD COURSE",
      }
    
    
    render() {
        
        return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style = {styles.addCourseFormContainer}>
                <FormLabel>Course name</FormLabel>
                <FormInput/>
                <FormLabel>Number of holes</FormLabel>
                <NumericInput 
                    value={this.state.value} 
                    onChange={
                        val => this.setState({
                            value: val,
                            array : Array.from(new Array(val),(x,index)=>index+1) })} 
                    rounded 
                    minValue = {1}
                    maxValue = {36}
                    editable = {false}/>
                   
            </View>
            <FlatList
              data={this.state.array}
              renderItem={({item}) =>
                  <AddHoleItem holeNumber = {item}/>
                  }
              keyExtractor = {number => String(number)}
            />
            <Button 
                title="ADD COURSE"
                buttonStyle={styles.menuButton}
                iconRight={{name:"user-plus", type:"feather"}}
            />
        </View>
        );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  addCourseFormContainer :{
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  menuButton : {
    marginVertical : 10,
    backgroundColor:"#5998ff"
  }

});
