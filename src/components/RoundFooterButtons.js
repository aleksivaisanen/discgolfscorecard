import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class RoundFooterButtons extends React.Component {

    render() {
        return (

            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,

        backgroundColor: '#5998ff',
    }
});

const mapStateToProps = (state) => {
    return ({

    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
    })

}
export default connect(mapStateToProps, mapDispatchToProps)(RoundFooterButtons);