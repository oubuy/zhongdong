import React from 'react';
import './common.scss';

class Common extends React.Component{
    render(){
        return <div id="common">
               <div className="topBox"> 
                <div className="content">
                    <div className="flex">
                        <ul className="flex-vcenter flex-g-1">
                            <li><a href="#"><img src={require("img/logo.png")} alt="" /></a></li>
                            <li className="item"><a href="#">产品与服务</a></li>
                            <li className="item"><a href="#">解决方案</a></li>
                            <li className="item"><a href="#">关于我们</a></li></ul>
                        <ul className="topBoxright flex-vcenter">
                            <li><a href="#">注册</a></li><li><a href="#">登陆</a></li><li className="blueBtn"><a href="#">测试者社区</a></li>
                        </ul>
                    </div>
                    <div className="count">
                        <h2>功能测试</h2>
                        <span>专家啊分析走查+自动化功能测试</span>
                        <span>
                            测试团队通过专家结合工具的测试方法进行功能测试服务
                        </span>
                        <a href="#"><p>立即申请</p></a>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Common;