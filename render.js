function render(objId, content)
{
        console.log("compiling "+objId);
        $('#'+objId).html(
                Handlebars.compile(
                        $("#"+objId).html()) (content) );
        $('#'+objId).show();
}

$(document).ready( function() {
        var prev = new Date().getTime();
        render("selectedClassList", {'semester': [3,4,5,6,7]});
        render('newOptionalClassContainer', renderData);
        console.log(new Date().getTime() - prev + "ms taken by rendering");
});
