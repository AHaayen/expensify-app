import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from './../components/Header.js';
import NotFoundPage from './../components/NotFoundPage.js';
import HelpPage from './../components/HelpPage.js';
import EditExpensePage from './../components/EditExpensePage.js';
import AddExpenseDashBoardPage from './../components/AddExpenseDashBoardPage.js';
import ExpenseDashBoardPage from './../components/ExpenseDashBoardPage.js';



const AppRouter = () => (
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

export default AppRouter;
