import {
    courses,
    blogs
} from './database.js';
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

    function calculateDiscountedPrice(price, offPercent) {
        let discountAmount = (price * offPercent) / 100;
        let discountedPrice = price - discountAmount;

        return discountedPrice;
    }

    function createLayout(template) {
        let layout = document.createElement('div')
        layout.className = 'px-3 col-12 col-sm-6 col-lg-4 col-xl-3 my-3'
        layout.insertAdjacentHTML('beforeend', template)

        return layout
    }

    courses.forEach(course => {
        let template = `
                        <div class="bg-black2 col-12 rounded-4 d-flex flex-column gap-3 justify-content-between h-100 position-relative shadow-lg">
                            <div
                                class="off-box color-white1 position-absolute bg-green1 px-3 py-1 rounded-pill top-0 end-0 mt-3 me-3">
                                ${course.offPercent}%</div>
                            <div>
                                <a href="#">
                                    <img class="w-100 object-fit-cover rounded-4" height="170"
                                        src="${course.imgSrc}">
                                </a>
                            </div>
                            <div>
                                <a href="#" class="d-inline-block color-white1 px-3 m-0 fw-bold course-title w-100">${course.title}</a>
                            </div>
                            <div>
                                <p class="color-white1 px-3 m-0 text-fs-14px opacity-70 line-clamp-2">${course.info}</p>
                            </div>
                            <div class="px-3 d-flex align-items-center justify-content-between">
                                <a href="#" class="text-fs-14px teacher-links">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-person color-white1 opacity-75 transition" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z">
                                        </path>
                                    </svg>
                                    <span class="color-white1 opacity-70 transition">${course.teacer}</span>
                                </a>
                                <div>
                                    <span>
                                        <span class="color-yellow2 course-score">${course.score}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-star-fill color-yellow2"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="px-3">
                                <hr class="color-gray1 m-0">
                            </div>
                            <div class="px-3 pb-3 d-flex align-items-center justify-content-between">
                                <div class="text-fs-14px pt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-people color-white1 opacity-70" viewBox="0 0 16 16">
                                        <path
                                            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                                    </svg>
                                    <span class="color-white1 opacity-70 course-students">${course.students}</span>
                                </div>
                                <div>
                                    <p class="main-price m-0 color-white1 opacity-70 text-fs-14px text-decoration-line-through">
                                        ${course.price}</p>
                                    <div class="d-flex">
                                        <p class="m-0 color-green1 fw-bold off-price">${calculateDiscountedPrice(course.price, course.offPercent)}</p>
                                        <svg class="me-1 color-green1" width="20" height="20" viewBox="0 0 14 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path class="text-gray-880 dark:text-white"
                                                d="M1.14878 6.91843C1.44428 6.91843 1.70285 6.87142 1.92447 6.77739C2.15282 6.68337 2.34422 6.55577 2.49869 6.39458C2.65316 6.2334 2.77069 6.04535 2.85128 5.83044C2.93187 5.62224 2.97888 5.40062 2.99231 5.16556H1.98492C1.6424 5.16556 1.36033 5.12862 1.1387 5.05474C0.917077 4.98087 0.742461 4.87341 0.614858 4.73238C0.487254 4.59134 0.396588 4.42344 0.34286 4.22868C0.295849 4.0272 0.272343 3.80221 0.272343 3.55372C0.272343 3.29852 0.309281 3.05674 0.383156 2.8284C0.457032 2.60005 0.564488 2.39857 0.705523 2.22396C0.846559 2.04934 1.02117 1.91167 1.22937 1.81093C1.44428 1.70347 1.68941 1.64974 1.96477 1.64974C2.1864 1.64974 2.39795 1.68668 2.59943 1.76056C2.80091 1.83443 2.97888 1.95196 3.13335 2.11315C3.28782 2.26761 3.40871 2.47245 3.49601 2.72766C3.59004 2.97615 3.63705 3.27837 3.63705 3.63431V4.47045H4.60415C4.68474 4.47045 4.73847 4.50068 4.76533 4.56112C4.79891 4.61485 4.8157 4.6988 4.8157 4.81297C4.8157 4.93386 4.79891 5.02452 4.76533 5.08497C4.73847 5.13869 4.68474 5.16556 4.60415 5.16556H3.6169C3.60347 5.49464 3.53631 5.80693 3.41542 6.10244C3.30125 6.39794 3.14007 6.65651 2.93187 6.87813C2.72368 7.09976 2.47518 7.27438 2.1864 7.40198C1.89761 7.5363 1.57188 7.60346 1.20922 7.60346H0.141381L0.0809373 6.91843H1.14878ZM0.896929 3.51343C0.896929 3.68133 0.913719 3.82572 0.947299 3.94661C0.987594 4.0675 1.0514 4.16823 1.1387 4.24883C1.23273 4.3227 1.35697 4.37979 1.51144 4.42008C1.66591 4.45366 1.86067 4.47045 2.09573 4.47045H3.00239V3.71491C3.00239 3.21792 2.90501 2.86198 2.71024 2.64707C2.51548 2.43215 2.24684 2.3247 1.90433 2.3247C1.58196 2.3247 1.33347 2.43215 1.15885 2.64707C0.984237 2.86198 0.896929 3.15076 0.896929 3.51343ZM6.26895 4.47045C6.35626 4.47045 6.41335 4.50068 6.44021 4.56112C6.47379 4.61485 6.49058 4.6988 6.49058 4.81297C6.49058 4.93386 6.47379 5.02452 6.44021 5.08497C6.41335 5.13869 6.35626 5.16556 6.26895 5.16556H4.60675C4.51944 5.16556 4.46235 5.13869 4.43549 5.08497C4.40191 5.03124 4.38512 4.94729 4.38512 4.83312C4.38512 4.71223 4.40191 4.62156 4.43549 4.56112C4.46235 4.50068 4.51944 4.47045 4.60675 4.47045H6.26895ZM7.93155 4.47045C8.01886 4.47045 8.07594 4.50068 8.10281 4.56112C8.13639 4.61485 8.15318 4.6988 8.15318 4.81297C8.15318 4.93386 8.13639 5.02452 8.10281 5.08497C8.07594 5.13869 8.01886 5.16556 7.93155 5.16556H6.26935C6.18204 5.16556 6.12495 5.13869 6.09809 5.08497C6.06451 5.03124 6.04772 4.94729 6.04772 4.83312C6.04772 4.71223 6.06451 4.62156 6.09809 4.56112C6.12495 4.50068 6.18204 4.47045 6.26935 4.47045H7.93155ZM9.59415 4.47045C9.68146 4.47045 9.73854 4.50068 9.76541 4.56112C9.79899 4.61485 9.81578 4.6988 9.81578 4.81297C9.81578 4.93386 9.79899 5.02452 9.76541 5.08497C9.73854 5.13869 9.68146 5.16556 9.59415 5.16556H7.93194C7.84464 5.16556 7.78755 5.13869 7.76069 5.08497C7.72711 5.03124 7.71032 4.94729 7.71032 4.83312C7.71032 4.71223 7.72711 4.62156 7.76069 4.56112C7.78755 4.50068 7.84464 4.47045 7.93194 4.47045H9.59415ZM11.2567 4.47045C11.3441 4.47045 11.4011 4.50068 11.428 4.56112C11.4616 4.61485 11.4784 4.6988 11.4784 4.81297C11.4784 4.93386 11.4616 5.02452 11.428 5.08497C11.4011 5.13869 11.3441 5.16556 11.2567 5.16556H9.59454C9.50723 5.16556 9.45015 5.13869 9.42328 5.08497C9.3897 5.03124 9.37291 4.94729 9.37291 4.83312C9.37291 4.71223 9.3897 4.62156 9.42328 4.56112C9.45015 4.50068 9.50723 4.47045 9.59454 4.47045H11.2567ZM12.1638 4.47045C12.4257 4.47045 12.6339 4.39994 12.7884 4.2589C12.9496 4.11787 13.0302 3.9231 13.0302 3.67461V2.2844H13.685V3.67461C13.685 4.15144 13.5506 4.52082 13.282 4.78275C13.0201 5.03795 12.6608 5.16556 12.2041 5.16556H11.2571C11.1698 5.16556 11.1127 5.13869 11.0859 5.08497C11.0523 5.03124 11.0355 4.94729 11.0355 4.83312C11.0355 4.71223 11.0523 4.62156 11.0859 4.56112C11.1127 4.50068 11.1698 4.47045 11.2571 4.47045H12.1638ZM13.7857 0.994934H12.9798V0.279683H13.7857V0.994934ZM12.5063 0.994934H11.7004V0.279683H12.5063V0.994934ZM5.64177 12.9641C5.64177 13.3267 5.58468 13.6659 5.47051 13.9815C5.35634 14.3039 5.1918 14.5826 4.97689 14.8177C4.76198 15.0595 4.50005 15.2509 4.19112 15.3919C3.8889 15.5329 3.54638 15.6035 3.16357 15.6035H2.56921C1.81702 15.6035 1.23273 15.3718 0.816337 14.9084C0.399946 14.445 0.191751 13.8103 0.191751 13.0044V11.2414H0.836485V12.9842C0.836485 13.273 0.870065 13.5349 0.937225 13.77C1.0111 14.0051 1.12191 14.2065 1.26967 14.3744C1.42413 14.549 1.61554 14.6834 1.84388 14.7774C2.07223 14.8714 2.34758 14.9184 2.66995 14.9184H3.1132C3.42885 14.9184 3.70421 14.8647 3.93927 14.7572C4.17433 14.6565 4.36909 14.5188 4.52356 14.3442C4.68474 14.1696 4.80227 13.9648 4.87615 13.7297C4.95674 13.4946 4.99703 13.2495 4.99703 12.9943V10.2844H5.64177V12.9641ZM3.21394 10.0628H2.36773V9.32738H3.21394V10.0628ZM8.24526 13.1656C8.07064 13.1656 7.90274 13.1421 7.74156 13.095C7.58038 13.0413 7.43598 12.954 7.30838 12.8331C7.18749 12.7122 7.09011 12.5544 7.01624 12.3596C6.94236 12.1582 6.90542 11.9097 6.90542 11.6142V6.9197H7.56023V11.4933C7.56023 11.7754 7.62067 12.0104 7.74156 12.1985C7.86916 12.3798 8.074 12.4705 8.35607 12.4705H8.52733C8.67508 12.4705 8.74896 12.5846 8.74896 12.813C8.74896 13.048 8.67508 13.1656 8.52733 13.1656H8.24526ZM8.69324 12.4705C8.95516 12.4705 9.15328 12.4067 9.2876 12.279C9.42192 12.1514 9.48908 11.9802 9.48908 11.7653V11.3825C9.48908 10.7982 9.63683 10.3415 9.93233 10.0124C10.2346 9.68332 10.6509 9.51878 11.1815 9.51878C11.4569 9.51878 11.6986 9.56243 11.9068 9.64974C12.115 9.73705 12.2863 9.8613 12.4206 10.0225C12.5616 10.1837 12.6657 10.3751 12.7329 10.5967C12.8001 10.8183 12.8336 11.0635 12.8336 11.3321C12.8336 11.9097 12.6825 12.3596 12.3803 12.682C12.0781 13.0044 11.6651 13.1656 11.1412 13.1656C10.8726 13.1656 10.614 13.1152 10.3655 13.0144C10.117 12.907 9.92226 12.7189 9.78123 12.4503C9.72078 12.6048 9.64691 12.729 9.5596 12.823C9.47229 12.9171 9.38162 12.9909 9.2876 13.0447C9.19358 13.0917 9.09284 13.1253 8.98538 13.1454C8.88464 13.1588 8.78726 13.1656 8.69324 13.1656H8.53205C8.44475 13.1656 8.38766 13.1387 8.3608 13.085C8.32722 13.0312 8.31043 12.9473 8.31043 12.8331C8.31043 12.7122 8.32722 12.6216 8.3608 12.5611C8.38766 12.5007 8.44475 12.4705 8.53205 12.4705H8.69324ZM12.1889 11.3925C12.1889 11.0433 12.1117 10.7612 11.9572 10.5463C11.8027 10.3247 11.5375 10.2139 11.1614 10.2139C10.4629 10.2139 10.1137 10.6202 10.1137 11.4328C10.1137 11.7754 10.2077 12.0339 10.3957 12.2085C10.5905 12.3831 10.839 12.4705 11.1412 12.4705C11.4837 12.4705 11.7423 12.3764 11.9169 12.1884C12.0982 12.0003 12.1889 11.7351 12.1889 11.3925Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
        if (course.isLastCourses) {
            $('.last-courses-box').append(createLayout(template))
        }
        if (course.isPopularCourses) {
            $('.popular-courses').append(template)
        }
        if (course.isLatestCourses) {
            $('.latest-courses').append(template)
        }
        if (course.isMostPopularCourses) {
            $('.most-popular-courses-box').append(createLayout(template))
        }
    })

    blogs.forEach(blog => {
        let template = `<div class="px-3 col-12 col-sm-6 col-lg-4 col-xl-3 my-3 d-flex flex-column align-items-stretch">
                        <div class="bg-black2 h-100 col-12 rounded-4 d-flex flex-column align-items-stretch justify-content-between gap-3 position-relative shadow-lg">
                            <div>
                                <a href="#">
                                    <div class="blog-img-wrapper position-relative">
                                        <img class="w-100 object-fit-cover rounded-top-4" height="170"
                                            src="${blog.imgSrc}">
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a href="#"
                                    class="d-inline-block color-white1 px-3 m-0 fw-bold course-title w-100">${blog.title}</a>
                            </div>
                            <div>
                                <p class="color-white1 px-3 m-0 text-fs-14px opacity-70 line-clamp-4">${blog.info}</p>
                            </div>
                            <div class="px-3 d-flex align-items-center justify-content-between">
                                <a href="#" class="text-fs-14px teacher-links">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-person color-white1 opacity-75 transition" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z">
                                        </path>
                                    </svg>
                                    <span class="color-white1 opacity-70 transition text-fs-12px text-fs-13px-md">${blog.author}</span>
                                </a>
                                <div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-calendar color-white1 opacity-70"
                                            viewBox="0 0 16 16">
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                        </svg>
                                        <span class="color-white1 opacity-70 text-fs-12px text-fs-13px-md blog-date" dir="ltr"><span class="blog-year">${blog.dateYear}</span>/<span class="blog-month">${blog.dateMonth}</span>/<span class="blog-date">${blog.dateDay}</span></span>
                                    </span>
                                </div>
                            </div>
                            <div class="px-3">
                                <hr class="color-gray1 m-0">
                            </div>
                            <div class="px-3 pb-3 d-flex align-items-center justify-content-center">
                                <a href="#" class="read-blog-links">
                                    <span class="color-white1 transition ms-2">مطالعه مقاله</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-arrow-left-circle-fill color-white1 transition" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>`

        $('.blog-box').append(template)
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        smartSpeed: 600,
        navText: [
            `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg>`
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }

    })

    $('.course-score').each(function () {
        let score = parseFloat($(this).text());
        $(this).text(score.toFixed(1));
    });

    $('.off-price, .main-price').each(function () {
        let price = parseInt($(this).text());
        $(this).text(price.toLocaleString('en-US'));
    });

    function englishToPersianNumbers(str) {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return str.replace(/\d/g, function (digit) {
            return persianNumbers[digit];
        });
    }

    $('.blog-month').each(function () {
        let $this = $(this)
        if (+$this.html() < 10) {
            $this.html(`0${+$this.html()}`)
        }
    })

    $('.off-price, .main-price, .course-students, .course-score, .off-box, .courses-count, .blog-year, .blog-month, .blog-date, .telephone, .cart-box-courses-count').each(function () {
        let $this = $(this);
        $this.html(englishToPersianNumbers($this.text()));
    });

    $('.off-price').each(function () {
        let $this = $(this);

        if ($this.html() == '۰') {
            let $parent = $this.parent()
            $parent.html('<p class="m-0 color-green1 fw-bold off-price d-flex align-items-center justify-content-center col-12">رایگان!</p>')
        }
    })

    $('.off-box').each(function () {
        let $this = $(this);

        if ($this.html().trim() == '۰%') {
            $this.css('display', 'none')

            let mainPrice = $this.parent().children()[6].children[1].children[0]
            $(mainPrice).addClass('d-none')

            let students = $this.parent().children()[6].children[0]
            $(students).removeClass('pt-3')

            let info = $this.parent().children()[3]
            $(info).css('padding-bottom', '21px')
        }
    })

    function hideCartBox() {
        $('.cart-box').removeClass('active-cart-box');
        $('.blur-overlay').removeClass('active-blur-overlay');
    }

    $('.cart-btn').click((event) => {
        event.stopPropagation();
        $('.cart-box').toggleClass('active-cart-box');
        $('.blur-overlay').toggleClass('active-blur-overlay');
    })

    $('.cart-box').click((event) => {
        event.stopPropagation();
    })

    $('.blur-overlay').click(() => {
        hideCartBox()
    })

    // auth page
    let searchParams = new URLSearchParams(location.search)
    let searchActionParam = searchParams.get('action')

    console.log(searchActionParam)
});