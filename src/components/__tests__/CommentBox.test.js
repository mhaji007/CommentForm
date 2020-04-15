import React from 'react';
import {mount} from 'enzyme'
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {

    wrapped = mount(<CommentBox/>);
});

it('has a text area and a button', () => {

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);



});

it('has a text area that users can type in', () => {
    // find textarea, simulate a change event
    // and provide a fake (mock) event object
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });

    // force component to update (because setState is async)
    wrapped.update();
});

afterEach(()=> {
    wrapped.unmount();
});