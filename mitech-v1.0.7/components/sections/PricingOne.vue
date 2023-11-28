<template>
    <div class="pricing-table-area section-space--pb_70 bg-gradient">
        <div class="pricing-table-title-area position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                            <h6 class="section-sub-title mb-20">Pricing and plan</h6>
                            <h3 class="section-title">1 monthly fee for <span>all IT services.</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-table-content-area">
            <div class="container">
                <div class="row pricing-table-one">
                    <div class="col-md-6 col-lg-4 pricing-table wow move-up" v-for="(pricing, index) in pricingData" :key="index">
                        <div class="pricing-table__inner">
                            <div class="pricing-table__feature-mark" v-if="pricing.isPopular">
                                <span>Popular Choice</span>
                            </div>
                            <div class="pricing-table__header">
                                <h6 class="sub-title">{{ pricing.plan }}</h6>
                                <div class="pricing-table__image">
                                    <img :src="pricing.icon" class="img-fluid" alt="icon">
                                </div>
                                <div class="pricing-table__price-wrap">
                                    <h6 class="currency">{{ pricing.currency }}</h6>
                                    <h6 class="price">{{ pricing.price }}</h6>
                                    <h6 class="period">{{ pricing.period }}</h6>
                                </div>
                            </div>
                            <div class="pricing-table__body">
                                <div class="pricing-table__footer">
                                    <button class="ht-btn ht-btn-md" :class="{'ht-btn--outline': !pricing.active}">Get started</button>
                                </div>
                                <ul class="pricing-table__list text-left">
                                    <li v-for="list in pricing.lists" :key="list.id">
                                        {{ list }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pricingData from '~/data/pricing.json';

    export default {
        data () {
            return {
                pricingData
            }
        }
    };
</script>