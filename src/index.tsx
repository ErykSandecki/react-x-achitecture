import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// components
import App from './components/App/App';

// core
import { ContextProvider } from 'core';

// store
import { store } from 'store/store';

// styles
import './index.scss';

// utils
import { appendOverlayContainers } from 'config';
import { noop } from 'lodash';
// import { setTheme } from 'store/appInitializer/actions';

appendOverlayContainers();

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* @ts-ignore */}
    <ContextProvider actionOnChangeTheme={noop}>
      <App />
    </ContextProvider>
  </Provider>,
);

window.store = store;
