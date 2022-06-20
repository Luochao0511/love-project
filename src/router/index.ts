import {createRouter, createWebHashHistory} from 'vue-router'
import routes from 'virtual:generated-pages'
import {route} from './root'

routes.push(...route)
// routes.push(root)
//导入生成的路由数据
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
