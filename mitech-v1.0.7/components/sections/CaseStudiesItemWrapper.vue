<template>
    <div class="projects-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle class="text-center section-space--mb_40" :title="data.sectionTitle" :subTitle="data.sectionSubTitle" />
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="project in data.projects" :key="project.id">
                    <CaseStudiesItem :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SectionTitle from '@/components/SectionTitle';
    import CaseStudiesItem from '@/components/CaseStudiesItem';

    import data from '../../data/caseStidies.json';
    export default {
        components: {
            SectionTitle,
            CaseStudiesItem
        },
        data () {
            return {
                data
            }
        }
    };
</script>