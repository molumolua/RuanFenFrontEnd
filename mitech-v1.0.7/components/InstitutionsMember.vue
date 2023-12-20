<template>
    <div class="team-member-wrapper section-space--pt_100 section-space--pb_70">
        <div class="container">
            <div class="row ht-team-member-style-three">
                <div class="col-lg-3 col-md-6 text-center wow move-up" v-for="teamMember in teamMembers.slice((nowpage-1)*one_page, (nowpage-1)*one_page+one_page)" :key="teamMember.id">
                    <Member :teamMember="teamMember" />
                </div>
            </div>
            <div class="ht-pagination mt-30 pagination justify-content-center">
                <div class="pagination-wrapper">
                    <ul class="pagination">
                        <li class="page-item" v-bind:class="{ disabled: nowpage==1 }" @click="lastpage()"><a>PREV</a></li>
                        <li class="page-item" v-for="page in pagelist" :key="page.id" v-bind:class="{ active: nowpage==page }" @click="setpage(page)"><a>{{ page }}</a></li>
                        <!-- <li class="page-item"><a href="#">2</a></li>
                        <li class="page-item"><a href="#">3</a></li>
                        <li class="page-item"><a href="#">4</a></li> -->
                        <li class="page-item" v-bind:class="{ disabled: nowpage==maxpage }" @click="nextpage()"><a>Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Member from '@/components/Member';

    export default {
        components: {
            Member,
        },
        data () {
            return {
                maxpage:2,
                pagelist:[1,2],
                nowpage:1,
                one_page:8,
                "teamMembers": [
                    {
                        "id": 1,
                        "image": "/images/team/team-member-01-370x250.jpg",
                        "name": "Dollie Horton",
                        "designation": "Marketing",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 2,
                        "image": "/images/team/team-member-07-370x250.jpg",
                        "name": "Stephen Mearsley",
                        "designation": "President & CEO",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 3,
                        "image": "/images/team/team-member-04-370x250.jpg",
                        "name": "Maggie Strickland",
                        "designation": "Financial Services",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 4,
                        "image": "/images/team/team-member-02-370x250.jpg",
                        "name": "Monica Blews",
                        "designation": "Project manager",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 5,
                        "image": "/images/team/team-member-07-370x455.jpg",
                        "name": "Dollie Horton",
                        "designation": "Marketing",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 6,
                        "image": "/images/team/team-member-01-370x455.jpg",
                        "name": "Stephen Mearsley",
                        "designation": "President & CEO",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 7,
                        "image": "/images/team/team-member-06-370x455.jpg",
                        "name": "Maggie Strickland",
                        "designation": "Financial Services",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 8,
                        "image": "/images/team/team-member-04-370x452.jpg",
                        "name": "Monica Blews",
                        "designation": "Project manager",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 9,
                        "image": "/images/team/team-member-05-370x452.jpg",
                        "name": "Monica Blews",
                        "designation": "Project manager",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 10,
                        "image": "/images/team/team-member-03-370x452.jpg",
                        "name": "Monica Blews",
                        "designation": "Project manager",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    },
                    {
                        "id": 11,
                        "image": "/images/team/team-member-02-370x452.jpg",
                        "name": "Monica Blews",
                        "designation": "Project manager",
                        "fbUrl": "https://www.facebook.com",
                        "twitterUrl": "https://twitter.com",
                        "instagramUrl": "https://www.instagram.com"
                    }
                ],
            }
        },
        methods:{
            nextpage(){
                this.$data.nowpage=this.$data.nowpage+1;
            },
            lastpage(){
                this.$data.nowpage=this.$data.nowpage-1;
            },
            setpage(p){
                this.$data.nowpage=p;
            }

        }
        
    };
</script>