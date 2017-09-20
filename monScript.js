function testAjax()
{
    var xhrMain = $.ajax(
        {   url: "ajaxMain.html",
            cache: false,
            dataType : 'html'
        })   
    .done(function(codeHtml,status) {
        alert( "succes chargement Corps de page" );
        alert("contenu html de la réponse d'ajax \n" + codeHtml);
        $("#ajaxMainContent").html(codeHtml);    
    })
    .fail(function() {
        alert( "Erreur chargement Corps de page" );
    })
    .always(function() {
        alert( "Fin Chargement Ajax" );
    });

    // Perform other work here ...

    // Set another completion function for the request above
    xhrMain.always(function() {
        alert( "Fin Chargement Ajax (Extension)" );    
    });

    var xhrEntete = $.ajax(
        {   url: "ajaxHead.html",
            cache: false,
            dataType : 'html'
        })
    .done(function(codeHtml,status) {
        alert("succes chargement Entete");
        $("#ajaxHeadContent").html(codeHtml);    
    })
    .fail(function() {
        alert( "Erreur chargement Entete" );
    });
}

