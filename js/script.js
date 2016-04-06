$(document).ready(function () {
    $(document).on('click','li',function () {
        $('.tab li').removeClass('active_li');
        $('div.content').hide().removeClass('active_div');
        $('div#div_'+$(this).attr('id')).show();
        $(this).addClass('active_li');

    });
});