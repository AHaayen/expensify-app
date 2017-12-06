import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpenseDashBoardPage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>

    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
