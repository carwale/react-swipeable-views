// @flow

const enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18');
const chai = require('chai');

require('./dom')();
require('./consoleError')();
chai.use(require('chai-shallow-deep-equal'));

enzyme.configure({ adapter: new Adapter() });
