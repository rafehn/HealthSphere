import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import DietPlanScreen from '../screens/DietPlanScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    DietPlan: DietPlanScreen,
    Exercise: ExerciseScreen,
    UserProfile: UserProfileScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2A2A2A',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);
