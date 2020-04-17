import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component {
    state = {comment:''};

    // Component just got rendered
    componentDidMount(){

        this.shouldNavigateAway();
    }
    // Component just got updated
    componentDidUpdate(){
        this.shouldNavigateAway();
    }

    shouldNavigateAway(){
        if(!this.props.auth) {
            console.log('I need to leave!')
        }
    }



    handleChange = (event) => {
        this.setState({comment:event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Call an action creator
        // And save the comment

        this.props.saveComment(this.state.comment);


        this.setState({comment:''});
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>
                    Add a comment
                </h4>
                <textarea onChange={this.handleChange} value={this.state.comment} name="" id="" cols="30" rows="10"/>
                <div>
                    <button>
                        Submit Comment
                    </button>
                </div>
            </form>
            <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth}
}

export default connect(mapStateToProps,actions) (CommentBox);