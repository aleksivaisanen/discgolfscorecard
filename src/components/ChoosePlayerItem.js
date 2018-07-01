import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { Avatar, CheckBox } from 'react-native-elements';
import { chooseSinglePlayer } from '../actions/newRoundActions'

class ChoosePlayerItem extends Component {

    render() {
        return (

            <View style={styles.container}>
                <Avatar
                    medium
                    rounded
                    source={this.props.player.profilepic}
                />
                <Text style={styles.text}>{this.props.player.playerName}</Text>
                <CheckBox
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    containerStyle={styles.checkbox}
                    onPress={() => this.props.chooseSinglePlayer(this.props.player)}
                    checked={this.props.chosenPlayers.indexOf(this.props.player) > -1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 75,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5998ff',
        margin: 10,
        padding: 10
    },
    text: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 10
    },
    checkbox: {
        paddingRight: 0,
        paddingLeft: 20,

    },

});
const mapStateToProps = (state) => {
    return ({
        chosenPlayers: state.newRound.chosenPlayers
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        chooseSinglePlayer: (player) => dispatch(chooseSinglePlayer(player))
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(ChoosePlayerItem);