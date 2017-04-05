import React, { Component } from 'react';

class Page1 extends Component {
  render() {
    return (
        <div>
            <p>This is Page 1</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page1;