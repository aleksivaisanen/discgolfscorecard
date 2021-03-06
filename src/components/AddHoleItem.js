import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { connect } from 'react-redux';
import { updateParForHole } from '../actions/initActions';

class AddHoleItem extends React.Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Hole {this.props.holeNumber}</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.text}>Par</Text>
                    <Text style={styles.text}> </Text>
                    <NumericInput
                        value={this.props.parArray[this.props.holeNumber - 1]}
                        onChange={
                            val => this.props.updatePar(this.props.holeNumber, val)
                        }
                        minValue={1}
                        maxValue={10}
                        editable={false}
                        textColor={'#fff'}
                        containerStyle={styles.numericInput}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 50,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5998ff',
        margin: 10,
        padding: 10
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    numericInput: {
        height: 34,
        marginLeft: 10
    }
});

const mapStateToProps = (state) => {
    return ({
        parArray: state.init.parArray
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        updatePar: (holeNo, par) => dispatch(updateParForHole(holeNo, par)),
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(AddHoleItem);