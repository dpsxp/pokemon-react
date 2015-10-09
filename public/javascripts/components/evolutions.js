import React from 'react';
import ListItem from './list_item';
import Accordion from './accordion';

const Evolutions = React.createClass({
  render() {
    /* jshint ignore: start */
    var evolutions = this.props.evolutions;

    if (evolutions.length == 0) {
      return(<div></div>);
    }

    var createItem = function(evo) {
      return(
        <div className="mdl-cell mdl-cell--4-col">
          <ListItem pokemon={ evo } />
        </div>
      );
    }

    return(
      <div>
        <h3>Evolutions</h3>
        <Accordion>
          <div className="mdl-grid">
            { evolutions.map(createItem) }
          </div>
        </Accordion>
      </div>
    );
    /* jshint ignore: end */
  }

});

export default Evolutions;
