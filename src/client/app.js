import { render } from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './app.css';

import routes from './routes';

const mountNode = document.querySelector('#root');

mountNode.style.height = '100%';

render(routes, mountNode);
