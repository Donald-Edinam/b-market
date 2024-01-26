import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const Home = () => <Text>Music</Text>;

const EatwellScreen = () => <Text>Albums</Text>;

const MyMessenger = () => <Text>Recents</Text>;

const CartScreen = () => <Text>Notifications</Text>;

const MyMartEnd = () => <Text>MartEnd</Text>

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'eatwell', title: 'Food', focusedIcon: 'food' },
    { key: 'message', title: 'Messenger', focusedIcon: 'phone' },
    { key: 'cart', title: 'Cart', focusedIcon: 'cart', unfocusedIcon: 'cart-outline' },
    { key: 'martend', title: 'My MartEnd', focusedIcon: 'user' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    eatwell: EatwellScreen,
    message: MyMessenger,
    cart: CartScreen,
    martend: MyMartEnd
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigation;