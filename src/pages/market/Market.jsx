import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoinCard from '../../components/CoinCard';
import './Market.css';
import Header from '../../components/Header';
//import { searchCoinsAction } from '../../actions/SearchActions';


class Market extends Component {
  static propTypes = {
    coinsList: PropTypes.array.isRequired,
    // search: PropTypes.string.isRequired,
    // searchCoinsAction: PropTypes.func.isRequired,
  };

  state = {
    count: 0,
    catrtCoinsList: [],
  } 

  handleAdd = () => {
    this.setState((state) => {
      return {count: state.count + 1}
    }); 
  } 

  handleDel = () => {
    this.setState((state) => {
      return {count: state.count - 1}
    });  
  }

  // handleSearchChange = (search) => {
  //   this.props.searchCoinsAction(search);
  // };

  // filterListBySearchTerm = (list, searchTerm) => (
  //   list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
  // );

  render() {
    
    const { coinsList } = this.props;
    const { count } = this.state;
    // const { coinsList, search } = this.props;


    return (
      // <Input value={search} onChange={this.handleSearchChange} />
      <div>
        <Header title="Market page" count={count}></Header>
        <div>
          {count > 0 && <Link to="/cart"><button type="button" className="btn btn-primary pull-right to-cart"> Go to cart</button></Link>}
        </div>
        <div className="coin-list"> 
        {/* {this.filterListBySearchTerm(coinsList, search).map(coin => (
            <CoinCard coin={coin} key={coin.Id} />
          ))} */}
          {coinsList.map(coin => (<CoinCard coin={coin} key={coin.Id} add={true} onClick={this.handleAdd}/>))}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   search: state.searchReducer.search,
// });

// const mapDispatchToProps = {
//   searchCoinsAction,
// };

// const Coins = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(CoinsComponent);

export default Market;