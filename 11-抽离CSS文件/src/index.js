import $ from "jquery"
import "./css/index.css"
import img from "./assets/1.gif"
import "../src/assets/font_3405371_h44gon789g/iconfont.css"
import "../src/assets/font_3405371_h44gon789g/iconfont.js"

$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')

let theimg=document.querySelector("img")
theimg.src=img

const fn=()=>{
    console.log("啦啦啦啦啦")
}

console.log(fn)