import React from "react";
import "./app.scss"
// 对应的组件
class App extends React.Component{
    render(){ 
        return <div id='app'> 
              <div className="topBox">
                <div className="content">
                    <div className="flex">
                        <ul className="flex-vcenter flex-g-1">
                            {/* <li><a href="#"><img src={require("img/logo.png")} alt="" /></a></li> */}
                            <li className="item"><a href="#">产品与服务</a></li>
                            <li className="item"><a href="#">解决方案</a></li>
                            <li className="item"><a href="#">关于我们</a></li></ul>
                        <ul className="topBoxright flex-vcenter">
                            <li><a href="#">注册</a></li><li><a href="#">登陆</a></li><li className="blueBtn"><a href="#">测试者社区</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 内容 */}
            <div className='content'>
                <div className="box">
                    <div className="boxcontent">
                        <h3>我们将面临的挑战</h3>
                       
                        <div className="flex-center jc-between soft" >
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/500489173.jpg")} alt="" />                             
                                   <i className='one'></i>
                                    <h5>测试手机端的不足</h5>
                                    <p>测试手机端的不足，一直是困扰着以APP软件企业的<br></br>
                                        头大问题，而购买真机终端的巨大成本，往往使企业<br></br>
                                        望而止步
                          </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/微信图片_20171011113913.jpg")} alt="" />
                                    <i className='two'></i>
                                    <h5>专业测试人员不足</h5>
                                    <p>很多软件项目的开发还停留在“作坊式”阶段，项目的<br></br>
                                      成功往往靠个别程序员决定，但随着市场对软件质量<br></br>
                                      的要求不断提高，软件测试将变得越来越重要
                          </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/微信图片_20171011114614.jpg")} alt="" />
                                    <i className='three'></i>
                                    <h5>测试深度和广度不足</h5>
                                    <p>产品功能复杂，往往需要耗费众多的人员投入，大<br></br>
                                        大增加企业成本负担，而功能、性能、兼容性、压<br></br>
                                        打性、安全性等方面的深度和广度也无法得到满足
                          </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 

               {/* 客服案例 */}
               <div className="contentcar">
                  <div className='box'>
                  <h3>客户案例-中金财视</h3>
                 <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">案例介绍</h5>
                 </div>
                  <p className='flex'>
                      福建中金在线网络股份有限公司（互联网财经媒体）定位于做全国领先的投资服务平台和权威的网络财经媒体。
                  </p>
                  <p>财视APP是一个提供科技金融综合服务平台，汇集财经博主、投资理财达人，致力于为用户提供一站式金融服务，涵盖股票、基金、财经、证券、黄金、外汇、投资、理财、保险、期货等<br></br>
                  金融行业，包括基于个人兴趣、大数据、音视频、券商交易、理财产品及智能投顾等，是一个为投资者提供智能投资的平台</p>
                  <ul className='flex-hcenter'>
                      <li><a href="#"><img src={require("img/wei1.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/wei2.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/wei3.jpg")} alt=""/></a></li>
                      <li><a href="#"><img src={require("img/wei4.jpg")} alt=""/></a></li>
                  </ul>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">现状问题</h5>
                 </div>
                  <p className='flex'>产品功能复杂，功能迭代快，产品测试人员无法满足测试深度和广度。 
                  </p>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">解决方案</h5>
                 </div>
                  <p className='flex'>以手工测试为主，自动化测试为辅助相结合。结合手工测试对数据的准确性、业务流程的符合、人性判断的优点和自动化测试节省大流量重复性和回归测试的优势。基于产品功能全面的分析，<br></br>
                  深度覆盖产品功能路径。 </p>
                  <p>目前为止，财视产品已进行81次版本测试，累计用例数10万余条，发现缺陷数2千余个。掌测一直为中金产品APP保驾护航，专业的测试团队，每个版本尽可能的覆盖各种机型设备，海量<br></br>
                  用例库进行回归测试，确保每个模块达到测试验收标准使用户体验达到最佳。</p>
                 
                    <a href="#"><span className='bottomp'>立即申请</span></a>
                  </div>

              </div>
              <div className="bottomBox">
          <div className="content flex">
            <div className="item">
              <div className="itemHead">产品与服务</div>
              <ul className='jc-start '>
                <li>功能测试</li>
                <li>数据</li>
                <li>认证</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">解决方案</div>
              <ul>
                <li>教育行业应用测试</li>
                <li>智能穿戴设备整体测试</li>
                <li>应用开发质量提升</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">关于我们</div>
              <ul>
                <li>公司简介</li>
                <li>企业资质</li>
                <li>企业动态</li>
                <li>招纳贤士</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">测试者社区</div>
              <ul>
                <li>测试中心</li>
                <li>质量测试</li>
                <li>质量认证</li>
                <li>质量变现</li>
              </ul>
            </div>
            <div className="item">
              <div className="itemHead">新闻动态</div>
              <ul>
                <li>公司动态</li>
                <li>科技资讯</li>
                <li>行业新闻</li>
              </ul>
            </div>
            <div className="bottomRight flex-g-1">
              <img src={require("img/logo.png")} />
              <div className="text">关注我们</div>
              <img src={require("img/share.png")} />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="content">
            <div>商务洽谈:&nbsp;&nbsp;020-38555340&nbsp;&nbsp;020-89289423&nbsp;&nbsp;&nbsp;&nbsp;CS邮箱:&nbsp;&nbsp;businesss@appstest.cn&nbsp;&nbsp;cs@appstest.cn&nbsp;&nbsp;&nbsp;&nbsp;地址:广州中山大道西8号天河商贸大厦14楼</div>
            <div>2009-2017&nbsp;Appstest.com版权所有ICP证:&nbsp;粤A1-20040604&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;粤公网安备&nbsp;33566758445789号</div>
          </div>
        </div>

        </div>
    }
}

export default App;