import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import MapContainer from '../client/containers/MapContainer';


configure({ adapter: new Adapter() });