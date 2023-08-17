import { Route, Switch } from "react-router-dom";
import Layout from "./layout/layout";
import { route } from "./routes/route";

const App = () => {
  return (
    <Layout>
      <Switch>
        {route.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          );
        })}
      </Switch>
    </Layout>
  );
};

export default App;