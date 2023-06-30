const path = require('path')

//引入html插件
const HTMLWebpackPlugin =  require('html-webpack-plugin');
// //引入clean
// const {CleanWepackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode:"development",
    //指定入口文件
    entry:'./src/index.ts',

    //指定打包文件所在目录
    output:{
        //每次打包清除dist文件
        clean:true,
        //指定打包文件的目录
        path:path.resolve(__dirname,'dist'),
        //打包后文件名字
        filename:'bundle.js',
        //告诉webpack不使用箭头函数 
        environment:{
            arrowFunction:false
        }

    },

    //指定webpack打包时要使用模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,
                //加载顺序从后往前
                use:[
                    //配置babel
                    {
                        loader:"babel-loader",
                        //设置babel
                        options:{
                            presets:[
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            "chrome":"58",
                                            "ie":'11'
                                        },
                                        //指定corejs的版本
                                        "corejs":"3",
                                        //usage表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude:'/node_modules/'
            },
            // 设置less文件的处理
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    // 引入postcss
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 version'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ]
            }
        ]
    },
    //配置webpack插件
    plugins:[
        new HTMLWebpackPlugin({
            //
            // title:'这是一个自定的title'
            //模板
            template:'./src/index.html'
        }),
        // new CleanWepackPlugin(),
    ],
    //用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
}