const express = require('express');
const app = express();
const PORT = 3000;

// Diz ao servidor o que exibir quando alguém acessar a página inicial "/"
app.get('/', (req, res) => {
    res.send(`
        <style>
            body { font-family: Arial, sans-serif; background: #1e1e2e; color: #cdd6f4; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .card { text-align: center; padding: 30px; background: #313244; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
            h1 { color: #a6e3a1; }
        </style>
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
    `);
});

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});