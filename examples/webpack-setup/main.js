import {Button} from 'teatime-components';
import {createElement} from 'react';
import {render} from 'react-dom';

render(
  createElement(Button, {theme: 'action'}, 'Make Awesome'),
  document.getElementById('entry')
);
