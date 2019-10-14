import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => (
 <header className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">{props.title}</span>
    <span className="pull-right">
    <Link to='/cart'>
    <button type="button" className="btn btn-primary pull-right">Cart</button>
    <label className="badge pull-right">{props.count}</label>
    </Link>
    </span>
 </header>
  );
  
  Header.propTypes = PropTypes.object.isRequired;
  
  export default Header;

  