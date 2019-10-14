import React from 'react';
import PropTypes from 'prop-types';
import { CRYPTO_COMPARE_URL } from '../constants';
import './CoinCard.css';

const CoinCard = (props) => (
  <div className="coin-card card">
    <img src={`${CRYPTO_COMPARE_URL}${props.coin.ImageUrl}`} className="card-img-top" alt={props.coin.CoinName}/>
    <div className="card-body">
      <h2 className="card-title">{props.coin.CoinName}</h2>
      <p>Bitcoin is a decentralized digital currency that enables instant payments to anyone, anywhere in the world. 
        Bitcoin uses peer-to-peer technology to operate with no central authority: transaction management and money issuance are carried out collectively by the network.
        The original Bitcoin software by Satoshi Nakamoto was released under the MIT license. Most client software, derived or "from scratch", also use open source licensing.
      </p>
      <span className="card-text">{props.coin.SortOrder} $</span>
      {props.add ? <button type="button" className="btn btn-primary pull-right add" onClick={props.onClick}>Add to cart</button> : 
                   <button type="button" className="btn btn-primary pull-right del" onClick={props.onClick}>Delete</button>}
    </div>
  </div>
);
CoinCard.propTypes = PropTypes.object.isRequired;

export default CoinCard;