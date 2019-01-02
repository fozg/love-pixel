import React, { Component } from 'react';

import Layda, {LinkToSidebar} from 'react-layda';
import Home from './laydas/Home';

import initialSetup from './initialSetup';

import './App.css';

class App extends Component {
  componentDidMount () {
    initialSetup();
  }

  render() {
    return (
      <Layda
        basename="/"
        header={{
          headerLeft: <strong style={{padding: '5px 10px'}}>
          <img src="/heartpixel2.png" width="40" />
          Pixel Lover</strong>
        }}
        boards={
          [
            {
              path: "/new",
              // exact: true,
              title: "Create new",
              component: () => <Home />,
              sidebar: {
                component: ({todoId}) => (
                  <div>
                    <div>Side bar Testing. <br/> Task id: {todoId} </div>
                  </div>
                ),
                sidebarParam: 'todoId',
              },

            },
            {
              path: "/mypixels",
              // exact: true,
              title: "My Pixels",
              component: () => <Home />,
              sidebar: {
                component: ({todoId}) => (
                  <div>
                    <div>Side bar Testing. <br/> Task id: {todoId} </div>
                  </div>
                ),
                sidebarParam: 'todoId',
              },
            },
          ]
        }
      />      
    );
  }
}

export default App;
