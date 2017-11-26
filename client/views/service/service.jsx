import React from 'react';
import './service.scss';

// class Test1 extends React.Component {当组件来使用
//     render() {
//         return <div>text</div>
//     }
// }

 
class Service extends React.Component {
    // constructor() {初始化数据
    //     super()
    //     this.state = {
    //         data: [],
    //         data1: [],
    //     }
    // }
    // componentDidMount() {生命周期已经挂载在页面上哦了
    //     this.getData()
    // }
    // getData = () => {方法
    //     this.setState({ data:['123','3434'] })
    // }
    render() {
        // let { data } = this.state;
        return <div id="service">
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
                        <h2>质量云平台</h2>
                        <span>提供国内领先的集质量测试、质量认证、</span>
                        <span>
                            质量运营、质量变现四位一体的质量云平台</span>
                        <a href="#"><p>立即申请</p></a>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="box">
                    <div className="boxcontent">
                        <h3>软件测试</h3>
                        <div className="tip">根据产品的需求及原型文档，对APP进行系统全面的测试，为企业提供可靠的产品保障</div>
                        <div className="flex-center jc-between soft" >
                            <a href="#">
                                <div className="item first" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                    <div className="one">
                                    <img src={require("img/1.jpg")} alt="" />       
                                    <h5>功能测试</h5>
                                    <p>专家分析走查+自动化功能测试<br></br>
                                        测试团队通过专家结合工具的测试方法<br></br>
                                        进行功能测试服务
                          </p>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item second" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                  <div className="two">
                                  <img src={require("img/2.jpg")} alt="" />
                                    <h5>兼容测试</h5>
                                    <p>上千款测试真机设备供客户挑选，<br></br>
                                        完善自动化测试系统，快速定位，解决问题
                          </p>
                                  </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item three" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                   <div className="threen">
                                   <img src={require("img/3.jpg")} alt="" />
                                    <h5>性能测试</h5>
                                    <p>基于业务场景与用户行为的全链路压力测试<br></br>
                                        发现并发瓶颈，优化容量规划
                          </p>
                                   </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="boxcontent">
                        <h3>硬件测试</h3>
                        <div className="tip">国家级智能硬件质量测试标准，APP结合硬件使用场景测试、经验丰富的专家测试团队挖掘产品潜在缺陷</div>
                        <div className="flex-center jc-between soft" >
                            <a href="#">
                                <div className="item four" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                   <div className="fourn">
                                   <img src={require("img/4.jpg")} alt="" />
                                    <h5>可靠性测试</h5>
                                    <p>通过低温试验、高温试验<br></br>
                                        恒定湿热试验、N/A全方面对硬件测试
                          </p>
                                   </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item five" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                   <div className="fiven">
                                   <img src={require("img/5.jpg")} alt="" />
                                    <h5>无线通信模组测试</h5>
                                    <p>通过无线通信模组测试产品的性能，<br></br>
                                        包括发射性能、接受性能、<br></br>
                                        电源适应性、传输性能等专业测试
                          </p> 
                                   </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item six" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                   <div className="sixn">
                                   <img src={require("img/6.jpg")} alt="" />
                                    <h5>连通性测试</h5>
                                    <p>测试产品网络状况、硬件跟手机节点之间打流，<br></br>
                                        误码率、传输速率、延时等测试
                          </p>
                                   </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="boxcontent">
                        <h3>认证</h3>
                        <div className="tip">国家权威资质认定、为企业出具国家权威的第三方检测报告、提供一站式退税服务</div>
                        <div className="flex-center jc-between soft" >
                            <a href="#">
                                <div className="item seven" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                 <div className="sevenn">
                                 <img src={require("img/7.jpg")} alt="" />
                                    <h5>CMA</h5>
                                    <p>广东省第一个获得第三方软件测试CMA牌照<br></br>
                                        为计量认证合格的检测机构出具的检测报告
                          </p>
                                 </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item eight" >
                                <div className="icon">
                                    <a href="#" className='firstWatch'>
                                        查看案例
                                    </a>            
                                </div>
                                 <div className="eightn">
                                 <img src={require("img/8.jpg")} alt="" />
                                    <h5>CNAS</h5>
                                    <p>信息处理产品标准符合性检测中心<br></br>
                                        为企业提供国家税收优惠政策的认真服务
                          </p>
                                 </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className="item" >
                                    <img src={require("img/9.jpg")} alt="" />
                                    <h5>ISO</h5>
                                    <p>ISO认证专业机构
                          </p>
                                </div>
                            </a>
                        </div>
                    </div>
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

export default Service;