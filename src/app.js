import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const ExpenseDashBoardPage = () => (
    <div>
        This is from my Dashboard Component
    </div>
);

const AddExpenseDashBoardPage = () => (
    <div>
        This is from my add expense Component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my Edit expense Component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my Help Component

    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home Page </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create </NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
);


const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoardPage} exact={true} />
                <Route path="/create" component={AddExpenseDashBoardPage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
                
            </Switch>
        </div>


    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
