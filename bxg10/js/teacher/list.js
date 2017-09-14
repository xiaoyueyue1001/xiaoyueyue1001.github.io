define([
    'text!tpls/teacherList.html',
    'template',
    './show',
    './logon',
    './add'
], function (teacherTpl, template, teacherShow, teacherLogon, teacherAdd) {
    return function fn() {
        $.ajax({
            url: '/api/teacher',
            success: function (res) {
                var html = template.render(teacherTpl, res);
                $('.content-container').html(html);

                //查看按钮
                $('.content-container').on('click', '.btn-watch', function () {
                    var tc_id = $(this).parent().parent().attr('tc_id');
                    teacherShow(tc_id);
                })


                //注销按钮
                $('.content-container').on('click', '.btn-logon', function () {
                    var tc_id = $(this).parent().parent().attr('tc_id');
                    var tc_status = $(this).parent().parent().attr('tc_status');
                    teacherLogon(tc_id, tc_status);
                })

                //添加讲师
                $('.content-container').on('click', '.btn-add', function () {
                    console.log('调用了添加讲师模块');
                    teacherAdd(fn);
                })

            }
        });
    }
})