import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';
import ToggleList from './components/ToggleList';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('Has one <ToggleList />', () => {
  //   const wrapper = shallow(<ToggleList />)
  //   expect(wrapper.find(ToggleList).exists()).toBe(true)
  // })
  //
  // it('should render lists', () => {
  //   const component = shallow(<ToggleList />)
  //   expect(component.find(UserList).length).toBe(3);
  // })
}
