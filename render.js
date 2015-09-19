function render(objId, content)
{
        console.log("compiling "+objId);
        $('#'+objId).html(
                Handlebars.compile(
                        $("#"+objId).html()) (content) );
        $('#'+objId).show();
}

$(document).ready( function() {
        render("selectedClassList", {'semester': [1,2,3,4,5,6,7]});
        render('newOptionalClassContainer', { 'optionalClassType' : {
                'lyjcxxk': 
                        {
                        'description' : '主修模式至少选4门，副修模式至少5门 点击下面的课程会自动选中这些课程，所以<mark> 一般不需要手动点选 </mark>',
                        'name' : '领域基础限选课',
                        'simpleClass' :
                                {
                                'dlydzx' : '电路与电子学(5@3)',
                                'dcnl' : '电磁能量(4@4)',
                                'xhyxt' : '信号与系统(含复变函数) (4@4)',
                                'jsjzc': '计算机组成(4@4)',
                                'rjgc' : '软件工程(4@4)',
                                'sjjg' : '数据结构(4@4)'
                        }
                },

                'xkjcxxk' : 
                        {
                        'description' : '主修模式至少3门，副修模式至少4门       这些课程依赖于上面的领域基础限选课，被下面的专业方向课程所依赖，因此<mark> 一般也不需要自己选择 </mark>。',
                        'name' : '学科基础限选课',
                        'simpleClass' : 
                                {
                                'txyl' : '通信原理(4@5)',
                                'dcxyy' : '电磁学应用(4@5)',
                                'jsjxtgc': '计算机系统工程(4@5)',
                                'rgzn' : '人工智能(4@5)',
                                'sfsjyfx' : '算法设计与分析(4@5)',
                                'kzll' : { 'name' : '控制理论(4@5)', 'alt':' IEEE电气方向必修，其他方向学生选修'},
                                'dlxtjc' : '电力系统基础(4@5)',
                                'dldzjs' : '电力电子技术(4@5)',
                                'txylb' : '通信原理(B类)(2@7)'
                        }
                },
                'zyc' :
                        {
                        'name' : '专业课',
                        'description' : 'Hint:点击专业标题可以折叠起那个专业',
                        'school' : 
                                {
                                'dqgcyzdh' : 
                                        {
                                        'name' : '电气工程与自动化',
                                        'description' : '本专业原有的3个方向已经合并，因此选择本专业并完成下列要求视作同时完成了3个方向',
                                        'clusteredClass' : 
                                                {
                                                'dqbx': 
                                                        {
                                                        'name': '以下课程必修',
                                                        'lesson' : 
                                                                {
                                                                'gdygc' : '高电压工程(4@6)',
                                                                'zndw' : {'name' : '智能电网(4@7)', 'alt' : '至少修读 电力系统基础、高电压工程、电力电子技术中的一门'}
                                                        }

                                                },
                                                'dqrenxuan' :
                                                        {
                                                        'name': '以下内容任选7~8学分',
                                                        'lesson':
                                                                {
                                                                "dlxtzdh":"电力系统自动化(3@6)",
                                                                "dlxtjdbh":"电力系统继电保护(3@6)",
                                                                "dlxtztfx":"电力系统暂态分析(2@6)",
                                                                "szxhclb":"数字信号处理(B类)(2@5)",
                                                                "dqydzcljs":"电气与电子测量技术(2@6)",
                                                                "djx":"电机学(4@5)",
                                                                "djkzjs":"电机控制技术(3@6)"
                                                        }
                                                },
                                                'dqzongheshiyan': 
                                                        {
                                                        'name' : '以下综合实验三选一',
                                                        'special' : true,
                                                        'lesson' : 
                                                                {
                                                                "dqxtzhsy": "电器系统综合实验(2@7)",
                                                                "dqsbzhsy": "电气设备综合实验(2@7)",
                                                                "dqcdzhsy": "电气传动综合实验(2@7)"
                                                        }
                                                },

                                                'dqkechengshiji':
                                                        {
                                                        'name': '以下课程设计四选一',
                                                        'special' : true,
                                                        'lesson' : 
                                                                {
                                                                "jdbhkcsj": "继电保护课程设计(2@7)",
                                                                "bdzdqbfkcsj": "变电站电气部分课程设计(2@7)",
                                                                "djddspkzkcsj": "电机的DSP控制课程设计(2@7)",
                                                                "gyszclxtkc": "高压数字测量系统课程(2@7)"
                                                        }
                                                }



                                        }
                                },
                                'zdh' :
                                        {
                                        'name' : '自动化',
                                        'major' :
                                                [
                                                {
                                                        'name': '方向1 网络系统与控制',
                                                        'clusteredClass':
                                                                {
                                                                'wlxtykzbx' : 
                                                                        {
                                                                        'name': '必修以下课程',
                                                                        'lesson':
                                                                                {
                                                                                'wlxtykz' : '网络系统与控制(4@6)',
                                                                                'wlyh' : '网络优化(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },
                                                {'name' : '方向2 图像信息处理与模式分析',
                                                        'clusteredClass':
                                                                {
                                                                'txxxclymsfbx' : 
                                                                        {
                                                                        'name': '必修以下课程',
                                                                        'lesson' : 
                                                                                {
                                                                                'sztxclymsfx' : '数字图像处理与模式分析(4@6)'
                                                                        }
                                                                },
                                                                'sztxclymsfexy':
                                                                        {
                                                                        'name' : '以下课程二选一',
                                                                        'special' : true,
                                                                        'lesson' : 
                                                                                {
                                                                                'jsjsj' : '计算机视觉(3@7)',
                                                                                'jqrjsyxt' : '机器人技术与系统(3@7)'
                                                                        }
                                                                }
                                                        }
                                                }]
                                },
                                'cs' :
                                        {
                                        'name' : '计算机科学与技术',
                                        'major' : 
                                                [
                                                {
                                                        'name': '方向1 网络计算与通信',
                                                        "clusteredClass":
                                                                {
                                                                'wljsytxbx' :
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson' :
                                                                                {
                                                                                'wxtxylyydwl' : '无线通信原理与移动网络(4@6)',
                                                                        }
                                                                },
                                                                'wljsytxxx':
                                                                        {
                                                                        'name': '以下课程任选一门',
                                                                        'special' : true,
                                                                        'lesson' : 
                                                                                {
                                                                                'jsjwl' : '计算机网络(4@6)',
                                                                                'dhjsybxcl' : '多核计算与并行处理(3@7)',
                                                                                'gqkdtxwl' : '光纤宽带通信网络(3@7)',
                                                                                'bxyfbscxsj' : '并行与分布式程序设计(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },

                                                {
                                                        'name' : '方向2 数据工程',
                                                        'clusteredClass' : 
                                                                {
                                                                'sjgcbx' : 
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson' : { 'sjwjjs' : '数据挖掘技术(4@6)' }
                                                                },
                                                                'sjgcxx' :
                                                                        {
                                                                        'name': '任选以下课程中的一门',
                                                                        'special' : true,
                                                                        'lesson' : 
                                                                                {
                                                                                'hlwyxxjs' : '互联网与信息检索(3@7)',
                                                                                'ydsjgljsjyy' : '移动数据管理技术及应用(3@7)',
                                                                                'sjkjs' : '数据库技术(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },

                                                {
                                                        'name' : '方向3 机器学习',
                                                        'clusteredClass' : 
                                                                {
                                                                'jqxxbx' :
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson' : {'jqxx' : '机器学习(4@6)'}
                                                                },
                                                                'jqxxxx' :
                                                                        {
                                                                        'name' : '任选以下课程的一门',
                                                                        'special' : true,
                                                                        'lesson' : 
                                                                                {
                                                                                'zryycl' : '自然语言处理(3@7)',
                                                                                'sztxcl' : '数字图像处理(3@7)',
                                                                                'jsjtxx' : '计算机图形学(3@3)'
                                                                        }
                                                                }
                                                        }

                                                }
                                        ]}
                        }
                }
        }
        });
});
