define(['text!tpls/teacherShow.html',
    'template'
], function (teacherShowTpl, template) {
    return function (id) {
        // console.log(teacherShowTpl);
        $.ajax({
            url: '/api/teacher/view',
            data: {
                tc_id: id
            },
            success: function (res) {
                var html = template.render(teacherShowTpl, { res });
                $(html).appendTo('body').modal().on('hidden.bs.modal', function () {
                    $(this).remove();
                })
            }
        });

    }

})