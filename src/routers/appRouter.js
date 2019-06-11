import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage' 
import AddExpenssPage from '../components/AddExpenssPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/notFoundPage'
import Header from '../components/Header';
import EditExpensPage from '../components/EditeExpensPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpenssPage} />
                <Route path="/edit/:id" component={EditExpensPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch> 
        </div>       
    </BrowserRouter>
)

export default AppRouter;