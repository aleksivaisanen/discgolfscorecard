import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Button} from 'react-native-elements';

export default class NewRoundView extends React.Component {
    constructor() {
      super();
      this.state = {
      };
    }
    static navigationOptions = {
        title: "NEW ROUND"
      }
    
    
    render() {
        
        return (
        <View style={styles.container}>
            <Text>Course</Text>
            <Button 
            title="Choose course"
            buttonStyle={styles.menuButton}
            />
            <Text>Players</Text>
            <Button 
            title="Choose players"
            buttonStyle={styles.menuButton}
            />
            <Text>Bets</Text>
            <Button 
            title="Place bets and assign handicaps"
            buttonStyle={styles.menuButton}
            />            
        </View>
        );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  menuButton : {
    marginVertical : 10,
    backgroundColor:"#5998ff"
  }


});
