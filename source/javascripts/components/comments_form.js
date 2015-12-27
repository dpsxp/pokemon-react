import React from 'react';
import CommentsList from './comments_list';

const CommentsForm = React.createClass({
  invalidFields(data) {
    return Object.keys(data).filter( (key) => data[key] === '' );
  },

  validFields(data) {
    return Object.keys(data).filter( (key) => data[key] !== '' );
  },

  validate(invalidFields, form) {
    invalidFields.forEach((field) => {
      form[field].parentNode.classList.add('is-invalid');
    });
  },

  clean(fields, form) {
    fields.forEach((field) => {
      form[field].parentNode.classList.remove('is-invalid');
    });
  },

  onSubmit(evt) {
    evt.preventDefault();
    var form = evt.target,
        data =  {
          author  : form.author.value.trim(),
          email   : form.email.value.trim(),
          message : form.message.value.trim()
        };

    var invalidFields = this.invalidFields(data),
        validFields   = this.validFields(data);

    if (invalidFields.length > 0) {
      this.validate(invalidFields, form);
    } else {
      this.clean(validFields, form);
      this.props.onSubmit(evt, data);
      form.reset();
    }
  },

  render() {
    /* jshint ignore: start */
    return(
      <div>
        <form onSubmit={ this.onSubmit } action="#" className="mdl-cell mdl-cell-12-col comments-form-js">
          <div>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="text" name="author" />
              <label className="mdl-textfield__label" htmlFor="author">Nome...</label>
            </div>
          </div>
          <div >
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input" type="email" name="email" />
              <label className="mdl-textfield__label" htmlFor="email">Email...</label>
            </div>
          </div>
          <div >
            <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" name="message" rows= "3" ></textarea>
              <label className="mdl-textfield__label" htmlFor="message">Comentário...</label>
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

export default CommentsForm;
