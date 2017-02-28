# taClone
(css3动画)动态复制DOM节点
## 兼容性
 * 兼容 ie8,ie8+,chrome,firefox,safari
## 功能
 * css3动画执行后，更改animation，执行第二个动画时，element不能保持上一个动画的最后一桢，直接使用原生cloneNode，得到的是最初的element，该方法相当于一个动态的cloneNode
## 例子
```JavaScript
var newNode=taClone(oldNode,'move');
```
## API
|              参数              |              类型              |                          描述                       |

|--------------------------------|:------------------------------:|----------------------------------------------------:|

|             oldNode            |            Element/DOM         |                    需要复制的节点                   |

|            className           |              str               |  传入第一个动画Class，并删除，不添加则再次执行动画  |
