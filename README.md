# React Weather

<h1>EM DESENVOLVIMENTO</h1>

<h2>Sobre</h2>

<p>Web App de Temperatura feito em JavaScript utilizando a biblioteca ReactJS com TypeScript, ao iniciar o servidor a pagina sera iniciada no localhost, Com um input de texto para procurar a cidade e o botão de busca, ao inserir a cidade e pressionar o botão de busca, uma requisição é feita a Api da OpenWeather, Quando a resposta retornar os dados da api serão inseridos em uma div que aparecera na tela abaixo do input e do botão.</p>

<p>Sistema criado em container docker com ambientes de produção e desenvolvimento criados em containers Docker utilizando Dockerfile para multi stage building e Docker Compose para orquestração de containers.</p>

<h2>Requisitos</h2>

<ul>
  <li>NPM</li>
  <br>
  <li>Docker</li>
  <br>
  <li>Docker Compose</li>
  <br>
</ul>

<h2>MODO DE USO</h2>

<h3>GIT</h3>

<p>FAÇA O DOWNLOAD DO REPOSITORIO OU USE SSH:<br><code>git pull git@github.com:joaov1ct0r/react-weather.git</code></p>

<h3>VARIAVEIS DE AMBIENTE</h3>
<hr>

<p>ABRA O ARQUIVO .env E ALTERE AS VARIAVEIS DE AMBIENTE COM SEUS DADOS</p>

<ul>
  <li>REACT_APP_API_KEY = SUA CHAVE PARA A API DA OPEN WEATHER</li>
  <li>REACT_APP_API_URL = URL PARA A API DA OPEN WEATHER</li>
  <li>REACT_APP_NODE_ENV = VARIAVEL DE AMBIENTE DO SEU NODE</li>
</ul>

<h3>SERVER</h3>
<hr>

<p>APOS TER OS ARQUIVOS EM SUA MAQUINA ESCOLHA O MODO EM QUE QUER RODAR O PROJETO:
  <br>PRODUÇÃO: <code>sudo docker compose up --build -d</code>

<br>DESENVOLVIMENTO: <code>sudo docker compose -f docker-compose.dev.yaml up --build -d</code>

</p>

<h2>Picture</h2>
