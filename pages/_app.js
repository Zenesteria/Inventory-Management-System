import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import store from '../redux/store';
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    
  
}

export default MyApp
