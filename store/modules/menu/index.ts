import {defineStore} from "pinia";
import {menu} from "./types";

export const menus = defineStore('menu', {
    state: (): menu => ({
        isCollapse: false
    })
})
