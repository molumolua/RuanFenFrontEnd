<template>
    <div class="fun-fact-wrapper bg-gray section-space--pb_30 section-space--pt_60">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="fun-fact--four text-center">
                        <div class="icon">
                            <i class="far fa-smile-beam"></i>
                        </div>
                        <div class="fun-fact-text">
                            <div class="fun-fact__count counter">1790</div>
                            <h6 class="fun-fact__text">Happy clients</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="fun-fact--four text-center">
                        <div class="icon">
                            <i class="far fa-folder"></i>
                        </div>
                        <div class="fun-fact-text">
                            <div class="fun-fact__count counter">920</div>
                            <h6 class="fun-fact__text">Finished projects</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="fun-fact--four text-center">
                        <div class="icon">
                            <i class="far fa-user"></i>
                        </div>
                        <div class="fun-fact-text">
                            <div class="fun-fact__count counter">245</div>
                            <h6 class="fun-fact__text">Experienced experts</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import data from '../data/funfact.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>