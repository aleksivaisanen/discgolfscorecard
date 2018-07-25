import React from 'react';
import { StyleSheet, View, Text, Alert, } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { startNewRound, discardPreviousRound } from '../actions/newRoundActions'

class NewRoundConfigView extends React.Component {

  static navigationOptions = {
    title: "NEW ROUND"
  }

  continuePreviousAlert = () => {
    if(this.props.standings.length > 0){
      Alert.alert(
        'You have an unfinished round!',
        'Do you want to continue previous round or start a new one and discard the old one?',
        [
          {text: 'Continue previous round', onPress: () => this.props.navigation.navigate('NewRound')},
          {text: 'Discard previous round', onPress: this.props.discardPreviousRound}
        ],
        { cancelable: false }
      )
    }
  }

  componentDidMount = () => {
    this.continuePreviousAlert
  }


  startRound = () => {
    if(!this.props.chosenCourse && this.props.chosenPlayers.length < 1){
      alert("Choose the course and the players!")
    } else if(!this.props.chosenCourse) {
      alert("Choose the course!")
    } else if(this.props.chosenPlayers.length < 1) {
      alert("Choose the players!")
    } else {
      this.props.startNewRound()
      this.props.navigation.navigate("NewRound");
    }
  }

  render() {


    let pickedCourse;
    if (this.props.chosenCourse) {
      pickedCourse = <Text>{this.props.chosenCourse.courseName}</Text>
    } else {
      pickedCourse = <Text>No course picked</Text>
    }

    let pickedPlayers;
    if (this.props.chosenPlayers.length === 0) {
      pickedPlayers = <Text>No players picked</Text>
    } else {
      pickedPlayers =
        this.props.chosenPlayers.map(item =>
          <Text key={item.id}>{item.playerName}</Text>
        )
    }

    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <Text>Players:</Text>
          {pickedPlayers}
          <Text />
          <Text>Course:</Text>
          {pickedCourse}
        </View>
        <View style={styles.containerBottom}>
          <Button
            title="Choose players"
            buttonStyle={styles.menuButton}
            onPress={() => this.props.navigation.navigate('ChoosePlayers')}
          />
          <Button
            title="Choose course"
            buttonStyle={styles.menuButton}
            onPress={() => this.props.navigation.navigate('ChooseCourse')}
          />

          <Button
            title="Start new round"
            buttonStyle={styles.menuButton}
            onPress={this.startRound}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  containerTop: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  menuButton: {
    marginVertical: 10,
    backgroundColor: "#5998ff"
  }


});

const mapStateToProps = (state) => {
  return ({
    chosenPlayers: state.newRound.chosenPlayers,
    chosenCourse: state.newRound.chosenCourse,
    standings: state.newRound.standings,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    startNewRound: () => dispatch(startNewRound()),
    discardPreviousRound: () => dispatch(discardPreviousRound()),
  })

}
export default connect(mapStateToProps, mapDispatchToProps)(NewRoundConfigView);
