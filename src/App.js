import React, { Component } from 'react';

import Layda, {LinkToSidebar} from 'react-layda';
import Home from './laydas/Home';

import initialSetup from './initialSetup';

import './App.css';
import Logo from './heartpixel2.png'

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
          <img src={Logo} width="40" />
          Pixel Lover</strong>
        }}
        boards={
          [
            {
              path: "/new",
              // exact: true,
              title: "Create new",
              component: (props) => <Home {...props}/>,
              sidebar: {
                component: ({todoId}) => (
                  <div>
                    <div>Side bar Testing. <br/> Task id: {todoId} </div>
                  </div>
                ),
                sidebarParam: 'todoId',
                width: 400,
                style: {backgroundColor: '#212424', borderLeft: '1px solid #4d4f4f'}
              },

            },
            {
              path: "/mypixels",
              // exact: true,
              title: "My Pixels",
              component: (props) => <Home {...props}/>,
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
              path: "/explore",
              // exact: true,
              title: "Explore",
              component: () => <h5 style={{margin: 10, color: '#fff'}}>Comming Soon</h5>,
            },
          ]
        }
      />      
    );
  }
}

export default App;
