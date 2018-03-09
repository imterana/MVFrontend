import React, { Component } from 'react';
import './App.css';

import {
  Search,
  Container,
  Sidebar,
  Menu,
  Icon
} from 'semantic-ui-react'

import TaskList from './TaskList'
import AddEventOverlay from './AddEventOverlay'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false,
      AddEventDisplay: ""
    };
  }

  toggleVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });
  toggleAddEvent = () => this.setState({
    AddEventDisplay: this.state.AddEventDisplay === "block" ? "none" : "block"
  });

  render() {
    return (
      <div id="wrapper">
          <Sidebar as={Menu} visible={this.state.sidebarVisible} vertical>
            <Menu.Item name='item1'>
              Item 1
            </Menu.Item>
            <Menu.Item name='item2'>
              Item 2
            </Menu.Item>
            <Menu.Item name='item3'>
              Item 3
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Container style={{ marginTop: '1em' }}>
              <div className="top-bar">
                <Icon className="left-float" name='content' onClick={this.toggleVisibility} />
                <Search
                  className="search-with-buttons"
                  size="mini"
                  input={{ fluid: true }}
                />
                <Icon name='plus' className="right-float" onClick={this.toggleAddEvent}/>
              </div>
              <div className="main-list">
                <TaskList />
              </div>
            </Container>
          </Sidebar.Pusher>
          <AddEventOverlay
            display={this.state.AddEventDisplay}
            toggleAddEvent={this.toggleAddEvent} />
      </div>
    );
  }
}

export default App;
