import { notify } from "./notifacation.js"

const sidebar = document.getElementById("sidebar")
const btn = document.getElementById("sidebar-btn")
const body = document.getElementById("body")
const test =document.getElementById("test")

let sb=false

console.log(body)



btn.addEventListener("click",sidebarOpen)

function sidebarOpen(){
    if(!sidebar.classList.contains("sidebar--open")){
        sidebar.classList.add("sidebar--open")
    }else{
        sidebar.classList.remove("sidebar--open")
    }
}






