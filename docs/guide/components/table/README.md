# 使用说明
<cprxz-table />
### Table Attributes
| 参数        | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----:|
| data | 显示的数据 | Array | ---- |

```js
   data = [{
      id: 1,
      createTime: new Date().toLocaleString(),
      name: '皮卡丘',
      address: '口袋妖怪火红',
      sex: '1', 
   }]
```
| 参数        | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----:|
| tableLabel | 表头配置(可通过render函数进行自定义页面展示) | Array | ---- |

```js
   tableLabel = [
           {
               label: '性别',
               prop: 'sex',
               render:  (row) => {
                   return `<div>${ row.sex === '0' ? '保密' :  row.sex === '1' ? '男' : '女' }</div>`
               }
           },
   ]
```
| 参数        | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----:|
| option | 配置按钮操作信息 | Object | 默认按钮type为button|

```js
   option = {
     label: '操作',
     width: 300,
     children: [
         {
             label: '按钮1',
             props: {
                type: 'text',
                icon: 'el-icon-delete'
             }
         },
         {
             label: '按钮2'
         }
     ]
    }
```
| 参数        | 说明           | 类型  | 默认值  |
| ------------- |:-------------:| -----:| -----:|
| showCheckBoX | 显示全选按钮 | Boolean |  false |
| pageInfo | 分页基本信息 | Object  | { pageNum: 1, totalCount: 0, pageSize: 10 } |
| loading | loading加载 | Boolean |  false |
| overflowText | 是否 隐藏文字过长 | Boolean |  true |
| keyId | 绑定for循环 key值 | String |  id |
| showPagination | 显示分页 | Boolean |  true |
| props | 表格配置参数 | Object |  支持element部分参数 |

```js
   props = {
        'show-header': true, // 显示表头
        'element-loading-text': 'Loading', // loading 文字
        'highlight-current-row': false, // 是否要高亮当前行
        'tooltip-effect': 'dark', 
        'max-height': 'auto', // Table 的最大高度。合法的值为数字或者单位为 px 的高度。
        'empty-text': '没有数据', // 空数据显示状态
        'element-loading-text': '加载中', // loading 加载
        border: true, // 是否带有纵向边框
        fit: true, // 列的宽度是否自撑开
        height: 'auto', // 表格高度
        stripe: false, // 是否显示斑马纹
   }
```
### Table Events
| 参数        | 说明           | 回调参数  |
| ------------- |:-------------:| -----:|
| handleButton | 按钮回调事件 | 返回 方法名, 当前对象，索引 | 
| handleSelectionChange | 全选按钮回调事件 | 返回数组 | 
| handleSizeChange | pageSize 改变时会触发 | 每页条数 | 
| handleCurrentChange | currentPage 改变时会触发 | 当前页 | 
