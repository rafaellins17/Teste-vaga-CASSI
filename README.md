# 🧾 Teste Técnico


## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (DOM Manipulação)
- Font Awesome (ícones usados no site)
- ESLint e Prettier (Para aplicar padrões de codificação da melhor forma)

---


## 📦 Estrutura do Projeto

```
├── index.html            # Página principal
├── styles.css            # Estilos da aplicação
├── script.js             # Lógica e interações
├── README.md             # Documentação pedida no teste
└── /img                  # Imagens usadas no projeto
```
---

## ✨ Funcionalidades
- Fidelidade ao Protótipo mostrado no FIGMA
- Menu de navegação com dropdowns funcionais.
- Layout responsivo (mobile, tablet e desktop)
- Reconhecimento de NIP com ramificações lógicas:
- Modal com formulário quando o usuário não reconhece ou não a NIP.
- Agradecimento e alertas dinâmicos com base na resposta do usuário.
- Botões com estados visuais claros.
- Modal com formulário validado e campos editáveis.

---

## 🖥️ Como Executar

2. Abra o arquivo `index.html` em um navegador moderno (Chrome, Firefox, Edge ou Safari).

---

## 📱 Responsividade

O layout se adapta a diferentes tamanhos de tela, incluindo:
- Smartphones
- Tablets
- Desktops

Use `Ctrl + Shift + M` no navegador (modo responsivo) para testar as diferentes responsividades.

---

## 🧪 Testes Automatizados 

📋 Passo a passo de funcionamento
Ao carregar a página, o script aguarda o DOM estar pronto (DOMContentLoaded).

Detecta e adiciona escuta ao botão "Não reconheço":

Quando clicado, imprime no console:
🟥 Clique em 'Não reconheço'

Detecta e adiciona escuta ao botão "Sim, foi aberto por mim":

Quando clicado, imprime no console:
🟩 Clique em 'Sim, foi aberto por mim'

Escuta de eventos nos botões do interlocutor ("Sim"/"Não"):

Esses botões aparecem dinamicamente após clicar em "Não reconheço".

Quando clicado em um deles, imprime:

🔵 Clique em botão do interlocutor: sim

ou

🔵 Clique em botão do interlocutor: nao


✅ Resultados Esperados no Console
plaintext
Copiar
Editar
🟥 Clique em 'Não reconheço'
🔵 Clique em botão do interlocutor: nao
🔵 Clique em botão do interlocutor: sim
🟩 Clique em 'Sim, foi aberto por mim'


Todos os testes de ESLint, Prettier foram feitos via CMD e terminal VSCODE com node.js para assim um melhor código e estruturação.
``` 

Feito com 💙 por **[Rafae lins]**

