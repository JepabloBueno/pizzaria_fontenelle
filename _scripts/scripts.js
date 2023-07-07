var quantidade = $('div#testemunhos ul') .length;
var limite     =  (quantidade * 336) *-1;
var largura    =  limite + 336;
var view_largura = $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width',limite*-1);

$('div#testemunha-direita').click(function(){
    posicao_atual = $('div#testemunhos').position().left;
    nova_posicao  = posicao_atual - view_largura;
    

    if( limite < posicao_atual - view_largura ){
        $('div#testemunhos').animate({left:nova_posicao}, 1000);
              
    }

    if (limite > (nova_posicao - view_largura)){
        $('div#testemunha-direita ion-icon').css('opacity', 0.5);
        $('div#testemunha-direita ion-icon').css('cursor', 'not-allowed');
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

    $('div#testemunha-direita ion-icon').css('opacity',1);
    $('div#testemunha-direita ion-icon').css('cursor','pointer');      
})

// TESTES DE CLIQUE //

$('div.planos-bottom').click(function() {
    alert("clicou");
})

// CÓDIGOS PARA LINKS //

$('ion-icon#linkedin').click(function(){
    window.open("https://www.linkedin.com","_blank");
})

$('ion-icon#facebook').click(function(){
    window.open("https://pt-pt.facebook.com","_blank")
})

$('ion-icon#youtube').click(function(){
    window.open("https://youtube.com","_blank")
})

$('ion-icon#instagram').click(function(){
    window.open("https://instagram.com","_blank")
})

$('ion-icon#twitter').click(function(){
    window.open("https://twitter.com","_blank")
})

// CÓDIGOS DE ANIMAÇÃO //

$('div#testemunhos ul:eq(0)').css('opacity', 0)
$('div#testemunhos ul:eq(1)').css('opacity', 0)
$('div#testemunhos ul:eq(2)').css('opacity', 0)

$('section#domingo-perfeito').waypoint(function(direcao){
    if (direcao == 'down') {
        $('div.folha1').addClass('animate__animated animate__fadeInUp')
        $('div.folha2').addClass('animate__animated animate__fadeInUp')
        $('div.folha3').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow')
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slower')
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower')
    } else {
        $('div.folha1').removeClass('animate__animated animate__fadeOut')
        $('div.folha2').removeClass('animate__animated animate__fadeOut')
        $('div.folha3').removeClass('animate__animated animate__fadeOut')
        $('div.camarao').removeClass('animate__animated animate__fadeOut')
        $('div.tomate').removeClass('animate__animated animate__fadeOut')
        $('div.queijo').removeClass('animate__animated animate__fadeOut')
    }
}, {
    offset: '450px;'
})

$('section#pizza').waypoint(function(direcao){
    if (direcao == 'down') {
        $('section#pizza p').addClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').addClass('animate__animated animate__fadeInUp animate__slow')
    } else {
        $('section#pizza p').removeClassClass('animate__animated animate__fadeInUp')
        $('section#pizza div.pizza-opcoes').removeClass('animate__animated animate__fadeInUp animate__slow')
    }

},{
    offset:'450px;'
}) 

$('section#testemunha').waypoint(function(direcao){

    if (direcao == 'down') {
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    } else {
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }

},{
    offset:"900px;"
})

$('div#transicao-testemunha-plano').waypoint(function(direcao){
    if (direcao == 'down') {
        $('div#transicao-testemunha-plano div#decoracao1').addClass('animate__animated animate__fadeInLeft animated__slow');
        $('div#transicao-testemunha-plano div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow');
        $('div#transicao-testemunha-plano div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow');
    } else {
        $('div#transicao-testemunha-plano div#decoracao1').removeClass('animate__animated animate__fadeInLeft');
        $('div#transicao-testemunha-plano div#decoracao2').removeClass('animate__animated animate__fadeInUp');
        $('div#transicao-testemunha-plano div#decoracao3').removeClass('animate__animated animate__fadeInRight');
    }

    if (direcao == 'up') {

    }
},{
    offset:'700px;'
})

$('div.planos').waypoint(function(direcao){
    if (direcao == 'down') {
        $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft');
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInUp');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight');
    }
},{
    offset:'450px;'
})

$('footer').waypoint(function(direcao){
    if (direcao == 'down') {
        $('div#mapa').addClass('animate__animated animate__fadeIn');
        $('div#info').addClass('animate__animated animate__fadeIn');
        $('div#pizza-rodape-decoracao').addClass('animate__animated animate__fadeIn');
    }
},{
    offset:'650px;'
})

