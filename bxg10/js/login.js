$('form').on('submit', function (e) {
    var formData = $(this).serialize();
    e.preventDefault();
    $.ajax({
        url: '/api/login',
        type: 'post',
        data: formData,
        success: function (res) {
            console.log(res.result);
            if (res.code == 200) {
                // localStorage.setItem('info', JSON.stringify(res.result));
                $.cookie('info', JSON.stringify(res.result))
                location.href = '../index.html';
            }
        },

    });
    // return false;
})