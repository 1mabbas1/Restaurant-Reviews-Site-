import { Route, Switch } from "react-router-dom";
import AllReviewsPage from "./pages/AllReviews";
import NewReviewPage from "./pages/NewReview";
import FavoritesPage from "./pages/Favorites";
import react from "react";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <react.Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllReviewsPage />
          </Route>

          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>

          <Route path="/new-review" exact>
            <NewReviewPage />
          </Route>
        </Switch>
      </Layout>
    </react.Fragment>
  );
}

export default App;
