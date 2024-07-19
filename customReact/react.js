// import { Children } from "react"

const mainContent=document.getElementById('root') 
const reactElement={
    type: 'a',
    Children: 'This is a link',
    props:{
        target:'_blank',
        href:'https://www.google.com'
    }
}
function customRender(mainContent,reactElement){
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.Children;
for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
}
mainContent.appendChild(domElement);
}
customRender(mainContent,reactElement);