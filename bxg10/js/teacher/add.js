define(['text!tpls/teacherAdd.html',
    'template',
], function (teacherAddTpl, template) {
    return function (callback) {
        var html = template.render(teacherAddTpl, {});
        var $html = $(html);
        $html.appendTo('body').modal().on('submit', 'form', function (e) {
            e.preventDefault();
            var formData = $(this).serialize();
            $.ajax({
                url: '/api/teacher/add',
                type: 'post',
                data: formData,
                success: function () {
                    $html.modal('hide');
                    callback();
                }
            });
        }).on('hidden.bs.modal', function () {
            $html.find(".join-date").datetimepicker("remove");
            $html.remove();
        })



        //等到模态框渲染完成之后，渲染日期控件-->巧妙的避免的z-index的烦恼
        $html.find(".join-date").datetimepicker({
            //日期格式化
            format: 'yyyy-mm-dd',
            weekStart: 1,        //一周从周一开始
            daysOfWeekDisabled: [6, 0],
            minView: "month",     //最小视图就是月视图-->只能精确到某一天
            autoclose: true,      //选择完日期之后自动关闭控件
            language: "zh-CN",     //语言设置为中文，如果想要设置某个语言，必须先导入的语言包
            todayBtn: true,          //显示"今天"按钮
            todayHighlight: true     //在今天这个月内，如果选中的不是今天，告诉你今天是哪一天
        });
    }
})