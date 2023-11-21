<template>
    <div class="error404 bg-cover" :style="{ backgroundImage: `url('/images/bg/page-404-bg.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="error-image">
                        <img class="img-fluid" src="/images/other/page-404-image.png" alt="Not Found Image">
                    </div>
                    <h1 class="error-404-title font-weight--light text-white" v-if="error.statusCode === 404">Oops! Page not found!</h1>
                    <h1 class="error-404-title font-weight--light text-white" v-else>An error occurred</h1>
                    <div class="error-buttons section-space--mt_30">
                        <button class="ht-btn ht-btn-md" @click="$router.go(-1)">
                            <span class="button-icon mr-2">
                                <i class="fa fa-home"></i>
                            </span>
                            <span class="button-text">Go back to homepage</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss" scoped>
    .error404 {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-attachment: fixed;
        .error-image {
            max-width: 60%;
            margin: auto;
            // res
            @media #{$tablet-device}{
                max-width: 80%;
            }
            @media #{$large-mobile}{
                max-width: 100%;
            }
        }
    }
</style>