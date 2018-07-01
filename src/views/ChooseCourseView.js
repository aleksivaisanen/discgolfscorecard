import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import ChooseCourseItem from '../components/ChooseCourseItem'

class ChooseCourseView extends React.Component {

  static navigationOptions = {
    title: "CHOOSE COURSE",

  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <FlatList
            data={this.props.courses}
            renderItem={({ item, index }) =>
              <ChooseCourseItem
                course={item}
              />
            }
            keyExtractor={(number, index) => String(index)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  menuButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bgImage: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  header: {
    backgroundColor: "#5998ff"
  },
  headerText: {
    color: '#fff',
    fontSize: 24
  },
  menuButton: {
    marginVertical: 10,
    backgroundColor: "#5998ff"
  }
});

const mapStateToProps = (state) => {
  return ({
    courses: state.init.courses
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({

  })

}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseCourseView);
