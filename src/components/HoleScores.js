import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import NumericInput from 'react-native-numeric-input'
import { setSingleScoreForPlayer } from '../actions/newRoundActions'

class HoleScores extends Component {
    //gets current score from redux state
    getCurrentPlayerCurrentScore = (playerId) => {
        let index = this.props.holeNo - 1;
        let currentRounds = this.props.roundScores.filter(round => this.props.currentRound === round.id);
        let currentPlayersRound = currentRounds.filter(round => playerId === round.player.id)[0];
        let currentScoreForPlayer = currentPlayersRound.scoreArray[index];
        return currentScoreForPlayer;
    }

    render() {

        return (

            <FlatList
                data={this.props.chosenPlayers}
                extraData={this.props.roundScores}
                renderItem={({ item, index }) =>
                    <View style={styles.container}>
                        <Avatar
                            medium
                            rounded
                            source={item.profilepic}
                        />
                        <Text style={styles.text}>{item.playerName}</Text>
                        <NumericInput
                            rounded
                            value={this.getCurrentPlayerCurrentScore(item.id)}
                            onChange={val => this.updateScore(item.id, index, val)}
                            minValue={1}
                            maxValue={20}
                            editable={false}
                            textColor={'#fff'} />

                    </View>
                }
                keyExtractor={(number, index) => String(index)}
            />
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

});
const mapStateToProps = (state) => {
    return ({
        chosenPlayers: state.newRound.chosenPlayers,
        roundScores: state.newRound.roundScores,
        currentRound: state.newRound.currentRound,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setSingleScoreForPlayer: (playerId, holeNo, score) => dispatch(setSingleScoreForPlayer(playerId, holeNo, score))
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(HoleScores);