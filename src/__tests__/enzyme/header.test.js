import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

import { Header } from '../components/header.Header.js';

describe('<Header/>', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1')).toEqualBe('Lost Pet Finder 9000');
        expect(wrapper.find('img')).toBeTruthy();
        // expect(wrapper.find('.content').text()).toBe(mockPost.content);
        // expect(wrapper.find('p').text()).toBe(mockPost.content);
    });

    // test('snapshot', () => {
    //     const component = renderer.create(<Content post={mockPost} />);
    //     const tree = component.toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
});


// https://livebook.manning.com/book/react-in-action/chapter-9/110

