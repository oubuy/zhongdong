import $ from "jquery";

let GroupApi = {
  getGroupProjectList: (data, cb) => { //团购项目列表
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=get_deal_list',
      data: data,
      success: cb
    });
  },
  groupProjectApply: (data, cb) => { //团购项目提交申请
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=deal_apply',
      data: data,
      success: cb
    });
  },
  getFoodTypeList: (data, cb) => { //获取菜品分类列表
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=get_menu_cates',
      data: data,
      success: cb
    });
  },
  getFoodList: (data, cb) => { //获取菜品列表
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=get_menus',
      data: data,
      success: cb
    });
  },
  getHolidayList: (data, cb) => { //获取法定节假日
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=get_holidays',
      data: data,
      success: cb
    });
  },
  uploadImg: (data, cb, onprogress) => { //上传图片
    window.orginalAjax({
      url: window.apiDomain + '/interface/app.php?ctl=deal&act=upload_img&sess_id=' + window.sess_id,
      data: data,
      type: 'post',
      contentType: false,
      processData: false,
      xhr: function () {　　　　　
        var xhr = $.ajaxSettings.xhr();　　　　　　
        if (onprogress && xhr.upload) {　　　　　　　　
          xhr.upload.addEventListener("progress", function (evt) {　
            var loaded = evt.loaded; //已经上传大小情况 
            var tot = evt.total;
            onprogress(parseInt(loaded / tot * 100));
          }, false);　　　　　　　　
          return xhr;　　　　　　
        }　　　　
      },
      success: function (data) {
        console.log(data)
        try {
          data = JSON.parse(data)
          if (data.code === 1002 && window.expire === false) {
            window.expire = true;
            window.openNativeView({
              "type": 7
            })
            return;
          }
          cb(data);
        } catch (error) {}
      }
    });
  },
  uploadImg: (data, cb) => { //上传图片
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=upload_img&sess_id=' + window.sess_id,
      data: data,
      type: 'post',
      contentType: false,
      processData: false,
      success: cb
    });
  },
  cuploadImg: (data, cb, onprogress) => { //上传图片
    console.log('上传图片')
    window.orginalAjax({
      url: window.apiDomain + '/interface/app.php?ctl=deal&act=cupload_img&sess_id=' + window.sess_id,
      data: data,
      type: 'post',
      contentType: false,
      processData: false,
      xhr: function () {　　　　
        　
        var xhr = $.ajaxSettings.xhr();　　　　　　
        if (onprogress && xhr.upload) {　　　　　　　　
          xhr.upload.addEventListener("progress", function (evt) {　
            var loaded = evt.loaded; //已经上传大小情况 
            var tot = evt.total;
            onprogress(parseInt(loaded / tot * 100));
          }, false);　　　　　　　　
          return xhr;　　　　　　
        }　　　　
      },
      success: function (data) {
        console.log(data)
        try {
          data = JSON.parse(data)
          if (data.code === 1002 && window.expire === false) {
            window.expire = true;
            window.openNativeView({
              "type": 7
            })
            return;
          }
          cb(data);
        } catch (error) {}
      }
    });
  },
  addFoodType: (data, cb) => { //添加菜品类别
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=add_menu_cate&sess_id=' + window.sess_id,
      data: data,
      type: 'post',
      contentType: false,
      processData: false,
      success: cb
    });
  },
  setFood: (data, cb) => { //编辑菜品内容
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=publish_menu',
      data: data,
      success: cb
    });
  },
  setGroupProject: (data, cb) => { //新增或修改团购项目
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=publish_deal&sess_id=' + window.sess_id,
      data: data,
      type: 'post',
      contentType: false,
      processData: false,
      success: cb
    });
  },
  getGroupProject: (data, cb) => { //获取团购项目详细信息
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=get_deal',
      data: data,
      success: cb
    });
  },
  getDiscountNum: (data, cb) => { //获取精选特惠数量
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=get_discount_num',
      data: data,
      success: cb
    });
  },
  getGroupCategoryList: (data, cb) => { //获取团购品类的列表
    $.ajax({
      url: '/interface/app.php?ctl=deal&act=get_deal_cate',
      data: data,
      success: cb
    });
  },
}


export {
  GroupApi
};