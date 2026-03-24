- **Modelo de Dados (Diagrama Mermaid):** Quais são os "cadastros" ou entidades que o seu sistema vai precisar lembrar/guardar? (Ex: Dados de Usuários, Lista de Produtos, Histórico de Transações, Categorias).
- *Nota:* Mais para frente na disciplina, aprenderemos a usar uma ferramenta para simular um banco de dados. Por enquanto, você só precisa mapear **quais dados** existem e **como eles se relacionam** (como se fossem tabelas).
    - *Exemplo de sintaxe para colar no seu spec.md:*
        
        `erDiagram
            USUARIO ||--o{ TAREFA : possui
            USUARIO {
                string id PK
                string nome
            }`
