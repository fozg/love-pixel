import React, { Component } from 'react';
import Layda, {LinkToSidebar} from 'react-layda';
import {Redirect} from 'react-router-dom'

import Home from './laydas/Home';
import MyPixels from './laydas/MyPixels';
import NewPixelSidebar from './components/NewPixelSidebar';

import initialSetup from './initialSetup';

import './App.css';
import Logo from './newHeart.png';
import Github from './github.png';

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
          Pixel Lover</strong>,
          headerRight: <a href="https://github.com/fozg/love-pixel" target="_blank" className="Header__githubLink">
            <img src={Github} height="16" />            
          </a>
        }}
        styleHeader={{
          backgroundColor: '#212424',
          borderBottom: '1px solid #383838',
          color: '#fff'
        }}
        styleNavigation={{
          backgroundColor: '#212424',
          borderRight: '1px solid #383838'
        }}
        boards={
          [
            {
              path: "/",
              exact: true,
              title: "My Pixel",
              component: (props) => <MyPixels {...props} />,
              sidebar: {component: (_ => false),},
            },
            {
              path: "/new",
              // exact: true,
              title: "Create new",
              component: (props) => <Home {...props}/>,
              sidebar: {
                component: ({pixelId}) => (
                  <div>
                    <NewPixelSidebar pixelId={pixelId} />
                  </div>
                ),
                sidebarParam: 'pixelId',
                width: 320,
                style: {backgroundColor: '#212424', borderLeft: '1px solid #4d4f4f', padding: 10}
              },

            },
            // {
            //   path: "/mypixels",
            //   // exact: true,
            //   title: "My Pixels",
            //   component: (props) => <MyPixels {...props} />,
            //   sidebar: {
            //     component: ({todoId}) => (
            //       <div>
            //         <div>Side bar Testing. <br/> Task id: {todoId} </div>
            //       </div>
            //     ),
            //     sidebarParam: 'todoId',
            //   },
            // },
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
