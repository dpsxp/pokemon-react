import React from 'react';

const Accordion = React.createClass({
  getInitialState() {
    return {
      visible: false
    };
  },

  toggle(evt) {
    this.setState({
      visible: !this.state.visible
    });

    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  },

  isHidden() {
    return this.state.visible === false;
  },

  render() {
    /* jshint ignore: start */
    var message = '', className = '';

    if (this.isHidden()) {
      message = 'Read more';
      className = 'is-hidden';
    } else {
      className = 'is-visible';
      message = 'Hide';
    }

    return(
      <div className={`${className}`}>
        <div hidden={ this.isHidden() ? "hidden" : "" }>
          { this.props.children }
        </div>

        <button className="mdl-button mdl-button--primary mdl-js-button" onClick={this.toggle}>
          { message }
        </button>
      </div>
    );
    /* jshint ignore: end */
  }
});

export default Accordion;
