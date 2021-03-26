$(document).ready(function() {

    // Exercise 1
    $('.scrollUp').on('click', function() {
        $('html').animate({ scrollTop: 0 }, 'slow');
    })

    // Exercise 2
    $('.accept').on('click', function() {
        if ($('.submit-btn').is(':disabled')) {
            $('.submit-btn').removeAttr('disabled');
        } else {
            $('.submit-btn').attr('disabled', 'disabled');
        }
    })

    // Exercise 3
    $('table').addClass('table-bordered');

    // Excercise 4
    $('.text-box').on('keyup', function() {
        $('.numChar').text(15 - $(this).val().length);
    })

    // Exercise 5
    $('.add-option').on('click', function() {
        $('.dropdown').append('<option value="' + $('.text-box').val() + '">' + $('.text-box').val() + '</option>')
    })

    // Exercise 6
    $('.remove-option').on('click', function() {
        $('.dropdown option[value="' + $('.dropdown').val() + '"]').remove();
    })

    // Exercise 7
    $(".text-box").on('keyup', function() {
        $('.display').text($(this).val());
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
        return false;
    })

    // Exercise 8
    $(".swap").on('click', function() {
        if ($(".swap").val() == "I like you Gran!") {
            $(".swap").val("I love you Cath!");
        } else {
            $(".swap").val("I like you Gran!");
        }
    })

    // Exercise 9
    $('.alternate ').on('click', function() {
        $('table').removeClass('table-secondary').addClass('table-success');
    })

    // Exercise 10
    $('.number').on('click', function() {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    })

    // Exercise 11
    $('.animate').on('click', function() {
        $(".animation").animate({
            width: "70%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500);
    })

    // Exercise 12

    $('.right').on('click', function() {
        $('.box').animate({ left: '+=50px' }, 'slow');
    })

    $('.left').on('click', function() {
        $('.box').animate({ left: '-=50px' }, 'slow');
    })

    $('.up').on('click', function() {
        $('.box').animate({ top: '-=50px' }, 'slow');
    })

    $('.down').on('click', function() {
        $('.box').animate({ top: '+=50px' }, 'slow');
    })

})