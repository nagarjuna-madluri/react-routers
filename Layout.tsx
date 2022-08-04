import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './style.css';

export default function Layout() {
  return (
    <div>
      <a>
        <Link to="/">App</Link>
      </a>{' '}
      &nbsp;
      <a>
        <Link to="/home">Home</Link>
      </a>{' '}
      &nbsp;
      <a>
        <Link to="/about">About</Link>
      </a>{' '}
      &nbsp;
      <a>
        <Link to="/product/12/hello">Products</Link>
      </a>{' '}
      &nbsp;
      <Outlet />
    </div>
  );
}
