import $ from "jquery";

let busApi = {
    classes: function (cb) {
        $.ajax({
            url: '/api/buses',
            success: cb
        });
    },
    notifications: function (data, cb) {
        $.ajax({
            url: '/api/bus/attendences',
            data: data,
            success: cb
        });
    },
    busStops:function (data, cb) {
        $.ajax({
            url: '/api/bus/stops',
            data: data,
            success: cb
        });
    },
    students: function (data, cb) {
        $.ajax({
            url: '/api/students',
            data: data,
            success: cb
        });
    },
    detail: function (data, cb) {
        $.ajax({
            url: '/api/notifications/detail',
            data: data,
            success: cb
        });
    },
    updateState: function (data, cb) {
        $.ajax({
            url: '/api/notifications/updateState',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: cb
        });
    },
    pushins: function (data, cb) {
        $.ajax({
            url: '/api/notifications/pushins',
            data: data,
            success: cb
        });
    },
    notificationsSend: function (data, cb) {
        $.ajax({
            url: '/api/notifications/send',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: cb
        });
    },
    studentsDetail: function (data, cb) {
        $.ajax({
            url: '/api/students/detail',
            data: data,
            success: cb
        });
    },
    parentsstudents: function (cb) {
        $.ajax({
            url: '/api/parents/students',
            success: cb
        });
    },
    parentsNotificationDetail: function (data, cb) {
        $.ajax({
            url: '/api/parents/notificationDetail',
            data: data,
            success: cb
        });
    },
}

export {
    busApi
};