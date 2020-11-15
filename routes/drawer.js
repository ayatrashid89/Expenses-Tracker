import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from './homeStack';
import About from './about';
import Scanner from './scanBarcode'


const Drawer = createDrawerNavigator({
    Home: {
        screen : Home,
    },
    About: {
        screen : About,
    },
    Scanner: {
        screen : Scanner,
        navigationOptions :{
            title: 'Scan my item'
        }
    },
    
    
})

export default createAppContainer(Drawer);