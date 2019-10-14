import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedCoins } from './Market';
import coinsData from '../../data/coinsList.json';

const coinsList = Object.keys(coinsData.Data).slice(0, 15).map(key => coinsData.Data[key]);

test('Coins render correctly', () => {
  const component = shallow(<UnwrappedCoins coinsList={coinsList}/>);
  expect(component).toMatchSnapshot();
});


