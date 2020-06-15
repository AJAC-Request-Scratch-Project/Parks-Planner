import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import Park from '../client/components/Park';


configure({ adapter: new Adapter() });