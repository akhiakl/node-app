$('document').ready(function() {
    var edit = '';
    $('input:text').keypress(function(e) {
        if(e.which == 13) {
            $( "button.add" ).trigger( "click" )
        }
    });
    $.ajax({
        url: '/api/viewlist',
        method: 'GET',
        success: function(data) {
            if (data && data.length) {
                var items = '';
                data.forEach(function(result) {
                    items = items + '<div class="m-1 row" id="'+result._id+'"><li class="col-10 list-group-item text-secondary">'+result.task+'</li>'
                    +'<button class="col-1 btn btn-primary edit float-right"><i class="fa fa-edit"></i></button>'
                    +'<button class="col-1 btn btn-danger delete float-right"><i class="fa fa-close"></i></button></div>'
                });
                $('ul.users').html(items);
            }
        }
    });

    $('button.add').click(function() {
    var username = $('#uname').val();
    var task = $('#task').val();

    if (username && task && (edit !== 'clicked')) {
        $.ajax({
            url: '/api/viewlist',
            method: 'POST',
            data: {
                username,
                task
            },
            success: function(result) {
                if (result) {
                    var items = '';
                    $('ul.users').append('<div class="m-1 row" id="'+result._id+'"><li class="col-10 list-group-item text-secondary">'+result.task+'</li>'
                    +'<button class="col-1 btn btn-primary edit float-right"><i class="fa fa-edit"></i></button>'
                    +'<button class="col-1 btn btn-danger delete float-right"><i class="fa fa-close"></i></button></div>');
                    $('#task').val('');
                }
            }
        });
    }
    });

$('.container').on('click', 'button.edit', function() {
    var id = $(this).parent().attr('id');
    var that = $(this);
    var task = $(this).siblings().text();
    edit = 'clicked';

    if (id && task) {
        $('#task').val(task);
        $('button.add').click(function() {
            var username = $('#uname').val();
            var task = $('#task').val();
            $.ajax({
                url: '/api/viewlist/'+id,
                method: 'PUT',
                data: {
                    task
                },
                success: function(result) {
                    if(result.status) {
                        that.siblings('li').text($('#task').val());
                        $('#task').val('');
                    }
                }
            });
            edit = '';
        });
    }
});

$('.container').on('click', 'button.delete', function() {
    var id = $(this).parent().attr('id');
    var that = $(this);

    if (id) {
        $.ajax({
            url: '/api/viewlist/'+id,
            method: 'DELETE',
            success: function(data) {
                if(data.status) {
                    that.parent().remove();
                }
            }
        });
    }
})

})