import React from 'react';
import CommentsList from './comments_list';

const Form = React.createClass({
  onSubmit(evt) {
    evt.preventDefault();
    var form = evt.target;

    var data =  {
      author: form.author.value,
      email: form.email.value,
      message: form.message.value
    };

    this.props.onSubmit(evt, data);
  },

  render() {
    /* jshint ignore: start */
    return(
      <div>
        <div>
          <h4>Leave a message</h4>
        </div>

        <form onSubmit={ this.onSubmit } action="#" className="mdl-cell mdl-cell-12-col">
          <div >
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" name="author"  />
              <label className="mdl-textfield__label" for="sample1">Nome...</label>
            </div>
          </div>
          <div >
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="email" name="email" />
              <label className="mdl-textfield__label" for="sample1">Email...</label>
            </div>
          </div>
          <div >
            <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" name="message" rows= "3" ></textarea>
              <label className="mdl-textfield__label" for="sample1">Comentário...</label>
            </div>
          </div>

          <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Send
          </button>
        </form>
      </div>
    );
    /* jshint ignore: end */
  }
});

export default Form;
