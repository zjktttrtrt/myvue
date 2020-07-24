<template>
    <div>
        <el-table
                ref="table"
                v-loading="loading"
                v-bind = {...props}
                :data="data"
                style="width:100%"
                @selection-change="handleSelectionChange">
            <el-table-column
                v-if="showCheckBoX"
                width="55"
                type="selection"
                align="center">
            </el-table-column>
            <el-table-column
                    v-for="item in tableLabel"
                    :width="item.width ? item.width : ''"
                    :key="item[keyId]"
                    :align="!!item.align ? item.align : 'center'"
                    :label="item.label"
                    :show-overflow-tooltip="overflowText"
                    :fixed="item.fixed"
                    :prop="item.prop">
                <template slot-scope="scope">
                    <template v-if="item.render">
                        <div v-html="item.render(scope.row)"></div>
                    </template>
                    <template v-else>
                        {{scope.row[item.prop]}}
                    </template>
                </template>
            </el-table-column>
            <el-table-column
                    v-if="Object.keys(option.children).length"
                    :width="option.width"
                    :label="option.label"
                    align="center">
                <template slot-scope="scope">
                    <el-button
                        v-for="(item,index) in option.children"
                        :key="index"
                        v-bind={...item.props}
                        @click="handleButton(item.methods,scope.row,scope.row)"
                        size="mini">
                        {{item.label}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pagination"
            v-if="showPagination"
            :page-sizes="pageInfo.pageSizes"
            :page-size="pageInfo.pageSize"
            :total="pageInfo.totalCount"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props:{
        tableLabel:{ // 表格展示
            type:Array,
            default: () => {
                return [
                    {
                        label: '日期',
                        prop: 'createTime',
                    },
                    {
                        label: '姓名',
                        prop: 'name',
                    },
                    {
                        label: '地址',
                        prop: 'address',
                    },
                    {
                        label: '性别',
                        prop: 'sex',
                        render:  (row) => {
                            return `<div>${ row.sex === '0' ? '保密' :  row.sex === '1' ? '男' : '女' }</div>`
                        }
                    },
                ]
            }
        },
        option:{ // 配置需要显示的操作菜单
            type:Object,
            default: () => {
                return {
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
            }
        },
        showCheckBoX: { // 配置是否显示全选
            type: Boolean,
            default: true
        },
        pageInfo: { // 配置分页
            type:Object,
            default: () => {
                return {
                    pageNum: 1,
                    totalCount: 2,
                    pageSize: 10,
                }
            }
        },
        showPagination: { // 是否隐藏 分页显示
            type: Boolean,
            default: true
        },
        overflowText: { // 是否 隐藏文字过长
            type: Boolean,
            default: true
        },
        loading: { // loading 配置
            type: Boolean,
            default: false
        },
        keyId: { // 动态绑定 key 值
            type: String,
            default: 'id'
        },
        data: { // 数据源
            type: Array,
            default: () => {
                return [
                    {
                        id: 1,
                        createTime: new Date().toLocaleString(),
                        name: '皮卡丘',
                        address: '口袋妖怪火红',
                        sex: '1',
                    },
                    {
                        id: 2,
                        createTime: new Date().toLocaleString(),
                        name: '暴鲤龙',
                        address: '口袋妖怪叶绿',
                        sex: '2',
                    }
                ]
            }
        },
        props: { // 表格参数配置
            type: Object,
            default: function () {
                return {
                    'show-header': true, // 显示表头
                    'element-loading-text': 'Loading', // loading 文字
                    'highlight-current-row': false, // 是否要高亮当前行
                    'tooltip-effect': 'dark', //
                    'max-height': 'auto', // Table 的最大高度。合法的值为数字或者单位为 px 的高度。
                    'empty-text': '没有数据', // 空数据显示状态
                    'element-loading-text': '加载中', // loading 加载
                    border: true, // 是否带有纵向边框
                    fit: true, // 列的宽度是否自撑开
                    height: 'auto', // 表格高度
                    stripe: false, // 是否显示斑马纹
                }
            }
        }

    },
    methods: {
        handleButton(methods,row,index){  // 按钮事件
            this.$emit('handleButton',{methods, row, index})
        },
        handleSelectionChange(val){ // 全选
            this.$emit('handleSelectionChange',val)
        },
        handleSizeChange(val) { // 分页
            this.$emit('handleSizeChange', val)
        },
        handleCurrentChange(val) { // 分页
            this.$emit('handleCurrentChange', val)
        }
    }
}
</script>

<style scoped lang="scss">
    .pagination{
        margin-top: 10px;
    }
    /deep/ .el-table__header, /deep/ .el-table__body{
        margin: 0;
    }
</style>

