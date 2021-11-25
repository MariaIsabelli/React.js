import React from "react";
import 'style.scss';



const Header = () => {
    return(
        <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                  <img id="logo" src="http://orig13.deviantart.net/99a0/f/2012/163/b/1/pixel___crisis_moon_compact_by_firstfear-d53a6qj.png">
                  <a class="hover" id="menu" href="#">Menu</a>
                  <a href="#" id="logo"></a>
                </div>
                <div class="col-sm-2">
                    <h5>Inicio</h5>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="cadastro.html">Cadastro</a></li>
                        <li><a href="produtos.html">Produtos</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Sobre-nós</h5>
                    <ul>
                        <li><a href="https://programadorviking.com.br/">Informações da Empresa</a></li>
                        <li><a href="https://programadorviking.com.br/">Contato</a></li>
                        <li><a href="https://programadorviking.com.br/">Blog</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Suporte</h5>
                    <ul>
                        <li><a href="https://programadorviking.com.br/">FAQ</a></li>
                        <li><a href="https://programadorviking.com.br/">Telefones</a></li>
                        <li><a href="https://programadorviking.com.br/">Chat</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="social-networks">
                        <a href="https://programadorviking.com.br/" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="https://programadorviking.com.br/" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="https://programadorviking.com.br/" class="instagram"><i class="fa fa-instagram"></i></a>
                    </div>
                    <a href="https://programadorviking.com.br/">
                        <button type="button" class="btn btn-default">Contato</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© 2021-Maria Isabelli</p>
        </div>
    </footer>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</body>

</html>
    )
}