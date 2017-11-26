import './index.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import RoutesConfig from './routes';
import { AppContainer } from 'react-hot-loader';
const mountNode = document.getElementById('app');

// ReactDOM.render(
// 	<RoutesConfig />,
// 	mountNode
// );

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		mountNode
	);
};

render(RoutesConfig);

if (module.hot) {
	module.hot.accept('./routes', (err) => {
		ReactDOM.unmountComponentAtNode(mountNode);
		render(RoutesConfig);
	});
}


