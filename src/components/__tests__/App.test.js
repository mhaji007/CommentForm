import React from 'react';
//import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

// function provided by jest. Runs before every test in this file.
beforeEach(() => {

     wrapped = shallow(<App/>);
});

it('shows a comment box', ()=>{


    expect(wrapped.find(CommentBox).length).toEqual(1);


    //const div = document.createElement('div');
    //ReactDOM.render(<App/>, div);
    //expect(div.innerHTML).toContain('Comment Box');
    //ReactDOM.unmountComponentAtNode(div);
});


it('shows a comment list', ()=>{


    expect(wrapped.find(CommentList).length).toEqual(1);


});


