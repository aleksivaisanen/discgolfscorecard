import React from 'react';
import { StyleSheet, View, FlatList, Alert, Dimensions, Animated, BackHandler } from 'react-native';
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import HoleScores from '../components/HoleScores'
import { setCurrentHole, discardPreviousRound } from '../actions/newRoundActions'

const deviceWidth = Dimensions.get('window').width;

class NewRoundView extends React.Component {

    //scroll location of flatlist
    scrollX = new Animated.Value(0)
    //will turn true, if last hole was even visited
    finishedRound = false

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return params;
    };

    componentDidMount = () => {
        this.props.navigation.setParams({ title: "Hole " + this.props.currentHole + " - Par " + this.props.chosenCourse.parArray[this.props.currentHole - 1], headerLeft: null});
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount = () =>{
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
  
    discardRound = () => {
        this.props.navigation.goBack(null)
        this.props.discardPreviousRound()
        
    }
    handleBackButton = () => {
        Alert.alert(
            "Warning!",
            "Do you want to discard this round?",
            [
                {text:"Yes, I want to discard this round!", onPress: this.discardRound},
                {text:"No, I DON'T want to discard this round!", onPress: () => {}}
            ]
        )
        return true;
    }


    getItemLayout = (data, index) => (
        { length: deviceWidth, offset: deviceWidth * index, index }
      );

    onScrollEnd = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        let holeNo = pageNum + 1
        this.props.setCurrentHole(holeNo)
        this.props.navigation.setParams({ title: "Hole " + holeNo + " - Par " + this.props.chosenCourse.parArray[pageNum], headerLeft: null });
    }


    finishDisabled = () => {
        let index = this.props.currentHole - 1
        if (this.props.currentHole < this.props.chosenCourse.parArray.length) {
            return !this.finishedRound
        }
        else if (this.props.currentHole >= this.props.chosenCourse.parArray.length) {
            this.finishedRound = true
            return !this.finishedRound
        }
    }


    render() {
        let position = Animated.divide(this.scrollX, deviceWidth);

        //this prevents "pararray is undefined for null" when round is discarded with backbutton
        //not ideal, but works :) 
        if(this.props.chosenCourse){
        return (
            <View style={styles.container}>
                <FlatList
                    ref={ref => {this.list = ref}}
                    getItemLayout={this.getItemLayout}
                    initialScrollIndex={this.props.currentHole - 1}
                    horizontal
                    data={this.props.chosenCourse.parArray}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={deviceWidth}
                    pagingEnabled
                    onScroll={Animated.event( 
                        [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] 
                    )}
                    scrollEventThrottle={16}
                    onMomentumScrollEnd={this.onScrollEnd}
                    renderItem={({ item, index }) =>
                        <View style={styles.holeContainer}>
                            <HoleScores holeNo={index + 1} par={item} />
                        </View>
                    }
                    keyExtractor={(number, index) => String(index)}
                />
                <View style={styles.dotContainer}>
                    {/*page indicator dots*/}
                    {this.props.chosenCourse.parArray.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1], 
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp' 
                        });
                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    opacity, height: 5,
                                    width: 5,
                                    backgroundColor: '#5998ff',
                                    margin: 4,
                                    borderRadius: 5
                                }}
                            />
                        )

                    })}
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={styles.button}
                        disabled={this.finishDisabled()}
                        title={"Finish round"}
                        onPress={() => this.props.navigation.navigate('RoundFinished')}
                    />
                </View>
            </View>
        )
        //this prevents "pararray is undefined for null" when round is discarded with backbutton
        //not ideal, but works :)
    }else {return true}
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
    },
    buttonContainer: {
        flex: 0,
        height: 50,
        flexDirection: "column",
        justifyContent: "center",
        padding: 0
    },
    dotContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: "#5998ff",
        height: 40,
        width: deviceWidth - 30
    }
});

const mapStateToProps = (state) => {
    return ({
        chosenPlayers: state.newRound.chosenPlayers,
        chosenCourse: state.newRound.chosenCourse,
        currentHole: state.newRound.currentHole,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setCurrentHole: (currentHole) => dispatch(setCurrentHole(currentHole)),
        discardPreviousRound: () => dispatch(discardPreviousRound()),
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(NewRoundView);
