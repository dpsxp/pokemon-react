import React from 'react';
import Comment from './comment';

const CommentsList = React.createClass({
  render() {
    /* jshint ignore: start */
    var comments = this.props.comments;

    return(
      <div>
        <h3>Comments</h3>
         { comments.map((comment) => <Comment comment={comment} /> ) }
      </div>
    );
    /* jshint ignore: end */
  }
});

export default CommentsList;
