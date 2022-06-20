export const route = [
    {path: "/", redirect: "/login"},
    // 登录
    {
        path: "/login",
        component: () => import ("../view/layout/Login.vue"),

    },
    // 首页
    {
        path: "/home",
        component: () => import ("../view/layout/home/Home.vue")
    }
]
