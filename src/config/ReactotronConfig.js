import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.0.107' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect({ host: '192.168.0.107', port: 9090 });

  tron.clear();

  console.tron = tron;
}
