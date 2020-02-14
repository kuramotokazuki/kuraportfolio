$(function(){
    $.pjax({
        area : 'main','.top-wrap',
        link : 'a:not([target])'
    });
});