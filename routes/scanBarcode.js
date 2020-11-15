import Scanner from '../screens/Scan barcode'
import { createStackNavigator } from 'react-navigation-stack';

const Barcode= {
   Scanner: {
        screen: Scanner,
        navigationOptions:{
            title:'',
            headerStyle: { backgroundColor: 'white', height: 20 },
        }
      }
    }

    const BarcodeStack= createStackNavigator(Barcode);
    
    export default BarcodeStack;