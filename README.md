![](LOGO/atoms.png)

# Atoms

Funções básicas reutilizáveis.

## Visão geral

O **Atoms** é um pacote de funções e estruturas **de baixo nível**, projetado para ser reutilizado por múltiplos projetos, linguagens e contextos, servindo como a **base comum** de uma base de código.

Ele não contém regras de negócio, lógica de domínio ou comportamentos implícitos.  
Seu foco é fornecer **operações fundamentais**, estáveis e previsíveis.

## Objetivos

*   Centralizar funções utilitárias amplamente reutilizáveis.
*   Evitar duplicação de código entre projetos.
*   Garantir consistência de comportamento e nomenclatura.
*   Facilitar manutenção e refatorações globais via atualização de dependência.
*   Manter uma camada base pequena, clara e estável.

## Características

*   Funções puras, sem efeitos colaterais.
*   Nomenclatura explícita e não ambígua.
*   Código autoexplicativo e legível.
*   Otimizado para reutilização e tree-shaking.
*   Compatível com JavaScript e TypeScript.
*   Independente de framework.

## Escopo

O Atoms inclui utilitários para:

*   validações numéricas e textuais
*   operações matemáticas básicas
*   comparações
*   datas e horários
*   caminhos e arquivos
*   manipulação de texto
*   estruturas utilitárias (ex.: mapas limitados)
*   detecção de ambiente
*   utilitários DOM simples

O Atoms **não** inclui:

*   lógica de domínio
*   regras de negócio
*   acesso a rede
*   persistência
*   internacionalização
*   logging de aplicação
*   dependências externas

## Organização

O pacote é organizado por **categorias funcionais**, cada uma com responsabilidade clara.

Exemplo de agrupamentos:

*   constantes
*   verificações numéricas
*   verificações de texto
*   matemática
*   datas e horários
*   arquivos e caminhos
*   coleções e mapas
*   ambiente e plataforma

Cada função existe apenas se tiver **valor real de reutilização**.

## Suporte a TypeScript

O ATOMS é implementado em **JavaScript puro**, com suporte completo a TypeScript por meio de arquivos `.d.ts` escritos manualmente.

Isso garante:

*   tipagem estável e intencional
*   autocomplete correto
*   type narrowing confiável
*   zero custo em tempo de execução
*   compatibilidade com projetos JS e TS

```ts
import { isNatural, getClampValue } from 'oficinabrasil-atoms';

function processAge(
    age: unknown
    )
{
    if ( isNatural( age ) )
    {
        return getClampValue( age, 0, 120 );
    }

    return null;
}
```

## Princípios de design

*   Clareza é mais importante que concisão.
*   Nomes são preferíveis a comentários.
*   Código deve ser óbvio à primeira leitura.
*   Funções fazem apenas o que seus nomes indicam.
*   Evite abstrações desnecessárias.
*   Prefira estabilidade a novidade.

## Version

1.0

## Author

Fabiano César (fcfabiano.cesar@gmail.com).

## Licença

Este projeto está licenciado sob a GNU Lesser General Public License versão 3.

Consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.