import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import Frutas from './pages/Frutas';
import Detalhes from './pages/Detalhes';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Frutas,
      Detalhes,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#8a05be',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
