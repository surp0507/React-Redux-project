
import Users from './Component/Users';
import Todo from './Component/Todo';
import Posts from './Component/Posts';
import Comments from './Component/Comments';
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'


   class App extends React.Component{
    render() {
      return (
        <Provider store={store}>
          <div className="App">
            <BrowserRouter>
              <Route exact path="/" component={Users}/>
              <Route path="/todo/:user_id" component={Todo}/>
              <Route path="/post/:post_id" component={Posts}/>
              <Route path="/comment/:com_id"component={Comments}/>
              </BrowserRouter>
            </div>
         </Provider>
      );
    }
 }
 export default App;