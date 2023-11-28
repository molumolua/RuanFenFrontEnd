<template>
    <div class="grid-item">
        <div class="ht-team-member">
            <div class="team-image">
                <img class="img-fluid" :src="teamMember.image" alt="team member">
                <div class="social-networks">
                    <div class="inner">
                        <a target="_blank" :href="teamMember.fbUrl" class=" hint--bounce hint--top hint--theme-two" aria-label="Facebook"><i class="fab fa-facebook"></i>
                        </a>
                        <a target="_blank" :href="teamMember.twitterUrl" class=" hint--bounce hint--top hint--theme-two" aria-label="Twitter"><i class="fab fa-twitter"></i>
                        </a>
                        <a target="_blank" :href="teamMember.instagramUrl" class=" hint--bounce hint--top hint--theme-two" aria-label="Instagram"><i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="team-info ">
                <h5 class="name">{{ teamMember.name }}</h5>
                <div class="position">{{ teamMember.designation }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['teamMember']
    };
</script>