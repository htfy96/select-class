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
        'jsjwl' : ['jsjxtgc'],
        'dhjsybxcl' : ['jsjxtgc'],
        'gqkdtxwl' : [],
        'bxyfbscxsj' : [],
        'sjwjjs' : ['sfsjyfx', 'jsjzc'],
        'hlwyxxjs' : ['sfsjyfx', 'jsjzc'],
        'ydsjgljsjyy' : ['sfsjyfx', 'jsjzc'],
        'sjkjs' : ['sfsjyfx'],
        'jqxx' : ['jsjzc', 'sfsjyfx', 'rgzn'],
        'zryycl' : ['sfsjyfx'],
        'sztxcl' : ['xhyxt'],
        'jsjtxx' : ['sjjg']
};

function selected(lessonId) 
{
        return $('#'+lessonId).hasClass('am-active');
}

$(document).ready( function() {
        for (var i in relation) {
                $("#"+i).on('click', function(i) {
                        return function() { afterSelect(i); }
                }(i));

                $("#"+i).on('mouseover', function(i) {
                        return function() { highLightRelatedLesson(i); }
                }(i) );

                $("#"+i).on('mouseout', function(i) {
                        return function() { restoreRelatedLesson(i); }
                }(i) );
        }

        $("#zndw").on('click', specialCaseForZndw);
        $('#select-complete').on('click', function() {
                var l=["dlxtjc", "gdygc", "dldzjs"];
                if (!selected('dlxtjc-select') && !selected('gdygc-select') && !selected('dldzjs-select'))
                        alert('你还一门都没选呢');
                else
                        {
                                for (var i in l)
                                        if (selected(l[i]+'-select')) {
                                                $('#'+l[i]).click();
                                                console.log(l[i]);
                                        }
                                        $('#doc-modal').modal('close');
                        }
        });
});

function specialCaseForZndw(e)
{
        if (!selected('zndw') && !selected('dlxtjc') && !selected('gdygc') && !selected('dldzjs')) {
                var l=["dlxtjc", "gdygc", "dldzjs"];
                for (var i in l)
                        $('#'+l[i]+'-select').removeClass('am-active');
                $('#doc-modal').modal('open');

        }
}


function afterSelect(lessonId)
{

        if (!$("#"+lessonId).hasClass("am-active")) {
                var c = relation[lessonId];
                console.log(c);
                if (c)
                        for (var item in c)
                                {
                                        console.log(c[item]);
                                        if (! $("#"+c[item]).hasClass('am-active'))
                                                $("#"+c[item]).click();
                                        afterSelect(c[item]);
                                }
        }
}

function highLightRelatedLesson(lessonId, updateInfo)
{
        var str = "当前选中课程: "+$("#"+lessonId).text() + "  其依赖以下课程：";
        var c= relation[lessonId];
        if (c)
                for (var i in c) {
                        newId = c[i];
                        str += $("#"+newId).text() + " ";
                        $("#"+newId).removeClass("am-btn-default");
                        $("#"+newId).addClass("am-btn-success");
                        highLightRelatedLesson(newId, false);
                }
                str += "." + ($("#"+lessonId).attr('alt') ? "其他信息："+ $("#"+lessonId).attr('alt') : "");
                if (updateInfo==null || updateInfo==true)
                        $("#info").text(str);
}

function restoreRelatedLesson(lessonId)
{
        var c= relation[lessonId];
        if (c)
                for (var i in c) {
                        newId = c[i];
                        $("#"+newId).removeClass("am-btn-success");
                        $("#"+newId).addClass("am-btn-default");
                        restoreRelatedLesson(newId);
                }
}

function getCredit(lessonId)
{
        var obj = $("#"+lessonId).text();
        return parseInt(/\d(?=@)/.exec(obj)[0]);
}

function getSemester(lessonId)
{
        var obj = $("#"+lessonId).text();
        return parseInt(/\d/.exec( /@\d/.exec(obj)[0] ));
}

function updateSelectedInfo()
{
        var sum = 0;
        for (var i=0; i<8; i++)
        $("#semester"+i).empty();
        for (var i in relation) 
                if ($("#"+i).hasClass('am-active')) {
                        sum += getCredit(i);
                        $("#semester"+getSemester(i)).append('<li>'+$("#"+i).text()+'</li>');
                }
                $("#creditSum").text(sum);


}

$(document).ready( function() {
        document.addEventListener('click', updateSelectedInfo, false);
});

function removeSelect(btnGrp)
{
        $('#'+btnGrp+'>label').removeClass('am-active');
        updateSelectedInfo();
}


