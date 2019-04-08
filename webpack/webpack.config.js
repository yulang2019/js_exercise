const path=require('path');
module.exports={
    mode:'development',
    entry:{                          //入口文件,源文件
        index:'./src/index.js',/*./代表当前路径*/ 
        index2:'./src/index2.js',
    },
    output:{                           //打包文件 出口文件
        path:path.resolve(__dirname,'dist'), //打包出去的路径
        filename:'[name].js'  //打包出去的文件名 [name]与入口文件相同
    }
};