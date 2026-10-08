# 🏆 Master Avenger BR

> Sorteador oficial para definir, de forma aleatória, os membros do clã que terão direito ao bônus da Liga no Clash of Clans.

## ⚔️ Sobre o projeto

O **Master Avenger BR** nasceu de uma necessidade real dentro do nosso clã de **Clash of Clans**.

Após cada Liga, precisávamos realizar o sorteio dos membros que teriam direito ao bônus. O problema era que sempre acabávamos perdendo tempo procurando sites ou aplicativos para realizar esses sorteios.

Além disso, muitas das opções disponíveis apresentavam uma experiência pouco agradável, principalmente pela grande quantidade de propagandas e pela falta de uma identidade que tivesse relação com o nosso clã.

Foi aí que surgiu a ideia:

> **"Por que não desenvolver o nosso próprio sorteador?"**

Como desenvolvedor, decidi criar uma solução própria, simples, rápida e com a identidade visual do nosso clã.

Assim nasceu o **Master Avenger BR**. 🎮

---

## 🎯 Objetivo

O objetivo do projeto é facilitar o sorteio dos membros que receberão o **bônus da Liga do Clash of Clans**, tornando o processo:

- 🎲 Aleatório
- ⚡ Rápido
- 🎮 Personalizado
- 🚫 Sem excesso de propagandas
- 📱 Responsivo
- 🛡️ Com a identidade visual do nosso clã

A ideia é transformar uma tarefa que antes dependia de ferramentas externas em uma experiência criada especificamente para a nossa comunidade.

---

## ✨ Destaques

- 🎲 Sorteio aleatório de números.
- 🏆 Interface inspirada em uma arena de competição.
- ⚔️ Identidade visual **Master Avenger BR**.
- 📱 Interface responsiva para desktop, tablet e celular.
- 🖼️ Imagens oficiais utilizadas na identidade do projeto.
- 🎯 Validação do número informado.
- 🏅 Modal de resultado com destaque para o vencedor.
- ✨ Animações e feedback visual durante o sorteio.
- 🚫 Sem dependências externas de JavaScript.
- 🌐 Funciona diretamente no navegador.

---

## 🎮 Como funciona

O funcionamento é simples:

1. Informe o número máximo de participantes.
2. Clique em **Sortear Vencedor**.
3. O sistema gera um número aleatório.
4. O resultado é apresentado em destaque.
5. O número sorteado pode ser relacionado ao membro correspondente na lista da Liga.

### Exemplo

```text
Número máximo: 30

🎲 Sorteando...

🏆 Vencedor: 17
```

O sorteio utiliza o `Math.random()` do JavaScript para gerar um número inteiro aleatório entre `1` e o limite informado.

---

## 🧠 Por que desenvolvi?

Este projeto não foi criado apenas como um exercício de programação.

Ele surgiu de uma **necessidade real**.

Nosso clã precisava realizar sorteios para definir quem receberia o bônus da Liga, mas utilizar ferramentas externas significava lidar constantemente com:

- Sites com muitas propagandas;
- Interfaces genéricas;
- Ferramentas sem nenhuma relação com o nosso clã;
- Tempo perdido procurando uma opção adequada.

Então decidi transformar esse problema em uma oportunidade para desenvolver uma solução própria.

Além de resolver uma necessidade do nosso clã, o projeto também serviu como uma forma de aplicar meus conhecimentos de desenvolvimento web em algo que realmente seria utilizado.

---

## 🛠️ Tecnologias utilizadas

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js" />
</p>

### Front-end

- **HTML5** — estrutura da aplicação.
- **CSS3** — estilização, responsividade e identidade visual.
- **JavaScript** — lógica do sorteio, validações e interação com a interface.

---

## 📁 Estrutura do projeto

```text
Master-Avenger-BR/
├── assets/
│   ├── master-avenger-bg.png
│   ├── master-avenger-top-shield.png
│   └── winner.svg
├── index.html
├── script.js
├── styles.css
├── LICENSE
└── README.md
```

---

## 🚀 Como executar

O projeto não requer instalação de dependências.

### 1. Clone o repositório

```bash
git clone https://github.com/devbymarks/sorteio-master-avenger.git
```

### 2. Entre na pasta

```bash
cd sorteio-master-avenger
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

diretamente no navegador.

Também é possível utilizar qualquer servidor HTTP local caso prefira.

---

## 🎲 Lógica do sorteio

O sorteio utiliza o método `Math.random()` para gerar um número inteiro aleatório.

A lógica considera:

```text
Mínimo: 1
Máximo: número informado pelo usuário
```

A entrada é validada para aceitar somente números inteiros maiores ou iguais a `1`.

---

## 🏆 Uso no Clash of Clans

O **Master Avenger BR** foi desenvolvido principalmente para utilização interna do nosso clã no **Clash of Clans**.

A ferramenta facilita o processo de definição dos membros que terão direito ao bônus da Liga, evitando a necessidade de procurar ferramentas externas para cada sorteio.

O objetivo é tornar o processo mais rápido e manter tudo dentro da nossa própria identidade.

---

## 🔮 Possíveis melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

- [ ] Cadastro dos nomes dos membros.
- [ ] Sorteio diretamente pelo nome do jogador.
- [ ] Histórico dos sorteios realizados.
- [ ] Sistema para evitar que um participante seja sorteado novamente.
- [ ] Número de vencedores configurável.
- [ ] Sistema de ranking.
- [ ] Exportação dos resultados.
- [ ] Histórico das Ligas.
- [ ] Melhorias nas animações e efeitos visuais.

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Matheus Marks**.

Projeto criado para uso no nosso clã de **Clash of Clans** e também como parte do meu portfólio de desenvolvimento.

---

## 📄 Licença

Este projeto está disponibilizado sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais informações.

---

⭐ **Gostou do projeto? Deixe uma estrela no repositório!**
