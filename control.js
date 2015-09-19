
var disableDisplay = {};

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
        link2Node('wxtxylyydwl', 'wxtxylyydwl2');
        link2Node('jsjwl', 'jsjwl2');
        link2Node('dhjsybxcl', 'dhjsybxcl2');
        link2Node('gqkdtxwl', 'gqkdtxwl2');
        link2Node('bxyfbscxsj', 'bxyfbscxsj2');
        link2Node('jsjwl', 'jsjwl3');
        link2Grp('wljsytxxx', 'wljsytxxx2');

});

function link2Grp(id1, id2)
{
        $('#'+id1+'-clear').on('click', function() { removeSelect(id2); });
        $('#'+id2+'-clear').on('click', function() { removeSelect(id1); });
}

function link2Node(id1, id2)
{
        disableDisplay[id2] = true;
        document.addEventListener('click', function(e)
                                  {
                                          if (($(e.target)).attr('id')==id2)
                                                  {
                                                          $("#"+id1).click();
                                                          e.stopPropagation();
                                                  }
                                          updateSelectedInfo();
                                          return false;
                                  }, true);
        $("#"+id1).on('click', function()
                      {
                              if ($("#"+id1).hasClass('am-active'))
                                      $("#"+id2).removeClass('am-active');
                              else
                                      $("#"+id2).addClass('am-active');
                              updateSelectedInfo();
                      });
}

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
                        $("#info").text(str,"function"!=typeof Array.prototype.every&&(Array.prototype.every=function(a,b){var d,e,c=!0;if("function"==typeof a)for(d=0,e=this.length;e>d&&c!==!1;d++)c=!!a.call(b,this[d],d,this);return c}));
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
                if (!disableDisplay[i] && $("#"+i).hasClass('am-active')) {
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


