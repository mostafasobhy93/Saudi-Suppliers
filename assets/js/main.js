$(document).ready(function () {
    'use strict';
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    // Toggle Sidebar
    $('.dashboard-wrapper .dashboard-content .burger-menu').click(function() {
        $('.dashboard-wrapper .sidebar').addClass('active');
    })
    $('.dashboard-wrapper .sidebar .close').click(function() {
        $('.dashboard-wrapper .sidebar').removeClass('active');
    })
    
    // Tags Input
    try {
        $("#inputTag").tagsinput('items');
    } catch {}

    // File Uploader
    // if ($.fn.fileuploader) {
    //     console.log("Fileuploader plugin is available");
        
    //     var $fileInput = $('input.files');
    //     console.log("File input element:", $fileInput.length ? "Found" : "Not found");

    //     $fileInput.fileuploader({
    //         limit: 20,
    //         maxSize: 50,
    //         theme: 'dragdrop',
    //         changeInput: function(htmlString, inputEl, fileuploader) {
    //             var captionText = 'Drag and drop files here';
    //             var orText = 'or';
    //             var buttonText = 'Browse files';
                
    //             return '<div class="fileuploader-input">' +
    //                        '<div class="fileuploader-input-inner">' +
    //                            '<div class="fileuploader-icon-main"></div>' +
    //                            '<h3 class="fileuploader-input-caption"><span>' + captionText + '</span></h3>' +
    //                            '<p>' + orText + '</p>' +
    //                            '<button type="button" class="fileuploader-input-button"><span>' + buttonText + '</span></button>' +
    //                        '</div>' +
    //                    '</div>';
    //         },
    //         onInit: function(instance) {
    //             console.log("Fileuploader initialized");
    //             console.log("HTML after init:", $fileInput.next('.fileuploader').html());
    //         },
    //         // ... rest of your existing options ...
    //     });

    //     // Add this timeout to check the HTML after a short delay
    //     setTimeout(function() {
    //         console.log("HTML after timeout:", $fileInput.next('.fileuploader').html());
    //     }, 1000);

    // } else {
    //     console.error("Fileuploader plugin is not available");
    // }

    // Toggle Products & Services Filter
    function toggleFilters(showProducts) {
        if (showProducts) {
            $('.services-filter').hide();
            $('.products-filter').show();
        } else {
            $('.services-filter').show();
            $('.products-filter').hide();
        }
    }
    $('#servicesFilterToggle, #productsFilterToggle').on('change', function() {
        var showProducts = $(this).val() === 'products';
        toggleFilters(showProducts);
        
        // Sync the other select
        var otherSelectId = this.id === 'servicesFilterToggle' ? '#productsFilterToggle' : '#servicesFilterToggle';
        $(otherSelectId).val($(this).val());
    });

    //    Hero Section
    var isRTL = $("html").attr("dir") === "rtl"; 
    var $heroSection = $('.hero-section');
    
    // $(".hero-section .hero-slides").owlCarousel({
    //     loop: false,
    //     items: 1,
    //     margin: 0,
    //     dots: true,
    //     nav: false,
	// 	rtl: isRTL,
    //     active: true,
    //     smartSpeed: 1000,
    //     // autoplay: true,
    //     // autoplayTimeout: 5000,
    // }); 



});

