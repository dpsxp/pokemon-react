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
      return <ListItem pokemon={ evo } />
    }

    return(
      <div>
        <h3>Evolutions</h3>
        <Accordion>
          { evolutions.map(createItem) }
        </Accordion>
      </div>
    );
    /* jshint ignore: end */
  }

});

export default Evolutions;
