<template>
    <div class="test-main">
        hhhh!!!
        <li>error!!</li>
        wuwuwu!!
        l
        l
        l
        l
        l
        l
        l
        l
        <li></li>
        <li></li><li></li><li></li><li></li><li></li>
    </div>
</template>
<script>
export default {
    mounted() {
        var color=useColor()
        console.log(color.value)
        color.value="black"
        var color2=useColor()
        console.log(color2.value)
    
    }

}

</script>