import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBarScreen = () => {
  return (
      <Appbar.Header>
       <Appbar.Content title="Products" />
       <Appbar.Content title="Manufacturers" />
    </Appbar.Header>
  )
}

export default AppBarScreen
