import React from 'react';

const Comment = React.createClass({
  render() {
    /* jshint ignore: start */
    var comment = this.props.comment;

    return(
      <div>
        <h5>{ comment.author } ({ comment.email })</h5>
        <div>
          { comment.message }
        </div>
      </div>
    );
    /* jshint ignore: end */
  }
});

export default Comment;
