import React                             from 'react'
import ReactDOM                          from 'react-dom/client'
import App                               from '@/App'
import { DevSupport }                    from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import '@/index.css';
import { configureStore }                from "@reduxjs/toolkit";
import { api }                           from "@/state/api";
import { setupListeners }                from "@reduxjs/toolkit/query";
import { Provider }                      from "react-redux";

export const store = configureStore( {
  reducer: { [api.reducerPath]: api.reducer },
  middleware: (getDefault) => getDefault().concat( api.middleware ),
} );

setupListeners(store.dispatch);

ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
  <React.StrictMode>
    <DevSupport ComponentPreviews={ ComponentPreviews }
                useInitialHook={ useInitial }
    >
      <Provider store={store}>
        <App/>
      </Provider>
    </DevSupport>
  </React.StrictMode>,
)
