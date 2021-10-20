import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { Navigation } from "./navigation/route";
import { store } from "./store";

const queryClient = new QueryClient();

const App = () => (
  <HashRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Navigation />
        </div>
      </QueryClientProvider>
    </Provider>
  </HashRouter>
);

export default App;
