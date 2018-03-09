import React, { Component } from 'react';
import './AddEventOverlay.css'
import {  } from 'semantic-ui-react'

class AddEventOverlay extends Component {
  render() {
    return (
      <div className="add-event-overlay" style={{ display: this.props.display }}>
        <div class="ui container" style={{ margin: "1em" }}>
        <div className="someDiv">
          <div className="cancel-btn" onClick={this.props.toggleAddEvent}>
            <h3 style={{ color: "rgb(255,99,71)" }}>Cancel</h3>
          </div>
          <div className="done-btn">
            <h3 style={{ color: "rgb(100,100,100)" }}>Add</h3>
          </div>
        </div>

        <div class="ui relaxed divided list">

          <div class="item">
            <div class="ui transparent input">
              <input type="text" placeholder="Event name" />
            </div>
          </div>

          <div class="item">
            <div class="ui scrolling dropdown">
              <input type="hidden" name="gender" />
              <div class="default text">University</div>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item">Choice 1</div>
                <div class="item">Choice 2</div>
                <div class="item">Choice 3</div>
              </div>
            </div>
            <div class="ui scrolling dropdown" style={{ marginLeft: "2em" }}>
              <input type="hidden" name="gender" />
              <div class="default text">Course</div>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item">Choice 1</div>
                <div class="item">Choice 2</div>
                <div class="item">Choice 3</div>
              </div>
            </div>
            <div class="ui scrolling dropdown" style={{ marginLeft: "2em" }}>
              <input type="hidden" name="gender" />
              <div class="default text">Group</div>
              <i class="dropdown icon"></i>
              <div class="menu">
                <div class="item">Choice 1</div>
                <div class="item">Choice 2</div>
                <div class="item">Choice 3</div>
              </div>
            </div>
          </div>


          <div class="item">
            <div class="ui transparent input">
              <div class="default text" style={{ marginLeft: "1em" }}>Date</div>
              <input type="text" id="input-1" readonly />
            </div>
          </div>

          <div class="item">
            <div class="ui transparent input" style={{ marginLeft: "1em" }}>
              <div class="default text">Time</div>
              <input type="text" id="input-1" readonly />
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default AddEventOverlay;
