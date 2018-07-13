import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import HoleScores from '../components/HoleScores'
import { setCurrentHole } from '../actions/newRoundActions';
// import { startNewRound } from '../actions/newRoundActions';

const deviceWidth = Dimensions.get('window').width;

class NewRoundView extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return params;
    };

    componentDidMount() {
        this.props.navigation.setParams({ title: "Hole " + this.props.currentHole + "- " + "Par " + this.props.chosenCourse.parArray[0] });
    }

    onScrollEnd = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        let holeNo = pageNum + 1
        this.props.setCurrentHole(holeNo)
        //calculates current index based on view offset
        this.props.navigation.setParams({ title: "Hole " + holeNo + " - " + "Par " + this.props.chosenCourse.parArray[holeNo - 1] });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal
                    data={this.props.chosenCourse.parArray}
                    snapToInterval={deviceWidth}
                    pagingEnabled
                    onMomentumScrollEnd={this.onScrollEnd}
                    renderItem={({ item, index }) =>
                        <View style={styles.holeContainer}>
                            <Text>Hole</Text>
                            <Text>{index + 1}</Text>
                            <Text>Par</Text>
                            <Text>{item}</Text>
                            <HoleScores holeNo={index + 1} par={item} />
                        </View>
                    }
                    keyExtractor={(number, index) => String(index)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    holeContainer: {
        flex: 1,
        width: deviceWidth
    }
});

const mapStateToProps = (state) => {
    return ({
        chosenPlayers: state.newRound.chosenPlayers,
        chosenCourse: state.newRound.chosenCourse,
        currentHole: state.newRound.currentHole,
        holeNo: state.newRound.holeNo
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        startNewRound: () => dispatch(startNewRound()),
        setCurrentHole: (currentHole) => dispatch(setCurrentHole(currentHole))
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(NewRoundView);
