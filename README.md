## Objetivo: 
- solucionar a visualização dos pdfs para webview mobiel ou um objeto

## Solução:
- Baseado no projeto da equipe de dados de saúde, a estratégia adotada foi transformar o arquivo pdf em imagem. A especificdade do proejto framework é que dependendo do contexto, poderemos receber como resposta da requisição ou uma url (string),
ou um objeto tipo dataUrl. Fiz um projeto exemplo fazendo um upload de pdf e transformando em dataUrl para depois converter em imagem.
- utilizei 2 libs essa solução:
 - [react-pdf](https://react-pdf.org/)
 - [pdfjs](https://github.com/mozilla/pdf.js)

Diferenças (coloquei só o que impacta diretamente para funcionalidade que queremos, pois a implementação é exatamente igual, já que o **React-pdf é contruido usando o pdfJs**): 

REACT-PDF
- React-pdf foi a lib utilizada no projeto que usei de referência
- tem componentes react que poderiam ajudar a visualição do pdf caso fosse necessário (vide documentação)

![](./src/assets/react-pdf.png)

  
PDF.JS:
- Projeto mantido pela Mozilla, com uma comunidade grande e documentação extensa.
- Mais genérico, podendo ser usado em qualquer projeto JavaScript.
- Pode consumir mais recursos ao renderizar PDFs grandes ou complexos.

![](./src/assets/pdfjs.png)



