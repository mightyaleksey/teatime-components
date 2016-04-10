import { Component } from 'react';
import reactOutsideEvent from 'react-outside-event';

import Button from './button.jsx';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
  }

  onClick(event) {
    this.setState({isOpened: true});
  }

  onOutsideEvent(event) {
    this.setState({isOpened: false});
  }

  render() {
    const { styles = {}, ...o } = this.props;
    const { isOpened } = this.state;

    return (
      <div className={ styles.container }>
        <Button onClick={ e => this.onClick(e) } styles={ styles }>test</Button>
        <div className={ isOpened ? styles.shown : styles.hidden }>popup</div>
        <select className={ styles.nativeControl }>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    );
  }
}

export default reactOutsideEvent(Select, ['click']);
