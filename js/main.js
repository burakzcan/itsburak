$(document).ready(function(){
    $('.j-refresh-btn').click(function(){
        location.reload();
    })
});

cache = {
    $body: $('body')
}

let pathname = window.location.pathname;
let pageId = pathname.substring(1, pathname.indexOf('.html'));

cache.$body.attr('data-page-id', pageId)
