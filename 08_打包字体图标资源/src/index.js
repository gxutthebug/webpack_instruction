import $ from "jquery"
import "./css/index.css"
import img from "./assets/1.gif"
import "../src/assets/font_3405371_h44gon789g/iconfont.css"

$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')

let theimg=document.querySelector("img")
theimg.src=img
