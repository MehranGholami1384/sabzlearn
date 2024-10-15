import {
    courses,
    blogs
} from './database.js';
$(document).ready(function () {

    mainFunction().then(() => {
        $('.loading-overlay').fadeOut(500, function () {
            $('html, body').removeClass('no-scroll')
        });
    })

});

function mainFunction() {
    return new Promise(function (resolve) {
        function setLocalStorage(key, value) {
            localStorage.setItem(key, value)
        }

        function getLocalStorage(key) {
            return localStorage.getItem(key)
        }

        function removeLocalStorageItem(key) {
            localStorage.removeItem(key)
        }

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

        function createLayou2(template) {
            let layout = document.createElement('div')
            layout.className = 'px-3 col-12 col-sm-6 col-xl-4 my-3'
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
                                        <span class="color-white1 opacity-70 transition">${course.teacher}</span>
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

        const coursesPerPage = 12;

        function setActiveButton(button) {
            $('.page-btn').removeClass('active-page-btn');

            $(button).addClass('active-page-btn');
        }

        function renderCourses(page) {
            let array = null
            if (JSON.parse(getLocalStorage(getLocalStorage('show-type')))) {
                array = JSON.parse(getLocalStorage(getLocalStorage('show-type')))
            } else {
                if (JSON.parse(getLocalStorage(getLocalStorage('sort-type')))) {
                    array = JSON.parse(getLocalStorage(getLocalStorage('sort-type')))
                } else {
                    array = courses
                }
            }
            const start = (page - 1) * coursesPerPage;
            const end = start + coursesPerPage;
            const currentCourses = array.slice(start, end);

            $('.courses-box').empty();
            setTimeout(function () {
                currentCourses.forEach(course => {
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
                                            <span class="color-white1 opacity-70 transition">${course.teacher}</span>
                                        </a>
                                        <div>
                                            <span>
                                                <span class="color-yellow2 course-score-courses-page">${course.score}</span>
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
                                            <p class="main-price-courses-page m-0 color-white1 opacity-70 text-fs-14px text-decoration-line-through">
                                                ${course.price}</p>
                                            <div class="d-flex">
                                                <p class="m-0 color-green1 fw-bold off-price-courses-page">${calculateDiscountedPrice(course.price, course.offPercent)}</p>
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
                    $('.courses-box').append(createLayou2(template));
                });

                priceModifier4()
                scoreModifier2()
                englishToPersianNumbers2()
                priceModifier5()
                priceModifier2()
            }, 100)
        }

        function setupPagination() {
            let array = null
            if (JSON.parse(getLocalStorage(getLocalStorage('show-type')))) {
                array = JSON.parse(getLocalStorage(getLocalStorage('show-type')))
            } else {
                if (JSON.parse(getLocalStorage(getLocalStorage('sort-type')))) {
                    array = JSON.parse(getLocalStorage(getLocalStorage('sort-type')))
                } else {
                    array = courses
                }
            }
            const pageCount = Math.ceil(array.length / coursesPerPage);
            $('.btns-list-container').empty();

            for (let i = 1; i <= pageCount; i++) {
                $('.btns-list-container').append(`<button class="page-btn btn color-white1 px-3 py-2 rounded-3 bg-black2 transition" data-page="${i}">${i}</button>`);
            }

            $($('.page-btn')[0]).addClass('active-page-btn')

            $('.page-btn').click(function () {
                setActiveButton($(this))
                const page = $(this).data('page');
                renderCourses(page);

                priceModifier4()
                scoreModifier2()
                englishToPersianNumbers2()
                priceModifier5()
                priceModifier2()

                $('html, body').animate({
                    scrollTop: $('.courses-container').offset().top
                }, 100);
            });
        }

        setupPagination();
        renderCourses(1);

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

        function scoreModifier() {
            $('.course-score').each(function () {
                let score = parseFloat($(this).text());
                $(this).text(score.toFixed(1));
            });
        }

        function scoreModifier2() {
            $('.course-score-courses-page').each(function () {
                let score = parseFloat($(this).text());
                $(this).text(score.toFixed(1));
            });
        }

        scoreModifier()

        function priceModifier3() {
            $('.off-price, .main-price').each(function () {
                let price = parseInt($(this).text());
                $(this).text(price.toLocaleString('en-US'));
            });
        }

        function priceModifier4() {
            $('.off-price-courses-page, .main-price-courses-page').each(function () {
                let price = parseInt($(this).text());
                $(this).text(price.toLocaleString('en-US'));
            });
        }

        priceModifier3()

        function coursesCountModifier() {
            let array = null
            if (JSON.parse(getLocalStorage(getLocalStorage('show-type')))) {
                array = JSON.parse(getLocalStorage(getLocalStorage('show-type')))
            } else {
                if (JSON.parse(getLocalStorage(getLocalStorage('sort-type')))) {
                    array = JSON.parse(getLocalStorage(getLocalStorage('sort-type')))
                } else {
                    array = courses
                }
            }

            $('.courses-count').html(`${array.length} عنوان آموزشی`)
        }

        coursesCountModifier()

        if (getLocalStorage('value')) {
            $('.bottom-sheet-btn span').html(getLocalStorage('value'))
        } else {
            $('.bottom-sheet-btn span').html('همه دوره‌ها')
        }

        $('.sort-btn').each(function () {
            if ($(this).data('id') === getLocalStorage('sort-type')) {
                $('.sort-btn').removeClass('active-sort')
                $(this).addClass('active-sort')
            } else if (!getLocalStorage('sort-type')) {
                $('.sort-btn').removeClass('active-sort')
                $('.sort-btn:first').addClass('active-sort')
            }
        })

        $('.sort-btn').click(function () {
            $('.sort-btn').removeClass('active-sort')
            $(this).addClass('active-sort')

            let sort = $(this).data('id')
            setLocalStorage('sort-type', sort)

            if (sort === 'cheap') {
                const sortedNonFreeCourses = courses
                    .filter(course => course.offPercent < 100)
                    .sort((a, b) => {
                        const finalPriceA = a.price - (a.price * (a.offPercent / 100));
                        const finalPriceB = b.price - (b.price * (b.offPercent / 100));

                        return finalPriceA - finalPriceB;
                    });

                setLocalStorage(sort, JSON.stringify(sortedNonFreeCourses))
            } else if (sort === 'default') {
                setLocalStorage(sort, JSON.stringify(courses))
            } else if (sort === 'expensive') {
                const sortedCourses = courses
                    .filter(course => course.offPercent < 100)
                    .sort((a, b) => {
                        const finalPriceA = a.price - (a.price * (a.offPercent / 100));
                        const finalPriceB = b.price - (b.price * (b.offPercent / 100));

                        return finalPriceB - finalPriceA;
                    })
                    .concat(courses.filter(course => course.offPercent === 100));

                setLocalStorage(sort, JSON.stringify(sortedCourses))
            } else if (sort === 'popular') {
                const sortedCourses = courses.slice().sort((a, b) => b.students - a.students);
                setLocalStorage(sort, JSON.stringify(sortedCourses))
            }

            coursesCountModifier()
            setupPagination()
            renderCourses(1);
        })

        $('.bottom-sheet-link').each(function () {
            let icon = $(this).find('.bottom-sheet-icon')
            if ($(this).data('id') === getLocalStorage('sort-type')) {
                $('.bottom-sheet-link').removeClass('active-bottom-sheet-link')
                $('.bottom-sheet-icon').removeClass('active-bottom-sheet-icon')
                $(this).addClass('active-bottom-sheet-link')
                icon.addClass('active-bottom-sheet-icon')
            } else if (!getLocalStorage('sort-type')) {
                $('.bottom-sheet-link').removeClass('active-bottom-sheet-link')
                $('.bottom-sheet-icon').removeClass('active-bottom-sheet-icon')
                $('.bottom-sheet-link:first').addClass('active-bottom-sheet-link')
                $('.bottom-sheet-icon:first').addClass('active-bottom-sheet-icon')
            }
        })

        $('.bottom-sheet-link').click(function () {
            let icon = $(this).find('.bottom-sheet-icon')
            $('.bottom-sheet-link').removeClass('active-bottom-sheet-link')
            $('.bottom-sheet-icon').removeClass('active-bottom-sheet-icon')
            $(this).addClass('active-bottom-sheet-link')
            icon.addClass('active-bottom-sheet-icon')

            let sort = $(this).data('id')
            let value = $(this).data('value')
            console.log(value)
            setLocalStorage('sort-type', sort)
            setLocalStorage('value', value)

            if (sort === 'cheap') {
                const sortedNonFreeCourses = courses
                    .filter(course => course.offPercent < 100)
                    .sort((a, b) => {
                        const finalPriceA = a.price - (a.price * (a.offPercent / 100));
                        const finalPriceB = b.price - (b.price * (b.offPercent / 100));

                        return finalPriceA - finalPriceB;
                    });

                setLocalStorage(sort, JSON.stringify(sortedNonFreeCourses))
            } else if (sort === 'default') {
                setLocalStorage(sort, JSON.stringify(courses))
            } else if (sort === 'expensive') {
                const sortedCourses = courses
                    .filter(course => course.offPercent < 100)
                    .sort((a, b) => {
                        const finalPriceA = a.price - (a.price * (a.offPercent / 100));
                        const finalPriceB = b.price - (b.price * (b.offPercent / 100));

                        return finalPriceB - finalPriceA;
                    })
                    .concat(courses.filter(course => course.offPercent === 100));

                setLocalStorage(sort, JSON.stringify(sortedCourses))
            } else if (sort === 'popular') {
                const sortedCourses = courses.slice().sort((a, b) => b.students - a.students);
                setLocalStorage(sort, JSON.stringify(sortedCourses))
            }

            $('.bottom-sheet-btn span').html(value)
            coursesCountModifier()
            setupPagination()
            renderCourses(1);
            closeBottomSheet()

            $('html, body').animate({
                scrollTop: $('.filter-container').offset().top - 30
            }, 100);
        })

        function activeOnlyFreeCourses(elem) {
            elem.addClass('active-toggle-btn')
            $('.toggle-marker').addClass('active-toggle-marker')
        }

        function disableOnlyFreeCourses(elem) {
            elem.removeClass('active-toggle-btn')
            $('.toggle-marker').removeClass('active-toggle-marker')
        }

        if (getLocalStorage('show-type')) {
            activeOnlyFreeCourses($('.toggle-btn'))
            activeOnlyFreeCourses($('.mobile-toggle-btn'))
        }

        $('.toggle-btn').click(function () {
            let $this = $(this)
            if (!$this.hasClass('active-toggle-btn')) {
                activeOnlyFreeCourses($this)

                setLocalStorage('show-type', $this.data('id'))

                const freeCourses = courses.filter(course => course.offPercent === 100);

                setLocalStorage($this.data('id'), JSON.stringify(freeCourses))

                coursesCountModifier()
                setupPagination()
                renderCourses(1);
            } else {
                disableOnlyFreeCourses($this)
                removeLocalStorageItem('show-type')

                coursesCountModifier()
                setupPagination()
                renderCourses(1);
            }
        })

        $('.mobile-toggle-btn').click(function () {
            let $this = $(this)
            if (!$this.hasClass('active-toggle-btn')) {
                activeOnlyFreeCourses($this)

                setLocalStorage('show-type', $this.data('id'))

                const freeCourses = courses.filter(course => course.offPercent === 100);

                setLocalStorage($this.data('id'), JSON.stringify(freeCourses))
            } else {
                disableOnlyFreeCourses($this)
                removeLocalStorageItem('show-type')
            }
        })

        $('.remove-filters').click(function () {
            $('.filter').removeClass('open-filter')
            $('body').removeClass('no-scroll')

            removeLocalStorageItem('show-type')
            if (!getLocalStorage('show-type')) {
                disableOnlyFreeCourses($('.toggle-btn'))
                disableOnlyFreeCourses($('.mobile-toggle-btn'))
            }
            coursesCountModifier()
            setupPagination()
            renderCourses(1);
        })

        $('.apply-filters-btn').click(function () {
            $('.filter').removeClass('open-filter')
            $('body').removeClass('no-scroll')

            coursesCountModifier()
            setupPagination()
            renderCourses(1);
        })

        $('.courses-category-filter-checkbox').change(function () {
            let checkboxMarker = $(this).parent()[0].children[1]
            $(checkboxMarker).toggleClass('active-checkbox-marker')
        });

        function categorySlideToggle(className, elem) {
            let sideNavbarSubMenu = $(className);

            if (sideNavbarSubMenu.is(':visible')) {
                sideNavbarSubMenu.slideUp(450, function () {
                    sideNavbarSubMenu.css('display', 'none');
                    $(elem).addClass('deg0').removeClass('deg180')
                });
            } else {
                sideNavbarSubMenu.css('display', 'flex').hide().slideDown(450);
                $(elem).addClass('deg180').removeClass('deg0')
            }
        }

        $('.category-filter-slide-chevron-down').click(function () {
            categorySlideToggle($('.category-filter-slide'), $(this))
        })

        $('.checkbox-marker').click(function () {
            $(this).toggleClass('active-checkbox-marker')
        })

        function closeBottomSheet() {
            $('.bottom-sheet-overlay').removeClass('active-overlay')
            $('.bottom-sheet').removeClass('open-bottom-sheet')
            $('body').removeClass('no-scroll')
        }

        $('.bottom-sheet-btn').click(function () {
            $('.bottom-sheet').addClass('open-bottom-sheet')
            $('body').addClass('no-scroll')
            $('.bottom-sheet-overlay').addClass('active-overlay')
        })

        $('.bottom-sheet-overlay').click(function () {
            closeBottomSheet()
        })

        $('.close-bottom-sheet').click(function () {
            closeBottomSheet()
        })

        $('.bottom-sheet-link').click(function () {
            $('.bottom-sheet-link').removeClass('active-bottom-sheet-link')
            $('.bottom-sheet-icon').removeClass('active-bottom-sheet-icon')

            $(this).addClass('active-bottom-sheet-link')
            let icon = $(this).children()[0].children[1]
            $(icon).addClass('active-bottom-sheet-icon')
        })

        $('.open-filter-btn').click(function () {
            $('.filter').addClass('open-filter')
            $('body').addClass('no-scroll')
            if (getLocalStorage('show-type')) {
                activeOnlyFreeCourses($('.mobile-toggle-btn'))
            }
        })

        $('.close-fitler-btn').click(function () {
            $('.filter').removeClass('open-filter')
            $('body').removeClass('no-scroll')
        })

        $('.filter-slide-chevron-down').click(function () {
            let sideNavbarSubMenu = $('.filter-slide');

            if (sideNavbarSubMenu.is(':visible')) {
                sideNavbarSubMenu.slideUp(450, function () {
                    sideNavbarSubMenu.css('display', 'none');
                    $('.filter-slide-chevron-down-icon').addClass('deg0').removeClass('deg180')
                });
            } else {
                sideNavbarSubMenu.css('display', 'flex').hide().slideDown(450);
                $('.filter-slide-chevron-down-icon').addClass('deg180').removeClass('deg0')
            }
        })

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

        function englishToPersianNumbers2() {
            $('.off-price, .main-price, .course-students, .course-score, .off-box, .courses-count, .blog-year, .blog-month, .blog-date, .telephone, .cart-box-courses-count, .courses-count, .filter-courses-count, .main-price-courses-page, .off-price-courses-page, .course-score-courses-page, .balance').each(function () {
                let $this = $(this);
                $this.html(englishToPersianNumbers($this.text()));
            });
        }

        englishToPersianNumbers2()

        function priceModifier() {
            $('.off-price').each(function () {
                let $this = $(this);

                if ($this.html() == '۰') {
                    let $parent = $this.parent()
                    $parent.html('<p class="m-0 color-green1 fw-bold off-price d-flex align-items-center justify-content-center col-12">رایگان!</p>')
                }
            })
        }

        function priceModifier5() {
            $('.off-price-courses-page').each(function () {
                let $this = $(this);

                if ($this.html() == '۰') {
                    let $parent = $this.parent()
                    $parent.html('<p class="m-0 color-green1 fw-bold off-price d-flex align-items-center justify-content-center col-12">رایگان!</p>')
                }
            })
        }

        function priceModifier2() {
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
        }

        priceModifier()

        priceModifier2()

        function hideCartBox() {
            $('.cart-box').removeClass('active-cart-box');
            $('.blur-overlay').removeClass('active-blur-overlay');
        }

        $('.cart-btn').click((event) => {
            event.stopPropagation();
            $('.cart-btn').toggleClass('z-index-50')
            $('.cart-box').toggleClass('active-cart-box z-index-50');
            $('.blur-overlay').toggleClass('active-blur-overlay z-index-50');
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
        let searchMethodParam = searchParams.get('method')


        if (searchActionParam === 'login') {
            let template
            if (searchMethodParam === 'email') {
                template = `<div class="w-100 d-flex flex-column align-items-center justify-content-center bg-black2 rounded-4">
                        <div class="my-3">
                            <h4 class="color-white1 fw-bold pt-2">ورود با ایمیل</h4>
                        </div>
                        <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                            <p class="m-0 color-white1">حساب کاربری ندارید؟</p>
                            <a href="./auth.html?action=signup" class="color-green1">ثبت نام کنید</a>
                        </div>
                        <form
                            class="form-control bg-black2 border-0 my-3 d-flex gap-4 px-3 px-sm-5 flex-column align-items-center justify-content-center">
                            <div class="w-100 position-relative">
                                <input
                                    class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 email-input color-white1"
                                    type="text" name="phone_number" placeholder="آدرس ایمیل">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor"
                                    class="bi bi-envelope color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                            </div>
                            <div class="w-100 position-relative">
                                <input
                                    class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 password-input color-white1"
                                    type="text" name="phone_number" placeholder="رمز عبور">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor"
                                    class="bi bi-lock color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                                </svg>
                            </div>
                            <button
                                class="w-100 btn color-white1 bg-green1 py-3 rounded-pill submit-auth-btn transition login-btn">ورود</button>
                        </form>
                        <div class="w-100 d-flex align-items-center justify-content-between px-3 px-sm-5 mb-3">
                            <a href="./auth.html?action=login&method=phone_number" class="color-gray2">ورود با موبایل</a>
                            <a href="#">
                                <span class="color-gray2 text-decoration-underline">فراموشی رمز عبور</span>
                            </a>
                        </div>
                    </div>`
                $('title').html('ورود با ایمیل')
            } else if (searchMethodParam === 'phone_number') {
                template = `<div class="w-100 d-flex flex-column align-items-center justify-content-center bg-black2 rounded-4">
                        <div class="my-3">
                            <h4 class="color-white1 fw-bold pt-2">ورود با موبایل</h4>
                        </div>
                        <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                            <p class="m-0 color-white1">حساب کاربری ندارید؟</p>
                            <a href="./auth.html?action=signup" class="color-green1">ثبت نام کنید</a>
                        </div>
                        <form
                            class="form-control bg-black2 border-0 my-3 d-flex gap-4 px-3 px-sm-5 flex-column align-items-center justify-content-center">
                            <div class="w-100 position-relative">
                                <input
                                    class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 phone-number-input color-white1"
                                    type="text" name="phone_number" placeholder="شماره موبایل">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor"
                                    class="bi bi-telephone color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>
                            <button
                                class="w-100 btn color-white1 bg-green1 py-3 rounded-pill submit-auth-btn transition login-btn">ادامه</button>
                        </form>
                        <div class="w-100 d-flex align-items-center justify-content-between px-3 px-sm-5 mb-3">
                            <a href="./auth.html?action=login&method=email" class="color-gray2">ورود با ایمیل</a>
                            <a href="./terms.html">
                                <span class="color-gray2 text-decoration-underline">حریم خصوصی</span>
                            </a>
                        </div>
                    </div>`
                $('title').html('ورود با شماره موبایل')
            }
            $('.auth-box').append(template)
        } else if (searchActionParam === 'signup') {
            let template = `<div class="w-100 d-flex flex-column align-items-center justify-content-center bg-black2 rounded-4">
                            <div class="mt-3">
                                <h4 class="color-white1 fw-bold pt-2">عضویت</h4>
                            </div>
                            <div class="d-flex align-items-center justify-content-center mt-3 gap-2">
                                <p class="m-0 color-white1">قبلا ثبت نام کرده اید؟</p>
                                <a href="./auth.html?action=login&method=phone_number" class="color-green1">وارد شوید</a>
                            </div>
                            <form
                                class="form-control bg-black2 border-0 my-3 d-flex gap-3 px-3 px-sm-5 flex-column align-items-center justify-content-center">
                                <div class="w-100 position-relative">
                                    <input
                                        class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 phone-number-input color-white1"
                                        type="text" name="phone_number" placeholder="نام کاربری">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor"
                                        class="bi bi-person color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    </svg>
                                </div>
                                <div class="w-100 position-relative">
                                    <input
                                        class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 phone-number-input color-white1"
                                        type="text" name="phone_number" placeholder="شماره موبایل">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor"
                                        class="bi bi-telephone color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                </div>
                                <div class="w-100 position-relative">
                                    <input
                                        class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 phone-number-input color-white1"
                                        type="text" name="phone_number" placeholder="آدرس ایمیل">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor"
                                        class="bi bi-envelope color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z">
                                        </path>
                                    </svg>
                                </div>
                                <div class="w-100 position-relative">
                                    <input
                                        class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 phone-number-input color-white1"
                                        type="text" name="phone_number" placeholder="رمز عبور">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor"
                                        class="bi bi-lock color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1">
                                        </path>
                                    </svg>
                                </div>
                                <button
                                    class="w-100 btn color-white1 bg-green1 py-3 rounded-pill submit-auth-btn transition login-btn">ادامه</button>
                            </form>
                        </div>`
            $('title').html('ثبت نام')
            $('.auth-box').append(template)
        } else if (!(searchParams.size)) {
            if (location.pathname === '/auth.html') {
                let template = `<div class="w-100 d-flex flex-column align-items-center justify-content-center bg-black2 rounded-4">
                            <div class="my-3">
                                <h4 class="color-white1 fw-bold pt-2">ورود با موبایل</h4>
                            </div>
                            <div class="d-flex align-items-center justify-content-center my-3 gap-2">
                                <p class="m-0 color-white1">حساب کاربری ندارید؟</p>
                                <a href="./auth.html?action=signup" class="color-green1">ثبت نام کنید</a>
                            </div>
                            <form
                                class="form-control bg-black2 border-0 my-3 d-flex gap-4 px-3 px-sm-5 flex-column align-items-center justify-content-center">
                                <div class="w-100 position-relative">
                                    <input
                                        class="form-control shadow-none bg-gray4 py-3 rounded-3 border-0 phone-number-input color-white1"
                                        type="text" name="phone_number" placeholder="شماره موبایل">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor"
                                        class="bi bi-telephone color-white1 opacity-70 h-100 position-absolute top-0 color-gray2 auth-input-icons"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                    </svg>
                                </div>
                                <button
                                    class="w-100 btn color-white1 bg-green1 py-3 rounded-pill submit-auth-btn transition login-btn">ادامه</button>
                            </form>
                            <div class="w-100 d-flex align-items-center justify-content-between px-3 px-sm-5 mb-3">
                                <a href="./auth.html?action=login&method=email" class="color-gray2">ورود با ایمیل</a>
                                <a href="./terms.html">
                                    <span class="color-gray2 text-decoration-underline">حریم خصوصی</span>
                                </a>
                            </div>
                        </div>`
                $('title').html('ورود با شماره موبایل')
                $('.auth-box').append(template)
            }
        }

        $('.login-btn').click(function (event) {
            event.preventDefault()
            setLocalStorage('login', true)

            if (!JSON.parse(getLocalStorage('user'))) {
                let user = null
                fetch('https://randomuser.me/api/')
                    .then(res => res.json())
                    .then(data => {
                        user = {
                            id: data.results[0].login.uuid,
                            firstName: data.results[0].name.first,
                            lastName: data.results[0].name.last,
                            phoneNumber: data.results[0].cell,
                            email: data.results[0].email,
                            username: data.results[0].login.username,
                            password: data.results[0].login.password,
                            profilePicture: data.results[0].picture.medium
                        }

                        setLocalStorage('user', JSON.stringify(user))
                    })
                    .then(() => window.location.href = './')
            }
        })

        let isLogin = getLocalStorage('login')

        if (isLogin) {
            $('.navbar-wrapper').append(`<button
                        class="btn bg-black3 rounded-circle h-52px px-3 pointer position-relative user-profile-btn transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-person color-white1" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                        <div
                            class="bg-black2 start-0 shadow-lg rounded-3 color-white1 overflow-hidden position-absolute w-300px user-profile-box z-3 transition pointer-event cursor-initial p-3 d-flex flex-column align-items-start justify-content-center">
                            <div
                                class="d-flex align-items-center justify-content-start gap-4 border-bottom w-100 pb-3 border-secondary border-opacity-25">
                                <a href="#"
                                    class="rounded-circle pointer z-3 transition overflow-hidden">
                                    <img width="56" height="56" class="user-profile-picture object-fit-cover" alt="Profile Picture">
                                </a>
                                <div class="d-flex flex-column align-items-start justify-content-center gap-2">
                                    <span class="user-profile-username"></span>
                                    <span class="color-green1 text-fs-14px balance">موجودی: 0 تومان</span>
                                </div>
                            </div>
                            <a href="#"
                                class="mt-2 mb-1 w-100 d-flex align-content-center justify-content-start gap-2 p-2 rounded user-profile-box-links transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-house" viewBox="0 0 16 16">
                                    <path
                                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                </svg>
                                <span>پیشخوان</span>
                            </a>
                            <a href="#"
                                class="my-1 w-100 d-flex align-content-center justify-content-start gap-2 p-2 rounded user-profile-box-links transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-folder" viewBox="0 0 16 16">
                                    <path
                                        d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />
                                </svg>
                                <span>دوره‌های من</span>
                            </a>
                            <a href="#"
                                class="my-1 w-100 d-flex align-content-center justify-content-start gap-2 p-2 rounded user-profile-box-links transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-chat" viewBox="0 0 16 16">
                                    <path
                                        d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                                </svg>
                                <span>تیکت‌ها</span>
                            </a>
                            <a href="#"
                                class="mt-1 mb-2 w-100 d-flex align-content-center justify-content-start gap-2 p-2 rounded user-profile-box-links transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    class="bi bi-person" viewBox="0 0 16 16">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                                <span>جزئیات حساب</span>
                            </a>
                            <div class="w-100 pt-2 border-top border-secondary border-opacity-25">
                                <a
                                    class="color-white1 text-decoration-none w-100 d-flex align-content-center justify-content-start gap-2 p-2 rounded user-profile-box-logout-btn pointer transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                        class="bi bi-power" viewBox="0 0 16 16">
                                        <path d="M7.5 1v7h1V1z" />
                                        <path
                                            d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
                                    </svg>
                                    <span>خروج</span>
                                </a>
                            </div>
                        </div>
                    </button>`)

            $('.user-profile-btn').click(function () {
                $(this).toggleClass('z-index-50')
                $('.user-profile-box').toggleClass('active-user-profile-box z-index-50')
                $('.user-profile-box-overlay').toggleClass('active-user-profile-box-overlay z-index-50')
            })

            $('.user-profile-box-overlay').click(function () {
                $('.user-profile-btn').removeClass('z-index-50')
                $('.user-profile-box').removeClass('active-user-profile-box z-index-50')
                $('.user-profile-box-overlay').removeClass('active-user-profile-box-overlay z-index-50')
            })

            if (JSON.parse(getLocalStorage('user'))) {
                let user = JSON.parse(getLocalStorage('user'))
                $('.user-profile-picture').attr('src', user.profilePicture)
                $('.user-profile-username').html(`${user.firstName} ${user.lastName}`)
            }

            $('.user-profile-box-logout-btn').click(function () {
                removeLocalStorageItem('login')
                removeLocalStorageItem('user')

                window.location.reload()
            })
        } else {
            $('.navbar-wrapper').append(`<a href="./auth.html?action=login&method=phone_number"
                        class="btn bg-black3 rounded-circle h-52px px-3 pointer d-flex align-items-center justify-content-center d-xl-none login-signup-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-box-arrow-right color-white1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                            <path fill-rule="evenodd"
                                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>
                    </a>
                    <a href="./auth.html?action=login&method=phone_number"
                        class="h-52px login-signup-link d-none d-xl-flex align-items-center justify-content-center bg-blue1 rounded-pill pe-3 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-person color-white1" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                        <span class="color-white1 px-3">ورود | عضویت</span>
                    </a>`)
        }

        resolve()
    })
}