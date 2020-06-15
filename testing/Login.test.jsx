import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import Login from '../client/components/Login';


configure({ adapter: new Adapter() });