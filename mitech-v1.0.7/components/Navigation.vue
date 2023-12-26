<template>
    <ul>
        <li>
            <nuxt-link to="/" @click="setLocal()">
                <span>Home</span>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/search" @click="setLocal()">
                <span>Article</span>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/institutionlist" @click="setLocal()">
                <span>Institution</span>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/institutionlist" @click="setLocal()">
                <span>Scholar</span>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/messagecenter" @click="setLocal()">
                <span>Message</span>
            </nuxt-link>
        </li>

    </ul>
</template>