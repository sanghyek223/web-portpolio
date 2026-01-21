$(function () {
    var search = location.search
    var params = new URLSearchParams(search);
    var getParam = params.get('name');

    switch (getParam) {
        case 'genie':
            $('.genie').removeClass('d-none');
            break;

        case 'reservation':
            $('.reservation').removeClass('d-none');
            break;
    }
});