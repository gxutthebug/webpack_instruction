import $ from "jquery"
import "./css/index.css"
import img from "./assets/1.gif"

$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')

let theimg=document.querySelector("img")
theimg.src=img
