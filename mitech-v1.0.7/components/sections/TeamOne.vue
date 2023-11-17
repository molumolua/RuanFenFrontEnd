<template>
    <div class="team-member-wrapper section-space--pt_100 section-space--pb_40">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="section-title section-space--mb_60">
                        <h3 class="heading" v-html="data.sectionTitle"></h3>
                        <p class="text mt-30">{{ data.sectionSubTitle }}</p>
                        <div class="sider-title-button-box mt-30">
                            <nuxt-link to="/leadership" class="ht-btn ht-btn-md">Join us now</nuxt-link>
                            <nuxt-link to="/leadership" class="btn-text font-weight--bold small-mt__20">
                                View all team 
                                <i class="ms-1 button-icon fas fa-arrow-right ms-1"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 ht-team-member-style-one">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 wow move-up" v-for="teamMember in data.teamMembers.slice(0, 4)" :key="teamMember.id">
                            <TeamMember :teamMember="teamMember" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/team.json';

    import TeamMember from '@/components/TeamMember';
    export default {
        components: {
            TeamMember,
        },
        data () {
            return {
                data
            }
        }
    };
</script>