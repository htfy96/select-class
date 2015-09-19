var relation = {
        "dlydzx" : [],
        "dcnl" : [],
        "xhyxt": [],
        "jsjzc" : [],
        "rjgc" : [],
        "sjjg" : [],
        "txyl" : ["xhyxt"],
        "dcxyy" : ["dcnl"],
        "jsjxtgc" : ["jsjzc", "rjgc"],
        "rgzn" : ["rjgc"],
        "sfsjyfx" : ["sjjg"],
        "kzll" : ["dlydzx", "xhyxt"],
        "dlxtjc" : ["dlydzx"],
        "dldzjs" : ["dlydzx"],
        "txylb" : ["xhyxt"],
        "gdygc" : ["dlydzx", "dcnl"],
        "zndw" : [],
        "dlxtzdh" : ["dlydzx", "dlxtjc", "xhyxt"],
        "dlxtjdbh" : ["dlydzx", "dlxtjc"],
        "dlxtztfx" : [],
        "szxhclb" : [],
        "dqydzcljs" : [],
        "djx" : [],
        "djkzjs" : [],
        "dqxtzhsy" : [],
        "dqsbzhsy" : [],
        "dqcdzhsy" : [],
        "jdbhkcsj" : [],
        "bdzdqbfkcsj" : [],
        "djddspkzkcsj" : [],
        "gyszclxtkc" : [],
        "wlxtykz" : ["kzll", "txyl"],
        "wlyh" : ["wlxtykz"],
        "sztxclymsfx" : ["xhyxt", "kzll"],
        "jsjsj" : ["xhyxt"],
        "jqrjsyxt" : ["rjgc"],
        "wxtxylyydwl" : [],
        "wxtxylyydwl2" : [],
        'jsjwl' : ['jsjxtgc'],
        'dhjsybxcl' : ['jsjxtgc'],
        'gqkdtxwl' : [],
        'bxyfbscxsj' : [],
        'jsjwl2' : ['jsjxtgc'],
        'dhjsybxcl2' : ['jsjxtgc'],
        'gqkdtxwl2' : [],
        'bxyfbscxsj2' : [],
        'sjwjjs' : ['sfsjyfx', 'jsjzc'],
        'hlwyxxjs' : ['sfsjyfx', 'jsjzc'],
        'ydsjgljsjyy' : ['sfsjyfx', 'jsjzc'],
        'sjkjs' : ['sfsjyfx'],
        'jqxx' : ['jsjzc', 'sfsjyfx', 'rgzn'],
        'zryycl' : ['sfsjyfx'],
        'sztxcl' : ['xhyxt'],
        'jsjtxx' : ['sjjg'],
        'szxhcl' : ['xhyxt'],
        'sztxcl' : ['xhyxt'],
        'szyycl' : ['xhyxt'],
        'jsjwl3' : ['jsjxtgc'],
        'jsjaq' : ['jsjxtgc'],
        'qrsxtylyyy' : ['jsjzc'],
        'szxtfzsj' : ['xhyxt'],
        'txjbdlylysj' : ['xhyxt', 'txyl'],
        'dgmjcdlsj' : ['xhyxt'],
        'wbjsytx' : ['dcnl','dcxyy'],
        'spdlsjxl' : ['dlydzt', 'wbjsytx'],
        'bdtwlyqj' : [],
        'bmjtgylyyy' : ['bdtwlyqj'],
        'gdzx' : [],
        'cgqyl' : ['dlydzx'],
        'xdgxysjjc' : ['dlydzx'],
        'znyqjs' : ['dlydzx', 'kzll', 'jsjzc'],
        'yqzxyxnyq' : ['dlydzx'],
        'wcllysjcl': [],
        'qqdhdwxt': ['xhyxt'],
        'gxdhyzhdh' : ['kzll']
};

var renderData = { 'optionalClassType' : {
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
                'description' : 'Hint:点击专业标题可以打开/折叠起那个专业',
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
                                ]},
                                'xxgc' : 
                                        {
                                        'name': '信息工程',
                                        'major': 
                                                [
                                                {
                                                        'name': '方向1 网络计算与通信',
                                                        "clusteredClass":
                                                                {
                                                                'wljsytxbx2' :
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson' :
                                                                                {
                                                                                'wxtxylyydwl2' : '无线通信原理与移动网络(4@6)',
                                                                        }
                                                                },
                                                                'wljsytxxx2':
                                                                        {
                                                                        'name': '以下课程任选一门',
                                                                        'special' : true,
                                                                        'lesson' :
                                                                                {
                                                                                'jsjwl2' : '计算机网络(4@6)',
                                                                                'dhjsybxcl2' : '多核计算与并行处理(3@7)',
                                                                                'gqkdtxwl2' : '光纤宽带通信网络(3@7)',
                                                                                'bxyfbscxsj2' : '并行与分布式程序设计(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },
                                                {
                                                        'name': '方向2 多媒体信号处理',
                                                        'clusteredClass':
                                                                {
                                                                'dmtxhclbx':
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson' : 
                                                                                { 'szxhcl' : '数字信号处理(4@6)'}
                                                                },
                                                                'dmtxhclxx' :
                                                                        {
                                                                        'name': '以下课程任选一门',
                                                                        'special' : true,
                                                                        'lesson' :
                                                                                {
                                                                                'sztxcl' : '数字图像处理(3@7)',
                                                                                'szyycl': '数字语音处理(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },
                                                {
                                                        'name' : '方向3 计算机网络与安全',
                                                        'clusteredClass':
                                                                {
                                                                'jsjwlyaqbx':
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson':
                                                                                {
                                                                                'jsjwl3' : '计算机网络(4@6)',
                                                                                'jsjaq' : '计算机安全(3@7)'
                                                                        }
                                                                }
                                                        }
                                                }
                                        ]
                                },
                                'dzkxyjs' :
                                        {
                                        'name': '电子科学与技术',
                                        'major' : 
                                                [
                                                {
                                                        'name' : '方向1 应用电路设计',
                                                        'clusteredClass' : 
                                                                {
                                                                'yydlsjbx':
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson' : 
                                                                                {
                                                                                'qrsxtylyyy' : '嵌入式系统原理与应用(4@6)'
                                                                        }
                                                                },
                                                                'yydlsjxx':
                                                                        {
                                                                        'name' : '以下课程任选一门',
                                                                        'special' : true,
                                                                        'lesson' :
                                                                                {
                                                                                'szxtfzsj' : '数字系统仿真设计(3@7)',
                                                                                'txjbdlylysj' : '通信基本电路原理与设计(3@7)',
                                                                                'dgmjcdlsj' : '大规模集成电路设计(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },
                                                {
                                                        'name' : '方向2 微波射频系统分析',
                                                        'clusteredClass' :
                                                                {
                                                                'wbspxtfxbx':
                                                                        {
                                                                        'name': '必修以下课程',
                                                                        'lesson' :
                                                                                {
                                                                                'wbjsytx' : '微波技术与天线(4@6)',
                                                                                'spdlsjxl' : '射频电路设计训练(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },
                                                {
                                                        'name' : '方向3 半导体材料与显示照明',
                                                        'clusteredClass' :
                                                                {
                                                                'bdtclyxszmbx':
                                                                        {
                                                                        'name' : '必修以下课程',
                                                                        'lesson' :
                                                                                {
                                                                                'bdtwlyqj' : {'name' : '半导体物理与器件(4@6)', 'alt' : '依赖于大学物理(1) (2)'}
                                                                        }
                                                                },
                                                                'bdtclyxszmxx':
                                                                        {
                                                                        'name' : '以下课程任选一门',
                                                                        'special' : true,
                                                                        'lesson' : 
                                                                                {
                                                                                'bmjtgylyyy' : '薄膜晶体管原理与应用(3@7)',
                                                                                'gdzx' : '光电子学(3@7)',
                                                                        }
                                                                }
                                                        }
                                                }]
                                },

                                'ckjsyyq':
                                        {
                                        'name' : '测控技术与仪器',
                                        'major' : 
                                                [
                                                {
                                                        'name': '方向1 传感器与检测技术',
                                                        'clusteredClass' : 
                                                                {
                                                                'cgqyjcjsbx':
                                                                        {
                                                                        'name': '以下内容必修',
                                                                        'lesson':
                                                                                {
                                                                                'cgqyl' : '传感器原理(4@6)',
                                                                                'xdgxysjjc' : '现代光学与视觉检测(3@7)'
                                                                        }

                                                                },
                                                        }
                                                },
                                                {
                                                        'name': '方向2 现代仪器技术',
                                                        'clusteredClass' : 
                                                                {
                                                                'xdyqjsbx':
                                                                        {
                                                                        'name' : '以下内容必修',
                                                                        'lesson':
                                                                                {
                                                                                'znyqjs' : '智能仪器技术(4@6)'
                                                                        }
                                                                },
                                                                'xdyqjsxx':
                                                                        {
                                                                        'name' : '以下课程任选一门',
                                                                        'special' : true,
                                                                        'lesson':
                                                                                {
                                                                                'yqzxyxnyq' : '仪器总线与虚拟仪器(3@7)',
                                                                                'wcllysjcl' : '误差理论与数据处理(3@7)'
                                                                        }
                                                                }
                                                        }
                                                },
                                                {
                                                        'name' : '方向3 导航与定位',
                                                        'clusteredClass' : 
                                                                {
                                                                'dhydwbx':
                                                                        {
                                                                        'name' : '以下课程必修',
                                                                        'lesson' : 
                                                                                {
                                                                                'qqdhdwxt' : '全球导航定位系统(4@6)',
                                                                                'gxdhyzhdh' : '惯性导航与组合导航(3@7)'
                                                                        }
                                                                }
                                                        }
                                                }
                                        ]
                                }


                }
        }
}
};


