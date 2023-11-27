<template>
    <div class="team-member-wrapper section-space--pt_100 section-space--pb_70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title section-space--mb_60 text-center">
                        <h3 class="heading" v-html="data.leadershipHeading"></h3>
                    </div>
                </div>
            </div>
            <div class="row ht-team-member-style-two">
                <div class="col-lg-4 col-md-6 text-center wow move-up" v-for="teamMember in data.teamMembers.slice(4, 7)" :key="teamMember.id">
                    <TeamMember :teamMember="teamMember" />
                </div>
            </div>
            <div class="row ht-team-member-style-three">
                <div class="col-lg-3 col-md-6 text-center wow move-up" v-for="teamMember in data.teamMembers.slice(7, 11)" :key="teamMember.id">
                    <TeamMember :teamMember="teamMember" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import TeamMember from '@/components/TeamMember';

    import data from '../../data/team.json';
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