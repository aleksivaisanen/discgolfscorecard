import React from 'react';
import { StyleSheet, View, StatusBar, FlatList, Alert } from 'react-native';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import NumericInput from 'react-native-numeric-input';
import AddHoleItem from '../components/AddHoleItem.js';
import { connect } from 'react-redux';
import { updateNoOfHoles, setCourseName, createCourse } from '../actions/initActions'


class AddCourseView extends React.Component {

  static navigationOptions = {
    title: "ADD COURSE",
  }

  submitValidation = () => {
    if(this.props.courseName !== ""){
      this.props.createCourse()
      Alert.alert("Success!","Course created!")
    } else {
      alert("Course name can't be empty!")
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.addCourseFormContainer}>
          <FormLabel>Course name</FormLabel>
          <FormInput onChangeText={text => this.props.setCourseName(text)}
            value={this.props.courseName} />
          <FormLabel>Number of holes</FormLabel>
          <NumericInput
            value={this.props.noOfHoles}
            onChange={
              val => {
                this.props.updateHoles(val)
              }}
            rounded
            minValue={1}
            maxValue={36}
            editable={false} />

        </View>
        <FlatList
          data={this.props.parArray}
          renderItem={({ item, index }) =>
            <AddHoleItem holeNumber={index + 1} />
          }
          keyExtractor={(number, index) => String(index)}
        />
        <Button
          title="ADD COURSE"
          buttonStyle={styles.menuButton}
          iconRight={{ name: "add-to-list", type: "entypo" }}
          onPress={this.submitValidation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  addCourseFormContainer: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  menuButton: {
    marginVertical: 10,
    backgroundColor: "#5998ff"
  }

});

const mapStateToProps = (state) => {
  return ({
    noOfHoles: state.init.noOfHoles,
    parArray: state.init.parArray,
    courseName: state.init.courseName
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    updateHoles: (noOfHoles) => dispatch(updateNoOfHoles(noOfHoles)),
    setCourseName: (name) => dispatch(setCourseName(name)),
    createCourse: () => dispatch(createCourse())
  })

}
export default connect(mapStateToProps, mapDispatchToProps)(AddCourseView);