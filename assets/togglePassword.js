$(document).on('click', '.togglePassword', function () {
    $(this).toggleClass("bi-eye bi-eye-slash");
    var input = $(".password");
    input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
});