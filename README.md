# 🎧 RádiosDevStream - Streaming de Rádio Online

## 🌟 Visão Geral do Projeto

O **RádiosDevStream** é uma aplicação web que desenvolvi como meu projeto pessoal final para a **Imersão Dev com Alura e Google - 10ª Edição**. Ele transforma uma base de dados JSON em uma aplicação interativa com um Player de Mídia funcional. O projeto destaca-se pela experiência do usuário (UX/UI) moderna, utilizando Glassmorphism, design responsivo (Mobile-First) e JavaScript para controle dinâmico da tag <audio>, permitindo buscar e reproduzir estações de rádio com feedback visual em tempo real (Equalizador).

---

## ✨ Funcionalidades e Destaques Técnicos

### 1. Player de Mídia Interativo (Media Control)
* **Controle Dinâmico:** Utiliza a API nativa `<audio>` do HTML5, controlada inteiramente via JavaScript, para gerenciar os estados **Play/Pause** e o **Volume**.
* **Feedback Visual:** Implementação de um **Equalizador Animado (CSS Wave)** que se ativa apenas quando a rádio está em reprodução, e um indicador de status `Ao Vivo` ou `Pausado`.
* **UX (Experiência do Usuário):** Aplicação de *scroll* suave (`scrollIntoView`) ao selecionar uma nova rádio, garantindo que o usuário seja direcionado automaticamente ao player principal.

### 2. Arquitetura Orientada a Dados
* **Base de Conhecimento:** Todas as informações das rádios (nome, cidade, logo, URL de streaming) são gerenciadas em um arquivo **`data.json`**, facilitando a manutenção e a expansão do catálogo.
* **Busca Dinâmica (Filtro):** O `script.js` realiza a leitura assíncrona do JSON e permite a filtragem instantânea das rádios por nome, cidade ou descrição, atualizando o grid de resultados em tempo real.

### 3. Design Moderno e Responsivo (UI/UX Premium)
* **Estilo Visual:** O design utiliza a técnica de **Glassmorphism** (Efeito de Vidro Fosco) em um esquema de cores Dark Mode (azul/índigo), conferindo uma aparência profissional e moderna.
* **Layout:** Uso de **CSS Grid** e **Flexbox** para a criação de um layout adaptável que funciona perfeitamente em dispositivos móveis (Mobile-First) e desktops, atendendo às melhores práticas de desenvolvimento web atuais.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica da página. |
| **CSS3** | Estilização avançada, com variáveis CSS, Media Queries (Responsividade) e animações (`@keyframes`). |
| **JavaScript** | Lógica de programação, manipulação do DOM, controle do player de áudio e busca/filtragem de dados. |
| **JSON** | Formato de dados para a base de conhecimento das estações de rádio. |
| **Font Awesome** | Biblioteca de ícones (play, pause, volume, search). |

---

## 🚀 Estrutura de Arquivos

    ```
    radiosdevstream/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── data.json
    └── img/
        └── (arquivos das logos)
    ```

---

## 🧑‍💻 Desenvolvedor

Este projeto foi desenvolvido por:

* **Emerson Farias**
* **[GitHub](https://github.com/emersonfariasmcz)**
* **[LinkedIn](https://www.linkedin.com/in/emersonfariasbr/)**
* **Base de Conhecimento:** [Alura](https://www.alura.com.br/)

> *Este projeto é um upgrade de um desafio proposto durante a Imersão Dev, aplicando técnicas de desenvolvimento profissional.*
