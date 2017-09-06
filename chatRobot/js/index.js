$(function () {
    $(".submit").click(function () {
        // console.log($(!"textarea").val());

        send();
    })

    onkeyup = function () {
        if (window.event.keyCode == 13) {
            send();
        }
    }

    function send() {
        if ($("textarea").val()) {
            var $myDiv = $('<div class="mine clearfix">' +
                '<img src="img/l1.png" alt="">' +
                '<span>' + $("textarea").val() + '</span> </div>');
            $myDiv.appendTo($(".r2.active"));
            $(".r2").scrollTop(10000);
        }



        var xhr = new XMLHttpRequest();
        xhr.open('post', 'http://www.tuling123.com/openapi/api');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send('key=45e227c0ccf8426aa7284b5cc0451161&info=' + $("textarea").val());
        xhr.onload = function () {
            var res = JSON.parse(xhr.responseText)["text"];
            var $myDiv = $('<div class="robot clearfix">' +
                '<img src="' + $('.c2 ul li.active img').attr('src') + '" alt="">' +
                '<span>' + res + '</span> </div>');
            $myDiv.appendTo($(".r2.active"));
            moreAction(res);
        }
        $("textarea").val("");

    }
    function moreAction(res) {
        $(".r2").scrollTop(10000); //自动滚到底部
        //将发生对话的框移动至顶部
        $('.c2 ul li.active').insertBefore($('.c2 ul li:first-of-type'));
        $('.right .r2.active').insertBefore($('.right .r2:nth-of-type(2)'));
        $('.c2 ul li.active span:nth-of-type(3)').html(res);
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        $('.c2 ul li.active span:nth-of-type(2)').html(hour + ":" + min);
    }

    $('.c2 ul li').click(function () {
        $('.c2 ul li').removeClass('active');
        $(this).addClass("active");
        var index = $('.c2 ul li').index($(this));
        $('.right .r2').removeClass('active');
        $('.right .r2').eq(index).addClass('active');
        // console.log($('.c2 ul li.active img').attr('src'));
        $(".r1 .name").html($('.c2 ul li.active span:first-of-type').html());
    })
})