import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './subView.scss';
import { hashHistory } from 'react-router';

import QueueAnim from 'rc-queue-anim';

let startingZIndex = 400;

class SubViewHandle {
	constructor() {
		let self = this;
		this.config = {};
		this.Nodes = [];
		window.FW.on('subviewBack', function () {
			hashHistory.goBack();
		});

		window.FW.on('back', function () {
			hashHistory.goBack();
		});



		this.hash = window.location.hash.split('?')[0].replace(/[#//?]/g, '');
		setInterval(function () {
			let hash = window.location.hash.split('?')[0].replace(/[#//?]/g, '');
			if (self.hash !== hash) {
				if (hash.indexOf('_') !== -1) {
					subViewHandle.historyPop();
				} else {
					subViewHandle.popAllView();
				}
			} else if (hash.indexOf('_') !== -1 && self.Nodes.length === 0) {
				hash = window.location.hash.split('_')[0].replace(/[#//?]/g, '');
				hashHistory.replace(hash);
			}
			self.hash = hash;
		}, 150);
	}

	historyPush(replace) {
		this.subpop = true;
		let hash = window.location.hash.split('_')[0].replace(/[#//?]/g, '');
		if (replace) {
			hashHistory.replace(hash + '_' + (this.Nodes[this.Nodes.length - 1][2]) + this.Nodes.length);
		} else {
			hashHistory.push(hash + '_' + (this.Nodes[this.Nodes.length - 1][2]) + this.Nodes.length);
		}
	}

	historyPop() {
		if (!this.subpop && this.Nodes.length > 0) {
			this.fallBack();
		} else if (this.Nodes.length === 0) {
			let hash = window.location.hash.split('_')[0].replace(/[#//?]/g, '');
			hashHistory.push(hash);
		}
		this.subpop = false;
	}

	fallBack(cb) {
		var self = this;

		self.popView();
		if (cb) {
			cb();
		}
	}

	close() { // 返回按钮 函数
		this.subpop = false;
		hashHistory.goBack();
	}

	popView() {
		if (this.Nodes.length > 0) {
			startingZIndex -= 1;
			let n = this.Nodes.pop();
			let node = n[0];
			n[1].back(() => {
				ReactDOM.unmountComponentAtNode(node);
				node.parentNode.removeChild(node);
			})
		}
	}

	popAllView() {
		while (this.Nodes.length > 0) {
			startingZIndex = 400;
			let n = this.Nodes.pop();
			let node = n[0];
			// ReactDOM.unmountComponentAtNode(node);
			// node.parentNode.removeChild(node);
			n[1].back(() => {
				ReactDOM.unmountComponentAtNode(node);
				node.parentNode.removeChild(node);
			})
		}
	}

	replaceView(viewName, config) {
		let self = this;
		if (this.Nodes.length > 0) {
			// let n = this.Nodes.pop();
			// let node = n[0];
			//this.fallBack(function () {
			//this.pageAnimation(this.config, 'out');
			self.popView();
			self.pushView(viewName, config, true);
			// });
		} else {
			this.pushView(viewName, config);
		}
	}

	pushView(viewName, config, replace) {
		replace = config.replace || replace;
		let self = this;
		let node = document.createElement("div");
		$(document.body).append(node);
		let reactNode = ReactDOM.render(
			<SubView config={config} viewName={viewName} />, node);
		this.Nodes.push([node, reactNode, viewName]);
		this.config = config;
		self.historyPush(replace);
	}

}

if (!window.subViewHandle) {
	window.subViewHandle = new SubViewHandle();
}
let subViewHandle = window.subViewHandle;
var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

const SubView = React.createClass({
	getInitialState() {
		return { show: true, module: null, options: null }
	},
	componentDidMount() {
		var self = this;
		window.SubViewRoutes[this.props.viewName](function (Module, options) {
			if (!options) {
				options = {};
			}
			self.state.module = <Module modelData={self.props.config.modelData || {}} subview={true} />
			setTimeout(() => {
				self.setState({ module: self.state.module, options: options })
			}, 350)
		});
	},
	back(cb) {
		this.setState({
			show: !this.state.show,
		});
		this.backCb = cb;
	},
	onEnd({ key, type }) {
		if (type === 'leave') {
			if (this.backCb) {
				this.backCb();
				this.backCb = null;
			}
		}
	},
	close() {
		subViewHandle.close();
	},
	render() {
		let node, backNode, confirmButtonNode, self = this, config = this.props.config, header, className;
		if (this.state.show) {
			if (this.state.options) {
				if (this.state.options.confirmButtonHtml) {
					let confirmButtonHtml = this.state.options.confirmButtonHtml;
					confirmButtonNode = <div>{confirmButtonHtml}</div>
				}
				if (!config.hideBack) {
					backNode = <div><i className="icon-back"></i><span></span></div>
				}
			}


			if (config.hideBar !== true) {
				header = <div className="fw-header flex-vcenter">
					<div className="hideView flex-col-3" onClick={self.close.bind(self, null)}>
						<div><i className="icon-back"></i><span></span></div>
					</div>
					<h1 className="viewTitle flex-col-6">{config.title}</h1>
					<div className="flex-col-3">
						{confirmButtonNode}
					</div>
				</div>
			}

			let moduleNode = <div className="subview-loading">
				<div className='loadpicture'></div>
			</div>
			if (this.state.module) {
				moduleNode = this.state.module;
			}
			node = <div data-id={config.moduleName} className={'page ' + className} key={1}>
				{isiOS && <div className="paddingtop"></div>}
				{header}
				<div className="subview-content flex-g-1">
					{moduleNode}
				</div>
			</div>
		}

		return (
			<QueueAnim delay={100} duration={500} className="subview"
				style={{ zIndex: startingZIndex++ }}
				onEnd={this.onEnd}
				animConfig={[
					{ translateX: ['0%', '100%'] },
					{ translateX: ['0%', '100%'] }
				]}>
				{node}
			</QueueAnim>
		);
	}
});
const SubViewLink = React.createClass({
	onClick(e) {
		e.preventDefault();
		if (this.props.disabled) {
			return;
		}
		if (!window.SubViewRoutes[this.props.moduleName]) {
			console.log('moduleName页面模块名不存在:' + this.props.moduleName);
		}
		subViewHandle.pushView(this.props.moduleName, this.props);
	},
	render() {
		return <a onClick={this.onClick} className={this.props.className}>{this.props.children}</a>;
	}
});

export { SubViewLink, subViewHandle };

