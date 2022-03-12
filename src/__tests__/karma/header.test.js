const React = require('react/addons');
const TestUtils = React.addons.TestUtils;
const expect = require('expect');
const header = require('../components/header.js');

describe('Header', () => {
  it('renders an image', () => {
    let header = TestUtils.returnIntoDocument(
      <Header />
    );

    let h1 = TestUtils.findRenderedDOMComponentWithTag(
      header, 'h1'
    );  

    expect(h1.getDOMNode().textContent).toEqual('Lost Pet Finder 9000');
  });
});

// https://www.toptal.com/react/how-react-components-make-ui-testing-easy

