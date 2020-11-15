import About from '../screens/about'
import { createStackNavigator } from 'react-navigation-stack';

const AboutScreen = {
    About: {
        screen: About,
        navigationOptions:{
            title:'',
            headerStyle: { backgroundColor: 'white', height: 20 },
        }
      }
    }

    const AboutStack = createStackNavigator(AboutScreen);
    
    export default AboutStack;