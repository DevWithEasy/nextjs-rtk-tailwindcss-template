import '../styles/globals.css';
import {Provider} from  'react-redux';
import  store,{persistor}  from '../store/store';
import {PersistGate} from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <PersistGate loading={nul} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
}
export default MyApp
