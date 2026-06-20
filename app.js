const express = require('express');
const app = express();

// Render exige isso:
const PORT = process.env.PORT || 3000;

// Página principal
app.get('/', (req, res) => {
   res.send(`
       <!DOCTYPE html>
       <html lang="pt-BR">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Invictus</title>

           <style>
               body {
                   font-family: Arial, sans-serif;
                   background: #1e1e2e;
                   color: #cdd6f4;
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   min-height: 100vh;
                   margin: 0;
                   padding: 20px;
               }

               .card {
                   background-color: #2a2b36;
                   padding: 20px;
                   border-radius: 8px;
                   width: 90%;
                   max-width: 500px;
                   margin: auto;
                   box-sizing: border-box;
                   text-align: center;
                   box-shadow: 0 4px 10px rgba(0,0,0,0.3);
               }

               h1 { color: #a6e3a1; }
           </style>
       </head>

       <body>
           <div class="card">
               <h1>📜 Invictus</h1>
               <h3 style="color: #a6e3a1; font-weight: normal; margin-top: -10px; margin-bottom: 20px;">
                   Autor: William Ernest Henley (1888) | Dev: J. Almeida (Node.js)
               </h3>

               <pre style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; text-align: left; color: #cdd6f4; white-space: pre-line;">
Da noite escura que me cobre,
Como uma cova de lado a lado,
Agradeço a todos os deuses
A minha alma invencível.

Nas garras ardis das circunstâncias,
Não titubeei e sequer chorei.
Sob os golpes do infortúnio
Minha cabeça sangra, ainda erguida.

Além deste vale de ira e lágrimas,
Assoma-se o horror das sombras,
E apesar dos anos ameaçadores,
Encontram-me sempre destemido.

Não importa quão estreita a passagem,
Quantas punições ainda sofrerei,
Sou o senhor do meu destino,
E o condutor da minha alma.
               </pre>
           </div>
       </body>
       </html>
   `);
});

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 