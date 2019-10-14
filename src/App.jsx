import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './pages/login/Login';
import Market from './pages/market/Market';
import Cart from './pages/cart/Cart';
import ForOFor from './pages/404';
import { getCoinsList } from './actions/CoinsActions';
import './App.css';

class AppComponent extends Component {
  static propTypes = {
    coinsList: PropTypes.array,
    getCoinsList: PropTypes.func,
  };

  // filterListById = (list, id) => (
  //   list.find(coin => coin.Id === id)
  // );

  componentDidMount() {
    this.props.getCoinsList();
  }

  render() {
    const { coinsList } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/market" component={ props => <Market {...props} coinsList={coinsList} />} />
            <Route path="/cart" component={props => <Cart {...props} coinsList={coinsList} />} />
            <Route component={ForOFor} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  coinsList: state.coinsReducer.coinsList,
});

const mapDispatchToProps = {
  getCoinsList,
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);

export default App;
