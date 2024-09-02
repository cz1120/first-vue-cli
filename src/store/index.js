// 这是用于vuex的全局状态管理文件
import { createStore } from 'vuex'

// 创建vuex仓库
export default createStore({
    // 数据源
    state: {
        count: 1
    },
    // 修改数据
    mutations:{
        // 增加count的值的方法
        increment(state){
            state.count++
        }
    }
   
})