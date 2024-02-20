import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';
import './styles/global.scss';
import { appStore } from './AppStore';

function App() {
  return (
    <Provider store={appStore}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
