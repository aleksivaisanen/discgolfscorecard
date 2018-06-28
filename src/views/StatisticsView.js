import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button} from 'react-native-elements';

export default class StatisticsView extends React.Component {
    constructor() {
      super();
      this.state = {
      };
    }
    static navigationOptions = {
        title: "STATISTICS",
      }
    
    
    render() {
        
        return (
        <View style={styles.container}>
            
        </View>
        );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },


});
