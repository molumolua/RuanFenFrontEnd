// state.ts

/**简单数据类型示例 */
export var useColor = () => useState<string>('color', () => 'red')

export var useInsid = () => useState<string>('Insid', () => "")
export var useInsName = () => useState<string>('InsName', () => "Default Name")

export const useAccessToken=() => useState<string>("AccessToken",()=> "24.cb35e9d56c4fe549237b59fc2c4b9f73.2592000.1705819664.282335-45508337")
interface AIMessage{
    role: string,
    content: number
}
export var useAIMessageList=() => useState<Array<AIMessage>>("AIMessageList",()=>[])

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
