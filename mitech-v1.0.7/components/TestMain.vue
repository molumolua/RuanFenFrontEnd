<template>
    <div class="test-main">
        hhhh!!!
        <li>error!!</li>
        wuwuwu!!
        <div class="btn test_todo">
            test!!
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {

}
</script>
        var color2=useColor()
        console.log(color2.value)
        


        const data = ref(null)
        data.value=fetchData()
        console.log(data)
    }

}
const fetchData = async () => {
    try {
        const response = await axios.get('https://api.example.com/data');
        // 处理响应
    } catch (error) {
        // 处理错误
    }
}
</script>
<style lang="scss" scoped>

.test_todo{
    display: table-cell;
    font-size: 20px;
}

</style>