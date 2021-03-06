import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CoinCard from '../../components/CoinCard';
import './Cart.css';
import Header from '../../components/Header';

class Cart extends Component {
  static propTypes = {
    coinsList: PropTypes.array.isRequired,
    //search: PropTypes.array.isRequired,
  };

  state = {
    count: 3,
    search: this.props.coinsList.slice(0, 3),
  } 

  handleDel = () => {
    this.setState((state) => {
      return {count: state.count - 1}
    });  
    this.setState((state) => {
      state.search.pop();
      return {search: state.search}
    });
  }

  render() {
    
    const { count, search } = this.state;

    return (
      <div>
        <div>
          <Header title="Cart page" count={count}></Header>
          {count < 1 && <div>Nothing added to cart. Add some from <Link to='/market'>market</Link></div>}
        </div>  
        { count > 0 && <div className="coin-list"> 
        {search.map(coin => (<CoinCard coin={coin} key={coin.Id} onClick={this.handleDel}/>))}</div> }        
      </div>
    );
  }
}

export default Cart;
