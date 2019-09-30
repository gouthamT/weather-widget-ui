import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const mockGeolocation = {
  getCurrentPosition: jest.fn((fun) => fun({ coords: { latitude: 'test', longitude: 'test' } }))
};

global.navigator.geolocation = mockGeolocation;

Enzyme.configure({ adapter: new Adapter() });