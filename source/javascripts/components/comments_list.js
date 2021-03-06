import React from 'react';
import Comment from './comment';

const CommentsList = React.createClass({
  render() {
    /* jshint ignore: start */
    var comments = this.props.comments;

    return(
      <div className="comments-box-js">
        <h3>
          <span className="mdl-badge" data-badge={ comments.length }>Comments</span>
        </h3>
         { comments.map((comment) => <Comment key={ comment.id } comment={comment} /> ) }
      </div>
    );
    /* jshint ignore: end */
  }
});

export default CommentsList;
