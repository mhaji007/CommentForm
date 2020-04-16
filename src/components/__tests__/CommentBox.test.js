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

    // make sure the component has received 
    // the correct value prop
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');


});

it('when from is submitted, text area gets emptied', () => {
    wrapped.find('textarea').simulate('change', {
        target: {value:'new comment'}
    });

    wrapped.update();

    wrapped.find('form').simulate('submit');

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
})

afterEach(()=> {
    wrapped.unmount();
});