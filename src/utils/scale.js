// Returns the device pixel density. Some examples:
// PixelRatio.get() === 1
// mdpi Android devices (160 dpi)
// PixelRatio.get() === 1.5
// hdpi Android devices (240 dpi)
// PixelRatio.get() === 2
// iPhone 4, 4S
// iPhone 5, 5c, 5s
// iPhone 6
// xhdpi Android devices (320 dpi)
// PixelRatio.get() === 3
// iPhone 6 plus
// xxhdpi Android devices (480 dpi)
// PixelRatio.get() === 3.5
// Nexus 6
import {PixelRatio} from 'react-native'

const getPixelRatio = () => {
    let pr = PixelRatio.get()
    switch(pr){
        case 1:
        return {
            device : 'mdpi',
            styleIndex : 0,
            pr
        }
        break;

        case 1.5 :
        return {
            device : 'hdpi',
            styleIndex : 1,
            pr
        }
        break;

        case 2:
        return {
            device : 'iphone456',
            styleIndex : 2,
            pr
        }
        break;

        case 3:
        return {
            device : 'iphone6p',
            styleIndex : 3,
            pr
        }
        break;

        case 3.5:
        return {
            device : 'nexus6',
            styleIndex : 4,
            pr
        }
        break;

    }
    //console.log(pr)
}

export default getPixelRatio