(function ($) {
    "use strict";

    /*[ Validate ]*/
    var first_name = $('.validate-input input[name="firstname"]');
    var last_name = $('.validate-input input[name="lastname"]');
    var email = $('.validate-input input[name="email"]');
    var phoneno = $('.validate-input input[name="phoneno"]');
    var e = document.getElementById("courses");
    var course = e.value;


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(first_name).val().trim() == ''){
            showValidate(first_name);
            check=false;
        }

        if($(last_name).val().trim() == ''){
            showValidate(last_name);
            check=false;
        }

        if($(phoneno).val().trim() == ''){
            showValidate(phoneno);
            check=false;
        }

        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);