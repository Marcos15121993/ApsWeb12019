{
    function includeFooter(){

        var texto = "<div class='container-fluid bg-footer'>";
        texto += "<div class='row'>";
        texto += "<div class='col-lg-4 col-md-4 py-3 text-center text-md-left'>";
        texto += "<p class='text-white'> &copy; 2019 Todos os direitos reservados  </p>";
        texto += "</div>";
        texto += "<div class='col-lg-4 col-md-4 py-3 text-center'>";
        texto += "<a href='https://www.facebook.com/pieppomoveisplanejados/?ref=br_rs' target='_blank'><i class='fab fa-facebook fa-2x d-inline-block mx-2' style='color: #FFF; vertical-align: middle;'></i></a>";
        texto += "<a href='https://instagram.com/pieppomoveis?igshid=mw1bsoyzefic' target='_blank'><i class='fab fa-instagram fa-2x d-inline-block mx-2' style='color: #FFF; vertical-align: middle;'></i></a>";
        texto +=  "</div>";
        texto += "<div class='col-lg-4 col-md-4 py-3 text-center text-md-right'>";
        texto += "<h5 class='text-white'> Móveis Pieppo</h5>";
        texto += "</div>";
        texto += "</div>";
        texto += "</div>";

        document.getElementById("footer").innerHTML = texto;

    }
    
    function includeMenu(){
        
        
        var texto = '<nav class="navbar navbar-expand-md navbar-dark ">';
            texto += '<a class="navbar-brand " href="index.html">';
            texto += '<img src="images/logo-piepo.png" class="img-fluid w-50 d-none d-sm-block">';
            texto += '<span class="d-block d-sm-none text-white">Pieppo Móveis</span>';
            texto += '</a>';
            texto +='<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" ariacontrols="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">';
            texto +='<span class="navbar-toggler-icon"></span></button>';

            texto +='<div class="collapse navbar-collapse" id="navbarsExampleDefault">';
            texto +='<ul class="navbar-nav mx-auto w-100">';
            texto +='<li class="nav-item w-25"><a class="nav-link text-white font-weight-bold" href="index.html">Home </a></li>';
            texto +='<li class="nav-item w-25"><a class="nav-link text-white font-weight-bold" href="sobre.html">Sobre</a></li>';
            texto +='<li class="nav-item w-25"><a class="nav-link text-white font-weight-bold" href="projetos.html">Projetos</a></li>';
            texto +='<li class="nav-item w-25"><a class="nav-link text-white font-weight-bold" href="contato.html">Contato</a></li>'
            texto +='</ul></div></nav>';
        
        document.getElementById('menu').innerHTML = texto;
        
    }
    
    
    $(document).ready(function () {
        $('.navbar-toggler').click(function () {
            $('#menu').toggleClass('sombra');
        });
    });
    
}
