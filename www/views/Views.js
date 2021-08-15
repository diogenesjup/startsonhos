class Views {

   constructor() {

      this._content = $("section#content");

      this._allMenus = $("footer * a");
      this._menu1 = $("footer .menu-1 a");
      this._menu2 = $("footer .menu-2 a");
      this._menu3 = $("footer .menu-3 a");

      this.header = $("header");
      this.footer = $("footer");

   }

   animarTransicao() {
      new WOW().init();
   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   VIEW PRINCIPAL
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   viewProd() {
      voltarAoTopo();

      this.animarTransicao();

      app.views.cssInicioLogado();

      app.views.ativarMenuUm();

      $("footer").fadeIn();
   }

   viewPrincipal() {

      voltarAoTopo();

      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um logo-header">
                           <a href="javascript:void(0)" title="Start Sonhos">
                              <img src="assets/images/icone.png" alt="Start Sonhos Logo" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Início
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

            `);

      this._content.html(`
               
                  <div class="row view-principal view-intro-principal" view-name="view-principal">
                     <div class="col-12 wow fadeInUp">
                        <!-- BUSCA PRINCIPAL -->
                        <div class="input-group busca-principal">
                           <input 
                              type="text" 
                              class="form-control" 
                              onkeyup="app.resultadoDePesquisa();" 
                              placeholder="Faça uma pesquisa" 
                              aria-label="Pesquise por produtos"
                              aria-describedby="busca-principal"
                              id="buscaPrincipal">
                                 <div class="input-group-append">
                                 <span class="input-group-text" id="busca-principal">
                                    <img src="assets/images/pesquisa.svg" alt="Busca">
                                 </span>
                                 </div>
                        </div>
                        <!-- BUSCA PRINCIPAL -->

                     </div>
                  </div>

                  <!-- STORIES -->
                        <div class="stories">
                           <div class="row">
                              <div class="col-12">
                                 
                                    <div id="storiesZ" class="storiesWrapper"></div>

                                    <!--
                                    <ul class="stories">
                                       
                                       <li>
                                          <a href="javascript:void(0)">
                                             <div class="stories__story">
                                             <picture>
                                                <img src="assets/images/stories1.svg" alt="Iphone 12">
                                             </picture>
                                             </div>
                                             <span class="story__title">
                                             Iphone 12 com um título grande para testar a quebra
                                             </span>
                                          </a>
                                       </li>

                                    </ul>
                                    -->


                              </div>
                           </div>
                        </div>
                        <!-- STORIES -->


                     <!-- ABAS -->
                  <div class="page-tabs">
                     <div class="pcss3t pcss3t-height-auto">

                     <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                     <label for="tab1">Sorteios</label>
                                                                           
                     <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                     <label for="tab2">Outros</label>

                     

                        <ul>
                                                                                    
                           <!-- ABA UM -->
                           <li class="tab-content tab-content-first area-pesquisa-principal" id="conteudo1">
                              
                                 <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                  

                           </li>
                           <!-- ABA UM -->

                           <!-- ABA DOIS -->
                           <li class="tab-content tab-content-2 area-pesquisa-principal" id="conteudo2">

                                 <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>


                           </li>
                           <!-- ABA DOIS -->

                           <!-- ABA TRES -->
                           <li class="tab-content tab-content-last" id="conteudo3">
                              <div class="carregando-frame">
                                    <p>
                                    <img src="assets/images/loading.gif" alt="Carregando" /><br clear="both">
                                    Carregando conteúdo
                                    </p>
                                 </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                           </li>
                           <!-- ABA TRES -->

                        </ul>

                  </div>
                  </div>      
                  <!-- ABAS -->  
                  <!-- BOTÃO CRIAR POST
                  <button type="button" data-js="post"></button>
                  -->
               
      `);

      this.animarTransicao();

      app.views.cssInicioLogado();

      app.views.ativarMenuUm();

      $("footer").fadeIn();


      if(localStorage.getItem("dadosWordPress")!==null){
          
          app.views.carregarProdutos();
      
      }else{
          
          app.models.testeApi();

      }




   }


   carregarProdutos(){
       
       var produtos = JSON.parse(localStorage.getItem("dadosWordPress"));

       console.log("DADOS RECUPERADOS:");
       console.log(produtos);

       // INICIAR O STORIES
       setTimeout(function(){ initStories(); }, 2000);

       // SORTEIOS
       for(var i = 0;i<produtos.produtos.length;i++){

          if(i==0){ $("#conteudo1").html(``); }

          if(produtos.produtos[i].rifa!="" && produtos.produtos[i].rifa!=0 && produtos.produtos[i].rifa!="0" && produtos.produtos[i].rifa!=null){

                    $("#conteudo1").append(`

                                           <!-- SORTEIO --> 
                                           <div class="caixa-branca">
                                 
                                              <p class="thumb">
                                                  <a href="javascript:void(0)" onclick="app.views.detalheProduto(${produtos.produtos[i].id})" title="Ver detalhes do sorteio">
                                                      <img src="${produtos.produtos[i].imagem}" alt="${produtos.produtos[i].titulo}">
                                                  </a>
                                              </p>

                                              <h5>${produtos.produtos[i].titulo}</h5>

                                              <p>${produtos.produtos[i].resumo}</p>

                                              <div class="actions-bar">
                                                  <div>
                                                      <button data-js="like" class="" onclick="app.like(${produtos.produtos[i].id},${produtos.produtos[i].likes})">
                                                          <i class="fas fa-heart"></i>
                                                          <span>${produtos.produtos[i].likes}</span>
                                                      </button>
                                                      <!--<button data-js="comment">
                                                          <i class="fas fa-comment"></i>
                                                          <span>0</span>
                                                      </button>-->
                                                  </div>
                                                  <div>
                                                      <button data-js="share" onclick="compartilharExterno('${produtos.produtos[i].titulo}','${produtos.produtos[i].url}')">
                                                          <i class="fas fa-share"></i>
                                                          <span>Comp.</span>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- SORTEIO -->

                    `);

           }// IF SE É SORTEIO

       }// SORTEIO

       var imagemProduto = "";
       var subs = "https";

       // OUTROS PRODUTOS
       for(var i = 0;i<produtos.produtos.length;i++){

          if(i==0){ $("#conteudo2").html(``); }

          if(produtos.produtos[i].rifa=="" || produtos.produtos[i].rifa==0 || produtos.produtos[i].rifa=="0" || produtos.produtos[i].rifa==null){

                    if(produtos.produtos[i].imagem.includes(subs)){

                     imagemProduto = produtos.produtos[i].imagem.replace("https://startsonhos.com/ssweb/wp-content/uploads/","");

                    }else{
                      
                      imagemProduto = produtos.produtos[i].imagem;

                    }

                    $("#conteudo2").append(`

                                           <!-- PRODUTO DE OUTRO TIPO --> 
                                           <div class="caixa-branca">
                                 
                                              <p class="thumb">
                                                  <a href="javascript:void(0)" onclick="app.views.detalheProduto(${produtos.produtos[i].id})" title="Ver detalhes do produto">
                                                      <img src="${imagemProduto}" alt="${produtos.produtos[i].titulo}">
                                                  </a>
                                              </p>

                                              <h5>${produtos.produtos[i].titulo}</h5>

                                              <p>${produtos.produtos[i].resumo}</p>

                                              <div class="actions-bar">
                                                  <div>
                                                      <button data-js="like" class="" onclick="app.like(${produtos.produtos[i].id},${produtos.produtos[i].likes})">
                                                          <i class="fas fa-heart"></i>
                                                          <span>${produtos.produtos[i].likes}</span>
                                                      </button>
                                                      <!--<button data-js="comment">
                                                          <i class="fas fa-comment"></i>
                                                          <span>0</span>
                                                      </button>-->
                                                  </div>
                                                  <div>
                                                      <button data-js="share" onclick="compartilharExterno('${produtos.produtos[i].titulo}','${produtos.produtos[i].url}')">
                                                          <i class="fas fa-share"></i>
                                                          <span>Comp.</span>
                                                      </button>
                                                  </div>
                                              </div>
                                          </div>
                                          <!-- PRODUTO DE OUTRO TIPO --> 

                    `);

           }// IF SE É OUTRO PRODUTO

       }// OUTROS PRODUTOS


       // INICIAR O STORIES
       //setTimeout(function(){ initStories(); }, 2000);


   }


   detalheProduto(idProduto){

      voltarAoTopo();
      
      var produtos = JSON.parse(localStorage.getItem("dadosWordPress"));
      var dadoProduto;

      console.log("DADOS RECUPERADOS:");
      console.log(produtos);

      console.log("PRODUTO:");
      console.log(idProduto);

      for(var i = 0;i<produtos.produtos.length;i++){

         if(produtos.produtos[i].id==idProduto){

            dadoProduto = produtos.produtos[i];
            i = produtos.produtos.length + 1;

         }

      }

      console.log("DADO PRODUTO:");
      console.log(dadoProduto);

      // IMPRIMIR HTML
      this.header.html(`

               <div class="container">
                     <div class="row">
                     <div class="col-3 no-paddings coluna-um">
                           <a href="javascript:void(0)" onclick="app.inicio();">
                              <img src="assets/images/voltar.svg" alt="Voltar" style="width: 27px;margin-top: 0px;" />
                           </a>
                     </div>
                     <div class="col-6 text-center no-paddings" id="tituloHeader">
                           Detalhe produto
                     </div>
                     <div class="col-3 no-paddings coluna-tres">
                           <div class="foto-perfil-header" style="background:url('assets/images/profile.svg') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                           <a href="javascript:void(0)" onclick="app.fabrirFecharMenuLoja()" title="Meu Perfil">
                              &nbsp;
                           </a>
                           </div>
                     </div>
                     </div>
               </div>

      `);

      this._content.html(`
               
                  <div class="row view-principal" view-name="view-principal">
                     <div class="col-12 wow slideInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <p>
                           <img src="${dadoProduto.imagem}" style="width:100%;height:auto" /> 
                        </p>

                        <h1 class="titulo-pagina titulo-interno-produto">
                           ${dadoProduto.titulo}
                        </h1>
                        <h2 class="preco-interno-produto">R$ ${dadoProduto.preco}</h2>
                        <div class="actionProdutoInterno"></div>

                        <hr>
                          <div class="conteudo-produto">
                            ${dadoProduto.conteudo}
                          </div>
                        <hr>
                        
                        <div class="actionProdutoInterno"></div>

                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>


                     </div>
                  </div>
               
               `);

      this.animarTransicao();

      var kit = dadoProduto.preco;
      var qtd = 1;

      localStorage.setItem("kit",dadoProduto.preco);
      localStorage.setItem("qtd",1);

      // PRODUTO É RIFA
      if(dadoProduto.rifa!="" && 
        dadoProduto.rifa!=0 && 
        dadoProduto.rifa!="0" && 
        dadoProduto.rifa!=null){

        $(".actionProdutoInterno").html(`

            <div class="form-group">
              <label>Quantidade</label>
              <select class="form-control" onchange="app.views.mudarKits(this)">
                      
                      ${dadoProduto.combos_kits.map((n) => {

                              return `
                                  
                                 <option value="${n.quantidade}">(X${n.quantidade}) ${n.titulo_opcao} ${n.valor_mkt}</option>

                              `
                      
                       }).join('')}

              </select>
            </div>
            
            <p>
              <b>Atenção:</b> esse sorteio não tem qualquer relação com a Apple.
            </p>
            <p class="o-botao-final">
              <a href="javascript:void(0)" onclick="openUrl('${app.urlDom}processar-lead/?nome=${localStorage.getItem("nomeUsuario")}&email=${localStorage.getItem("idUsuario")}&kit=${localStorage.getItem("kit")}&qtd=${localStorage.getItem("qtd")}&idproduto=${dadoProduto.id}')" title="Eu quero!" class="btn btn-primary" style="padding-top: 9px;height: 45px;margin-top: 10px;">
                 Eu quero!
              </a>
            </p>

        `);

      // PRODUTO NÃO É RIFA  
      }else{

        $(".actionProdutoInterno").html(`

            <p>
              <b>Atenção:</b> esse item não tem qualquer relação com a Apple.
            </p>
            <p class="o-botao-final">
              <a href="javascript:void(0)" onclick="openUrl('${app.urlDom}?add-to-cart=${dadoProduto.id}')" title="Eu quero!" class="btn btn-primary" style="padding-top: 9px;height: 45px;margin-top: 10px;">
              Eu quero!
              </a>
            </p>

        `);

      }

      localStorage.setItem("idProduto",dadoProduto.id);

   }


   // MUDAR KITS
   mudarKits(seletor){

        var valor = $(seletor).val();

        $(".o-botao-final").html(`

           <a href="javascript:void(0)" onclick="openUrl('${app.urlDom}processar-lead/?nome=${localStorage.getItem("nomeUsuario")}&email=${localStorage.getItem("idUsuario")}&kit=${localStorage.getItem("kit")}&qtd=${valor}&idproduto=${localStorage.getItem("idProduto")}')" title="Eu quero!" class="btn btn-primary" style="padding-top: 9px;height: 45px;margin-top: 10px;">
              Eu quero!
           </a>
           
        `);

   }

   cssInicioLogado() {

      restaurarBackground();

      
      $("header").css("background", "#fff");
      $("header").css("color", "#000");
      $("header").css("box-shadow", "0px 2px 4px rgba(0, 0, 0, 0.06)");

   }

   

   view2() {

      this._content.html(`
               
                  <div class="row view-2" view-name="view-2">
                     <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>View 2</h2>
                        <p>Essa é a segunda view</p>
                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   view3() {

      this._content.html(`
               
                  <div class="row view-3" view-name="view-3">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>View 3</h2>
                        <p>Esse é a terceira view</p>
                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   LOGIN / CADASTRO
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   viewLogin() {

      // RESETAR ALGUNS CSS`s`
      $("body").css("background", "#fff");
      $("section#content").css("background", "#fff");
      $("header").css("background", "#04BAE5");
      $("header").css("color", "#fff");
      $("header").css("box-shadow", "none");

      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Bem vindo!
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img class="" src="assets/images/logo-h.png" alt="Start Sonhos logo" />
                        </div>
                        
                        <div class="caixa-branca caixa-branca-login">

                              <form method="post" action="javascript:void(0)" onsubmit="app.procLogin(event)" style="margin-bottom:32px;">
                                 
                                 <div class="form-group has-feedback">
                                    <label>Nome completo</label>
                                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Seu nome completo" required />
                                       <i class="fa fa-user" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>E-mail</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="E-mail" required />
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                 </div>
                                 
                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewLogin">
                                       Ver Sorteios
                                    </button>
                                 </div>
                                 
                              </form>
                              
                                 <!--
                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                          Esqueci minha senha
                                       </a>
                                    </div>

                                 <div class="form-group link-apoio text-center">
                                       <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                          Criar uma conta
                                       </a>
                                 </div>
                                 -->


                        </div>

                     

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();
      app.helpers.carregarMascaras();

   }

   viewCadastro() {

      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Cadastro
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo.svg" alt="Drive Camp logo" />
                        </div>

                        <div class="caixa-branca caixa-branca-login">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastro(event)">
                                 
                                 <div class="form-group has-feedback">
                                    <label>Seu nome completo</label>
                                    <input type="text" class="form-control" id="nome" name="nome" placeholder="Seu nome completo" required />
                                       <i class="fa fa-user" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>E-mail</label>
                                    <input type="text" class="form-control" id="email" name="email" placeholder="E-mail" required />
                                       <i class="fa fa-envelope" aria-hidden="true"></i>
                                 </div>

                                 <div class="form-group has-feedback">
                                    <label>Senha</label>
                                    <input type="password" class="form-control" id="senha" name="senha" placeholder="Senha" required />
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                 </div> 
                                 
                                 <div class="form-group">
                                    <button class="btn btn-primary" id="btnViewCadastro">
                                       Cadastro
                                    </button>
                                 </div>

                              </form>

                              <div class="form-group link-apoio text-center">
                                    <a href="javascript:void(0)" onclick="app.viewLogin()" title="Já tenho uma conta">
                                       Já tenho uma conta
                                    </a>
                                 </div>

                        </div>

                  </div>
               </div>
            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();

   }

   cadastroPasso2() {


      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Sobre você
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                                          
                        <div class="cadastros-passos">
                           <h3>Que tipo de usuário você é?</h3>
                        </div>

                  </div>
               </div>

               <div class="caixa-branca-passos-cadastro caixa-branca-login wow fadeInDown" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastroPasso2(event)">
                                 
                                 
                                 <div id="tipoUsuario" class="tipoUusario owl-carousel owl-theme">

                                       <!-- PAGINA -->
                                       <div class="item">
                                          
                                          <div class="form-check">
                                             <input class="form-check-input" name="compraralugar[]" type="radio" value="comprar" id="defaultCheck1" checked>
                                             <label class="form-check-label label-um" for="defaultCheck1">
                                                <div class="capa-passo-cadastro" style="background:url('assets/images/ilustracao-1.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                                   &nbsp;
                                                </div>
                                             </label>
                                          </div>
                                          
                                          <h4>Sou produtor de conteúdo</h4>
                                          <p>
                                             Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                          </p>

                                       </div>
                                       <!-- PAGINA -->


                                       <!-- PAGINA -->
                                       <div class="item">
                                          
                                          <div class="form-check">
                                             <input class="form-check-input" name="compraralugar[]" type="radio" value="comprar" id="defaultCheck2">
                                             <label class="form-check-label label-um" for="defaultCheck2">
                                                <div class="capa-passo-cadastro" style="background:url('assets/images/ilustracao-2.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                                   &nbsp;
                                                </div>
                                             </label>
                                          </div>
                                          
                                          <h4>Sou consumidor de conteúdo</h4>
                                          <p>
                                             Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                          </p>
                                          
                                       </div>
                                       <!-- PAGINA -->


                                       <!-- PAGINA -->
                                       <div class="item">
                                          
                                          <div class="form-check">
                                             <input class="form-check-input" name="compraralugar[]" type="radio" value="comprar" id="defaultCheck3">
                                             <label class="form-check-label label-um" for="defaultCheck3">
                                                <div class="capa-passo-cadastro" style="background:url('assets/images/ilustracao-1.png') #f2f2f2 no-repeat;background-size:cover;background-position:center center;">
                                                   &nbsp;
                                                </div>
                                             </label>
                                          </div>
                                          
                                          <h4>Estou buscando novas conexões</h4>
                                          <p>
                                             Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                          </p>
                                          
                                       </div>
                                       <!-- PAGINA -->

                                 </div>

                                 <div class="caixa-branca col-10 offset-1" style="margin-top:-30px;">
                                    <div class="form-group">
                                       <button class="btn btn-primary" id="btnViewCadastro">
                                          Próximo passo
                                       </button>
                                    </div>
                                 </div>

                              </form>

                              

                        </div>

            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();



      // INSTANCIAR O OWL CARROUSEL
      var tipoUsuario = $('#tipoUsuario').owlCarousel({
         loop: false,
         margin: 10,
         items: 1.5,
         autoplay: false,
         center: true
      });


   }

   cadastroPasso3() {


      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Sobre você
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                                          
                        <div class="cadastros-passos">
                           <h3>Quais são os seus interesses?</h3>
                        </div>


                        <div class="caixa-branca caixa-branca-login" style="padding-left: 0px;padding-right: 0px;">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastro3(event)">

                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Saúde</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Entretenimento</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Educação</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Empreendedorismo</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Tecnologia</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Netnografia</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">História</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Design</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">UX</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Esportes</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Política</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Música</span>
                                 <span onclick="app.applyFilter(this)" class="badge badge-secondary">Grow</span>
                                 
                                 <p class="preferencias">
                                    Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                 </p>  
                                 <div class="form-group">
                                       <button class="btn btn-primary" id="btnViewCadastro">
                                          Próximo passo
                                       </button>
                                 </div>
                              </form>

                        </div>

                  </div>
               </div>
            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();


   }

   applyFilter(seletor) {

      if ($(seletor).hasClass("clicada")) {

         $(seletor).removeClass("clicada");

      } else {

         //$(".filtros .badge-secondary").removeClass("clicada");
         $(seletor).addClass("clicada");

      }

   }

   cadastroPasso4() {


      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Sobre você
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                                          
                        <div class="cadastros-passos">
                           <h3>Qual o seu momento profissional?</h3>
                        </div>

                        <div class="caixa-branca caixa-branca-login view-configuracoes" style="padding-left: 0px;padding-right: 0px;">
                     
                              <form method="post" id="formCadastro" action="javascript:void(0)" onsubmit="app.procCadastro4(event)">

                                    <nav>

                                       <ul>

                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config1">
                                                   <label class="custom-control-label" for="config1">
                                                         Recolocação no mercado
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>


                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config2">
                                                   <label class="custom-control-label" for="config2">
                                                         Estágio ou Trainee
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>


                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config3">
                                                   <label class="custom-control-label" for="config3">
                                                         Empreendedor
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>


                                          <li>
                                             <a href="javascript:void(0)" title="">
                                                   <div class="custom-control custom-switch">
                                                   <input type="checkbox" class="custom-control-input" id="config4">
                                                   <label class="custom-control-label" for="config4">
                                                         Feliz profissionalmente
                                                   </label>
                                                   </div>
                                             </a>
                                          </li>

                                       </ul> 

                                    </nav>
                                    
                                 <p class="preferencias">
                                    Praesent tellus mauris, tincidunt nec ipsum id, faucibus pellentesque leo. Nunc congue ac tellus quis porttitor. 
                                 </p>  

                                 <div class="form-group">
                                       <button class="btn btn-primary" id="btnViewCadastro">
                                          Finalizar cadastro
                                       </button>
                                 </div>

                              </form>

                        </div>

                  </div>
               </div>
            
            `);

      $("footer").hide();

      this.animarTransicao();

      app.helpers.carregarMascaras();

   }

   viewEsqueciMinhaSenha() {

      this.header.html(`

                  <div class="container">
                     <div class="row">
                        <div class="col-12 text-center">
                           Esqueci minha senha
                        </div>
                     </div>
                  </div>

               `);

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        
                        <div class="caixa-branca logo-caixa-branca">
                           <img src="assets/images/logo.svg" alt="Drive Camp logo" />
                        </div> 

                        <div class="caixa-branca caixa-branca-login">

                           <form method="post" action="javascript:void(0)" onsubmit="app.procResetSenha(event)">
                              
                              <div class="form-group has-feedback">
                                 <label>Seu e-mail ou usuário cadastrado</label>
                                 <input type="email" class="form-control" id="resetEmail" onclick="ativarFormularioFlutuante('#resetEmail','Seu e-mail cadastrado')" placeholder="Seu e-mail ou usuário" required />
                                 <i class="fa fa-envelope"></i>
                              </div>
                              
                              <div class="form-group">
                                 <button class="btn btn-primary" id="btnViewResetarSenha">
                                    Resetar senha
                                 </button>
                              </div>
                           </form>

                           <div class="form-group link-apoio text-center">
                                 <a href="javascript:void(0)" onclick="app.viewLogin()" title="Cancelar reset de senha">
                                    Cancelar
                                 </a>
                              </div>

                        </div>

                     </div>
                  </div>
               
               `);

      $("footer").hide();

      this.animarTransicao();

   }

   /**
    *  ------------------------------------------------------------------------------------------------
    *
    *
    *   APOIOS
    *
    *
    *  ------------------------------------------------------------------------------------------------
    */

   removerImagemGaleriaImagens(idDaImagem) {

      // REMOVER UMA IMAGEM DOS UPLOADS DAS IMAGENS
      $("#galeriaImgensImoveis" + idDaImagem).remove();
      $("#caixaPreviewImagemCarregada" + idDaImagem).remove();

      $("#imagemOculta").val();

   }

   // VIEW UPLOAD DE FOTO

   viewUploadFoto() {

      this._content.html(`
               
                  <div class="row view-login" view-name="view-login">
                     <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                        <h2>Upload de foto</h2>
                        <p>Fazer upload de imagens via input ou camêra</p>
                        
                        <form class="fileForm" method="post" enctype="multipart/form-data" action="${app.urlApi}v1-imagens-upload.php">
                           
                           <input type="hidden" name="token" value="${app.token}" />
                           <input type="hidden" name="id_usuario" value="${localStorage.getItem("idUsuario")}" />

                           <div class="form-group">
                              <label for="fileArquivo" class="btn btn-default" style="width:100%;">Selecionar arquivo</label>
                              <input style="opacity:0;display:block;height:auto;width:100%;" type="file" id="fileArquivo" class="upload-imagem" name="arquivo" />
                           </div>



                        </form>

                        <div class="form-group">
                           <a href="javascript:void(0)" class="btn btn-primary" onclick="uploadLocal();">
                              Enviar o arquivo
                           </a>
                        </div>

                        <div class="retorno-upload"></div>

                        <div class="form-group link-apoio text-center">
                           <a href="javascript:void(0)" onclick="app.inicio()" title="Cancelar upload de imagens">
                                 Cancelar
                           </a>
                        </div>

                     </div>
                  </div>
               
               `);

      this.animarTransicao();

   }

   desativarTodosMenus() {
      this._allMenus.css("font-weight", "normal");
   }

   ativarMenuUm() {
      this.desativarTodosMenus();
      this._menu1.css("font-weight", "bold");
   }

   ativarMenuDois() {
      this.desativarTodosMenus();
      this._menu2.css("font-weight", "bold");
   }

   ativarMenuTres() {
      this.desativarTodosMenus();
      this._menu3.css("font-weight", "bold");
   }
}