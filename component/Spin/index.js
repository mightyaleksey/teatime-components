/* @flow */
import React, {Component} from 'react';
import classNames from 'classnames';

import spinExtraLarge from './spin-extra-large.css';
import spinExtraSmall from './spin-extra-small.css';
import spinLarge from './spin-large.css';
import spinMedium from './spin-medium.css';
import spinSmall from './spin-small.css';

type Props = {
  className?: string,
  id?: string,
  size: 'l' | 'm' | 's' | 'xl' | 'xs',
  style?: Object,
  styles?: Object,
};

const cssModules = {
  l: spinLarge,
  m: spinMedium,
  s: spinSmall,
  xl: spinExtraLarge,
  xs: spinExtraSmall,
};

class Spin extends Component {
  props: Props

  static defaultProps: {
    size: 'l' | 'm' | 's' | 'xl' | 'xs',
  }

  css: {
    spin: string,
    control: string,
  }

  constructor(props: Props) {
    super(props);

    this.css = props.styles || cssModules[props.size];
  }

  componentWillReceiveProps(nextProps: Props) {
    this.css = nextProps.styles || cssModules[nextProps.size];
  }

  render() {
    const {className, id, style} = this.props;
    const {css} = this;

    return (
      <span
        className={classNames(css.spin, className)}
        id={id}
        style={style}>
        <span className={css.control}/>
      </span>
    );
  }
}

Spin.defaultProps = {
  size: 'm',
};

export default Spin;
