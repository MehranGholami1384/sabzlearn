$(document).ready(function () {

    function slideToggle(className, elem, link) {
        let sideNavbarSubMenu = $(className);

        if (sideNavbarSubMenu.is(':visible')) {
            sideNavbarSubMenu.slideUp(450, function () {
                sideNavbarSubMenu.css('display', 'none');
                $(elem).addClass('deg90').removeClass('deg0')
                $(link).removeClass('active-side-navbar-links')
            });
        } else {
            sideNavbarSubMenu.css('display', 'flex').hide().slideDown(450);
            $(elem).addClass('deg0').removeClass('deg90')
            $(link).addClass('active-side-navbar-links')
        }
    }

    function openSideNavbar() {
        $('.side-navbar').addClass('open-side-navbar')
        $('.overlay').addClass('active-overlay')
    }

    function closeSideNavbar() {
        $('.side-navbar').removeClass('open-side-navbar')
        $('.overlay').removeClass('active-overlay')
    }

    $('.front-end-chevron-down').on('click', function () {
        slideToggle('.front-end-side-navbar', $(this), '.front-end-side-navbar-link')
    });

    $('.security-chevron-down').on('click', function () {
        slideToggle('.security-side-navbar', $(this), '.security-side-navbar-link')
    });

    $('.python-chevron-down').on('click', function () {
        slideToggle('.python-side-navbar', $(this), '.python-side-navbar-link')
    });

    $('.php-chevron-down').on('click', function () {
        slideToggle('.php-side-navbar', $(this), '.php-side-navbar-link')
    });

    $('.skills-chevron-down').on('click', function () {
        slideToggle('.skills-side-navbar', $(this), '.skills-side-navbar-link')
    });

    $('.articles-chevron-down').on('click', function () {
        slideToggle('.articles-side-navbar', $(this), '.articles-side-navbar-link')
    });

    $('.burger-menu-btn').click(function () {
        openSideNavbar()
    })

    $('.close-side-navbar-btn').click(function () {
        closeSideNavbar()
    })

    $('.overlay').click(function () {
        closeSideNavbar()
    })
});