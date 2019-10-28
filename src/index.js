import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import App from './App';

const app = dva({
	initialState: {
		products: [
			{ name: 'dva', id: 1 },
			{ name: 'antd', id: 2 },
		],
	}
});

// 3. Model
app.model(require('./models/sidenavModel').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


// ReactDOM.render(<App />, document.getElementById('root'));
