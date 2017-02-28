/**
 * Created by Administrator on 2017/2/28.
 */


function taCloneNode(ele,classStr){
    "use strict";
    var prop,res,style;
    if(typeof ele!=='object'){
        console.log('ele is not object');
        return ;
    }
    var newEle=document.createElement(ele.tagName);
    if(window.getComputedStyle){
        style=window.getComputedStyle(ele,null);//存储当前cssstyle
        for(prop in style){
            if(style.hasOwnProperty(prop)) {//遍历可枚举的属性，style中保存的状态为只读状态，可枚举的属性，保存着css属性名，方便遍历，原生js考虑的真的周全
                res=style[prop];//存储当前状态
                if(res==='animation-name'||res==='animation-direction'||res==='animation-duration'||res==='animation-delay'||res==='animation-fill-mode'||res==='animation-iteration-count'||res==='animation-play-state'||res==='animation-timing-function'){
                    continue;//跳过不保存的状态，一般为动画属性
                }
                newEle.style[res]=style[res];//当前DOM设置属性
            }
        }
    }
    else {
        style=ele.currentStyle;//兼容ie8+
        for(prop in style){
            newEle.style[prop]=style[prop];//当前DOM设置属性
        }
    }//没有增添data，感觉用不上
    newEle.className=ele.className.replace(classStr,'');
    newEle.id=ele.id;
    return newEle;
}
module.exports=taCloneNode;

