import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title:'',
            headerStyle: { backgroundColor: 'white', height: 20 },
        }
      },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{
        title: 'Previous Expenses',
        }
    },
  
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'green', height: 60 }
    }
});

export default HomeStack;
