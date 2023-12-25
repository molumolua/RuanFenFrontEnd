// state.ts

/**简单数据类型示例 */
export var useColor = () => useState<string>('color', () => 'red')
export var useToken= () => useState<string>("Token",()=>"")
export var useUserName= () => useState<string>("UserName",() => "")


export var useInsid = () => useState<string>('Insid', () => "")
export var useInsName = () => useState<string>('InsName', () => "Default Name")

export var useSCIid = () => useState<string>('SCIid', () => "")

export const useAccessToken=() => useState<string>("AccessToken",()=> "24.cb35e9d56c4fe549237b59fc2c4b9f73.2592000.1705819664.282335-45508337")
interface AIMessage{
    role: string,
    content: number
}
export var useAIMessageList=() => useState<Array<AIMessage>>("AIMessageList",()=>[])
export var useRawAIMessageList=() => useState<Array<AIMessage>>("RawAIMessageList",()=>[])


export var useChartData=() => useState<Array<number>>("ChartData",()=>[])

/**复杂数据类型示例 */
interface test{
    /**姓名 */
    name: string,
    /**年龄 */
    age: number
    /**数组 */
    arr: number[]
}
export const usePeople = () =>  useState<test>('people',()=>({ //箭头函数return对象时的简写
    name: '小明',
    age: 18,
    arr: [1,2]
}))

const enduring: { [key: string]: () => Ref<any> } = {
    useInsid,useInsName,useAIMessageList,useRawAIMessageList,useUserName,useToken,useSCIid
}
//下面的俩函数在app.vue的onMounted中统一调用，或者在其它情况挂载后单独调用。
/**把所有指定数据保存到本地存储 
 * @param key 要保存的数据名。不填的话就是保存全部（一般不填，统一在页面关闭时保存。如果是特别重要的数据，就时不时单独保存一下即可。）
 */
export const setLocal = (key?: string) => {
    if (key) {
        console.log('只保存', key);
        const useKey = 'use' + key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase();//首字母大写，其它全部转小写
        const func = enduring[useKey]
        if (!func) {
            console.log('没有找到', useKey, '对应的函数');
            return
        }
        localStorage.setItem(key, JSON.stringify(func().value))
    } else {
        console.log('正在保存全部数据');
        for (const key in enduring) {
            if (Object.prototype.hasOwnProperty.call(enduring, key)) {
                const element = enduring[key];
                const setKey = key.toLowerCase().substring(3)//去掉前面的use ，其它全部转小写
                try {
                    console.log(setKey+"     "+element().value)
                    localStorage.setItem(setKey, JSON.stringify(element().value))
                } catch (error) {
                    console.log(`在设置${setKey}的数据时出现错误`, error);
                }
            }
        }
        console.log('保存成功');
    }
}
/**从本地存储获取数据到state中 */
export const getLoacl = () => {
    for (const key in enduring) {
        if (Object.prototype.hasOwnProperty.call(enduring, key)) {
            const element = enduring[key];
            const setKey = key.toLowerCase().substring(3)//去掉前面的use ，其它全部转小写
            try {
                const localData = localStorage.getItem(setKey) || ''
                if (localData) {
                    element().value = JSON.parse(localData)
                    console.log(setKey, '的本地存储数据获取成功', element().value);
                }
            } catch (error) {
                console.log(`在获取${setKey}的数据时出现错误`, error);
            }
        }
    }
}