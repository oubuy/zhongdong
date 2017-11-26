import $ from "jquery";

let HomeApi = {
    getOpratingData: (data, cb) => { //门店经营数据
        $.ajax({
            url: '/interface/app.php?ctl=index&act=get_store_sta',
            data: data,
            success: cb
        });
    },
    getGroupPurchaseData: (data, cb) => { //团购套餐统计
        $.ajax({
            url: '/interface/app.php?ctl=index&act=get_deal_sta',
            data: data,
            success: cb
        });
    },
    getStoreList: (data, cb) => { //获取门店列表
        $.ajax({
            url: '/interface/app.php?ctl=index&act=get_store_list',
            data: data,
            success: cb
        });
    },
    getSupplierName: (data, cb) => { //获取商家名称
        $.ajax({
            url: '/interface/app.php?ctl=index&act=get_supplier_name',
            data: data,
            success: cb
        });
    },
    getVerificationData: (data, cb) => { //获取核销记录
        $.ajax({
            url: '/interface/app.php?ctl=index&act=get_verify_data',
            data: data,
            success: cb
        });
    },
    getDealList: (data, cb) => { //获取团购列表
        $.ajax({
            url: '/interface/app.php?ctl=index&act=get_deal_list',
            data: data,
            success: cb
        });
    },
    getStaList: (data, cb) => {//团购套餐数据列表
        $.ajax({
            url: '/interface/app.php?ctl=index&act=deal_sta_list',
            data: data,
            success: cb
        });
    }
    
}

export {
    HomeApi
};