define([], function () {
    return function (tc_id, tc_status) {
        $.ajax({
            url: '/api/teacher/handle',
            type: 'post',
            data: {
                tc_id: tc_id,
                tc_status: tc_status
            },
            success: function (res) {
                console.log(tc_status + ':' + res.result.tc_status);
                console.log($('.content-container').find('tr[tc_id=' + tc_id + ']'));
                $('.content-container').find('tr[tc_id=' + tc_id + ']').attr('tc_status', res.result.tc_status);
                $('.content-container').find('tr[tc_id=' + tc_id + ']').find('.status').html(res.result.tc_status == 0 ? '启用' : '注销')
                $('.content-container').find('tr[tc_id=' + tc_id + ']').find('.btn-logon').html(res.result.tc_status == 0 ? '注销' : '启用')
            }
        });
    }
})