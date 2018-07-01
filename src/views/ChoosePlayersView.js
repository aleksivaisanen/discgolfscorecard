import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux'
import ChoosePlayerItem from '../components/ChoosePlayerItem';

class ChoosePlayersView extends React.Component {

    static navigationOptions = {
        title: "CHOOSE PLAYERS",
    }


    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.players}
                    renderItem={({ item, index }) =>
                        <ChoosePlayerItem
                            player={item}
                        />
                    }
                    keyExtractor={(number, index) => String(index)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },


});

const mapStateToProps = (state) => {
    return ({
        players: state.init.players
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({

    })

}
export default connect(mapStateToProps, mapDispatchToProps)(ChoosePlayersView);