// 这是用于vuex的全局状态管理文件
import { createStore } from 'vuex'

// 创建vuex仓库
export default createStore({
    // 数据源
    state: {
        count: 1,
        user:{
            name:'张三',
            age:18
        }
    },
    // 修改数据  同步调用
    mutations:{
        // 增加count的值的方法
        increment(state,num){
            state.count+=num
        }
        
    },
    // 异步调用
    actions:{
        sub(store){
            console.log('异步调用')
            // 调用同步方法
            store.commit('increment',20)
        }
    }
   
})