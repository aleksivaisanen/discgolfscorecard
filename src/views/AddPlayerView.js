import React from 'react';
import { StyleSheet, View, StatusBar, Alert } from 'react-native';
import { Button, FormLabel, FormInput, Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Header } from 'react-navigation';
import { connect } from 'react-redux';
import { setPlayerName, setPlayerNickname, setPlayerProfilepic, createPlayer } from '../actions/initActions';


class AddPlayerView extends React.Component {
  static navigationOptions = {
    title: "ADD PLAYER",
  }

  submitValidation = () => {
    if(this.props.playerName !== ""){
      this.props.createPlayer()
      Alert.alert("Success!","Player created!")
    } else {
      alert("Player name can't be empty!")
    }
  }

  pickSingleImage() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true
    }).then(image => {
      console.log(image);
      this.props.setProfilepic(image);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.avatarContainer}>
          <Avatar
            xlarge
            rounded
            source={this.props.profilepic != null ? this.props.profilepic : null}
            icon={{ name: 'plus', type: 'entypo' }}
            onPress={() => this.pickSingleImage()}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.addPlayerForm}>

          <FormLabel>Name</FormLabel>
          <FormInput onChangeText={name => this.props.setPlayerName(name)}
            value={this.props.playerName} />

          <FormLabel>Nickname</FormLabel>
          <FormInput onChangeText={name => this.props.setPlayerNickname(name)}
            value={this.props.playerNickname} />
          <Button
            title="ADD PLAYER"
            buttonStyle={styles.menuButton}
            iconRight={{ name: "user-plus", type: "feather" }}
            //add validation on inputdata
            onPress={this.submitValidation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addPlayerForm: {
    flex: 6,
    justifyContent: "flex-end",
  },
  avatarContainer: {
    marginTop: Header.HEIGHT,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButton: {
    marginVertical: 10,
    backgroundColor: "#5998ff"
  }
});

const mapStateToProps = (state) => {
  return ({
    playerName: state.init.playerName,
    playerNickname: state.init.playerNickname,
    profilepic: state.init.profilepic
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setPlayerName: (name) => dispatch(setPlayerName(name)),
    setPlayerNickname: (name) => dispatch(setPlayerNickname(name)),
    setProfilepic: (image) => dispatch(setPlayerProfilepic(image)),
    createPlayer: () => dispatch(createPlayer()),
  })

}
export default connect(mapStateToProps, mapDispatchToProps)(AddPlayerView);
