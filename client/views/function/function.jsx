import React from 'react';
import './function.scss';

class Function extends React.Component {
    render() {
        return <div id="function"> 
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
            {/* 内容 */}
            <div className='content'>
                <div className="box">
                    <div className="boxcontent">
                        <h3>我们的优势</h3>
                       
                        <div className="flex-center jc-between soft" >
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/gong1.jpg")} alt="" />
                                    <h5>标准化测试流程</h5>
                                    <p>国际标准规范针对检测国际标准规范针对检测<br></br>
                                        覆盖全面，重现测试轨迹<br></br>
                                        深入识别APP隐藏的功能缺陷
                          </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/gong2.jpg")} alt="" />
                                    <h5>专家真机测试</h5>
                                    <p>国内领先技术<br></br>
                                      十年测试经验专家团队<br></br>
                                      真人真机全方位测试
                          </p>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/gong3.jpg")} alt="" />
                                    <h5>海量用例数据库</h5>
                                    <p>十年累计千万用例<br></br>
                                        为产品提供全面测试用例<br></br>
                                        大数据为产品测试达到全面化
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
                  <h3>客户案例-陆风汽车</h3>
                 <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">案例介绍</h5>
                 </div>
                  <p className='flex'>由陆风汽车倾力打造的-“陆风之家APP” 于今日正式上线。陆风之家APP的成功推出，标志着陆风汽车线上服务出了更为长远，作为一款一站式出行应用程序，旨在<br></br>
                  提供更便捷地车主服务，为确保的车主的“陆风家”APP优质体验</p>
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
                  <p className='flex'>测试人员、测试设备的不足，无法满足深入的广度和深度。产品上线后用户反馈存在兼容性问题。 
                  </p>
                  <div className='flex-vcenter' style={{height:70}}>
                 <div className='blue'></div>
                  <h5 className="">解决方案</h5>
                 </div>
                  <p className='flex'>注重APP在不同网络、地域、机型、功能模块、性能指标、真实操作路径下的稳定性及安全性凭借强有力的专家团队，进行真人真机执行测试，通过BUG探索与用例设计，发现应用中的各<br></br>
                  等级功能缺陷和UI问题，并在测试报告中提供BUG详细截图及复现过程。
                  </p>
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

export default Function;