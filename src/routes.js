import { StackNavigator } from 'react-navigation';

import Map from 'pages/map';

const Routes = StackNavigator({
  Map: { screen: Map },
}, {
  navigationOptions: {
    headerBackTitle: null,
  },
});


export default Routes;
