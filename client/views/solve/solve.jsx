import React from 'react';
import './solve.scss';

class Sovle extends React.Component {
    render() {
        return <div id='solve'>
            <div className="topBox">
                <div className="content">
                    <div className="flex">
                        <ul className="flex-vcenter flex-g-1">
                            <li><a href="#"><img src={require("img/logo.png")} alt="" /></a></li>
                            <li className="item"><a href="#">产品与服务</a></li>
                            <li className="item"><a href="#">解决方案</a></li>
                            <li className="item"><a href="#">新闻动态</a></li>
                            <li className="item"><a href="#">关于我们</a></li></ul>
                        <ul className="topBoxright flex-vcenter">
                            <li><a href="#">注册</a></li><li><a href="#">登陆</a></li><li className="blueBtn"><a href="#">测试者社区</a></li>
                        </ul>
                    </div>
                    <div className="count flex-center ">
                        <a href="#"><p>查看案例</p></a>
                    </div>
                </div>
            </div>
              <div className="content">
                  <div className="box">
                  <div className="boxcontent">
                  <div className="count flex-center bbb">
                        <a href="#"><p >查看案例</p></a>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="content ">
                  <div className="box">
                  <div className="threecont">
                  <div className="count flex-center aaa">
                        <a href="#"><p>查看案例</p></a>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="content ">
                  <div className="box">
                  <div className="fourcont">
                  <div className="count flex-center ccc">
                        <a href="#"><p>查看案例</p></a>
                    </div>
                  </div>
                  </div>
              </div>
           
        </div>
    }
}
export default Sovle;