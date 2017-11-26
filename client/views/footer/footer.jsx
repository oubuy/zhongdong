
import React from 'react';
import { TabBar, Modal, Toast } from 'antd-mobile';
import { hashHistory } from 'react-router';
import './footer.scss';
import { HomeApi } from 'js/api/homeApi';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }
  render() {
    let pathname = this.props.pathname;
    let node;

    return (
      <div id="footer" className="flex-center">
        <div className={"item flex-g-1 flex-col-center" + (pathname === '/' ? ' active' : '')} onClick={() => {
          if (pathname.indexOf('/groupForm') !== -1) {
            window.FW.emit('saveData', '/')
          } else {
            hashHistory.push('/')
          }
        }}>
          <div className="icon_home_gray"></div>
          <div className="text">首页</div>
        </div>
        <div className={"item flex-g-1 flex-col-center" + (pathname.indexOf('/groupForm') !== -1 ? ' active' : '')} onClick={() => {
          if (this.props.is_platform === 0) { Toast.fail('暂无权限操作', 2); return; }
          hashHistory.push('/groupForm')
        }}>
          <div className="icon_form_gray"></div>
          <div className="text">上单</div>
        </div>
        <div className={"item flex-g-1 flex-col-center" + (pathname.indexOf('/myMenu') !== -1 ? ' active' : '')} onClick={() => {
          if (pathname.indexOf('/groupForm') !== -1) {
            window.FW.emit('saveData', '/myMenu')
          } else {
            hashHistory.push('/myMenu')
          }
        }}>
          <div className="icon_my_gray"></div>
          <div className="text">我的</div>
        </div>
      </div>
    );
  }
}

export default Footer;