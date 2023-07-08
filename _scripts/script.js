var quantidade  = $('div#testemunhos ul').length;
var limite      = (quantidade * 336) * -1; 
var largura     = limite + 336;
var view_largura= $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width',limite*-1);

$('div#testemunha-direita').click( function() {
    
    posicao_atual   = $('div#testemunhos').position().left;
    nova_posicao    = posicao_atual - view_largura;
        
    if ( limite < posicao_atual - view_largura ) {

        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( limite > ( nova_posicao - view_largura)) {
        $('div#testemunha-direita ion-icon').css('opacity',0.5);
        $('div#testemunha-direita ion-icon').css('cursor','not-allowed');        
    }

    $('div#testemunha-esquerda ion-icon').css('opacity',1);
    $('div#testemunha-esquerda ion-icon').css('cursor','pointer');

})

$('div#testemunha-esquerda').click( function() {
    posicao_atual   = $('div#testemunhos').position().left;

    if ( posicao_atual + view_largura <= 0 ) {
        nova_posicao = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_posicao},1000);
    }

    if ( nova_posicao == 0 ) {
        $('div#testemunha-esquerda ion-icon').css('opacity',0.5);
        $('div#testemunha-esquerda ion-icon').css('cursor','not-allowed');        
    }

    $( 'div#testemunha-direita ion-icon').css('opacity',1);
    $('div#testemunha-direita ion-icon').css('cursor','pointer');      
})


// códidos de clique para assinar

$('div.planos-bottom').click(function() {
    alert("clicou")
})

// codigos para links das redes sociais
$("ion-icon#facebook").click(function() {
    window.open("http://www.facebook.com","_blank");
})

$("ion-icon#instagram").click(function() {
    window.open("http://www.instagram.com","_blank");
})

/* Codigos de Animacao */

$('div#testemunhos ul:eq(0)').css('opacity',0);
$('div#testemunhos ul:eq(1)').css('opacity',0);
$('div#testemunhos ul:eq(2)').css('opacity',0);

$('section#domingo-perfeito').waypoint( function(direcao) {
    if ( direcao == "down") {
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');                
    }

    if (direcao == "up") {
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower'); 
    }
},{
    offset:'450px;'
})

$('section#pizza').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('section#pizza p').addClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow');
    }

    if (direcao == 'up') {
        $('section#pizza p').removeClass('animate__animated animate__fadeInUp');
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow');
    }
},{
    offset:'450px;'
})

$('section#testemunha').waypoint( function(direcao) {
    if (direcao == 'down') {
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }

    if (direcao == 'up') {
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
},{
    offset:'400px;'
})

$('div#transicao-testemunha-plano').waypoint(function(direcao) {
    if ( direcao == 'down') {
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate_slow');
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate_slow');
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate_slow'); 

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate_slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate_slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate_slow');
    } else {
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate_slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate_slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate_slow');  
    }
},{
    offset:'600px;'
})

$('section#plano-principal').waypoint(function(direcao) {
    if (direcao == 'down') {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate_slower');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp animate_slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate_slower');
    } else {
        $('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate_slower');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate_slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate_slower');
    }
},{
    offset:'450px;'
})

$('footer').waypoint(function(direcao) {
    if(direcao == 'down') {
        $('div#mapa').addClass('animate__animated animate__fadeIn');
        $('div#info').addClass('animate__animated animate__fadeIn');
        $('div#pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn');
    } else {

        $('div#mapa').removeClass('animate__animated animate__fadeIn');
        $('div#info').removeClass('animate__animated animate__fadeIn');
        $('div#pizza-rodape-decoracao').removeClass('animate__animated animate__fadeIn');
    }

},{
    offset:'650px;'
})

$('header h1').waypoint(function(direcao){
    if (direcao == 'down') {
        $('nav').addClass('navEstatico');
        $('nav div').addClass('logoEstatico');
        $('nav ul').addClass('menuEstatico');
        $('nav ul li a').addClass('itemEstatico');
        $('nav ion-icon').addClass('iconeEstatico');
    } else {
        $('nav').removeClass('navEstatico');
        $('nav div').removeClass('logoEstatico');
        $('nav ul').removeClass('menuEstatico');
        $('nav ul li a').removeClass('itemEstatico');
        $('nav ion-icon').removeClass('iconeEstatico');
    }
},{
    offset:'200px;'
})

// acoes de navegacao

$('nav div').click(function() {
    $('html,body').animate({scrollTop:$('header').offset().top},1000);
})

$('nav ul li:eq(0)').click(function() {
    $('html,body').animate({scrollTop:$('section#domingo-perfeito').offset().top},1000);
})

$('nav ul li:eq(1)').click(function() {
    $('html,body').animate({scrollTop:$('section#pizza').offset().top},1000);
})

$('nav ul li:eq(2)').click(function() {
    $('html,body').animate({scrollTop:$('section#testemunha').offset().top},1000);
})

$('nav ul li:eq(3)').click(function() {
    $('html,body').animate({scrollTop:$('section#plano-principal').offset().top},1000);
})