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

    // open submit app
    $('#submit-app-btn').click(function() {
        $(this).addClass('hide');
        $('.submit-app-form').show();
    })

    // Add New Item 
    $(document).off('click', '.add-item');
    $(document).on('click', '.add-item', function() {
        const container = $('.items-container');
        
        // Remove all previous add-item buttons
        $('.add-item').hide();

        const newRow = `
            <div class="new-item px-4 px-sm-5 py-45 border-primary rounded-md mt-45">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">اسم المنتج</label>
                            <input type="text" class="form-control" placeholder="أحمر">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">توقيت التوصيل</label>
                            <input type="date" class="form-control" placeholder="">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">UOM</label>
                            <select class="form-select">
                                <option>UOM</option>
                                <option>التجارة</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">الكمية</label>
                            <input type="text" class="form-control" placeholder="A2Q1">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">الدولة</label>
                            <select class="form-select">
                                <option>UOM</option>
                                <option>التجارة</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">المدينة</label>
                            <select class="form-select">
                                <option>UOM</option>
                                <option>التجارة</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">طريقة التوصيل</label>
                            <select class="form-select">
                                <option>UOM</option>
                                <option>التجارة</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group mb-45">
                            <label class="form-label">وصف المنتج</label>
                            <textarea class="form-control" rows="5" placeholder="اكتب وصف المنتج هنا"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group mb-45">
                            <label class="form-label dark-color mb-3 fw-600">
                                ارفع الملفات
                            </label>
                            <div class="form-control custom-file-upload position-relative px-2">
                                <input type="file" class="w-100 position-relative input-file" id="input-file" onchange="pressed()">
                                <span class="no-file-chosen small-text dark-color opacity-50">لم يتم اختيار اي ملف</span>
                                <button class="main-btn">اختر</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-4">
                    <button type="button" class="main-btn add-item">اضافة بند آخر</button>
                    <button type="button" class="main-btn red mr-sm-auto delete-item">حذف</button>
                </div>
            </div>
        `;

        container.append(newRow);
    });
    // Delete new item
    $(document).on('click', '.delete-item', function() {
        $('.new-item:last').find('.add-item').show();
        $(this).closest('.new-item').remove();
    });

    //    Hero Section
    var isRTL = $("html").attr("dir") === "rtl"; 
    var $heroSection = $('.hero-section');
    try {
        $(".hero-section .hero-slides").owlCarousel({
            loop: false,
            items: 1,
            margin: 0,
            dots: true,
            nav: false,
            rtl: isRTL,
            active: true,
            smartSpeed: 1000,
            // autoplay: true,
            // autoplayTimeout: 5000,
        });
    } catch {}

    //    clients slider
    try {
        $(".clients-section .clients-slider").owlCarousel({
            loop: true,
            items: 5,
            dots: false,
            nav: false,
            active: true,
            rtl: isRTL,
            // margin: 80,
            smartSpeed: 700,
            autoplay: true,
            // autoplay: 4500,
            responsive : {
                0 : {
                    items: 2,
                },
                768 : {
                    items: 4,
                },
                992 : {
                    items: 5,
                }
            }
        });
    } catch {}

    //    Testimonial Slider
    try {
        $(".testimonial-section .testimonial-slider").owlCarousel({
            loop: true,
            items: 1,
            margin: 5,
            dots: true,
            nav: false,
            rtl: isRTL,
            active: true,
            smartSpeed: 1000,
            autoplay: false,
            autoplayTimeout: 5000,
        });
    } catch {}



});

