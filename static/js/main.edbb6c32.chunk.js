(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(18)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),m=t.n(i),c=t(3);t(13),t(14),t(15);var l=e=>{let{onClick:a,label:t}=e;return m.a.createElement("button",{className:"custom-button",onClick:a},t)};t(16);var n=()=>{const e=["https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTd6MTkwM3Ztb2dwd3ZqOXBxMWZqYmtvNmd4eWNkdGgxZjRqMWxzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kaZFhcd6cdrje3A5sU/giphy.gif","https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif","https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif","https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif","https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif","https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc245anRyYjRobDN0dXZqaWM2b2NnOGp3c3NxcG1rOWxsb3d5eW04bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u458Fo50SS1K3kqVyK/giphy.gif","https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBtajNyaDRseGRtNTFhMzY0dHN2MW0ycHBqNXZvOWpjdXNmZHo4YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/menw2PSZ2vUzu/giphy.gif","https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmU5eWdkZDV1Nmp0MnFqdXowbmRiZTMzcmtlNWcxd2djYzhlM3hjMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fdS8al30MFz8Z2416E/giphy.gif","https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif","https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif","https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif","https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif","https://media.giphy.com/media/3o6ZsYhVPCj7P8lZ4c/giphy.gif","https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif","https://media.giphy.com/media/l4FGEpZw5vFST8vDi/giphy.gif","https://media.giphy.com/media/26FPJypGp0Hr87pHE/giphy.gif","https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif","https://media.giphy.com/media/3o7TKKlj7BTQGna32o/giphy.gif","https://media.giphy.com/media/l41lQWz4oSYDsG6J2/giphy.gif","https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif","https://media.giphy.com/media/26AHqZycSplGWWPAI/giphy.gif","https://media.giphy.com/media/3ohzdKvLT1DxFxhZAI/giphy.gif","https://media.giphy.com/media/3ohs4xOYpXRlIb0gys/giphy.gif"],[a,t]=Object(i.useState)(e[0]);return m.a.createElement("div",{className:"new-page"},m.a.createElement("h1",null,"Is it a Potato?"),m.a.createElement("p",null,"It's a whole new Potato world!"),m.a.createElement("img",{src:a,alt:"Potato GIF",className:"gif-image"}),m.a.createElement("button",{onClick:()=>{t((()=>{const a=Math.floor(Math.random()*e.length);return e[a]})())},className:"change-gif-button"},"New Potato"))};t(17);var o=function(){const[e,a]=Object(i.useState)([]);return m.a.createElement("div",{className:"shopping-list-container"},m.a.createElement("div",{className:"shopping-list"},m.a.createElement("h3",null,"Items"),m.a.createElement("ul",null,[{name:"Potato",image:"https://i.imgur.com/dRnvRZZ.jpeg",price:1},{name:"Potatoes",image:"/images/potatoes.jpg",price:2.5},{name:"Potato Fries",image:"https://i.imgur.com/6RZcRVj.jpeg",price:3},{name:"Potato Chips",image:"https://i.imgur.com/t4fhTWf.jpeg",price:1.5}].map((t,i)=>m.a.createElement("li",{key:i},m.a.createElement("img",{src:t.image,alt:t.name,className:"item-image"}),m.a.createElement("span",null,t.name," - $",t.price.toFixed(2)),m.a.createElement("button",{onClick:()=>(t=>{a([...e,t])})(t)},"Add to Cart"))))),m.a.createElement("div",{className:"cart"},m.a.createElement("h3",null,"Shopping List"),m.a.createElement("ul",null,e.map((t,i)=>m.a.createElement("li",{key:i},m.a.createElement("img",{src:t.image,alt:t.name,className:"item-image"}),m.a.createElement("span",null,t.name," - $",t.price.toFixed(2)),m.a.createElement("button",{onClick:()=>(t=>{const i=[...e];i.splice(t,1),a(i)})(i),className:"remove-button"},"Remove")))),m.a.createElement("div",{className:"total"},m.a.createElement("h4",null,"Total: $",e.reduce((e,a)=>e+a.price,0).toFixed(2)))))};var p=function(){const[e,a]=Object(i.useState)("home");return m.a.createElement("div",{className:"App"},m.a.createElement("nav",{className:"App-nav"},m.a.createElement(l,{onClick:()=>a("home"),label:"Home",className:"home"===e?"active":""}),m.a.createElement(l,{onClick:()=>a("newpage"),label:"Potato",className:"newpage"===e?"active":""}),m.a.createElement(l,{onClick:()=>a("shoppinglist"),label:"Shop Potatoes",className:"shoppinglist"===e?"active":""})),m.a.createElement("div",{className:"tab-content"},"home"===e&&m.a.createElement("div",{className:"tab-pane active"},m.a.createElement("header",{className:"App-header"},m.a.createElement("h1",null,"Welcome to the Potato Page!"),m.a.createElement("img",{src:"/images/potato_cute.jpg",alt:"Potatoes with faces",className:"potato-image"}),m.a.createElement("h2",null,"Get those potatoes!"),m.a.createElement(l,{onClick:()=>a("newpage"),label:"Go to Potato"}))),"newpage"===e&&m.a.createElement("div",{className:"tab-pane active"},m.a.createElement(n,null)),"shoppinglist"===e&&m.a.createElement("div",{className:"tab-pane active"},m.a.createElement(o,null))))},s=t(4);Object(c.createRoot)(document.getElementById("root")).render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(s.a,null,m.a.createElement(p,null))))}],[[5,1,2]]]);
//# sourceMappingURL=main.edbb6c32.chunk.js.map