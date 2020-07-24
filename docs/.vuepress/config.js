module.exports = {
    title: '脆皮软新珠',
    description: 'hohoho',
    themeConfig: {
        sidebar: [
            {
                title: 'PC组件',
                collapsable: false,
                children: [
                    ['./guide/components/table/','表格和分页'],
                ]
            },
            {
                title: '资料',
                collapsable: false
            },
        ]
    },
    sass: { indentedSyntax: true },
}
