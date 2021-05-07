$(function() {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $('.modal').on('shown.bs.modal', function()  { // any time a modal is shown
        var urlReplace = '#' + $(this).attr('id'); // make the hash the id of the modal shown
        history.pushState(null, null, urlReplace); // push state that hash into the url
    });

    // If a pushstate has previously happened and the back button is clicked, hide any modals.
    $(window).on('popstate', function() {
        $('.modal').modal('hide');
    });


    $('.bfh-languages').each(function() {
        var select = $(this);
        select.on('change.bfhselectbox', function() {
            var lang = select.val().substr(0, 2);

            //~ console.log('selected: ' + lang);
            $.cookie('lang', lang, {expires: 365 * 10});

            location.reload();
        });

        var lang = document.documentElement.lang;

        select.data('available').split(',').forEach(function(element) {
            if (lang === element.substr(0, 2)) {
                select.val(element);
            }
        });
    });

    $('.img-modal').on('click', function() {
        $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
        $('#enlargeImageModal').modal('show');
        $('#enlargeImageCaption').text($(this).text());
    });
});
