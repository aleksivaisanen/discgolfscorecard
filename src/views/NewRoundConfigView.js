import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { startNewRound } from '../actions/newRoundActions'

class NewRoundConfigView extends React.Component {

  static navigationOptions = {
    title: "NEW ROUND"
  }

  startRound = () => {
    this.props.startNewRound()
    this.props.navigation.navigate("NewRound");
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
            title="Place bets and assign handicaps"
            buttonStyle={styles.menuButton}
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
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    startNewRound: () => dispatch(startNewRound())
  })

}
export default connect(mapStateToProps, mapDispatchToProps)(NewRoundConfigView);
