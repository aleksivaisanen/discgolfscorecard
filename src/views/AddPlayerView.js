import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Button, Icon, FormLabel, FormInput, Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import { Header } from 'react-navigation';


export default class AddPlayerView extends React.Component {
    constructor() {
      super();
      this.state = {
        image: null,
      };
    }
    static navigationOptions = {
        title: "ADD PLAYER",
      }
    pickSingleImage(){
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true
      }).then(image => {
        console.log(image);
        this.setState({
          image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
          images: null
        });
      })
    }
    renderImage(image){
      return <Image style={{width: 300, height: 300, resizeMode: 'contain'}} source={image} />
    }  
      
    render() {
        return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.avatarContainer}>
            <Avatar
              xlarge
              rounded
              source={this.state.image != null ? this.state.image : null }
              icon = {{name : 'plus', type : 'entypo'}}
              onPress={() => this.pickSingleImage()}
              activeOpacity={0.7}
            />
            </View>
            <View style={styles.addPlayerForm}>
            
            <FormLabel>Name</FormLabel>
            <FormInput/>
            
            <FormLabel>Nickname</FormLabel>
            <FormInput/>
            <Button 
                title="ADD PLAYER"
                buttonStyle={styles.menuButton}
                iconRight={{name:"user-plus", type:"feather"}}/>
            </View>
        </View>
        );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addPlayerForm:{
    flex:6,
    justifyContent: "flex-end",
  },
  avatarContainer:{
    marginTop: Header.HEIGHT,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuButton : {
    marginVertical : 10,
    backgroundColor:"#5998ff"
  }
});
