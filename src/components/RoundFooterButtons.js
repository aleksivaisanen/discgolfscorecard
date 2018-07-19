import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements'

class RoundFooterButtons extends React.Component {
    //set previous button disabled if on first hole
    previousButtonBool = () => {
        if (this.props.currentHole < 2) {
            return true
        } else false
    }

    nextHole = () => {
        if (this.props.currentHole === this.props.chosenCourse.parArray.length) {
            return "Finish round"
        } return "Next hole"
    }

    onPress = (button) => {
        let index = this.props.currentHole - 1
        if (button === 'prev') {
            this.props.flatListRef.scrollToIndex({ index: index - 1, viewOffset: 0, viewPosition: 0.5 })
        }
        else if (button === 'next' && this.props.currentHole < this.props.chosenCourse.parArray.length) {
            this.props.flatListRef.scrollToIndex({ index: index + 1, viewOffset: 0, viewPosition: 0.5 })
        }
        else if (button === 'next' && this.props.currentHole >= this.props.chosenCourse.parArray.length) {
            console.log('Finish round')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    buttonStyle={styles.button}
                    containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
                    title="Previous hole"
                    disabled={this.previousButtonBool()}
                    onPress={this.onPress('prev')}
                />
                <Button
                    containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
                    buttonStyle={styles.button}
                    title={this.nextHole()}
                    onPress={this.onPress('next')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0
    },
    button: {
        backgroundColor: "#5998ff",
        height: 50,
        width: Dimensions.get('window').width / 2
    }
});

const mapStateToProps = (state) => {
    return ({
        currentHole: state.newRound.currentHole,
        chosenCourse: state.newRound.chosenCourse
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(RoundFooterButtons);