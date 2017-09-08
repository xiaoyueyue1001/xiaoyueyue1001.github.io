define(['../lib/jquery-1.12.4.min.js', '../lib/less.js'], function () {
    // console.log('呵呵');
    $('#head').data('isDisplay', false);
    $('#head .slideBar').click(function () {
        if ($('#head').data('isDisplay') == false) {
            $('#head').css({
                transform: 'translateX(0)'
            }).data('isDisplay', true);
            $('body').css({
                paddingLeft: $('#head').width()
            });
        }
        else {
            console.log(111);
            $('#head').css({
                transform: 'translateX(-100%)'
            }).data('isDisplay', false);
            $('body').css({
                paddingLeft: 0
            });
        }

    })
})