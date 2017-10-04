import {Dimensions} from 'react-native'
const window = Dimensions.get('window')

export const Button = [
    {
        backgroundColor : 'red',
        height : 40,
        width : 40
    },
    {
        backgroundColor : 'red',
        height : 40,
        width : 40
    },
    {
        backgroundColor : 'green',
        height : 40,
        width : 40,
        width : window.width * 0.5,
        alignSelf : 'center',
        marginTop : 20,
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center'
    },
    {
        backgroundColor : 'skyblue',
        height : 40,
        width : 40,
        width : window.width * 0.9,
        alignSelf : 'center',
        marginTop : 50,
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center'
    }
]


export const TextInputBox = [
    {
        width : window.width * 0.9,
        backgroundColor : 'white',
        alignSelf : 'center',
        borderRadius : 6,
        paddingVertical : 15,
        paddingHorizontal : 5,
        marginTop : 10
    },
    {
        width : window.width * 0.9,
        backgroundColor : 'white',
        alignSelf : 'center',
        borderRadius : 6,
        paddingVertical : 15,
        paddingHorizontal : 5,

    },
    {
        width : window.width * 0.6,
        backgroundColor : 'white',
        alignSelf : 'center',
        borderRadius : 6,
        paddingVertical : 8,
        paddingHorizontal : 5,
        marginTop : 15        
    },
    {
        width : window.width * 0.9,
        backgroundColor : 'white',
        alignSelf : 'center',
        borderRadius : 6,
        paddingVertical : 15,
        paddingHorizontal : 5,
        marginTop : 30        
    }
]


export const Metrics = {
    FULL_HEIGHT : window.height,
    FULL_WIDTH : window.width
}

export const Colors = {
    FADED_TEXT : 'rgba(1,1,1,0.2)'
}

export default {Button};