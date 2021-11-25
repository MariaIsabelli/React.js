import React from "react";
import 'style.scss';



const Header = () => {
    return(
        <header>
 <div class="nav-bar">
    <img id="logo" src="http://orig13.deviantart.net/99a0/f/2012/163/b/1/pixel___crisis_moon_compact_by_firstfear-d53a6qj.png"/>
    <a class="hover" id="menu" href="#">Menu</a>
    <a href="#" id="logo"></a>
    <ul class="innerbar">
      <li><a class="hoverleft" href="produtos.html">Produtos</a></li>
      <li><a class="hoverleft" href="cadastro.html">Cadastro</a></li>
      <li><a class="hoverleft" href="login.html">Login</a></li>
      <li><a class="hoverleft" href="Carrinho.html">Suas Compras</a></li>
    </ul>
  </div>


  <h1>Bem vindo a nossa loja!</h1>
  <p>Gamer Mania uma loja de gamer para gamer.</p>
        </header>
    )
}

export default Header; 