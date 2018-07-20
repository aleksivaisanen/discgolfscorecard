import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

class HoleResult extends Component {

    resultColor = (score) => {
        if(score > this.props.par){
            return [styles.resultItem, styles.bogey]
        } else if (score < this.props.par) {
            return [styles.resultItem, styles.birdie]
        } else if(score === this.props.par){
            return [styles.resultItem, styles.par]
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={[styles.text, {color:'black'}]}>Hole {this.props.index + 1}{"\n"}Par {this.props.par}</Text>
                </View>
                <View style={styles.onlyScores}>
                    {this.props.standings.map((item, i) => {
                        return (
                            <View key={i} style={this.resultColor(item.scoreArray[this.props.index])}>
                                <Text style={styles.text}>{item.scoreArray[this.props.index]}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop:2,
    },

    info: {
        flex:0,
        width:70,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    onlyScores: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color:'#fff'
    },
    resultItem:{
        borderRadius:25,
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
    },
    par:{
    
        backgroundColor: '#5998ff',
    },
    bogey: {
        backgroundColor: 'red'
    },
    birdie: {
        backgroundColor:'green'
    }

});
const mapStateToProps = (state) => {
    return ({
        standings: state.newRound.standings,
        chosenCourse: state.newRound.chosenCourse
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(HoleResult);