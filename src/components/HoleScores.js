import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

class HoleScores extends Component {

    render() {
        return (

            <View style={styles.container}>

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
    }

});
const mapStateToProps = (state) => {
    return ({
        chosenPlayers: state.newRound.chosenPlayers
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(HoleScores);