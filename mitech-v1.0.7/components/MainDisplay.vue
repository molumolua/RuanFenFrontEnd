<template>
    <div>
        <div class="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 wow move-up" v-for="item in data" :key="item.id">
                        <div class="fun-fact--two text-center">
                            <div class="fun-fact__count counter">
                                <nuxt-link to="/institutionlist">{{ item.count }}</nuxt-link>
                                <!-- <span>{{ item.count }}</span> -->
                            </div>
                            <h6 class="fun-fact__text">{{ item.text }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container section-space--pb_30 section-space--pt_60">
            <div class="row">
                <div class="sidebar-widget-fluid widget-blog-recent-post wow move-up show-box">
                    <h4 class="sidebar-widget-title">Hot Topic Papers</h4>
                    <ul>
                        <li v-for="blog in blogPosts.slice(0, 5)" :key="blog.id">
                            <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                        </li>
                    </ul>
                </div>   
                <div class="sidebar-widget-fluid widget-blog-recent-post wow move-up show-box">
                    <h4 class="sidebar-widget-title">Recent Papers</h4>
                    <ul>
                        <li v-for="blog in blogPosts.slice(0, 5)" :key="blog.id">
                            <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                        </li>
                    </ul>
                </div>  
            </div>   
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                "data": [
                    {
                        "title": "Successfully work <br> with",
                        "count": "5000w+",
                        "text": "Collected papers"
                    },
                    {
                        "title": "Successfully <br> completed",
                        "count": "780+",
                        "text": "Settled scholars"
                    },
                    {
                        "title": "Recruit more <br> than",
                        "count": 65073,
                        "text": "Related fields"
                    },
                    // {
                    //     "title": "Blog <br> update ",
                    //     "count": 980,
                    //     "text": "Resident users"
                    // },
                    {
                        "text":"Related Institutions",
                        "count":107712
                    }
                ],
                "blogPosts": [
                    {
                        "id": 1,
                        "image": "/images/blog/blog-01-370x230.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "February 28, 2020",
                        "title": "5 Ways Technology Has Improved Business Today",
                        "slug": "5-ways-technology-has-improved-business-today",
                        "desc": "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses.",
                        "authorName": "Harry Ferguson",
                        "authorThumb": "/images/team/admin.jpeg"
                    },
                    {
                        "id": 2,
                        "image": "/images/blog/blog-02-370x230.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "January 15, 2020",
                        "title": "How Wireless Technology is Changing Business",
                        "slug": "how-wireless-technology-is-changing-business",
                        "desc": "It is far wiser to do your own installations and ensure that all data flowing through the organization has end-to-end encryption.",
                        "authorName": "Yeasin Rony",
                        "authorThumb": "/images/team/admin.jpeg"
                    },
                    {
                        "id": 3,
                        "image": "/images/blog/blog-03-370x230.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "March 24, 2020",
                        "title": "Blockchain Technology Effects on Logistics Sector?",
                        "slug": "blockchain-technology-effects-on-logistics-sector",
                        "desc": "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses.",
                        "authorName": "Jon Doe",
                        "authorThumb": "/images/team/admin.jpeg"
                    },
                    {
                        "id": 4,
                        "image": "/images/blog/blog-08-770x420.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "January 18, 2019",
                        "postView": 320,
                        "title": "How Technology Made Businesses More Efficient",
                        "slug": "how-technology-made-businesses-more-efficient",
                        "desc": "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
                        "authorName": "Harry Ferguson",
                        "authorThumb": "/images/team/admin.jpeg"
                    },
                    {
                        "id": 5,
                        "image": "/images/blog/blog-07-770x420.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "February 25, 2020",
                        "postView": 95,
                        "title": "Data Secure on Transitioning to a New Office",
                        "slug": "data-secure-on-transitioning-to-a-new-office",
                        "desc": "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
                        "authorName": "Tasnim Akter",
                        "authorThumb": "/images/team/admin.jpeg"
                    },
                    {
                        "id": 6,
                        "image": "/images/blog/blog-05-770x420.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "February 25, 2020",
                        "postView": 56,
                        "title": "How Wireless Technology is Changing Business",
                        "slug": "how-wireless-technology-is-changing-your-business",
                        "desc": "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
                        "authorName": "Yeasin Rony",
                        "authorThumb": "/images/team/admin.jpeg"
                    },
                    {
                        "id": 7,
                        "image": "/images/blog/blog-02-770x420.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "July 17, 2020",
                        "postView": 480,
                        "title": "The Keys to Persuading Customers Nowadays",
                        "slug": "the-keys-to-persuading-customers-nowadays",
                        "desc": "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
                        "authorName": "xyz",
                        "authorThumb": "/images/team/admin.jpeg"
                    },
                    {
                        "id": 8,
                        "image": "/images/blog/blog-05-770x420.jpg",
                        "category": "Success Story, Tips",
                        "postDate": "March 12, 2020",
                        "postView": 235,
                        "title": "7 Ways Technology Has Improved Business Today",
                        "slug": "7-ways-technology-has-improved-business-today",
                        "desc": "They play a role in making operations more seamless, bridging the gap between authorities, consumers and businesses....",
                        "authorName": "Jon Doe",
                        "authorThumb": "/images/team/admin.jpeg"
                    }
                ],
            }
        }
    };
</script>

<style lang="scss" scoped>
.show-box{
    display: inline-block;
    width: 50%;
}
</style>