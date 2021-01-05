import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Museum from './Museum';
import About from './About';
import AddItem from './AddItem';
import SingleItemPage from './SingleItemPage';
import EditItem from './EditItem';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Museum} />
            <Route exact path='/about' component={About} />
            <Route exact path='/addItem' component={AddItem} />
            <Route exact path="/items/:itemId" component={SingleItemPage} />
            <Route exact path="/items/edit/:itemId" component={EditItem} />
        </Switch>
    </main>
)

export default Main