import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultScreen: ResultsShowScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'FoodApp'
    }
  }
);

export default createAppContainer(navigator);