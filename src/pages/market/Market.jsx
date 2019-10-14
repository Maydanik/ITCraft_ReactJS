import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinCard from '../../components/CoinCard';
import './Market.css';
import Header from '../../components/Header';
import { searchCoinsAction } from '../../actions/SearchActions';


class MarketComponent extends Component {
  static propTypes = {
    coinsList: PropTypes.array.isRequired,
    search: PropTypes.array.isRequired,
    searchCoinsAction: PropTypes.func.isRequired,
  };

  state = {
    count: 0,
    coinsList: this.props.coinsList,
    search: this.props.search,
  }

  handleAdd = (search) => {
    
    this.setState((state) => {
      return {count: state.count + 1}
    }); 
    
    this.props.searchCoinsAction(search);
  } 

  render() {
    
    const { count, coinsList } = this.state;

    return (
      <div>
        <Header title="Market page" count={count}></Header>
        <div>
          {count > 0 && <Link to="/cart"><button type="button" className="btn btn-primary pull-right to-cart"> Go to cart</button></Link>}
        </div>
        <div className="coin-list"> 
          {coinsList.map(coin => (<CoinCard coin={coin} key={coin.Id} add={true} onClick={this.handleAdd}/>))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.searchReducer.search,
});

const mapDispatchToProps = {
  searchCoinsAction,
};

const Market = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarketComponent);

export default Market;