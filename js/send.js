$(document).ready(function () {
    $("form").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'js/send.php',
            data: formNm.serialize(),
              success: function (data) {
              setTimeout(function(){
                window.location = "/thanks.html";
              }, 2000);
              setTimeout(function(){
                window.location = "/index.html";
                $('input').not(':input[type=submit], :input[type=hidden]').val('');
              }, 5000);
            },
            error: function (jqXHR, text, error) {
                message.html(error);
                formTitle.css("display","none");
                setTimeout(function(){
                  $('.formTitle').css("display","block");
                  $('.msgs').html('');
                  $('input').not(':input[type=submit], :input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });
      var $input = $('.form-fieldset > input');
      $input.blur(function (e) {
        $(this).toggleClass('filled', !!$(this).val());
      });
});