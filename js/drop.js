$("#custom-select_header").on('click', function (params) {
    $(this).toggleClass("custom-select_header-active");
    $(this).parent().toggleClass("custom-select_active");
    if ($(this).hasClass('custom-select_header-active')) {
        $(this).siblings().animate({ height: '88px' }, 300, 'linear');
    } else {
        $(this).siblings().animate({ height: 0 }, 300, 'linear');
    }

});
$("#custom-select_content li").on('click', function () {
    $("#custom-select_header").text($(this).text());
    $(this).parent().animate({ height: 0 }, 300, 'linear');
    $("#custom-select_header").removeClass("custom-select_header-active");
    $(this).parent().parent().removeClass('custom-select_active');
});