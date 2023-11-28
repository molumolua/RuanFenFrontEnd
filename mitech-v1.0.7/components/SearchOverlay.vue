<template>
    <div class="search-overlay" id="search-overlay">
        <div class="search-overlay__header">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-6 ms-auto col-4">
                        <div class="search-content text-end">
                            <span class="mobile-navigation-close-icon" id="search-close-trigger" @click="toggleClass('removeClass', 'active')"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-overlay__inner">
            <div class="search-overlay__body">
                <div class="search-overlay__form">
                    <form>
                        <input type="text" placeholder="Search">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            // offcanvas search close
            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            }
        }
    };
</script>