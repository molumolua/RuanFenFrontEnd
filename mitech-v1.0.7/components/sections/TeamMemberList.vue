<template>
    <div class="list-member-area section-space--pb_70">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 team_member-list mb-30" v-for="widget in data.teamMemberWidget" :key="widget.id">
                    <h6 class="team__title mb-20">{{ widget.widgetTitle }}</h6>
                    <ul class="footer-widget__list">
                        <li v-for="list in widget.teamMemberList" :key="list.id">
                            <nuxt-link to="/" class="hover-style-default">{{ list.title }}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/team.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>