import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  TabViewAnimated,
  TabBar,
  SceneMap,
  TabView,
} from 'react-native-tab-view';
import Episodes from './Episodes';
import Trailers from './Trailers';

const FirstRoute = () => <Episodes />;

const SecondRoute = () => <Trailers />;

const initialLayout = {width: Dimensions.get('window').width};

const TabsEpisodes = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Episodios'},
    {key: '2', title: 'Trailer & More'},
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
  });

  return (
    <>
      <TabView
        style={{flex: 1, borderWidth: 2, borderTopColor: '#181818'}}
        renderTabBar={(props) => (
          <TabBar
            indicatorStyle={{
              backgroundColor: 'red',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
            }}
            {...props}
            style={{backgroundColor: 'transparent'}}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};

export default TabsEpisodes;
