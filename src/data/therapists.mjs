// Terapeuții Agape Center. Ordinea de aici este ordinea de pe site.
//
// Câmpuri:
//   slug      – adresa paginii (păstrăm adresele de pe vechiul site)
//   photo     – numele fișierului din src/assets/img/team (fără extensie)
//   focus     – punctul de focalizare al fotografiei (CSS object-position)
//   tags      – folosite pentru filtrele din secțiunea „Terapeuți”
//   pull      – citatul mare afișat pe pagina terapeutului
//   body      – conținutul paginii, ca listă de blocuri:
//               lead | p | quote | list | services | values

export const therapists = [
  {
    slug: 'terapeut-codruta-cristea',
    name: 'Codruța Cristea',
    role: 'Psiholog, Hipnoterapie, Dezvoltare Personală',
    photo: 'codruta-cristea',
    focus: '50% 30%',
    tags: ['Cognitiv-comportamental', 'Hipnoterapie', 'Dezvoltare personală'],
    phone: '+40744373827',
    whatsapp: 'https://wa.me/40744373827',
    facebook: 'https://www.facebook.com/profile.php?id=100088000031000',
    pull: {
      text: 'A fi psiholog este cea mai de preț meserie din lume: atingi sufletul omului!',
    },
    body: [
      {
        type: 'lead',
        html: 'Sunt psiholog cu drept de liberă practică, psihoterapeut în formare în psihoterapie cognitiv-comportamentală, hipnoterapeut și consilier de dezvoltare personală.',
      },
      {
        type: 'p',
        html: 'Am urmat din pasiune și sete de cunoaștere un program de mentorat în psihoterapie cu psih. dr. Lucian Negoiță, programe de dezvoltare personală, workshopuri cu Gabor Maté, cursurile Institutului Monroe și am citit zeci de cărți despre mindfulness, hipnoză, creștere spirituală și psihologie. Dar, după cum spunea Emil Cioran:',
      },
      {
        type: 'quote',
        text: 'Arta de a fi psiholog nu se învață, ci se trăiește și se experimentează, deoarece nu există un complex de canoane care să-ți dea cheia misterelor psihice, a structurilor diferențiale ale vieții sufletești.',
        author: 'Emil Cioran',
      },
      {
        type: 'p',
        html: 'A fi psiholog, în opinia mea, este cea mai de preț meserie din lume: atingi sufletul omului!',
      },
    ],
    extraPhoto: { src: 'codruta-extra', alt: 'În cabinetul Gate, la Agape Center' },
    diplomas: [
      { n: 2, alt: 'Atestat de liberă practică, Colegiul Psihologilor din România' },
      { n: 4, alt: 'Mentoratul online cu dr. Lucian Negoiță, modulul I: Bazele psihoterapiei' },
      { n: 1, alt: 'Diplomă de participare, eveniment susținut de dr. Gabor Maté' },
      { n: 3, alt: 'Workshop: Gestionarea emoțiilor în contextul pandemiei' },
      { n: 11, alt: 'Certificat în hipnoză și hipnoterapie medicală' },
      { n: 10, alt: 'Certified Past Life Regression Hypnotherapist' },
      { n: 5, alt: 'Certified Relationship Hypnotherapist' },
      { n: 6, alt: 'Certified Relationship Coach' },
      { n: 12, alt: 'Certified Guided Meditation Practitioner' },
      { n: 7, alt: 'The Monroe Institute: programul Lifeline' },
      { n: 8, alt: 'The Monroe Institute: programul Guidelines' },
      { n: 9, alt: 'Usui Reiki Ryoho, gradele I și II' },
    ],
  },
  {
    slug: 'terapeut-florina-bogdan',
    name: 'Florina Bogdan',
    role: 'Psiholog, Psihoterapeut în formare în Psihoterapie Sistemică Centrată pe Emoții (EFT)',
    photo: 'florina-bogdan',
    focus: '62% 35%',
    tags: ['Sistemic', 'EFT'],
    phone: '+40722543029',
    whatsapp: 'https://wa.me/40722543029',
    facebook: 'https://www.facebook.com/profile.php?id=100088000031000',
    pull: {
      text: 'Fiecare om își trăiește propria călătorie, mai grea sau mai ușoară, mai lungă sau mai scurtă, continuă sau întreruptă.',
    },
    body: [
      {
        type: 'lead',
        html: 'Fiecare om își trăiește propria călătorie, mai grea sau mai ușoară, mai lungă sau mai scurtă, continuă sau întreruptă. Într-un fel sau altul pornim de la naștere, și chiar mai devreme, în această minunată călătorie a vieții, culegând și elaborând pe parcurs trăiri, gânduri, opinii, emoții, atitudini, convingeri, valori, limite.',
      },
      {
        type: 'p',
        html: 'Și ele cresc alături de noi, având propria lor viață; unele noi apar, altele dispar sau se transformă. Dar din orice punct al vieții am privi, toate ne reprezintă și ne definesc în raport cu lumea în care trăim. Nimic din ce este în jurul nostru nu își va fi pus deja amprenta asupra a ceea ce suntem în fiecare clipă, doar puțin diferit de clipa anterioară.',
      },
      {
        type: 'p',
        html: 'Cea mai frumoasă călătorie a mea a început la nașterea fiului meu. Și chiar dacă această călătorie începuse cu mult înainte de acel moment, abia nașterea lui mi-a resetat viața și m-a suit într-un carusel care m-a determinat să pornesc pe acest drum, al cunoașterii de sine și totodată al dorinței de a-i ajuta pe ceilalți.',
      },
    ],
  },
  {
    slug: 'madalina-plesea',
    name: 'Mădălina Pleșea',
    role: 'Psiholog clinician și psihoterapeut cognitiv-comportamental',
    photo: 'madalina-plesea',
    focus: '50% 30%',
    tags: ['Cognitiv-comportamental', 'Copii & adolescenți', 'Evaluare psihologică'],
    phone: '+40763746162',
    whatsapp: 'https://wa.me/40763746162',
    facebook: 'https://www.facebook.com/miky.mada',
    pull: {
      text: 'Viața este ca o furtună pe mare. Contează dacă alegi să lupți împotriva curenților sau dacă îi folosești în favoarea ta pentru a-ți face mai ușoară navigarea către ceea ce-ți dorești!',
    },
    body: [
      { type: 'lead', html: 'Cine sunt…? <em>…sunt Mădălina Pleșea!</em>' },
      {
        type: 'values',
        title: 'Valorile care îmi ghidează viața personală și cea profesională',
        items: ['Iubirea', 'Echilibrul', 'Cunoașterea'],
      },
      {
        type: 'p',
        html: 'Pentru că mi-am dorit o abordare complexă, m-am format în <em>psihologie clinică, psihologia muncii, transporturilor și serviciilor, psihoterapie cognitiv-comportamentală</em> și terapia centrată pe schemele cognitive. Procesul de formare continuă, deoarece îmi doresc să ating performanțe înalte în oferirea serviciilor psihologice.',
      },
      {
        type: 'p',
        html: 'Îmi desfășor activitatea de psiholog clinician și psihoterapeut cognitiv-comportamental acreditat de către Colegiul Psihologilor din România. În practica clinică, realizez evaluări și psihodiagnostic clinic copiilor, adolescenților, adulților și vârstnicilor.',
      },
      {
        type: 'p',
        html: 'În practica psihoterapeutică individuală însoțesc oamenii pentru a ajunge mai mult către ei înșiși, pentru a-și putea răspunde la întrebări existențiale, a comunica eficient, a-și îmbunătăți relațiile, dar și pentru a trece peste etape dificile ale vieții precum pierderi, despărțiri, diagnostice dificile, anxietate, atacuri de panică, depresie, stres și dependențe.',
      },
      {
        type: 'p',
        html: 'În cazul copiilor și adolescenților, atât în cadrul terapiei individuale cât și de grup, aceștia m-au învățat să pășesc în lumea lor, în care comportamentele inadecvate au o semnificație, în care fricile vorbesc, iar jocul are o poveste. Limbajul cel mai frecvent utilizat este cel al bolilor, în care corpul nu minte, ci vorbește… până dobândesc „uneltele” necesare pentru a gestiona adecvat evenimentele sau emoțiile pe care le experimentează.',
      },
      {
        type: 'p',
        html: 'Pentru că este importantă semnificația pe care o oferim lucrurilor, consider că, în fiecare moment dificil, contează din ce perspectivă îl privim și ce semnificație îi oferim. Noi ne creăm propria lume interioară și pe cea exterioară în funcție de credințele personale și de capacitatea de gestionare a emoțiilor și a stresului.',
      },
    ],
  },
  {
    slug: 'kassandra-popa',
    name: 'Kassandra Popa',
    role: 'Psihoterapeut Sistemic',
    photo: 'kassandra-popa',
    focus: '40% 30%',
    tags: ['Sistemic', 'Copii & adolescenți', 'Cuplu & familie'],
    phone: '+40756432495',
    whatsapp: 'https://wa.me/40756432495',
    facebook: 'https://www.facebook.com/profile.php?id=100086553101042',
    pull: { text: 'E mereu despre tine…' },
    body: [
      {
        type: 'lead',
        html: 'Fiecare om are în el însuși un izvor inepuizabil de resurse pentru a trăi așa cum își dorește.',
      },
      {
        type: 'p',
        html: 'Se întâmplă, în anumite momente, ca aceste resurse să devină inaccesibile sau chiar invizibile, și atunci omul simte că s-a blocat. Răspunsurile sunt mereu acolo, în interior.',
      },
      {
        type: 'p',
        html: 'Eu promit să fiu aproape de tine, atât cât ai nevoie, pentru a te însoți în călătoria ta, oricare ar fi ea.',
      },
      { type: 'p', html: '<em>Bună, eu sunt Kassandra.</em>' },
      {
        type: 'services',
        title: 'Servicii oferite',
        items: [
          { title: 'Psihoterapie individuală' },
          { title: 'Psihoterapie copii' },
          { title: 'Psihoterapie adolescenți' },
          { title: 'Psihoterapie de cuplu și familie' },
          { title: 'Consiliere parentală și psihoeducație' },
          { title: 'Dezvoltare personală' },
        ],
      },
    ],
  },
  {
    slug: 'cristina-matianu',
    name: 'Cristina Matianu',
    role: 'Psiholog clinician, consilier în dezvoltare personală, formator',
    photo: 'cristina-matianu',
    focus: '50% 18%',
    tags: ['Copii & adolescenți', 'Cuplu & familie', 'Evaluare psihologică', 'Dezvoltare personală'],
    phone: '+40724222715',
    whatsapp: 'https://wa.me/40724222715',
    pull: {
      text: 'În terapie, consider că legătura puternică și de încredere dintre psiholog și client este crucială pentru obținerea succesului terapeutic.',
    },
    body: [
      {
        type: 'lead',
        html: 'Pe parcursul vieții noastre avem momente în care ne pierdem încrederea în noi înșine, în bine sau în iubire. Momente în care nu știm cum să ne comportăm cu oamenii apropiați astfel încât să fie „totul bine”, momente de „răscruce” din care nu știm cum să ieșim, stres, oboseală.',
      },
      {
        type: 'p',
        html: 'În aceste momente, cel mai important este să cerem ajutor, chiar dacă ne simțim epuizați și fără resurse.',
      },
      {
        type: 'p',
        html: 'Atunci când eu am trăit astfel de momente, am cerut ajutorul unui specialist, iar viața mea și a familiei mele s-a îmbunătățit considerabil. Atunci am știut că menirea mea nu este să lucrez în alt domeniu, ci să ajut oamenii pe care îi întâlnesc să le fie bine.',
      },
      {
        type: 'p',
        html: 'Cine sunt? Mă numesc Cristina Matianu și sunt psiholog clinician, consilier în dezvoltare personală și formator.',
      },
      {
        type: 'services',
        title: 'Servicii oferite',
        items: [
          {
            title: 'Consiliere / Psihoterapie individuală',
            text: 'Descoperim împreună forța ta interioară, astfel încât să poți începe să trăiești viața pe care ți-o dorești.',
          },
          {
            title: 'Consiliere și dezvoltare personală',
            text: 'Explorează-ți potențialul și îndrăznește să devii cea mai bună versiune a ta.',
          },
          {
            title: 'Consiliere și psihoterapie de cuplu',
            text: 'Împreună putem construi relații mai puternice și mai sănătoase.',
          },
          {
            title: 'Consiliere și psihoterapie în relația cu copilul tău',
            text: 'Împreună putem construi o relație puternică și sănătoasă cu copilul tău, oferindu-i instrumentele necesare pentru a-și dezvolta potențialul.',
          },
          {
            title: 'Parenting',
            text: 'Creșterea unui copil nu vine cu un manual, însă poți primi îndrumare și susținere pentru a deveni cel mai bun părinte pentru copilul tău.',
          },
          {
            title: 'Psihologia fobiilor și anxietății',
            text: 'Împreună vom învinge fricile și anxietățile tale, pentru a-ți redobândi controlul asupra vieții.',
          },
          {
            title: 'Evaluări psihologice',
            text: 'O evaluare psihologică este esențială pentru stabilirea diagnosticului corect. Un diagnostic exact, rapid și responsabil reprezintă cea mai scurtă și mai eficientă cale pentru tratarea problemei.',
          },
          {
            title: 'Orientare profesională',
            text: 'Vei primi suport și îndrumare în a-ți alege cariera potrivită și în a-ți atinge obiectivele profesionale.',
          },
        ],
      },
    ],
  },
  {
    slug: 'mirela-donciu',
    name: 'Mirela Donciu',
    role: 'Psihoterapeut Integrativ, Consilier Dezvoltare Personală, Formator',
    photo: 'mirela-donciu',
    focus: '50% 25%',
    tags: ['Integrativ', 'Dezvoltare personală'],
    phone: '+40724649853',
    whatsapp: 'https://wa.me/40724649853',
    pull: {
      text: 'Cred în curajul de a explora cele mai întunecate cotloane ale ființei noastre pentru că, de acolo, se vede cel mai bine lumina.',
    },
    body: [
      {
        type: 'lead',
        html: 'Sunt Mirela Donciu, psiholog cu drept de liberă practică, psihoterapeut integrativ, consilier de dezvoltare personală și formator.',
      },
      {
        type: 'p',
        html: 'Fascinația pentru mintea și sufletul uman și dorința autentică de a ajuta m-au determinat să fiu într-un permanent proces de cunoaștere și studiu, individual sau formal.',
      },
      {
        type: 'p',
        html: 'Consider că bogăția lumii noastre interioare este ceea ce ne aseamănă și ne deosebește, deopotrivă. Suntem vulnerabili și puternici în aceeași măsură, aceste aspecte nefiind două extreme ce se exclud reciproc, ci două fațete ale aceluiași pilon ce stă la baza personalității noastre.',
      },
      {
        type: 'p',
        html: 'Știu că este nevoie de multă putere și curaj pentru a cere ajutor. De aceea, te invit în călătoria către tine însuți, într-un spațiu unde temerile și îndoielile tale nu vor fi obstacole, ci catalizatori ai propriei regăsiri și reconstrucții de sine.',
      },
      {
        type: 'p',
        html: 'Cred cu tărie că durerile pot fi vindecătoare. Cred în curajul de a explora cele mai întunecate cotloane ale ființei noastre pentru că, de acolo, se vede cel mai bine lumina.',
      },
      {
        type: 'list',
        title: 'Situații în care îți pot oferi susținere și ajutor',
        items: [
          'Stări de anxietate',
          'Atacuri de panică',
          'Dificultăți de relaționare',
          'Depresie',
          'Stimă de sine scăzută',
          'Fobii',
          'Dependențe',
          'Probleme generate de abuzuri în copilărie',
        ],
      },
      {
        type: 'p',
        html: 'Te aștept să ne cunoaștem, într-un spațiu sigur, al acceptării necondiționate și al stabilirii unor granițe identitare sănătoase.',
      },
    ],
  },
  {
    slug: 'elena-tonciu',
    name: 'Elena Tonciu',
    role: 'Psiholog clinician, Psihoterapeut integrativ',
    photo: 'elena-tonciu',
    focus: '50% 35%',
    tags: ['Integrativ'],
    phone: '+40721785427',
    whatsapp: 'https://wa.me/40721785427',
    facebook: 'https://www.facebook.com/profile.php?id=100095366362052',
    pull: {
      text: 'Acționează ca și când ar fi așa cum îți imaginezi și vei deveni întocmai gândurilor tale.',
      author: 'Joseph Murphy',
    },
    body: [
      {
        type: 'lead',
        html: 'Bună! Sunt Elena Tonciu, psiholog clinician și psihoterapeut integrativ.',
      },
      {
        type: 'p',
        html: 'Am studiat Psihologia la Universitatea București și am urmat formarea de bază în psihoterapie la Institutul de Psihoterapie Integrativă din București.',
      },
      {
        type: 'p',
        html: 'Consider că fiecare om este unic, iar experiența m-a învățat că totul este posibil și nimic nu este imposibil.',
      },
      {
        type: 'p',
        html: 'Rolul meu este să te ghidez în procesul tău de dezvoltare personală. Singura condiție este să îți dorești să participi în mod activ la evoluția ta.',
      },
      {
        type: 'p',
        html: 'Gândurile noastre ne influențează felul în care ne simțim și acționăm. Majoritatea emoțiilor negative pe care le ai sunt rezultatul unui stil de gândire distorsionat. În timp, îți vei da seama că gândurile negative sunt cauza emoțiilor copleșitoare, nu evenimentele în sine.',
      },
      {
        type: 'quote',
        text: 'Nu există lucruri bune sau rele. Gândurile oamenilor sunt cele care le fac să pară astfel.',
        author: 'William Shakespeare',
      },
    ],
  },
  {
    slug: 'luminita-lica',
    name: 'Luminița Lică',
    role: 'Psiholog clinician și Psihoterapeut Integrativ',
    roleLong: 'Psiholog clinician și Psihoterapeut Integrativ acreditat de Colegiul Psihologilor din România',
    photo: 'luminita-lica',
    focus: '50% 25%',
    tags: ['Integrativ'],
    phone: '+40721785427',
    whatsapp: 'https://wa.me/40721785427',
    facebook: 'https://www.facebook.com/profile.php?id=100095366362052',
    pull: {
      text: 'Este foarte important ca TU să faci doar un prim pas! EU te voi susține necondiționat!',
    },
    body: [
      {
        type: 'lead',
        html: 'Dacă te confrunți cu probleme de relaționare în viața de zi cu zi, dacă simți că nu mai poți face față sarcinilor zilnice, dacă stări de neliniște și îngrijorare te copleșesc sau dacă nimic din ce înainte îți făcea plăcere acum nu îți mai place, atunci este foarte important ca <strong>TU</strong> să faci doar un prim pas! <strong>EU</strong> te voi susține necondiționat!',
      },
      {
        type: 'p',
        html: 'Te aștept să începem <strong>ÎMPREUNĂ</strong> procesul terapeutic pentru regăsirea echilibrului și activarea resurselor tale interioare!',
      },
    ],
  },
  {
    slug: 'mihaela-marin',
    name: 'Mihaela Marin',
    role: 'Psiholog Clinician',
    photo: 'mihaela-marin',
    focus: '50% 25%',
    tags: ['Integrativ'],
    phone: '+40736695304',
    whatsapp: 'https://wa.me/40736695304',
    facebook: 'https://www.facebook.com/share/JS2Vr3TryoV9cQso',
    linkedin: 'https://www.linkedin.com/in/mihaela-marin-115333101',
    pull: {
      text: 'Un singur cuvânt adresat unui suflet poate crea un întreg univers care să-l umple de lumină.',
      author: 'Victor Hugo',
    },
    body: [
      {
        type: 'lead',
        html: 'Sunt Mihaela Marin, psiholog clinician și psihoterapeut în formare în psihoterapie integrativă, pasionată de sănătatea mintală și de binele pacienților mei.',
      },
      {
        type: 'p',
        html: 'Cu o experiență vastă în domeniul medical și o abordare integrativă, mă angajez să ofer un spațiu sigur și empatic în care să explorăm împreună emoțiile, gândurile și comportamentele care îți afectează viața.',
      },
      {
        type: 'p',
        html: 'Prin terapie personalizată și adaptată nevoilor tale unice, îți ofer sprijinul și instrumentele necesare pentru a-ți atinge obiectivele și a-ți îmbunătăți calitatea vieții.',
      },
      {
        type: 'p',
        html: 'Cu o abordare caldă, autentică și colaborativă, te invit să începem împreună călătoria către o stare de bine și echilibru emoțional.',
      },
      { type: 'p', html: 'Două citate care îmi plac și care consider că mă reprezintă:' },
      {
        type: 'quote',
        text: 'Un singur cuvânt adresat unui suflet poate crea un întreg univers care să-l umple de lumină.',
        author: 'Victor Hugo',
      },
      {
        type: 'quote',
        text: 'Viața însăși este magie, iar dacă nu crezi asta, măcar încearcă să o trăiești ca pe ceva magic.',
        author: 'Albert Einstein',
      },
    ],
  },
  {
    slug: 'ana-maria-chiric',
    name: 'Ana-Maria Chiric',
    role: 'Psiholog Clinician, Psihoterapeut Integrativ',
    photo: 'ana-maria-chiric',
    focus: '50% 25%',
    tags: ['Integrativ'],
    phone: '+40724196506',
    whatsapp: 'https://wa.me/40724196506',
    facebook: 'https://www.facebook.com/anamaria.chiric.7',
    pull: {
      text: 'Procesul de vindecare interioară este unul de întoarcere la esența noastră și la puterea de a ne bucura din suflet de liniștea umbrită, uneori, de suferințele noastre.',
    },
    body: [
      {
        type: 'lead',
        html: 'Ana-Maria Chiric este numele meu și sunt psiholog clinician, psihoterapeut integrativ.',
      },
      {
        type: 'p',
        html: 'M-a fascinat de când mă știu drumul evoluției și transformării umane. Consider că procesul de vindecare interioară este unul de întoarcere la esența noastră și la puterea de a ne bucura din suflet de liniștea umbrită, uneori, de suferințele noastre.',
      },
      { type: 'p', html: 'Motto-ul cu care am pornit pe acest drum minunat al dezvoltării umane este:' },
      {
        type: 'quote',
        text: 'Un om trebuie să se cunoască și să se iubească pe sine până în cel mai adânc și liniștit colțișor al sinelui, unde îl descoperă pe creatorul său, iar abia din acel moment începe pentru el adevărata transformare.',
      },
      {
        type: 'p',
        html: 'Mă ghidez după această credință pentru că, în multe momente ale vieții mele, am realizat că pot merge mai departe doar atunci când acel sine misterios interior îmi zâmbește și mă inspiră să fiu eu însămi.',
      },
      {
        type: 'p',
        html: 'De asemenea, consider că viața înseamnă să putem învăța unii de la ceilalți prin inspirație, iubire și admirație. Această credință mă ajută să trăiesc cu multă bucurie momentul prezent, și acest lucru îmi doresc să ți-l arăt și ție.',
      },
    ],
  },
];
