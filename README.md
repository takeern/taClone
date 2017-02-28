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
<table class="table table-bordered table-striped">
    
   <thead>
    
     <tr>
       
      <th style="width: 100px;">参数</th>
        
      <th style="width: 50px;">类型</th>
        
      <th style="width: 50px;">描述</th>
        
      <th>description</th>
    
     </tr>
  
  </thead>
  <tbody>
        
      <tr>
         
           <td>component</td>
         
           <td>React.Element/String</td>
        
           <td>'span'</td>
          
           <td>wrap dom node or component for children. set to '' if you do not wrap for only one child</td>
       
      </tr>
  </tbody>
</table>