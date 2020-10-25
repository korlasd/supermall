module.exports={
    plugins:{
        autoprefixer:{},
        "postcss-px-to-viewport":{
            viewportWidth: 375,  //视窗宽度
            viewportHeight: 667, //视窗高度
            unitPrecision: 5,       //指定px转换为视窗单位值的小数位数
            viewportUnit: 'vw',     //指定需要转换的视窗单位，建议使用'vw'
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],  //指定不需要转换的类
            minPixelValue: 1,       //小于或等于1px的不转换成视窗单位
            mediaQuery:false,        //允许在媒体查询中转换px
            exclude:[/TabBar/]
        }
    }
}