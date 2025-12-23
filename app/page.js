'use client';

import { useMemo, useState } from 'react';

const fieldConfig = [
  {
    id: 'tituloCena',
    label: 'Título da cena',
    placeholder: 'Ex: Herói acorda em Tóquio futurista ao amanhecer'
  },
  {
    id: 'ambiente',
    label: 'Ambiente / cenário',
    placeholder: 'Ex: rua estreita em Akihabara com placas holográficas, chuva leve'
  },
  {
    id: 'personagens',
    label: 'Personagens principais',
    placeholder:
      'Ex: jovem protagonista cyberpunk com cabelo azul brilhante, androide companheira com olhos dourados'
  },
  {
    id: 'acao',
    label: 'Ação principal',
    placeholder:
      'Ex: corrida rápida evitando drones, câmera acompanha em travelling lateral com slow motion nas faíscas'
  },
  {
    id: 'estiloArtistico',
    label: 'Estilo artístico e traço',
    placeholder:
      'Ex: animação 2D com traço limpo tipo Demon Slayer, linhas cinéticas, texturas em aquarela digital'
  },
  {
    id: 'iluminacao',
    label: 'Iluminação e clima',
    placeholder:
      'Ex: iluminação neon azul e magenta, reflexos molhados no asfalto, atmosfera cinematográfica'
  },
  {
    id: 'camera',
    label: 'Movimento / lentes de câmera',
    placeholder:
      'Ex: sequência em plano sequência, lente 35mm, profundidade de campo rasa destacando o protagonista'
  },
  {
    id: 'detalhesExtras',
    label: 'Detalhes extras',
    placeholder: 'Ex: partícula de pó flutuando, trilha synthwave emocional, legendas em kanji brilhante'
  }
];

const presets = [
  {
    name: 'Festival noturno em Kyoto',
    values: {
      tituloCena: 'Festival Yokai em Kyoto iluminada à lanterna',
      ambiente:
        'ruas antigas de Kyoto decoradas com bandeiras, lanternas de papel e portais torii, noite estrelada',
      personagens:
        'garota sacerdotisa adolescente em traje tradicional com cabelo rosa pálido, espírito kitsune translúcido com máscara kabuki',
      acao:
        'dança ritual sincronizada, câmera girando em 360° enquanto pétalas brilhantes flutuam',
      estiloArtistico:
        'anime 2D estilo Makoto Shinkai, blend suave de aquarela com brilho mágico, outlines delicados',
      iluminacao:
        'tons quentes âmbar das lanternas, contrastes com luz azul celeste emanando do kitsune',
      camera:
        'plano sequência em dolly in, close-up final no olhar determinado da garota',
      detalhesExtras:
        'efeito bokeh de luzes, partículas de paper talismã voando, legendas caligrafadas em japonês clássico'
    }
  },
  {
    name: 'Mecha battle ao amanhecer',
    values: {
      tituloCena: 'Duelo colosal de mechas na crista da montanha',
      ambiente:
        'cordilheira nevada ao amanhecer, nuvens laranjas cortando os picos, neblina dinâmica',
      personagens:
        'piloto adolescente com uniforme escolar futurista dentro de mecha azul, rival em mecha vermelho com cicatriz facial holográfica',
      acao:
        'ataque de espada de energia com contragolpe, faíscas gigantes e ondas de choque vibrando no cenário',
      estiloArtistico:
        'anime 2D estilizado com shading cel, detalhes técnicos inspirados em Gundam e Evangelion',
      iluminacao:
        'luz dourada do sol nascente cortando a neblina, brilhos volumétricos destacando as silhuetas',
      camera:
        'travelling lateral acelerado seguido de close-up com câmera tremida, lente 24mm para escala épica',
      detalhesExtras:
        'painel HUD com textos em japonês, poeira de neve suspensa, trilha orquestral dramática com coros'
    }
  },
  {
    name: 'Slice of life pastel',
    values: {
      tituloCena: 'Café de bairro numa manhã chuvosa',
      ambiente:
        'cafeteria acolhedora em bairro residencial japonês, plantas pendentes, janelas embaçadas pela chuva',
      personagens:
        'duas amigas colegiais, uma com cabelo curto verde menta e outra com tranças lilás, gatinho malhado na mesa',
      acao:
        'elas compartilham um guarda-chuva transparente enquanto riem, câmera acompanha do lado de fora do vidro',
      estiloArtistico:
        'estética pastel suave, linhas leves inspiradas em filmes do estúdio Kyoto Animation, animação fluida',
      iluminacao:
        'luz suave difusa da manhã, reflexos de gotas na janela, brilhos quentes vindos das lâmpadas internas',
      camera:
        'lente 50mm, foco alternando entre interior e exterior com rack focus delicado',
      detalhesExtras:
        'vapor subindo das xícaras de chá, lettering kawaii na vitrine, som ambiente de chuva e sinos suaves'
    }
  }
];

const cinematicShots = [
  'close-up dramático com lágrimas vibrando em 2D',
  'slow motion em partículas de magia cintilando',
  'plano zenital revelando padrões geométricos no chão',
  'corte match-on-action entre movimentos rápidos',
  'contraluz intenso destacando silhuetas com borda neon',
  'mix de animação tradicional com efeitos digitais glow'
];

function buildPrompt(state) {
  const sections = [
    state.tituloCena && `Título: ${state.tituloCena}.`,
    state.ambiente && `Cenário: ${state.ambiente}.`,
    state.personagens && `Personagens: ${state.personagens}.`,
    state.acao && `Ação: ${state.acao}.`,
    state.estiloArtistico && `Estilo: ${state.estiloArtistico}.`,
    state.iluminacao && `Iluminação: ${state.iluminacao}.`,
    state.camera && `Camera: ${state.camera}.`,
    state.detalhesExtras && `Detalhes extras: ${state.detalhesExtras}.`
  ].filter(Boolean);

  const animeFocus =
    'Renderizar como animação 2D anime de alta qualidade, cores vibrantes, quadros suaves a 24fps, enfatizar emoção cinematográfica.';

  return `${sections.join(' ')} ${animeFocus}`.trim();
}

export default function Home() {
  const [state, setState] = useState(
    presets[0].values
  );
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => buildPrompt(state), [state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreset = (presetValues) => {
    setState(presetValues);
    setCopied(false);
  };

  const handleShotInsert = (shot) => {
    setState((prev) => ({
      ...prev,
      detalhesExtras: prev.detalhesExtras
        ? `${prev.detalhesExtras}; ${shot}`
        : shot
    }));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error('Falha ao copiar', error);
    }
  };

  return (
    <main className="page">
      <div className="page__inner">
        <header className="hero">
          <div>
            <p className="hero__tag">Prompt Builder</p>
            <h1>Sora 2 · Anime 2D Prompt Crafter</h1>
            <p className="hero__subtitle">
              Modele cenas cinematográficas prontas para Sora 2 com foco em animação 2D de anime.
              Ajuste cenário, personagens, câmera e estilo artístico para gerar prompts claros e ricos.
            </p>
          </div>
          <div className="hero__badge">
            <span>Anime 2D</span>
            <span>Sora Ready</span>
          </div>
        </header>

        <section className="layout">
          <div className="panel panel--form">
            <h2>Detalhes da cena</h2>
            <div className="grid">
              {fieldConfig.map(({ id, label, placeholder }) => (
                <label key={id} className="field">
                  <span>{label}</span>
                  <textarea
                    name={id}
                    placeholder={placeholder}
                    value={state[id] || ''}
                    onChange={handleChange}
                    rows={3}
                  />
                </label>
              ))}
            </div>
          </div>

          <aside className="panel panel--side">
            <div className="panel__section">
              <h3>Presets cinematográficos</h3>
              <div className="preset-list">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    className="preset"
                    onClick={() => handlePreset(preset.values)}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="panel__section">
              <h3>Shots inspiradores</h3>
              <div className="chips">
                {cinematicShots.map((shot) => (
                  <button
                    key={shot}
                    type="button"
                    className="chip"
                    onClick={() => handleShotInsert(shot)}
                  >
                    {shot}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="panel panel--output">
          <div className="output__header">
            <div>
              <h2>Prompt final</h2>
              <p>Use este texto diretamente no Sora 2 para gerar a cena desejada.</p>
            </div>
            <button type="button" className="copy" onClick={copyToClipboard}>
              {copied ? 'Copiado!' : 'Copiar prompt'}
            </button>
          </div>
          <pre className="output__prompt">{prompt}</pre>
          <div className="tips">
            <p>
              Combine dois presets, adicione detalhes específicos de animação 2D como smear frames,
              onomatopeias estilizadas ou sobreposições de textura para alcançar resultados mais fiéis.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
