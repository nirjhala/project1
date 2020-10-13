(function($) {
    "use strict";

    /*-------------------------------------
        Sidebar Toggle Menu
      -------------------------------------*/
    $(document).on('click', '.sidebar-nav-item .nav-link', function(e) {
        if (!$(this).parents('#wrapper').hasClass('sidebar-collapsed')) {
            var animationSpeed = 300,
                subMenuSelector = '.sub-group-menu',
                $this = $(this),
                checkElement = $this.next();
            if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
                checkElement.slideUp(animationSpeed, function() {
                    checkElement.removeClass('menu-open');
                });
                checkElement.parent(".sidebar-nav-item").removeClass("active");
            } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
                var parent = $this.parents('ul').first();
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('menu-open');
                var parent_li = $this.parent("li");
                checkElement.slideDown(animationSpeed, function() {
                    checkElement.addClass('menu-open');
                    parent.find('.sidebar-nav-item.active').removeClass('active');
                    parent_li.addClass('active');
                });
            }
            if (checkElement.is(subMenuSelector)) {
                e.preventDefault();
            }
        } else {
            if ($(this).attr('href') === "#") {
                e.preventDefault();
            }
        }
    });

    /*-------------------------------------
        Sidebar Menu Control
      -------------------------------------*/
    $(".sidebar-toggle").on("click", function() {
        window.setTimeout(function() {
            $("#wrapper").toggleClass("sidebar-collapsed");
        }, 500);
    });

    /*-------------------------------------
        Sidebar Menu Control Mobile
      -------------------------------------*/
    $(".sidebar-toggle-mobile").on("click", function() {
        $("#wrapper").toggleClass("sidebar-collapsed-mobile");
        if ($("#wrapper").hasClass("sidebar-collapsed")) {
            $("#wrapper").removeClass("sidebar-collapsed");
        }
    });

    /*-------------------------------------
        jquery Scollup activation code
     -------------------------------------*/
    // $.scrollUp({
    //   scrollText: '<i class="fa fa-angle-up"></i>',
    //   easingType: "linear",
    //   scrollSpeed: 900,
    //   animation: "fade"
    // });

    /*-------------------------------------
        jquery Scollup activation code
      -------------------------------------*/
    $("#preloader").fadeOut("slow", function() {
        $(this).remove();
    });

    function wpiGenerateRandomNumber(length) {

        var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        for (var x = 0; x < length; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;

    }
    $(function() {
        /*-------------------------------------
              Data Table init
          -------------------------------------*/
        if ($.fn.DataTable !== undefined) {
            $('.data-table').DataTable({
                paging: true,
                searching: false,
                info: false,
                lengthChange: false,
                lengthMenu: [20, 50, 75, 100],
                columnDefs: [{
                    targets: [0, -1], // column or columns numbers
                    orderable: false // set orderable for selected columns
                }],
            });
        }

        /*-------------------------------------
              All Checkbox Checked
          -------------------------------------*/
        $(document).on("click", ".checkAll", function() {
            $(this).closest('.table').find('input:checkbox').prop('checked', this.checked);
        });

        $(document).on("click", ".check", function() {
            var parent = $(this).closest('.table');
            if (parent.find('.check:checked').length == parent.find('.check').length) {
                parent.find('.checkAll').prop('checked', true);
            } else {
                parent.find('.checkAll').prop('checked', false);
            }
        });

        /*-------------------------------------
              Auto generate password
          -------------------------------------*/
        $(document).on('click', '.passwordToggle', function() {
            let inp = $(this).closest('.form-group').find('input');
            if (inp.attr('type') == "password") {
                inp.attr('type', 'text');
            } else {
                inp.attr('type', 'password');
            }
            $(this).toggleClass('fa-eye fa-eye-slash');
        });

        $(document).on('click', '.genPassBtn', function() {
            let password = wpiGenerateRandomNumber(10);
            $('#generatedPassword').val(password);
            $('#generatePasswordModal').modal('show');
            $('#copyConfirm').prop('checked', false).trigger('change');
        });

        $(document).on('click change', '#copyConfirm', function() {
            let btn     = $(this).closest('.modal-dialog').find('.btnReflectPassword'),
                checked = $(this).prop('checked');

            if(checked) {
                btn.removeAttr('disabled');
            } else {
                btn.attr('disabled', 'disabled');
            }
        });

        // $(document).on('click', '.btnReflectPassword', function() {
            // $('#userPassword').val( $('#generatedPassword').val() );
            // $('#generatePasswordModal').modal('hide');
        // });

        $(document).on('click', '.uploadImageBtn', function() {
            $('#imageTarget').val( $(this).data('image') );
            $('#fieldTarget').val( $(this).data('field') )
            $('#mediaModal').modal('show');
        });

        /*-------------------------------------
              Tooltip init
          -------------------------------------*/
        // $('[data-toggle="tooltip"]').tooltip();

        /*-------------------------------------
              Select 2 Init
          -------------------------------------*/
        if ($.fn.select2 !== undefined) {
            $('.select2').select2({
                width: '100%'
            });
        }

        /*-------------------------------------
              Date Picker
          -------------------------------------*/
        if ($.fn.datepicker !== undefined) {
            $('.air-datepicker').datepicker({
                language: {
                    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    today: 'Today',
                    clear: 'Clear',
                    dateFormat: 'dd/mm/yyyy',
                    firstDay: 0
                }
            });
        }

        /*-------------------------------------
              Counter
          -------------------------------------*/
        var counterContainer = $(".counter");
        if (counterContainer.length) {
            counterContainer.counterUp({
                delay: 50,
                time: 1000
            });
        }

        /*-------------------------------------
              Calender initiate
          -------------------------------------*/
        if ($.fn.fullCalendar !== undefined) {
          $('#fc-calender').fullCalendar({
            header: {
              center: 'basicDay,basicWeek,month',
              left: 'title',
              right: 'prev,next',
            },
            fixedWeekCount: false,
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            aspectRatio: 1.8,
            events: [{
                title: 'All Day Event',
                start: '2019-04-01'
              },

              {
                title: 'Meeting',
                start: '2019-04-12T14:30:00'
              },
              {
                title: 'Happy Hour',
                start: '2019-04-15T17:30:00'
              },
              {
                title: 'Birthday Party',
                start: '2019-04-20T07:00:00'
              }
            ]
          });
        }
    });

    $(document).on('click', '.wizard-next-btn', function() {
        let parent = $(this).closest('.wizard-tab'),
            target = $(this).data('target'),
            sel    = $(target);

        let is_valid = parent.is_valid();

        if(is_valid) {
            $(".wizard-tab").not(sel).removeClass('active');
            $(sel).addClass('active');

            $(".register-wizard-steps ul li").not("[data-tab='"+target+"']").removeClass('active');

            $("[data-tab='"+target+"']").addClass('active');
        }
    });

    $(document).on('click', '.wizardBtn', function() {
        let parent = $(this).closest('.step-wizard-panel'),
            target = $(this).data('target'),
            sel    = $(target);

        let is_valid = parent.is_valid();

        if(is_valid) {
            $(".step-wizard-panel").not(sel).removeClass('active');
            $(sel).addClass('active');

            $(".step-wizard-tabs ul li").removeClass('current visited');

            $("[data-tab='"+target+"']").addClass('current');
            $("[data-tab='"+target+"']").prevAll().addClass('visited');
        }
    });

    // $(document).on('click', '.addParentBtn', function() {
        
    // });

    $(document).on('click', "a[href^='#']", function(e) {
        e.preventDefault();
    });

})(jQuery);
