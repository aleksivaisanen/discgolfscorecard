import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions, Animated } from 'react-native';
import { connect } from 'react-redux'
import { Avatar, Button } from 'react-native-elements'
import HoleResult from '../components/HoleResult'
import { finishRound } from '../actions/newRoundActions';
import { StackActions, NavigationActions } from 'react-navigation'

class RoundFinishedView extends React.Component {
    static navigationOptions = {
        title: "ROUND FINISHED",
      }

    finishRound = () => {
        this.props.finishRound()
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'MainMenu' })],
          });
        this.props.navigation.dispatch(resetAction);

    }
    
    render() {

        return (    
            <View style={styles.container}>
                <View style={styles.playersContainer}>
                    <View style={styles.whitespace}/>
                    <View style={styles.players}>
                        {this.props.standings.map((item, index) => {
                            return (
                                <View key={index} style={styles.player}>
                                    <Text style={styles.text}>{index + 1}.</Text>
                                    <Avatar
                                        medium
                                        rounded
                                        source={item.player.profilepic}
                                    />
                                    <Text style={styles.text}>{item.player.playerName}</Text>
                                    <Text style={styles.text}>Total: {item.scoreArray.reduce((a,b) => a+b)}</Text>    
                                </View>
                            )
                        })
                        }
                    </View>
                </View>
                    <FlatList
                        data={this.props.chosenCourse.parArray}
                        renderItem={({ item, index }) =>
                            <HoleResult par={item} index={index}/>
                        }
                        keyExtractor={(number, index) => String(index)}
                    />
                    <Button
                        buttonStyle={styles.button} 
                        title="Back to main menu"
                        onPress={this.finishRound}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    playersContainer:{
        flex: 0,
        minHeight: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        marginTop:2,

    },
    whitespace: {
        flex:0,
        width:70,
    },
    players: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    player:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    button:{
        marginTop:5,
        marginBottom:5,
        backgroundColor:'#5998ff',
    },
    text:{
      fontSize:16,
      color: 'black'  
    },

});

const mapStateToProps = (state) => {
    return ({
        chosenCourse: state.newRound.chosenCourse,
        standings: state.newRound.standings,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        finishRound: () => dispatch(finishRound())
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(RoundFinishedView);
