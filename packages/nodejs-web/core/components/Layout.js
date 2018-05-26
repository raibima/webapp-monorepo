import React, { Component } from 'react';

import Link from 'next/link';

class Layout extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/flight/search">
              <a>Flight search</a>
            </Link>
          </li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
