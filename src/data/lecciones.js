export const lecciones = [
  {
    id: 1,
    numero: "Lección 01",
    titulo: "El Mapa General",
    subtitulo: "La Gramática",
    temas: [
      { roman: "I", tema: "Fonética y fonología" },
      { roman: "II", tema: "Morfología" },
      { roman: "III", tema: "Sintaxis" },
      { roman: "IV", tema: "Semántica" },
    ],
    descripcion: "Una introducción panorámica a la estructura del idioma griego. Exploraremos los cuatro pilares fundamentales de la gramática griega que constituyen el mapa conceptual para toda la exégesis bíblica.",
    icono: "🗺️",
    letraGriega: "Α",
    contenido: {
      introduccion: "La gramática griega se articula en cuatro disciplinas fundamentales que trabajan en conjunto para facilitarnos la comprensión del texto original del Nuevo Testamento.",
      secciones: [
        {
          titulo: "I. Fonética y Fonología",
          texto: "La fonética estudia los sonidos del griego desde una perspectiva física: cómo se producen, transmiten y perciben. La fonología, por su parte, estudia los fonemas como unidades abstractas del sistema lingüístico. En el griego koiné distinguimos vocales, diptongos y consonantes con sus respectivas clasificaciones.",
        },
        {
          titulo: "II. Morfología",
          texto: "La morfología analiza la estructura interna de las palabras griegas: cómo se forman y transforman mediante prefijos, sufijos y desinencias (terminaciones). En griego, las palabras cambian de forma para indicar su función gramatical, tiempo, modo, caso y número.",
        },
        {
          titulo: "III. Sintaxis",
          texto: "La sintaxis estudia cómo se combinan las palabras para formar oraciones con sentido. El griego del NT es una lengua flexiva donde el orden de las palabras es más libre que en español, y el significado de cada elemento se determina principalmente por sus terminaciones (casos).",
        },
        {
          titulo: "IV. Semántica",
          texto: "La semántica analiza el significado de las palabras y las oraciones en su contexto. Para la exégesis bíblica, la semántica es crucial: una misma palabra griega puede tener múltiples matices de significado según el contexto literario, histórico y teológico en que aparece.",
        },
      ],
    },
  },
  {
    id: 2,
    numero: "Lección 02",
    titulo: "De Alfa a Omega",
    subtitulo: "Los Sonidos y Letras del Griego",
    temas: [
      { roman: "I", tema: "Alfabeto griego" },
      { roman: "II", tema: "Escritura y lectura" },
      { roman: "III", tema: "Clasificación de consonantes y vocales" },
    ],
    descripcion: "El primer paso en el aprendizaje del griego koiné: dominar el alfabeto de 24 letras, desde la Α (alfa) hasta la Ω (omega), aprendiendo su escritura, nombre y sonido.",
    icono: "📜",
    letraGriega: "Β",
    contenido: {
      introduccion: "El alfabeto griego es el fundamento de todo estudio del Nuevo Testamento en su idioma original. Consta de 24 letras, cada una con su nombre tradicional y su valor fonético específico.",
      secciones: [
        {
          titulo: "I. Alfabeto Griego",
          texto: "El alfabeto griego tiene 24 letras: Α α (alfa), Β β (beta), Γ γ (gamma), Δ δ (delta), Ε ε (épsilon), Ζ ζ (dseta), Η η (eta), Θ θ (dseta/theta), Ι ι (iota), Κ κ (kappa), Λ λ (lambda), Μ μ (mu), Ν ν (nu), Ξ ξ (xi), Ο ο (ómicron), Π π (pi), Ρ ρ (ro), Σ σ/ς (sigma), Τ τ (tau), Υ υ (ípsilon), Φ φ (fi), Χ χ (ji), Ψ ψ (psi), Ω ω (omega).",
        },
        {
          titulo: "II. Escritura y Lectura",
          texto: "El griego koiné se escribe de izquierda a derecha. Aprenderemos a reconocer, trazar y pronunciar cada letra con precisión. La sigma (Σ) tiene una forma especial al final de la palabra (ς). El iota subscrito es una iota pequeña debajo de ciertas vocales: ᾳ ῃ ῳ.",
        },
        {
          titulo: "III. Clasificación de Consonantes y Vocales",
          texto: "Las vocales en griego son: α, ε, η, ι, ο, υ, ω. Las vocales breves son: ε, ο. Las vocales largas son: η, ω. Las demás (α, ι, υ) pueden ser breves o largas. Los diptongos (combinación de dos vocales) incluyen: αι, ει, οι, υι, αυ, ευ, ου.",
        },
      ],
    },
  },
  {
    id: 3,
    numero: "Lección 03",
    titulo: "Signos y Divisiones",
    subtitulo: "Puntuación y Silabación",
    temas: [
      { roman: "I", tema: "Signos prosódicos" },
      { roman: "II", tema: "Signos de puntuación" },
      { roman: "III", tema: "Signos diacríticos" },
      { roman: "IV", tema: "Silabación" },
    ],
    descripcion: "Los signos que acompañan al texto griego son fundamentales para su correcta lectura e interpretación. En esta lección dominaremos los acentos, espíritus y signos de puntuación.",
    icono: "✍️",
    letraGriega: "Γ",
    contenido: {
      introduccion: "El sistema de anotación del griego clásico incluye acentos y espíritus que originalmente indicaban pronunciación. En el griego koiné del NT, estos signos son parte integral de la ortografía.",
      secciones: [
        {
          titulo: "I. Signos Prosódicos (Acentos)",
          texto: "El griego usa tres acentos: el acento agudo (´) indica una elevación del tono; el grave (`) aparece cuando el agudo cae en la última sílaba seguida de más palabras; el circunflejo (῀) indica un tono que sube y baja en la misma sílaba. Los acentos siempre caen sobre vocales.",
        },
        {
          titulo: "II. Signos de Puntuación",
          texto: "El griego del NT usa cuatro signos de puntuación principales: punto (.) equivale a nuestro punto; coma (,) es igual que en español; punto alto (·) equivale a nuestro punto y coma; signo de interrogación (;) en griego equivale a nuestra interrogación.",
        },
        {
          titulo: "III. Signos Diacríticos (Espíritus)",
          texto: "Todas las palabras que comienzan con vocal llevan un espíritu: el espíritu suave (᾿) indica que no hay aspiración; el espíritu áspero (῾) indica que se pronuncia con una 'h' aspirada (ej. ὁδός, pronunciado 'hodós'). La rho (Ρ) al inicio de palabra siempre lleva espíritu áspero: ῥῆμα.",
        },
        {
          titulo: "IV. Silabación",
          texto: "Las reglas de división en sílabas del griego: una consonante entre vocales va con la sílaba siguiente; grupos de consonantes se dividen; los diptongos son inseparables. Ej: ἄν-θρω-πος (hombre), λό-γος (palabra), γρα-φή (escritura).",
        },
      ],
    },
  },
  {
    id: 4,
    numero: "Lección 04",
    titulo: "¡Cámara! ¡Acción!",
    subtitulo: "Introducción al Verbo Griego",
    temas: [
      { roman: "I", tema: "Flexiones del verbo" },
      { roman: "II", tema: "Clasificación de los verbos" },
      { roman: "III", tema: "Morfología del verbo" },
    ],
    descripcion: "El verbo griego es uno de los elementos más ricos y complejos del idioma. Sus formas expresan acción, tiempo, modo, voz, persona y número de manera simultánea.",
    icono: "🎬",
    letraGriega: "Δ",
    contenido: {
      introduccion: "El verbo griego es un sistema integrado de información gramatical. Cada forma verbal puede comunicar simultáneamente: persona (quién actúa), número (singular/plural), tiempo, modo, voz y aspecto.",
      secciones: [
        {
          titulo: "I. Flexiones del Verbo",
          texto: "El verbo griego se conjuga cambiando sus terminaciones (desinencias). Las desinencias personales activas del presente son: -ω (yo), -εις (tú), -ει (él/ella), -ομεν (nosotros), -ετε (vosotros), -ουσι(ν) (ellos). Ejemplo con λύω (desatar): λύω, λύεις, λύει, λύομεν, λύετε, λύουσι.",
        },
        {
          titulo: "II. Clasificación de los Verbos",
          texto: "Los verbos griegos se clasifican principalmente en: temáticos (o en -ω), que son la mayoría; atemáticos (o en -μι), que tienen conjugación especial; deponentes, que tienen forma media/pasiva pero sentido activo; y contractos, cuya raíz termina en vocal que se contrae con las desinencias.",
        },
        {
          titulo: "III. Morfología del Verbo",
          texto: "La estructura del verbo griego: AUMENTO + RAÍZ + SUFIJO TEMPORAL + DESINENCIA PERSONAL. El tiempo verbal en griego expresa principalmente el aspecto de la acción (cómo se desarrolla) más que el tiempo cronológico: presente = acción continua; aoristo = acción puntual; perfecto = acción completada con resultados presentes.",
        },
      ],
    },
  },
  {
    id: 5,
    numero: "Lección 05",
    titulo: "Acción en Marcha",
    subtitulo: "Verbo: Presente Activo Indicativo",
    temas: [
      { roman: "I", tema: "Conjugación temática" },
      { roman: "II", tema: "Morfología: presente activo" },
    ],
    descripcion: "El tiempo presente activo indicativo es el punto de partida para el estudio del sistema verbal griego. Expresa una acción continua o en progreso desde la perspectiva del hablante.",
    icono: "⚡",
    letraGriega: "Ε",
    contenido: {
      introduccion: "El presente activo indicativo describe acciones que ocurren de manera continua o repetida. Este tiempo expresa el aspecto 'imperfectivo': la acción en su desarrollo, no como un hecho puntual.",
      secciones: [
        {
          titulo: "I. Conjugación Temática",
          texto: "Los verbos temáticos (en -ω) tienen una vocal temática (ο/ε) entre la raíz y la desinencia. Paradigma de λύω: λύ-ω (desato), λύ-εις (desatas), λύ-ει (desata), λύ-ο-μεν (desatamos), λύ-ε-τε (desatáis), λύ-ου-σι(ν) (desatan). Verbos del NT: λέγω (digo), γράφω (escribo), πιστεύω (creo).",
        },
        {
          titulo: "II. Morfología: Presente Activo",
          texto: "Estructura del presente activo: RAÍZ + VOCAL TEMÁTICA + DESINENCIA. Las desinencias personales activas primarias son: -ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν). Nota: la 1ª persona singular -ω absorbe la vocal temática. Las contracciones: ε + ω → ω; ε + εις → εις; ε + ει → ει; ο + μεν → ομεν.",
        },
      ],
    },
  },
  {
    id: 6,
    numero: "Lección 06",
    titulo: "Cambios en Segunda",
    subtitulo: "Sustantivos y Artículos de la Segunda Declinación",
    temas: [
      { roman: "I", tema: "Introducción al sustantivo griego" },
      { roman: "II", tema: "El artículo" },
      { roman: "III", tema: "Morfología: segunda declinación" },
      { roman: "IV", tema: "Orden de la oración" },
    ],
    descripcion: "Los sustantivos griegos cambian su forma (declinan) según su función en la oración. La segunda declinación incluye principalmente sustantivos masculinos en -ος y neutros en -ον.",
    icono: "📊",
    letraGriega: "Ζ",
    contenido: {
      introduccion: "El sistema de casos del griego es fundamental para la exégesis. Los sustantivos cambian su terminación para indicar si son sujeto, objeto directo, complemento, etc., sin importar el orden en la oración.",
      secciones: [
        {
          titulo: "I. Introducción al Sustantivo Griego",
          texto: "Los sustantivos griegos tienen: género (masculino, femenino, neutro), número (singular, plural), y caso (la función en la oración). Los cinco casos son: nominativo (sujeto), genitivo (posesión/de), dativo (objeto indirecto/con/en), acusativo (objeto directo), vocativo (interpelación).",
        },
        {
          titulo: "II. El Artículo",
          texto: "El artículo definido griego concuerda con el sustantivo en género, número y caso. Es un identificador crucial. Singular masculino: ὁ, τοῦ, τῷ, τόν. Neutro: τό, τοῦ, τῷ, τό. El artículo en griego tiene usos especiales: puede substantivar adjetivos (ὁ ἀγαθός = 'el bueno'), e indicar referencia específica.",
        },
        {
          titulo: "III. Morfología: Segunda Declinación",
          texto: "Paradigma de λόγος (palabra) - masc.: Nom. λόγ-ος, Gen. λόγ-ου, Dat. λόγ-ῳ, Ac. λόγ-ον, Voc. λόγ-ε | Pl.: λόγ-οι, λόγ-ων, λόγ-οις, λόγ-ους, λόγ-οι. Neutro ἔργον (obra): Nom./Ac./Voc. ἔργ-ον, Gen. ἔργ-ου, Dat. ἔργ-ῳ | Pl. N/A/V ἔργ-α.",
        },
        {
          titulo: "IV. Orden de la Oración",
          texto: "El griego es flexible en el orden de palabras (SOV, SVO, VSO, etc.) porque los casos indican la función, no la posición. Sin embargo, hay tendencias: el elemento más importante tiende a ir primero; el verbo frecuentemente al final; el artículo precede al sustantivo que modifica.",
        },
      ],
    },
  },
  {
    id: 7,
    numero: "Lección 07",
    titulo: "Cambios en Primera",
    subtitulo: "Sustantivos y Artículo de la Primera Declinación",
    temas: [
      { roman: "I", tema: "Morfología: primera declinación" },
      { roman: "II", tema: "Sintaxis: el artículo" },
    ],
    descripcion: "La primera declinación contiene principalmente sustantivos femeninos. Dominar estos patrones es esencial ya que muchas palabras teológicas importantes pertenecen a esta declinación.",
    icono: "📖",
    letraGriega: "Η",
    contenido: {
      introduccion: "La primera declinación es característica de los sustantivos femeninos, aunque también incluye algunos masculinos. Palabras como ἐκκλησία (iglesia), γραφή (escritura) y ἀλήθεια (verdad) pertenecen a esta declinación.",
      secciones: [
        {
          titulo: "I. Morfología: Primera Declinación",
          texto: "Hay tres tipos principales: a) Sustantivos con α larga (ej. γλῶσσα, lengua): Nom. -α, Gen. -ης, Dat. -ῃ, Ac. -αν, Voc. -α. b) Sustantivos con η (ej. γραφή, escritura): Nom. -ή, Gen. -ῆς, Dat. -ῇ, Ac. -ήν, Voc. -ή. c) Masculinos en primera declinación (ej. μαθητής, discípulo): Nom. -ής, Gen. -οῦ, Dat. -ῇ, Ac. -ήν.",
        },
        {
          titulo: "II. Sintaxis: El Artículo",
          texto: "El artículo en griego es mucho más que en español. Usos especiales: (1) Ausencia del artículo (anáfora) puede indicar cualidad o categoría; (2) El artículo puede acompañar a frases preposicionales: ὁ ἐν οὐρανοῖς ('el que está en los cielos'); (3) El artículo con participio forma cláusulas adjetivales complejas.",
        },
      ],
    },
  },
  {
    id: 8,
    numero: "Lección 08",
    titulo: "¿Y Cómo es Él?",
    subtitulo: "Adjetivos de la Primera y Segunda Declinación",
    temas: [
      { roman: "I", tema: "Adjetivos primera y segunda declinación" },
      { roman: "II", tema: "Morfología: declinación" },
      { roman: "III", tema: "Sintaxis: el adjetivo" },
      { roman: "IV", tema: "Conjunción ὅτι" },
    ],
    descripcion: "Los adjetivos griegos concuerdan con el sustantivo en género, número y caso. Esta concordancia es fundamental para identificar qué elemento modifica al adjetivo en el texto.",
    icono: "🎨",
    letraGriega: "Θ",
    contenido: {
      introduccion: "Los adjetivos griegos son verdaderas mini-palabras que reflejan en sus terminaciones el género, número y caso del sustantivo al que modifican o al que representan.",
      secciones: [
        {
          titulo: "I. Adjetivos de la Primera y Segunda Declinación",
          texto: "El adjetivo más común en el NT es el tipo 2-1-2: masculino y neutro en segunda declinación, femenino en primera. Ej. ἀγαθός (bueno): Masc. ἀγαθός, ἀγαθοῦ, ἀγαθῷ, ἀγαθόν; Fem. ἀγαθή, ἀγαθῆς, ἀγαθῇ, ἀγαθήν; Neutro ἀγαθόν, ἀγαθοῦ, ἀγαθῷ, ἀγαθόν.",
        },
        {
          titulo: "II. Morfología: Declinación",
          texto: "El aprendizaje de adjetivos sigue los patrones ya conocidos: la raíz permanece igual, solo cambian las terminaciones según género, número y caso. Adjetivos importantes: ἅγιος (santo), πιστός (fiel), δίκαιος (justo), ἀληθής (verdadero), μέγας (grande, irregular).",
        },
        {
          titulo: "III. Sintaxis: El Adjetivo",
          texto: "Posición predicativa: sin artículo o separado del artículo-sustantivo: ὁ λόγος ἀγαθός (la palabra es buena). Posición atributiva: entre artículo y sustantivo: ὁ ἀγαθὸς λόγος (la buena palabra). El adjetivo sustantivado: ὁ ἀγαθός (el bueno, el hombre bueno).",
        },
        {
          titulo: "IV. Conjunción ὅτι",
          texto: "La partícula ὅτι tiene dos usos principales: (1) Como conjunción causal equivalente a 'porque' o 'pues': ὅτι θεός ἐστιν = 'porque es Dios'; (2) Como conjunción completiva equivalente a 'que': λέγω ὅτι... = 'digo que...'. En este segundo uso introduce discurso indirecto y puede también marcar cita directa.",
        },
      ],
    },
  },
  {
    id: 9,
    numero: "Lección 09",
    titulo: "¿Quién Habla?",
    subtitulo: "Pronombres Personales",
    temas: [
      { roman: "I", tema: "Pronombres personales" },
      { roman: "II", tema: "Primera y segunda persona" },
      { roman: "III", tema: "Tercera persona" },
    ],
    descripcion: "Los pronombres personales son esenciales para identificar los actores en el texto bíblico. En griego, a menudo el sujeto está codificado en la desinencia verbal, por lo que el pronombre explícito añade énfasis.",
    icono: "👤",
    letraGriega: "Ι",
    contenido: {
      introduccion: "En griego, los pronombres personales se declinan como los sustantivos. Su uso explícito cuando el verbo ya indica la persona suele añadir énfasis contrastivo.",
      secciones: [
        {
          titulo: "I. Pronombres Personales",
          texto: "Los pronombres personales griegos se declinan en los cuatro casos principales. Cuando aparecen explícitos junto al verbo (cuya desinencia ya indica la persona) añaden énfasis: ἐγὼ λέγω = 'YO digo' (énfasis en el hablante, posiblemente contrastivo con otro). Esta diferencia es importante para la exégesis.",
        },
        {
          titulo: "II. Primera y Segunda Persona",
          texto: "1ª persona singular: ἐγώ (nom.), ἐμοῦ/μου (gen.), ἐμοί/μοι (dat.), ἐμέ/με (ac.). 1ª plural: ἡμεῖς, ἡμῶν, ἡμῖν, ἡμᾶς. 2ª singular: σύ (nom.), σοῦ/σου (gen.), σοί/σοι (dat.), σέ/σε (ac.). 2ª plural: ὑμεῖς, ὑμῶν, ὑμῖν, ὑμᾶς. Las formas enclíticas (μου, μοι, με; σου, σοι, σε) son no enfáticas.",
        },
        {
          titulo: "III. Tercera Persona",
          texto: "El pronombre de 3ª persona es αὐτός, αὐτή, αὐτό. Paradigma masc. sing.: αὐτός, αὐτοῦ, αὐτῷ, αὐτόν. Este pronombre también puede usarse como adjetivo con tres sentidos según posición: (1) Posición predicativa = 'mismo' (αὐτὸς ὁ κύριος = el señor mismo); (2) Posición atributiva = 'mismo/idéntico'; (3) Genitivo = sustituto de pronombre posesivo 'su' (αὐτοῦ = 'de él/su').",
        },
      ],
    },
  },
  {
    id: 10,
    numero: "Lección 10",
    titulo: "Relaciones, Relaciones",
    subtitulo: "Preposiciones",
    temas: [
      { roman: "I", tema: "Sintaxis: preposiciones y casos" },
      { roman: "II", tema: "Cambios fonológicos" },
      { roman: "III", tema: "Verbos compuestos" },
    ],
    descripcion: "Las preposiciones en griego rigen casos específicos y, según el caso, cambia el significado de la relación. Una misma preposición puede tener varios significados dependiendo del caso que rija.",
    icono: "🔗",
    letraGriega: "Κ",
    contenido: {
      introduccion: "Las preposiciones griegas son morfemas que se combinan con sustantivos en casos específicos para expresar relaciones espaciales, temporales y lógicas. Son también componentes de verbos compuestos.",
      secciones: [
        {
          titulo: "I. Sintaxis: Preposiciones y Casos",
          texto: "Muchas preposiciones rigen dos o tres casos con distintos significados: ἐν + dativo = 'en' (lugar); εἰς + acusativo = 'hacia, en' (movimiento); ἐκ/ἐξ + genitivo = 'de, fuera de'; διά + genitivo = 'a través de'; διά + acusativo = 'por causa de'; σύν + dativo = 'con'; κατά + genitivo = 'contra'; κατά + acusativo = 'según, a lo largo de'.",
        },
        {
          titulo: "II. Cambios Fonológicos",
          texto: "Cuando las preposiciones se unen a palabras que empiezan con vocal o ciertas consonantes, sufren cambios: elisión (pérdida de vocal final): ἀπό → ἀπ' (antes de vocal); ἀπ' → ἀφ' (antes de vocal con espíritu áspero). Μetro, ἐν se convierte en ἐμ- ante β, μ, π, φ, ψ. Estos cambios son predecibles y siguen reglas fonológicas.",
        },
        {
          titulo: "III. Verbos Compuestos",
          texto: "Las preposiciones se fusionan con verbos creando palabras compuestas con significado especializado: ἔρχομαι (venir) → ἐξέρχομαι (salir), εἰσέρχομαι (entrar), προσέρχομαι (acercarse); πιστεύω (creer) → ἐμπιστεύω (confiar en); γράφω (escribir) → ἐπιγράφω (inscribir). Al conjugar verbos compuestos, el aumento se inserta después de la preposición.",
        },
      ],
    },
  },
  {
    id: 11,
    numero: "Lección 11",
    titulo: "¿Ser o No Ser?",
    subtitulo: "Verbo εἰμί: Presente Indicativo",
    temas: [
      { roman: "I", tema: "Morfología: presente indicativo εἰμί" },
      { roman: "II", tema: "Sintaxis: oraciones nominales" },
      { roman: "III", tema: "Conjunciones postpositivas" },
    ],
    descripcion: "El verbo 'ser/estar' (εἰμί) es el verbo griego más frecuente del NT. Su conjugación es irregular y su uso crea construcciones sintácticas especiales llamadas oraciones nominales.",
    icono: "⚖️",
    letraGriega: "Λ",
    contenido: {
      introduccion: "El verbo εἰμί ('ser, estar, existir') es el más fundamental del griego. Su paradigma irregular debe memorizarse, ya que aparece centenares de veces en el NT.",
      secciones: [
        {
          titulo: "I. Morfología: Presente Indicativo εἰμί",
          texto: "Paradigma del presente de εἰμί: εἰμί (soy/estoy), εἶ (eres/estás), ἐστί(ν) (es/está), ἐσμέν (somos/estamos), ἐστέ (sois/estáis), εἰσί(ν) (son/están). La mayoría de estas formas son enclíticas (sin acento propio) excepto εἶ (tú eres). Juan 8:58: Πρὶν Ἀβραὰμ γενέσθαι, ἐγώ εἰμι ('Antes que Abraham existiera, yo soy').",
        },
        {
          titulo: "II. Sintaxis: Oraciones Nominales",
          texto: "Con εἰμί se forman oraciones copulativas que vinculan sujeto con predicado nominal. Regla de Colwell: cuando el predicativo nominal precede al verbo copulativo y el sujeto tiene artículo, el predicativo puede omitir el artículo pero sigue siendo definido. Ej. θεὸς ἦν ὁ Λόγος (Juan 1:1) = 'el Logos era Dios' (no 'un dios').",
        },
        {
          titulo: "III. Conjunciones Postpositivas",
          texto: "Las conjunciones postpositivas en griego nunca pueden ser la primera palabra de su cláusula: γάρ ('porque, pues' - explicativa), δέ ('pero, y' - adversativa/continuativa), οὖν ('entonces, por tanto' - inferencial), μέν ('por un lado' - correlativa con δέ). Identificar estas conjunciones es clave para la estructura argumental del texto.",
        },
      ],
    },
  },
  {
    id: 12,
    numero: "Lección 12",
    titulo: "El Paciente y el Agente",
    subtitulo: "Verbo: Voces Media y Pasiva",
    temas: [
      { roman: "I", tema: "Voces media y pasiva" },
      { roman: "II", tema: "Morfología: presente en voces media y pasiva" },
      { roman: "III", tema: "Verbos deponentes" },
    ],
    descripcion: "El griego tiene tres voces: activa, media y pasiva. La voz media, característica del griego antiguo, indica que el sujeto participa del resultado de la acción de manera especial.",
    icono: "🔄",
    letraGriega: "Μ",
    contenido: {
      introduccion: "El sistema de voces del griego representa uno de sus rasgos más distintivos. La voz media es única entre las lenguas modernas y tiene implicaciones teológicas importantes en varios textos del NT.",
      secciones: [
        {
          titulo: "I. Voces Media y Pasiva",
          texto: "Voz activa: el sujeto realiza la acción (λύω = desato). Voz media: el sujeto realiza la acción con énfasis en su participación o para su propio beneficio (λύομαι = me desato, desato para mí mismo). Voz pasiva: el sujeto recibe la acción (λύομαι = soy desatado). En el presente e imperfecto, media y pasiva comparten las mismas formas.",
        },
        {
          titulo: "II. Morfología: Presente en Voces Media y Pasiva",
          texto: "Desinencias media/pasiva del presente: -ομαι, -ῃ/-ει, -εται, -ομεθα, -εσθε, -ονται. Paradigma de λύομαι: λύ-ο-μαι (soy desatado/me desato), λύ-ῃ, λύ-ε-ται, λυ-ό-μεθα, λύ-ε-σθε, λύ-ο-νται. El agente en la pasiva se expresa con ὑπό + genitivo: ὑπὸ τοῦ θεοῦ = 'por Dios'.",
        },
        {
          titulo: "III. Verbos Deponentes",
          texto: "Los verbos deponentes tienen forma media o pasiva pero significado activo. Son muy frecuentes: ἔρχομαι (vengo), πορεύομαι (voy, camino), γίνομαι (llego a ser), ἀποκρίνομαι (respondo), εὐαγγελίζομαι (evangelizo). Llamarlos 'deponentes' significa que han 'depuesto' la voz activa. No confundir su traducción: SÍ se traducen en sentido activo.",
        },
      ],
    },
  },
  {
    id: 13,
    numero: "Lección 13",
    titulo: "El Pasado en Acción",
    subtitulo: "Verbo: Imperfecto",
    temas: [
      { roman: "I", tema: "Tiempo imperfecto" },
      { roman: "II", tema: "Morfología: imperfecto. Imperfecto de εἰμί" },
      { roman: "III", tema: "Pautas para la traducción" },
    ],
    descripcion: "El tiempo imperfecto en griego describe una acción continua, repetida o progresiva en el pasado. Expresa el aspecto imperfectivo (acción en proceso) pero en tiempo pasado.",
    icono: "⏳",
    letraGriega: "Ν",
    contenido: {
      introduccion: "El imperfecto griego es el tiempo del 'costumbre' y el 'proceso' en el pasado. Es el tiempo narrativo por excelencia para describir el 'escenario' de fondo mientras el aoristo avanza la trama.",
      secciones: [
        {
          titulo: "I. Tiempo Imperfecto",
          texto: "El imperfecto se forma con un aumento (ε- prefijado) a la raíz verbal, más las desinencias secundarias. El aumento indica tiempo pasado; la raíz de tiempo presente indica aspecto continuo. Contraste: ἔλεγεν (imperfecto) = 'estaba diciendo/decía/seguía diciendo' vs. εἶπεν (aoristo) = 'dijo (acción puntual)'. Los evangelios usan frecuentemente el imperfecto histórico.",
        },
        {
          titulo: "II. Morfología: Imperfecto y εἰμί",
          texto: "Imperfecto activo de λύω: ἔ-λυ-ο-ν (desataba), ἔ-λυ-ε-ς, ἔ-λυ-ε(ν), ἐ-λύ-ο-μεν, ἐ-λύ-ε-τε, ἔ-λυ-ο-ν. Nota: 1ª y 3ª plural son idénticas; el contexto aclara. Imperfecto de εἰμί: ἦν (era/estaba) - singular para las tres personas en textos del NT; plural: ἦμεν, ἦτε, ἦσαν.",
        },
        {
          titulo: "III. Pautas para la Traducción",
          texto: "Para traducir el imperfecto: (1) Acción continua: 'estaba + gerundio' (ἐδίδασκεν = estaba enseñando); (2) Acción habitual: 'solía + infinitivo' (ἐπορεύετο = solía ir); (3) Acción incoativa: 'comenzó a + infinitivo' (ἔλεγεν = comenzó a decir); (4) Acción conativa: 'intentaba + infinitivo' (ἔπειθεν = intentaba persuadir). El contexto determina cuál matiz es más apropiado.",
        },
      ],
    },
  },
  {
    id: 14,
    numero: "Lección 14",
    titulo: "Lo que Ha de Venir",
    subtitulo: "Verbo: Futuro Activo y Medio",
    temas: [
      { roman: "I", tema: "Tiempo futuro" },
      { roman: "II", tema: "Morfología: futuro en voces activa y media" },
      { roman: "III", tema: "Futuro de εἰμί" },
    ],
    descripcion: "El futuro griego expresa acciones o estados que se anticipan o se esperan posteriormentre a la perspectiva del hablante. Tiene implicaciones teológicas importantes en las promesas del NT.",
    icono: "🔮",
    letraGriega: "Ξ",
    contenido: {
      introduccion: "El futuro en griego se forma añadiendo un sufijo específico a la raíz. A diferencia del imperfecto (acción continua en el pasado) y el aoristo (acción puntual), el futuro no señala primariamente el aspecto sino la anticipación temporal.",
      secciones: [
        {
          titulo: "I. Tiempo Futuro",
          texto: "El futuro se construye con el sufijo -σ- (sigma) insertado entre la raíz y las desinencias. Esta sigma fusiona con ciertos grupos de consonantes: raíz en κ/γ/χ + σ → ξ; raíz en π/β/φ + σ → ψ; raíz en τ/δ/θ → σ (la dental cae). Ej. λύω → λύσω; βλέπω → βλέψω; πιστεύω → πιστεύσω.",
        },
        {
          titulo: "II. Morfología: Futuro Activo y Medio",
          texto: "Futuro activo: λύσω, λύσεις, λύσει, λύσομεν, λύσετε, λύσουσι(ν). Futuro medio: λύσομαι, λύσῃ, λύσεται, λυσόμεθα, λύσεσθε, λύσονται. El futuro pasivo se formará de manera distinta (con el sufijo -θη-). El futuro medio de ciertos verbos tiene valor activo en el NT.",
        },
        {
          titulo: "III. Futuro de εἰμί",
          texto: "El futuro de εἰμί: ἔσομαι (seré), ἔσῃ (serás), ἔσται (será), ἐσόμεθα (seremos), ἔσεσθε (seréis), ἔσονται (serán). Este futuro es medio en forma. En Juan 14:3: ὅπου εἰμὶ ἐγὼ καὶ ὑμεῖς ἔσεσθε ('donde yo estoy, allí también vosotros estaréis').",
        },
      ],
    },
  },
  {
    id: 15,
    numero: "Lección 15",
    titulo: "El Juego de las Vocales",
    subtitulo: "Verbos Contractos",
    temas: [
      { roman: "I", tema: "Reglas de contracción" },
      { roman: "II", tema: "Morfología: presente e imperfecto" },
      { roman: "III", tema: "Morfología: futuro activo y medio" },
    ],
    descripcion: "Los verbos cuya raíz termina en α, ε, ο se contraen con las vocales de las desinencias, creando formas que parecen distintas a los verbos regulares pero siguen patrones predecibles.",
    icono: "🎵",
    letraGriega: "Ο",
    contenido: {
      introduccion: "Los verbos contractos son muy frecuentes en el NT. Su apariencia puede desconcertar al principiante, pero sus contracciones siguen reglas sistemáticas que una vez aprendidas permiten reconocer cualquier forma.",
      secciones: [
        {
          titulo: "I. Reglas de Contracción",
          texto: "Las principales reglas: α + ε → α; α + ει → α; α + ο → ω; ε + ε → ει; ε + ο → ου; ε + ου → ου; ε + ει → ει; ο + ε → ου; ο + ο → ου; ο + ω → ω. Cuando dos vocales iguales se contraen dan vocal larga: αα → α, εε → ει, οο → ου. Para analizar un verbo contracto, primero hay que 'descontraer' la forma.",
        },
        {
          titulo: "II. Morfología: Presente e Imperfecto",
          texto: "Verbos en -αω (ej. ἀγαπάω, amar): ἀγαπῶ, ἀγαπᾷς, ἀγαπᾷ, ἀγαπῶμεν, ἀγαπᾶτε, ἀγαπῶσι(ν). Verbos en -εω (ej. ποιέω, hacer): ποιῶ, ποιεῖς, ποιεῖ, ποιοῦμεν, ποιεῖτε, ποιοῦσι(ν). Verbos en -οω (ej. πληρόω, llenar): πληρῶ, πληροῖς, πληροῖ, πληροῦμεν, πληροῦτε, πληροῦσι(ν).",
        },
        {
          titulo: "III. Morfología: Futuro Activo y Medio",
          texto: "Los verbos contractos alargan su vocal antes de añadir el sufijo σ del futuro: -αω → -ησ-; -εω → -ησ-; -οω → -ωσ-. Ejemplos: ἀγαπάω → ἀγαπήσω (amaré); ποιέω → ποιήσω (haré); πληρόω → πληρώσω (llenaré). Esta regularidad facilita la identificación del futuro de estos verbos.",
        },
      ],
    },
  },
  {
    id: 16,
    numero: "Lección 16",
    titulo: "Este, Ese, Aquel",
    subtitulo: "Pronombres Demostrativos",
    temas: [
      { roman: "I", tema: "Pronombres demostrativos" },
      { roman: "II", tema: "Morfología: declinación" },
      { roman: "III", tema: "Sintaxis" },
    ],
    descripcion: "Los pronombres demostrativos son herramientas de deixis (señalamiento) en el texto. Su posición relativa al artículo-sustantivo determina su función: atributiva o predicativa.",
    icono: "👆",
    letraGriega: "Π",
    contenido: {
      introduccion: "Los demostrativos en griego señalan objetos o personas según su cercanía al hablante u oyente. Además de su función pronominal, tienen importantes funciones como adjetivos demostrativos y elementos anafóricos.",
      secciones: [
        {
          titulo: "I. Pronombres Demostrativos",
          texto: "El griego tiene dos demostrativos principales: οὗτος/αὕτη/τοῦτο (este/esta/esto - proximidad) y ἐκεῖνος/ἐκείνη/ἐκεῖνο (aquel/aquella/aquello - distancia). En Juan 1:7, οὗτος se refiere a Juan el Bautista: Οὗτος ἦλθεν εἰς μαρτυρίαν ('Este vino como testimonio'). ἐκεῖνος a veces se refiere a Cristo como el próximo referente en el contexto.",
        },
        {
          titulo: "II. Morfología: Declinación",
          texto: "οὗτος tiene declinación irregular con alternancia de αυτ-/ουτ- según la terminación: Masc. sg. οὗτος, τούτου, τούτῳ, τοῦτον; pl. οὗτοι, τούτων, τούτοις, τούτους. Nota la τ- en genitivo/dativo/acusativo vs. el οὗ- en nominativo. ἐκεῖνος es más regular: sigue el paradigma de αὐτός con ἐκειν- como raíz.",
        },
        {
          titulo: "III. Sintaxis",
          texto: "Cuando el demostrativo funciona como adjetivo, siempre va en posición predicativa (nunca atributiva): ὁ ἄνθρωπος οὗτος o οὗτος ὁ ἄνθρωπος = 'este hombre'; NUNCA *ὁ οὗτος ἄνθρωπος. Como pronombre sustantivo: οὗτος εἶπεν = 'este dijo'. Como elemento anafórico, retoma el referente previo: importante para el análisis del discurso del NT.",
        },
      ],
    },
  },
];

export const alfabetoGriego = [
  { mayuscula: "Α", minuscula: "α", nombre: "Alfa", transliteracion: "a", sonido: "a como en padre", silaba: "Al-fa" },
  { mayuscula: "Β", minuscula: "β", nombre: "Beta", transliteracion: "b", sonido: "b como en boca", silaba: "Be-ta" },
  { mayuscula: "Γ", minuscula: "γ", nombre: "Gamma", transliteracion: "g", sonido: "g como en gato", silaba: "Gam-ma" },
  { mayuscula: "Δ", minuscula: "δ", nombre: "Delta", transliteracion: "d", sonido: "d como en dado", silaba: "Del-ta" },
  { mayuscula: "Ε", minuscula: "ε", nombre: "Épsilon", transliteracion: "e", sonido: "e corta como en pez", silaba: "Ep-si-lon" },
  { mayuscula: "Ζ", minuscula: "ζ", nombre: "Dseta", transliteracion: "z", sonido: "ds como en jazz", silaba: "Dse-ta" },
  { mayuscula: "Η", minuscula: "η", nombre: "Eta", transliteracion: "ē", sonido: "e larga como en era", silaba: "E-ta" },
  { mayuscula: "Θ", minuscula: "θ", nombre: "Theta", transliteracion: "th", sonido: "t aspirada como think", silaba: "The-ta" },
  { mayuscula: "Ι", minuscula: "ι", nombre: "Iota", transliteracion: "i", sonido: "i como en día", silaba: "Io-ta" },
  { mayuscula: "Κ", minuscula: "κ", nombre: "Kappa", transliteracion: "k", sonido: "k como en casa", silaba: "Kap-pa" },
  { mayuscula: "Λ", minuscula: "λ", nombre: "Lambda", transliteracion: "l", sonido: "l como en luna", silaba: "Lam-da" },
  { mayuscula: "Μ", minuscula: "μ", nombre: "Mu", transliteracion: "m", sonido: "m como en madre", silaba: "Mu" },
  { mayuscula: "Ν", minuscula: "ν", nombre: "Nu", transliteracion: "n", sonido: "n como en noche", silaba: "Nu" },
  { mayuscula: "Ξ", minuscula: "ξ", nombre: "Xi", transliteracion: "x", sonido: "x como en extra", silaba: "Xi" },
  { mayuscula: "Ο", minuscula: "ο", nombre: "Ómicron", transliteracion: "o", sonido: "o corta como en sol", silaba: "O-mi-cron" },
  { mayuscula: "Π", minuscula: "π", nombre: "Pi", transliteracion: "p", sonido: "p como en paz", silaba: "Pi" },
  { mayuscula: "Ρ", minuscula: "ρ", nombre: "Ro", transliteracion: "r", sonido: "r como en rosa", silaba: "Ro" },
  { mayuscula: "Σ", minuscula: "σ/ς", nombre: "Sigma", transliteracion: "s", sonido: "s como en sol", silaba: "Sig-ma" },
  { mayuscula: "Τ", minuscula: "τ", nombre: "Tau", transliteracion: "t", sonido: "t como en torre", silaba: "Tau" },
  { mayuscula: "Υ", minuscula: "υ", nombre: "Ípsilon", transliteracion: "y/u", sonido: "u como en luz", silaba: "Yp-si-lon" },
  { mayuscula: "Φ", minuscula: "φ", nombre: "Fi", transliteracion: "ph", sonido: "f como en foto", silaba: "Fi" },
  { mayuscula: "Χ", minuscula: "χ", nombre: "Ji", transliteracion: "ch", sonido: "j aspirada (como en Bach)", silaba: "Ji" },
  { mayuscula: "Ψ", minuscula: "ψ", nombre: "Psi", transliteracion: "ps", sonido: "ps como en ipse", silaba: "Psi" },
  { mayuscula: "Ω", minuscula: "ω", nombre: "Omega", transliteracion: "ō", sonido: "o larga como en hora", silaba: "O-me-ga" },
];

export const contenidoMateria = {
  descripcion: {
    titulo: "Descripción de la Materia",
    texto: [
      "El curso de Griego del Nuevo Testamento para la Exégesis Bíblica es una asignatura diseñada para equipar a los estudiantes de teología con las herramientas lingüísticas necesarias para acceder al texto original del Nuevo Testamento.",
      "A través de 16 lecciones progresivas, los estudiantes aprenden la gramática del griego koiné —el idioma común del mundo mediterráneo en el siglo I d.C., el idioma en que fue escrito el NT— con el propósito explícito de aplicar ese conocimiento a la exégesis bíblica.",
      "La metodología combina el aprendizaje sistemático de fonética, morfología y sintaxis con ejercicios de lectura y traducción de textos reales del Nuevo Testamento, asegurando que el conocimiento adquirido sea inmediatamente aplicable.",
    ],
    icono: "📚",
  },
  objetivos: {
    titulo: "Objetivos de la Materia",
    items: [
      { num: "01", texto: "Dominar el alfabeto griego con su correcta pronunciación y lectura de textos transliterados y en escritura original griega." },
      { num: "02", texto: "Comprender el sistema morfológico del griego koiné, incluyendo la declinación nominal y la conjugación verbal." },
      { num: "03", texto: "Analizar la estructura sintáctica de oraciones y párrafos del Nuevo Testamento griego con seguridad exegética." },
      { num: "04", texto: "Utilizar herramientas académicas (léxicos, gramáticas, concordancias) para el estudio del texto griego del NT." },
      { num: "05", texto: "Traducir con precisión porciones selectas del Nuevo Testamento, justificando las decisiones de traducción." },
      { num: "06", texto: "Aplicar el conocimiento gramatical al proceso exegético para enriquecer la predicación y la enseñanza bíblica." },
    ],
  },
  contenido: {
    titulo: "Contenido de la Materia",
    unidades: [
      {
        titulo: "Unidad I: Fundamentos del Sistema Griego",
        lecciones: [1, 2, 3],
        descripcion: "Introducción a la gramática, el alfabeto y el sistema de signos del griego",
      },
      {
        titulo: "Unidad II: El Sistema Verbal",
        lecciones: [4, 5, 11, 12, 13, 14, 15],
        descripcion: "El verbo griego en todas sus tiempos, voces y morfologías",
      },
      {
        titulo: "Unidad III: El Sistema Nominal",
        lecciones: [6, 7, 8],
        descripcion: "Sustantivos, artículos y adjetivos en las declinaciones del griego",
      },
      {
        titulo: "Unidad IV: Palabras Relacionales",
        lecciones: [9, 10, 16],
        descripcion: "Pronombres personales, preposiciones y pronombres demostrativos",
      },
    ],
  },
};
