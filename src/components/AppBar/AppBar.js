import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './AppBar.css';

const AppBar = ({ className, children, ...rest }) => {
  const classes = classnames('AppBar appbar navbar navbar-inverse', className);

  return (
    <nav {...rest} className={classes}>
      <div className="container">
        {children}
      </div>
    </nav>
  );
};

AppBar.Header = ({ children }) =>
  <div className="navbar-header">
    {children}
  </div>;

AppBar.Brand = ({ target, children, className }) =>
  <Link className={classnames("navbar-brand", className)} to={target}>
    {children}
  </Link>;

export default AppBar;
