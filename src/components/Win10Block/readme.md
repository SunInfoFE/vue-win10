# 关于tmp布局文件

## type = 1
1x1的方块
只有icon

## type = 2
2x2的方块
有icon，文字和背景轮播

## type = 3
4x2的方块
有icon，文字和背景轮播


# props

layout：
type： array
```javascript
[
        { 'x': 0, 'y': 0, 'w': 1, 'h': 1, i: '1', type: 1, 'model': [{ backgroundColor: '#ff0000', image: require('../assets/logo.png'), text: { show: true, color: '#fff' } }, { fullImage: require('../assets/logo.png'), text: { show: true, color: '#ff0000' } }] },
        { 'x': 2, 'y': 2, 'w': 2, 'h': 2, i: '2', type: 2, 'model': [{ backgroundColor: '#ff0000', image: require('../assets/logo.png'), text: { show: true, color: '#fff' } }, { fullImage: require('../assets/logo.png'), text: { show: true, color: '#ff0000' } }] },
        { 'x': 4, 'y': 4, 'w': 4, 'h': 2, i: '3', type: 3, 'model': [{ backgroundColor: '#ff0000', image: require('../assets/logo.png'), text: { show: true, color: '#fff' } }, { fullImage: require('../assets/logo.png'), text: { show: true, color: '#ff0000' } }] }
      ]
```
- x y 对应坐标，
- w h 对应宽高
- i 是唯一标识符 可为中文
- type 是对应模板大中小
- model是具体的色块配置

# event
## @setlayout="setlayout"
与layout数据进行双向绑定所需

## @blockClick="blockClick"
色块的左键点击事件，

## @editSize="editSize"
色块的右键点击事件的菜单，改变大小

## @deleteItem="deleteItem"
色块的右键点击事件的菜单，删除色块
