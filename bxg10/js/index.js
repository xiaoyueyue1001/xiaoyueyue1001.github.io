require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-2.1.4',
        bootstrap: '../assets/bootstrap/js/bootstrap',
        cookie: 'lib/jquery.cookie',
        text: './lib/text',
        tpls: '../tpls',
        template: './lib/template-web',
        bootstrapDateTimer: '../assets/bootstrap-datetimepicker/js/bootstrap-datetimepicker'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
})
//以上为requireJS初始化




require(['teacher/list',
    'jquery',
    //'text!tpls/teacher.html',
    //'template',
    'bootstrap',
    'cookie',
    'bootstrapDateTimer'
], function (teacherList) {//, $, teacherTpl, template
    // var profileData = JSON.parse(localStorage.getItem('info'));

    try {
        var profileData = JSON.parse($.cookie('info'));
    }
    catch (e) {
        location.href = '../login.html';
    }//首次登录时返回登录界面



    //初始化用户信息
    $('.profile img').attr('src', profileData.tc_avatar);
    $('.profile p').html(profileData.tc_name);


    //侧栏菜单点击事件
    $('.menu .list-group').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active');
        switch ($(this).data('type')) {
            case 'teacher_manger':
                teacherList();
                break;
            case 'class_manger':
                $('.content-container').html('class_manger');
                break;
            case 'class_add':
                $('.content-container').html('class_add');
                break;
            case 'class_class':
                $('.content-container').html('class_class');
                break;
            case 'pic_form':
                $('.content-container').html('pic_form');
                break;
            default: {
                break;
            }

        }
    })


    //初始化点击一次侧边栏
    $('.menu .list-group .active').trigger('click');

})








