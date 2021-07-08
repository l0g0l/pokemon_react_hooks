import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../Components/Layout/Layout';
import Home from '../Pages/Home/Home';
import Form from '../Components/Form/Form';
import Details from '../Components/Details/Details';


const Routes = () => {
    return (
        <Router>

            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/new" component={Form}></Route>
                    <Route path="/pokemon/:id" component={Details}></Route>
                </Switch>
            </Layout>
        </Router>

    );
}
export default Routes
