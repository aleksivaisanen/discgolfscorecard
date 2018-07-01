import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { CheckBox } from 'react-native-elements';
import { chooseCourse } from '../actions/newRoundActions'

class ChooseCourseItem extends Component {

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.text}>{this.props.course.courseName}</Text>
                <Text style={styles.text}>Par: {this.props.course.parArray.reduce((a, b) => a + b, 0)}</Text>
                <CheckBox
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    containerStyle={styles.checkbox}
                    onPress={() => this.props.chooseCourse(this.props.course)}
                    checked={this.props.chosenCourse === this.props.course}
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
        chosenCourse: state.newRound.chosenCourse
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        chooseCourse: (course) => dispatch(chooseCourse(course))
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseCourseItem);