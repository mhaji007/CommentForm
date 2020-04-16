import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(()=>{
    // intercept any axios issued by axios
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #1'}]
    });
});

afterEach(()=>{
    moxios.uninstall();
});

it('can fetch a list of comments and display them', () => {
    // Attempt to render the entire app
    const wrapped = mount (
        <Root>
            <App/>
        </Root>
    );
    // find the 'fetchComments' button and click it
        wrapped.find('.fetch-comments').simulate('click');

    // Expect to find a list of comments
    expect(wrapped.find('li').length).toEqual(2);
})