import React, { Component } from 'react';
import Layda from 'react-layda';

import Home from './laydas/Home';
import MyPixels from './laydas/MyPixels';
import Exprole from './laydas/Exprole';
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
      <div>
        <div className="visible600">
          <Layda
            basename="/"
            header={{
              headerLeft: <div style={{padding: '5px 10px'}}>
              <img src={Logo} width="40" />
              Pixel Lover
              </div>,
              headerCenter: <i>This application is used to test ReactJS with few simple functions</i>,
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
                  // sidebar: {
                  //   component: ({pixelId}) => (
                  //     <div>
                  //       <NewPixelSidebar pixelId={pixelId} />
                  //     </div>
                  //   ),
                  //   sidebarParam: 'pixelId',
                  //   width: 320,
                  //   style: {backgroundColor: '#212424', borderLeft: '1px solid #4d4f4f', padding: 10}
                  // },

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
                  title: "Explore",
                  component: () => <Exprole />,
                },
              ]
            }
          />  
        </div>
        <div className="visibleUnder600">
          <h4 style={{padding: 10}}>This app does not support mobile</h4>
        </div>
      </div>
    );
  }
}

export default App;
