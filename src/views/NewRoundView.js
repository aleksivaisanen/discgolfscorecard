import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { setHeader } from '../actions/newRoundActions';

const deviceWidth = Dimensions.get('window').width;

class NewRoundView extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return params;
    };

    componentDidMount() {
        this.props.navigation.setParams({ title: "Hole 1 - " + "Par " + this.props.chosenCourse.parArray[0] });
    }
    onScrollEnd = (e) => {
        //calculates current index based on view offset
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        let holeNo = pageNum + 1
        this.props.navigation.setParams({ title: "Hole " + holeNo + " - " + "Par " + this.props.chosenCourse.parArray[pageNum] });
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
        header: state.newRound.header,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setHeader: (header) => dispatch(setHeader(header)),
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(NewRoundView);
