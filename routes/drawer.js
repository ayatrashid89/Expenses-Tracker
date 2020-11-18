import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Home from './homeStack';
import About from './about';
import Scanner from './scanBarcode'


const Drawer = createDrawerNavigator({
    Home: {
        screen : Home,
    },
    
    Scanner: {
        screen : Scanner,
        navigationOptions :{
            title: 'Scan my item'
        },
    },
    About: {
        screen : About,
    },
    
    
})

export default createAppContainer(Drawer);