import React, { Component } from 'react';
import {View,Text} from 'react-native'
import PixelCal from './utils/scale'
import {
    Button,
    TextInputBox,
    Metrics,
    Colors} from './styles'

class App extends Component {
    
    constructor(){
        super();
        this.state = {
            styleRatio : ''
        }
    }


    componentDidMount(){
        let styleRatio = PixelCal()
        console.log(styleRatio)
        this.setState({
            styleRatio
        })
    }


    render() {
        return (
            <View style={{
                flex : 1,
                paddingTop : 50,
                backgroundColor : this.state.styleRatio.styleIndex === 2 ? 'rgba(1,1,1,0.1)' :  'rgba(1,1,1,0.2)',
                margin : this.state.styleRatio.styleIndex === 2 ?  30 : null,
                borderRadius : this.state.styleRatio.styleIndex === 2 ? 6 : 0
            }}>
                <View style={TextInputBox[this.state.styleRatio.styleIndex]}>
                    <Text style={{
                        color : Colors.FADED_TEXT
                    }}>
                        username
                    </Text>
                </View>


                <View style={TextInputBox[this.state.styleRatio.styleIndex]}>
                    <Text style={{
                        color : Colors.FADED_TEXT
                    }}>
                        password
                    </Text>
                </View>


                <View style={Button[this.state.styleRatio.styleIndex]}>
                    <Text>My APP</Text>
                </View>
            </View>
        );
    }
}

export default App;