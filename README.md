# pop-move(可移动弹框组件)

## 弹框移动说明：
* 第一步鼠标移动到弹框头部看到鼠标变成可移动的形状
* 按下鼠标拖动进行弹框移动
* 鼠标弹起停止移动


## Pop Events

|  事件名   | 说明  | 参数  |
|  ----  | ----  | ----  |
| enter-mouse-up  | 当用户移动弹框结束，鼠标弹起时触发的事件  | zindex(用户可设置弹框的层级)  
| close-pop  | 当用户关闭弹框 时触发的事件  | id(用户给弹框指定唯一id值)

## Pop Attributes

|  参数  |  说明  |  类型  |   可选值   |  默认值 |
|  ----  |  ----  |  ----  |  ----  |  ----  |
|  Id    |  给每个弹框一个唯一的id  |  string  |  必填  |  - |
|  title |  弹框头部标题  |  string  |  -  |  "" |
|  size  |  弹框大小(接受三个数组属性big,middle，small，属性第一个值是宽第二个值是高) | object  |  -  |  { big: ["100%", "100%"],middle: ["750px", "750px"],small: ["300px", "40px"], } |
|  noArea |  弹框是否 **没有** 区域限制(弹框向下和向右移动 最大是否有限制)  |  boolean  |  -  |  true | 
|  maxTop  |  弹框向下移动的最大距离  |  number  |  -  |  null |
|  maxLeft |  弹框向右移动的最大距离  |  number  |  -  |  null |   
|  minTop  |  弹框向下移动的最小距离  |  number  |  -  |  0 |
|  minLeft |  弹框向右移动的最小距离  |  number  |  -  |  0 |   
|  zIndex  |  设置zindex(多个弹框组件当下移动哪一个哪一个层级高)  |  number  |  -  |  1 |   
    
