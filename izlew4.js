
  const words = [
    { word: "Abay", meaning: "at. Qorǵanısh, saqlıq, es, abay-siyasat.", experience: "Sen bilmeysen meniń jayım, Onıń menen teń qudayım, Kerek emes bos abayıń, Tek tur, dedi Aydos baba (Berdaq)." },
    { word: "Abaylamay", meaning: "r. Sezbey, serlemey, bilmey.", experience: "Oksananıń qaysı esikke kirip ketkenin abaylamay da qaldım (M.Nızanov)." },
    { word: "Abzal", meaning: "r.Jaqsı, durıs, táwir.", experience: "Bul kúyikten frontka ketkenim abzal ǵoy (K.Sultanov)."},
    { word: "Abısın", meaning: "at.Eki aǵayın jigittiń úlkeniniń kelinshegi kishkenesiniń kelinshegine abısın boladı.", experience: "Biziń abısın gáptiń posgellesin aytadı (K.Sultanov)." },
    { word: "Abadan", meaning: "kel. Jetkilikli, mol, kóp, qurǵın, barshılıq.", experience: "Xalıq shaǵlap mustaqıl Ózbekstanda, Dúnya tınısh, eller abadan bolsın (I. YUsupov). Ádira qalǵır tuwǵan jer, Bolmaǵan soń abadan (Jiyen jıraw)."},
    { word: "Abay-siyasat", meaning: "at. Kózabaǵa qır kórsetiwshilik.", experience: "Shopanlarǵa kelip, abay-siyasat qılıp, túsingenlerine násiyat aytıp, xannan kelgen jasawıl ne dep turıptı (Ó.Xojaniyazov)."},
    { word: "Abat", meaning: "kel. Barshılıq, molshılıq, toqshılıq, qurǵınlıq, qurǵınlılıq, juqnalılıq, jetkiliklilik, mol, bar, aǵıl-tegil, esap-sansız, tawsılmaytuǵın.", experience: "Jiyenge haq názer saldı, Mal dúnyası abat boldı (Berdaq). Eki dúnyası birdey abat bolsın jigittiń! (T. Qayıpbergenov)."},
    { word: "Abaysız", meaning: "Ańlamastan, bayqawsız, bayqamastan, dıqqatsız, sersiz, ańsız, bilmesten, ǵapılda.", experience: "Sonda abaysız kelip demde, birew kózin bastı áste (I.Yusupov)."},
    { word: "Abajur", meaning: "Kúshli jaqtılıq kózdi qamastırmawı hám tiyisli orınǵa ǵana toplanıp túsiwi ushın lampanıń ústine ornatılǵan (gezleme, qaǵaz t. b. nárselerden jasalǵan) qaplama, shıra.", experience: ""},
    { word: "Abaq", meaning: "Jılımnıń etegi, sheti, jiyegi.", experience: "Ara-tura salǵan jılım, abaǵım, maylaǵanda úyip keler qabaǵıń (S.Nurımbetov)."},
    { word: "Abıray", meaning: "Ataq, dańq, mártebe.", experience: "Qalqozshılar arasında, rayon aldında iskerlik kútá abıray (K.Dosanov)."},
    { word: "Abonent", meaning: "Abonementke iye bolǵan adam, abonementi bar kisi. Telefonnıń abonenti.", experience: ""},
    { word: "Abort", meaning: "Balanı waqtınan burın operaciya jolı menen alıp taslaw usılı, boydan túsiriw jolı.", experience: ""},
    { word: "Absolyut", meaning: "Idealistlik filosofiya túsiniginde álemniń máńgilik ózgermeytuǵın dáslepki negizi (ruwx, sana).", experience: ""},
    { word: "Abır-sabır", meaning: "Ala topalan, apır-tapır, patırat, ersili-qarsılı, tártipsiz.", },
    { word: "Abbazı", meaning: "at. Burınǵı Xiywa xanlıǵınıń tusındaǵı pul birligi.", experience: "Bárshesi eki abbazı. Bayǵa bolmas kóbi-azı, Bolsın biyshara razı, Haqısın bergil shermende (Ótesh shayır)."},
    { word: "Abbreviatura", meaning: "at. Sózlerdiń jazıwdaǵı shártli túrde qısqartılıwı, sonday-aq, eki yamasa bir neshe sózlerden qısqartılıp alınǵan sóz.", experience: "QMU, AQSh, BMSh, MPJ, TashMAU."},
    { word: "Abiturient", meaning: "at. Joqarı oqıw ornına kiriwshi, xújjetin endi ǵana tapsırǵan oqıwshı.",},
    { word: "Abonement", meaning: "at. Bir nárseden paydalanıw ushın alınǵan xújjet, kelisim boyınsha bir nárseni shártli waqıt ishinde tiyisli baxası menen paydalanıw huqıqı.", experience: "Teatr abonementi. Avtobus abonementi."},
    { word: "Abstrakciya", meaning: "at. Zattıń belgisine, qásiyetine qaramastan oylap shıǵarıw.",},
    { word: "Abızámzám", meaning: "at. Zámzám suwı musılmanlardıń teberik dep esaplaytuǵın Káábanıń janındaǵı qudıqtıń suwı.", experience: "Abızámzám yańlı shiyrin suwıń bar. Watan jerin abat etken dáryasań. (S.Nurımbetov). Abızámzámniń suwınday birewlerdiń taza muhabbatın urladıń sen náletiy urıs (Ó.Xojaniyazov)."},
    { word: "Abılaysań", meaning: "at. 1. Parsısha abináysan náysan (aprel) ayında jawǵan jawın, báhár jawını, nóser. 2. Mif. Qazaq, qaraqalpaq xalıqlarında gezlesetuǵın ańızlarda dúzde ólgen Abılaysań batırdın denesin juwıw ushın jawǵan jawın. 3. Sel bolıp aqqan kóz jası.", experience: "Abılaysań jamǵırday. Kóziniń jası móltildep, Etegine quyadı (A.Dabılov)."},
    { word: "Abınıw", meaning: "f. Qaptırılıw, súriniw, kepleniw, taplanıw, et betinen túsiw.", experience: "Múshirip qaqań etip, erdin ústinen sekirip, attın jalına abınıp ketti (K.Sultanov), Qalǵanlarımız oshaqqa abınıp, mollamdógerek bolıp otırmız (K.Sultanov)."},
    { word: "Abırjı", meaning: "kel. Muzdıń xálsiregen waqtı, qolaysız, hálsiz, qáwipli.", experience: "Muz hálsirep, jol abırjı bolǵannan berli úyine kelgendi de qoydı (A.Begimov). Muz bir qatıp bekkemlespey turıp, jıllı bolıp ketse, abırjı bolıp ústinen adam júre almaydı (Q.Irmanov)."},
    { word: "Avangard", meaning: "at. Aldınǵı, bastaǵı, birinshi, jol kórsetkish, úlgi kórsetiwshi, atlanıs jasaǵanda áskerlerdiń eń aldıńǵı tobı.", experience: "Ózi issheń basqalarǵa avangard (Á.Shamuratov)."},
    { word: "Avantyura", meaning: "at. Hádiyse, hiylekerlik, hiylekerlik siyasat, hádiyselerge túsiw, hár qıylı jollarǵa túsiw.", experience: "Áskeriy avantyura, siyasiy avantyura."},
    { word: "Avariya", meaning: "at. 1. Mashina mexanizminiń bir jeriniń buzılıwı, buzılıw, qıyralıw, sátsizlik. 2. Baxıtsız hádiyse, apat, qáwip.", experience: "Avariyaǵa ushıraw. Mashinanı avariyasız aydaw."},
    { word: "Aviamodel", meaning: "at. Ushıwshı apparattıń modeli.",},
    { word: "Aviapochta", meaning: "at. Pochtanı hawa jolı menen jetkeriw, amanattıń hawa jolı arqalı jiberiliwi.",},
    { word: "Aviator", meaning: "at. Lyotchik, ushqısh, ushıwshı, ushıw menen shuǵıllanıwshı, hawa-jol qatnasında islewshi.",},
    { word: "Aviaciya", meaning: "at. Hawada júriw quralı, hawadaǵı ushıwdıń háreket etiw usılı.", experience: "Úlken qısqı palatkaǵa da jańa aviaciya mektebin pitkergen jas lyotchikler hám shturmanlar jıynalǵan edi  (N.Dáwkaraev)."},
    { word: "Avtobaza", meaning: "at. Avtomobiller saqlanatuǵın, buyırtpa boyınsha jumsawǵa mashinalardı beretuǵın transport mákemesi.",},
    { word: "Avtobiografiya", meaning: "at. Ómirbayan, óz ómirbayanı.", experience: "Uǵıljannıń jalǵız atınan basqa hesh bir avtobiografiyasına tiyisli maǵlıwmatınıń bolmaǵanı izlewdi biraz qıyınlastırıwı múmkin (A.Bekimbetov)."},
    { word: "Avtobus", meaning: "at. Adamlardı tasıytuǵın kóp orınlı avtomobil.", experience: "Uzaq joldı qısqartıp, avtobusqa jeńgizgen (T.Seytmamutov). Tramvayı, avtobusı dóngelep, dóngelek tur bir-birine minbelep (M.Dáribaev)."},
    { word: "Avtograf", meaning: "at. Avtordıń óz qolı menen jazılǵan qoltanbası, óziniń qoyǵan qolı.", experience: "Shirkew diywallarında ótken ásirlerde jazılǵan rus soldatlarınıń tolıp atırǵan avtograf jazıwları bar (K.Ayımbetov)."},
    { word: "Avtozavod", meaning: "at. Avtomobil zavodı, avtomobiller soǵılatuǵın zavod, avtomobil islep shıǵaratuǵın jer, orın.",},
    { word: "Avtokolonna", meaning: "at. Alıs jolǵa shıqqanda birge júretuǵın mashinalar toparı.", experience: "Úshinshi kúni túnde front liniyasına dushpannıń avtokolonnası jaqınlap kiyatır degen xabar aldıq (N.Dáwqaraev)."},
    { word: "Avtol", meaning: "at. Avtomashina, avtomobil traktorlardı háreketke keltiretuǵın, qurılısların maylaytuǵın maydın túri, mashina mayı.",},
    { word: "Avtolavka", meaning: "at. Kóshpeli dúkán, avtomashinanıń ishine jayǵastırılǵan, qálegen jerge barıp sawda isley beretuǵın dúkán.", experience: "Inim usındayın bar da, avtolavka bekitse men de isleymen (K.Jumaniyazov)."},
    { word: "Avtomat", meaning: "at. Ishki mexanizmlerdiń kúshi menen ózinen-ózi jumıs apara alatuǵın qural, ózinshe isleytuǵın apparat, ásbap.", experience: "Telefon-avtomat."},
    { word: "Avtomashina", meaning: "at. Avtomobil, avtobus, júk tasıytuǵın yamasa jeńil mashina.", experience: "GAZ-69 markalı jeńil avtomashina alǵa qaray zuwlap ketti (A.Bekimbetov). Dushpannıń 15 samolyotı, 5 tank, 14 avtomashinası joq etildi (T.Qayıpbergenov)."},
    { word: "Avtonomiya", meaning: "at. Belgili bir xalıqtıń ózin ózi basqarıw huqıqı, milliy huqıqı.",},
    { word: "Avtoportret", meaning: "at. Xudojniktiń ózi tárepinen islengen óziniń (portreti) súwreti.",},
    { word: "Avtor", meaning: "at. Ilimiy hám ádebiy shıǵarmalardıń hám t. b. miynetlerdiń iyesi, dóretiwshisi.", experience: "Baspasóz basqarması bolmay tabı, Otırdı buyrıq jazıp avtorlarǵa (I. Yusupov)."},
    { word: "Avtoreferat", meaning: "at. Qanday da bir ilimiy izertlewdiń avtor tárepinen en qısqa etip jazılǵan túri.",},
    { word: "Abzac", meaning: "at. Tekst basındaǵı yáki onıń ayırım pikir bildirilgen bólegindegi birinshi sózdiń birinshi háribin jazıwda onǵa qaray jasalǵan sál sheginis, taza joldan baslanǵan jazıw, bir taza joldan ekinshi taza jolǵa shekemgi aralıq, jazıwdaǵı eń dáslepki jol.", experience: "Abzactan jazıw."},
    { word: "Avtoruchka", meaning: "at. Sıyası peroǵa óz-ózinen quyılıp turatuǵın ruchka.",},
    { word: "Agent", meaning: "at. Basqa bir eldiń jasırın tapsırması menen kelgen adam, wákil, elshi, jasırın tıńshı.", experience: "Anglichan imperialistleriniń agentleri bolǵan túrkmen feodalları Bozatawdı jawızlıq penen shaptı (B.Ismaylov)."},
    { word: "Agentura", meaning: "at. Jasırın maǵlıwmatlar jıynaw ushın shólkemlestirilgen elshilik xızmet.",},
    { word: "Agitator", meaning: "at. Kópshilik arasında úgit-násiyat jumısın júrgiziwshi adam.", experience: "Usı brigadada basqalar menen jumıs islep agitatorlıqtı da alıp baratuǵın Atamurat. Áne, agitator kiyatır eken, dedi sonıń arasında bir kolxozshı (T.Qayıpbergenov)."},
    { word: "Agitpunkt", meaning: "at. Úgit-násiyat isi menen shuǵıllanatuǵın jer, adamlar arasında siyasiy massalıq jumısın júrgizetuǵın jergilikli mákeme.",},
    { word: "Agrarlıq", meaning: "kel. Jerdi paydalanıwǵa hám iyelewge tiyisli.", experience: "Agrarlıq reforma. Agrarlıq másele."},
    { word: "Agregat", meaning: "at. Bir neshe túrdegi mashinalardıń birikpesi, quramalı mashinalarda hár túrli detallardıń birikpesi, hár túrli tiptegi bir yamasa bir neshe mashinalardıń birigip ulıwmalıq iske qosılıwı.",},
    { word: "Agressor", meaning: "at. Basıp alıwshı, basqınshı.",},
    { word: "Agronom", meaning: "at. Agronomiya boyınsha qánige, maman, awıl xojalıq isleri boyınsha qánigelikti iyelegen kisi.", experience: "Áliy aǵa bir neshe jıllardan berli «Kegeyli» sovxozınıń bir uchastkasında agronom bolıp isleydi (Ó.Xojaniyazov)."},
    { word: "Agronomiya", meaning: "at. Jerdi islew hám awıl xojalıǵı haqqında ilim.", experience: "Agronomiyalıq laboratoriyalar dúzildi (O.Berdimuratov)."},
    { word: "Agrotexnika", meaning: "at. Awıl xojalıq eginlerin islewdiń sisteması, diyqanshılıq hám olardı rawajlandırıw sharaları, ilajları.", experience: "Barlıq agrotexnika jetiskenliklerin keńnen qollanıw zárúr (O.Berdimuratov)."},
    { word: "Agroximiya", meaning: "at. Ósimliklerdi azıqlandırıw, olardı (jaqsı jaǵdayda) rawajlandırıw tuwralı ilim, ósimliklerdi túrli zıyanlı nárselerden qorǵaw hám t. b. ilajlar kóriw usılı.",},
    { word: "Aǵa-jeńge", meaning: "at. Ózinen úlken aǵası xám onıń xayalı, jası úlken, jası kishi tuwısqanları.", experience: "Qosıbay tubalap, tolǵanıp, aqırı shapandı sandıqtıń tórine tasladı da, bas elshi ózi bolıp, aǵa-jeńgesiniń alıp keldi riyzalıǵın (K.Sultanov)." },
    { word: "Aǵa-ini", meaning: "Tuwısqanlıq qatnastaǵı ul perzentler.", experience: "Dos-yaran, jaqın qatnastaǵı adamlar. Onıń arqa súeri, tuwısqan- tuwǵanları, pútkil kollektivi, (Ó.Ayjanov)."},
    { word: "Aǵalıq", meaning: "Jası úlkenlik, ǵamxorlıq, jol basshılıq, qáwenderlik.", experience: "Jigit boldım kem-kem keldi aǵalıq (T.Jumamuratov)."},
    { word: "Aǵarbulaq", meaning: "Molshılıq, asıp-tasıwshılıq, tawsılmaytuǵın", experience: "Fermamız aǵarbulaq may boladı (K.Sultanov)."},
    { word: "Aǵarǵan", meaning: "Qatıq, sút, ayran", experience: "Qara qoydıń terisi sabınlap juwsań aǵarmas (Q.Ayımbetov)."},
    { word: "Aǵa-apa", meaning: "at. Áke-sheshe, tuwǵan-tuwısqan, úlken-kishi.", experience: "Kúndizinde aǵa-apalarımız atızlarda isleydi (A.Bekimbetov)."},
    { word: "Aǵa-begler", meaning: "at. Jası úlken, jası kishiler, húrmetli otaǵasılar, xalayıqlar, el-jurtlar, jası úlken, jası kishi.", experience: "Áne aǵa-begler, endigi gáp sizlerden yar-doslar. (K.Aralbaev)."},
    { word: "Aǵabek", meaning: "at. 1. Basqarıwshı, shólkemlestiriwshi, basshılıq etiwshi kisi. 2.Menshikli at, isim.",},
    { word: "Aǵabiy", meaning: "at. Hámel, biylik", experience: "Xalıqtıń úrp-ádetinen qalıp ketken «aǵabiy» oyınları oynaldı (Q.Ayımbetov)." },
    { word: "Aǵay", meaning: "at. Ózinen jası úlken kisi, atın bilmegen jası úlkenge xabarlasıw ushın qollanılatuǵın qaratpa sóz, sıpayılıq mánisinde jası úlkenge múrájat.", experience: "Allambergen aǵay abıraylı xojalıqqa aylandı (J.Aymurzaev)."},
    { word: "Aǵayin", meaning: "at. Tuwǵan-tuwısqan, urıwlas, ata-babaları tuwısqan adamlar.", experience: "Aǵayiniń kóp bolsa adam tiymes, kósewin uzın bolsa qolın kúymes (qq.x.n.) Sebebi Esengeldi menen Qosıbay ar-namısı sherik aǵayin edi (K.Sultanov)."},
    { word: "Aǵarańlaw", meaning: "f. Bir nárseniń shala-sharpı kóriniwi, uzaqtan bozarańlap kózge túsiwi, bozarıp kóriniw, eleslew.", experience: "Kún nurına shaǵılısıp, qarday aǵarańlaydı (Aybek). Aǵarańlap tań atıp kiyatır (Ó.Xojaniyazov)."},
    { word: "Aǵarmay", meaning: "at. Aǵartılǵan may, aq may, paxta mayı.",},
    { word: "Aǵartıw I.", meaning: "f. Aq etiw, háklew, tazalaw, juwıw.", experience: "Íssı quyash aǵartıp jibergen qalpaǵın shaqqan kiyip shıǵıp ketti (K.Smamutov)."},
    { word: "Aǵartıw II.", meaning: "f. Sawatlandırıw, túsindiriw, oqıtıw, sawatın ashıw, bilimlendiriw.", experience: "Xalıq bárhama ádiwleydi senińdey, Aǵartıwdıń tuńǵısh qarlıǵashların (I. Yusupov). Shayır sózi menen oqıtıwshınıń kewlin, kózqarasınaǵartadı (G.Esemuratov)."},
    { word: "Aǵartıwshı", meaning: "at. 1. Aq etiwshi, háklewshi, tazalawshı. 2. Aǵartıw jumısın júrgiziwshi, xalıq arasında úgit-násiyat aparıwshı, sawatlandırıw isi menen shuǵıllanıwshı.",},
    { word: "Aǵawız", meaning: "kel. Pispegen, shala, waqtı jetpegen, shiyki, waqtı tolmaǵan.", experience: "Sen qaraqalpaq, qazaq bolǵanda, Ketpenlep egin ekkende, Ketpenlep ekken eginiń, Ortada aǵawız qalǵanda (Kunxoja)."},
    { word: "Aǵash", meaning: "at. Terek, ádette, terektiń úlkeygeni, quwraǵı, qurılıs hám xojalıq islerinde paydalanılatuǵın shiyki zattıń túrine aytıladı.", experience: "Qonıp ǵarǵaday aǵashqa, Dúnyanıń máwsimin kórdim (Ótesh shayır). Aǵash ergenektin ekewi de tabaldırıqqa shekem naǵısqa sırǵıp tur (K.Sultanov). Oń qaptalda aǵash kát (N.Dáwqaraev)."},
    { word: "Aǵza", meaning: "at. 1. Múshe. Adam yamasa haywan aǵzası. 2. Qanday da bir topar, aymaq hám t. b. jasawshı, oǵan tiyisli adam. Shańaraq aǵzası. 3. Qanday da bir mákeme, shólkem, jıyın aǵzası.",},
    { word: "Aǵla", meaning: "kel. Jaqsı, artıqmash, ayrıqsha, artıq, ziyada, zıyat.", experience: "Súysen miyriń qanıp ol intizarıń, Bul dunya beyishten aǵla kórindi (Berdaq). Bul aqılıń bárinen de aǵla bolǵan eken (Q.Ayımbetov)."},
    { word: "Aǵızıw", meaning: "f. Suyıqlıqtı shıǵarıw, tógiw,", experience: "Ǵayrı birewlerdi etip qurdasıń, júrme aǵızıp dilbarıńnıń kóz jasın (Berdaq). Janǵa jaylı aǵızadı til mayın, Qızıq sózdi túsiniwge dım qayım (I. Yusupov)."},
    { word: "Aǵılıw. I", meaning: "f. 1. Izi úzilmew, tógiliw, molayıw. 2. Shubırıw, ıǵılıw.", experience: "Kelgen kúnniń ózinde-aq ol áynek aldında otırıp, kóshede úzliksiz aǵılıp baratırǵan adamlarǵa qızıǵıp qaraytuǵın edi (R.Tagor)."},
    { word: "Aǵılıw II", meaning: "f. Ótip turıw, júrip turıw.", experience: "Baǵdarı bar gúl japıraǵın jamılǵan, sımlar boylap aǵılǵan (I. Qurbanbaev)."},
    { word: "Aǵım", meaning: "at. Baǵıt, baǵdar, ıńǵay, tárep, taman.",},
    { word: "Arıs", meaning: "at. Suyıqlıqtaǵı háreket, qıymıl, suw aǵısı.", experience: "Úshewi taǵı da qosılıp, tómen qaray aǵıs penen aqırın aǵıp baratır (J.Aymurzaev)."},
    { word: "Aǵıw", meaning: "f. 1. Tógiliw, quyılıw, ıǵılıw, ıǵıw. 2. Suwdıń belgili baǵdardaǵı, háreketi, qıymılı.", experience: "Aqdáryadan suw aǵadı salmaǵa, Yar kiyatır salmadan suw almaǵa (qq.x.q.)."},
    { word: "Aǵıw-qarası", meaning: "at. Dúnyaǵa shıǵıp kórgeni, barı, birgenesi, jalǵızı.", experience: "Jaman dep aytsań da baydıń balasın, birewdiń kóziniń aǵıw-qarası (Omar)."},
    { word: "Ada bolıw", meaning: "f. Tawsılıw, tamam bolıw, sap bolıw, joq bolıw.", experience: "Bar ómirim boldı ada, Óttiń be qurǵan ómirim (Berdaq). Ada bolmas ayta berseń, zarlı ómirdi etseń dástan (Á.Shamuratov)."},
    { word: "Adaq arba", meaning: "at. Ayaq arba (balalardı júriwge úyretetuǵın aǵashtan islengen buyım).", experience: "Seniń balańa adaq arba soǵaman (T.Qayıpbergenov)."},
    { word: "Adalaw", meaning: "f. Tamamlaw, tawısıw, túwesiw, joq etiw.", experience: "Táwekel etip allańa, Shubar atıńdı tapsırdıń. Aytar sózińdi adalap («Alpamıs»)."},
    { word: "Adam ata", meaning: "at. Adam álayhissalam. Diniy isenim boyınsha Alla tárepinen jaratılǵan jer júzindegi eń birinshi adam hám adamzattıń atası.", experience: "Adam ata menen Hawa eneni (Áweneni) topıraqtan bina etedi (K.Sultanov)."},
    { word: "Adamgershilik ", meaning: "at. Múnásibetlilik, siz-bizlik, óz-ara sıylasıq, dos-yaranlıq, sanalılıq, kórgenlilik, hújdanlılıq.", experience: "Sırtqı pishińnen naǵız adamgershilikli júrek soǵıp turǵanlıǵın biliw qıyınǵa túspedi (I. Yusupov)."},
    { word: "Adamzat", meaning: "at. Barlıq adam balası, pútkil adam, qanday adam bolmasın barlıǵı.", experience: "Tawdı, tastı jel buzar, adamzattı sóz buzar (qq.x.n.). Adamzat hám eki túrli. Biri batır, biri qorqaq. Batırman dep kóp maqtansa, Sol adamnıń ózi qorqaq (S.Májitov)."},
    { word: "Adamxor", meaning: "kel. Adam qumar, asaw, jabayı, adam óltiretuǵın, qáwipli, jırtqısh, qutırǵan.", experience: "Adamxorday kózlerine qan tolǵan. Shashları mısalı jabaǵı turǵan (Á.Shamuratov)."},
    { word: "Adasıw", meaning: "f. 1. Jańılısıw, qátelesiw, joldan shıǵıw. 2. Jol tappaw, joldan shıǵıw, bilmey qalıw.", experience: "Aqmaq gáwir adastıń. Kúnde júrer jolıńnan («Er Ziywar»). Adamzat ay bolmasa adasadı, kewildi sóylespesen kir basadı (qq.x.q.)."},
    { word: "Advokat", meaning: "at. Zań xızmetkeri, birewdiń qılmıslı isi boyınsha sud aldında qorǵawshı, aqlawshı, jaqlawshı.",},
    { word: "Adres", meaning: "at. Turatuǵın jer, mákan, mánzil.", experience: "Konverttiń sırtındaǵı jiberiwshiniń adresin oqısam «Karimov Abıldan» depti (A.Bekimbetov). 2. Birewge qaratılǵan sóz, zat. Bunıń ózi de meniń adresime bolǵan kritika (T.Nájimov)."},
    { word: "Adresat", meaning: "at. 1. Xat yamasa bir zattıń tapsırılatuǵın adamı, iyesi. 2. Yubiley jasındaǵı adamǵa yamasa mekemelerge beriletuǵın qutlıqlaw xatı.", experience: "Kóp xatlardıń arasında ayırım adresat belgisiz bolıp shıqtı (A.Bekimbetov). Adresat tabılmaǵanlıqtan xat qaytarıldı (A.Bekimbetov)."},
    { word: "Adım", meaning: "at. 1. Qádem, adam júrgende alǵa qaray taslanǵan qádemindegi eki ayaqtıń arası (aralıq jer). 2. Jetiskenlik.", experience: "Dárriw alǵa qaray altı-jeti adım attı (Q.Ayımbetov). Biraq bul tek dáslepki adımlar ǵana edi (Á. Shamuratov)."},
    { word: "Adırayıw", meaning: "f. Eleriw, tańlanıw, kózin shennen tıs ózgeshe etip qaraw, úreyleniw, ashıwlanıp qaraw.", experience: "Qurban kókshi balasına adırayıp bir qaradı da, Palmannıń sózine qalay juwap qaytarıwdıń jolın izledi (M.Abdraymov)."},
    { word: "Adır", meaning: "kel.Tegis emes, jol túspegen, ısılmaǵan.", experience: "Adır-adır tawlardan, Ardaqlay berip qashadı, Gúdir-gúdir qumlardan, Gúdirleydi basadı («Máspatsha»)." },
    { word: "Adıraq", meaning: "kel. Adırıq kóz, ádettegiden úlkenirek, adırayǵan, kózi baqanshaqtay.", experience: "Kózi úrkken tananıń kózindey adıraq kóz bir qız keldi (A.Begimov). Joq, bunday emes, dep esik jaqta bir betkey otırǵan adıraq kózli, jalpaq bet, aq quba jigit juwap berdi (K.Sultanov)."},
    { word: "Adır-budır", meaning: "kel. Jónli-jónsiz, qalay bolsa solay, áytewir, tegis emes.", experience: "Qızdıń jolı názik, oǵan adır-budır sóz aytıwǵa bolmaydı (M.Abdraymov)."},
    { word: "Ajar", meaning: "at. Kelbet, shıray, túr, tús, sımbat.", experience: "Betinde ótkir ajarı, beyish suwın ishkendey (Q.Maqsetov)."},
    { word: "Ajırasıw", meaning: "f. 1. Ayra túsiw, tarap ketiw, ayırılısıw, ayırılıp qalıw, bólekleniw, qol úziw. 2. Erli-zayıplılardıń nekesin buzıp, ayırılısıwı.", experience: "Balalardan ajırasqannan soń Turım iytler shabalanǵan jerge jaqınlap keldi de, suwınlap jıynalǵan pishenniń tasasınan sıǵaladı (K.Sultanov). Hásiret-qayǵı zil basıp, aqılınan ajırasıp (A.Dabılov)."},
    { word: "Ajırıq", meaning: "at. Tamırı jayılıp ósetuǵın kóp jıllıq jabayı mayda shóp.", experience: "Izimdi taǵı bilmesin dep ajırıqtıń ishi menen úyge qayttım (J. Aymurzaev).... úyine shekemgi ajırıq basıp jatatuǵın aralıq ajırıqlıqqa aylanıptı (T. Qayıpbergenov)."},
    { word: "Az", meaning: "r. 1. Jetkiliksiz, kóp emes, barlı-joqlı, az ǵana, azǵantay.", experience: "Bir qatar joldaslar menen sóylesip qarasam kúsh az deydi (K.Sultanov). Ol az ǵana tunjırap otırdı (K.Sultanov). "},
    { word: "Aza", meaning: "at. Tuwısqan, jaqın-juwıq qaytıs bolıwına baylanıslı qayǵırıw, matam tutıw.", experience: "Urıs-ólige aza, tirige-tamasha degen eken (A.Bekimbetov). Tańdı doslarım jaranı, Hesh qashırmadı arasın, Kiyinip ústine qaranı, Kóp jılasıp tuttım aza (Berdaq)."},
    { word: "Aza ton", meaning: "at. Aza ushın kiygen qara, kók kiyim.", experience: "Aza tonın jamılıp, Ata-anamnan ayırılıp (Berdaq)."},
    { word: "Azada", meaning: "kel. Tazalıqlı, taq-tuynaqtay, duwpiyaz.", experience: "Narzan bulaqları qanday azada, Seniń kewliń yanlı, tınıq hám taza (I.Yusupov). Azada qızlardıń qoynı, Jánnettiń baǵına megzer (Ájiniyaz)."},
    { word: "Azamat", meaning: "at. 1. Kámalǵa kelgen er adam. 2. Adamgershiligi bar, sana-sezimli, xúrmetli adam. 3. Adam atı, isim.", experience: "Azamat erdiń belgisi, az ǵana sóylep kóp tıńlar, arǵımaq attıń belgisi, az ǵana otlap kóp juwsar (qq.x.q.). Tuwrı tutsan niyetińdi, Xalıqqa bursań betińdi, Sıylasań ǵárip jetimdi, Shın azamat boladursań (Berdaq)."},
    { word: "Azamatlıq", meaning: "kel. Erlik, batırlıq, is meńgere alatuǵın, óz wazıypasın atqara biletuǵın.", experience: "Jas balanıń erlik, azamatlıq isine kewli tolǵan kapitan Sultannıń mańlayınan súyip aldı (A.Bekimbetov). Iske tayar turıw-azamatlıq is, Márt bolsań el ushın jumsań jiger-kúsh (X.Seytov)."},
    { word: "Azan", meaning: "at. 1. Tań atar mezgil, erte waqıt. 2. din. Elattı namazǵa shaqırǵanda yamasa tuwılǵan nárestege at qoyǵanda aytılatuǵın namazdıń kirispe bólimi.", experience: "Allambergen aǵa azanǵı chaydı iship otırǵanda men de kirip barǵan edim (J.Aymurzaev). Azanǵı shıq penen aq pishendi sáskege shekem orıp qaytadı (K.Sultanov). Azan aytıp Alla dep, Erteli kesh baqırar («Er Ziywar»). Mázin namazsham namazınıń azanın jańa ǵana ayttı (L.N.Tolstoy)."},
    { word: "Azan-ǵazan", meaning: "r. Uw-shuw, baqırıs, ala topalań, tártipsiz, qalay bolsa solay, biytártip.", experience: "Mallar da... mónirep awıldıń arasın azan-ǵazan qıldı (M.Abdraymov). Muz ıqqannan beri awıl arası azan-ǵazan boldı (M.Abdraymov). Mónirep kiyatırǵan árwana sıyırlardıń dawısı biydiń basın azan-ǵazan etti... (K.Sultanov)."},
    { word: "Azanlı-keshli", meaning: "r. Mezgili menen, azanda da, keshte de, bárhama.", experience: "Qas qaǵıp, sharap ishpege, Taraqlap belden qıspaǵa, Azanlı-keshli túspege, Sárhawızıń tur Qulen bolıs (Berdaq)."},
    { word: "Azap-aqıret", meaning: "at. Qıyınshılıq, jamanlıq, zulımlıq, qayǵı-hásiret, ıza, qorlıq, zorlıq-zombılıq.", experience: "Húrlimannıń baqsı bolǵanın Qaraqumnıń iyshanı esitip, shaqırtıp alıp Berdaqqa kóp azap-aqıretler beredi (Q.Ayımbetov)."},
    { word: "Azaplaw", meaning: "f. Qıynaw, zorlıq kórsetiw, jábirlew, azap beriw, qorlaw, zorlıq etiw.", experience: "Joq... gúmansız, haq qızdı sawal-juwapqa tutıp azaplawıńızǵa jol qoymayman (R.Tagor). Biraq, batırdı azaplaw da, zindan da, dar da qorqıta almadı (Q.Maqsetov)."},
    { word: "Azar", meaning: "at. Azap-aqıret, qıyınshılıq. Azar shegiw-qıynalıw. azaplanıw, aqıretleniw. Azar beriw-qıynaw, azap beriw, aqıretlew.", experience: "Bunday azarǵa kóniwge bolmaydı (M.Gorkiy). Men bunnan azar shegip, zordan júrmen (Q.Jumaniyazov). Azar bermey oyatıp, Kelgendegi jumısın, Aydosqa bular aytadı (Berdaq). Kelgen razvedchiklerden eki adam jeńil jaralanǵan, biraq júriwge jaraları azar bererlik emes (Q.Dosanov)."},
    { word: "Azat", meaning: "at. Erkin, ǵárezsiz, bostan, óz erki ózinde, qolı bos.", experience: "Jaqsılıq xabar alıp kelgen Ótemurat edi, Ernazardıń azat bolǵanına ayaǵı sayǵa tiymeydi (K.Sultanov)....úyge ákelip baspaǵıma, az ǵanasın saldım, endi men úy jumısınan da azatpan (Á.Shamuratov)."},
    { word: "Azat etiw", meaning: "f. Erkin etiw, bostanlıqqa shıǵarıw, erkti ózine beriw, basın bosatıw.", experience: "Olardıń tiykarǵı wazıypası adamlardı baylardıń ómiri menen onıń ámeldarlarınıń zulımınan azat etiw (S.Ayniy)."},
    { word: "Azat etiwshi", meaning: "at. Óz erkine jiberiwshi, bostanlıqqa shıǵarıwshı, erk beriwshi, huqıqın alıp beriwshi.", experience: "Koreya menen Qıtaydıń azat etiwshi armiyası basqınshılardı Koreyadan quwa baslaǵan (J.Aymurzaev)."},
    { word: "Azatlıq", meaning: "at. Bostanlıq, darqanlıq, erkinlik.", experience: "Aqtı gúwlep azatlıqtıń dáryası, Háddiń joq baylawǵa shalqar saǵası (K.Sultanov)."},
    { word: "Azbaw", meaning: "f. Adaspaw, jańılıspaw, degbirden saspaw, ózgermew, albıraqlamaw, aynımaw.", experience: "Men oǵan joldan azba dep urısaman (Q.Sultanov). Adamnan azǵan jabayı jırtqısh, qanǵa qumar zalım (Q.Dosanov)."},
    { word: "Azǵan", meaning: "f. Aynıǵan, awǵan, ózgergen, buzılǵan.", experience: "Fashist adamnan azǵan jabayı jırtqısh, qanǵa qumar zalım (Q.Dosanov)."},
    { word: "Azǵırıw", meaning: "f. Aynıtıw, úgitlew, buzıw, sóz beriw.", experience: "Aldanıp turıpsań shınnan berilip, Azǵırıp sózine babanın erip («Máspatsha»). Kópshilik aǵayin azǵırıp, aqırı Sarıgúldiń de wádesin aldı (K.Sultanov)."},
    { word: "Azday", meaning: "r. Azıraq qusaǵan, jetkilikli emestey, jetpegendey.", experience: "Kósew qılıp qoyǵanı azday, xan elimizdi talatadı (T. Qayıpbergenov). Meniń burınǵı dártim azday, ákemniń egil-tegil bolıp jılawı dárt ústine dárt jamap júregimdi parra-parra etip jaraladı (Ó.Xojaniyazov)."},
    { word: "Azdan", meaning: "r. Az-azdan, kem-kemnen, birden emes, keyinirek, sońınan, birimlep.", experience: "Azdan soń umıtıp qalǵan qarmaqlarımdı alıwǵa kelsem, ákem úyde joq eken (K.Smamutov). Azdan soń Mısqal peri oyanıp qarasa, qasında bir jigit sulap jatır (Q.Ayımbetov)."},
    { word: "Azlap", meaning: "r. Azıraq, azı-kem, ebindey, kóp bolmasa da.", experience: "Ishimizde Samender degen bir jigit bar, ol sol waqıtta azdan qosıq shıǵaratuǵın hám qaraqalpaq namaların da jaqsı biletuǵın edi. Seni azlap tanıyman, azı-kem bilemen... (Ó.Xojaniyazov)."},
    { word: "Azlaw", meaning: "r. Azıraq, kemirek, shamalı, azı-kem, sál, bolar bolmas.", experience: "Bul maǵan azlaw balam, - dedi ǵarrı (gazetadan)."},
    { word: "Az-maz", meaning: "r. Qurttay, shamalı, azıraq.", experience: "Az-maz jılınıp alsaq qalay bolar eken, - dedi ol (A.Áliev). Qız maǵan az-maz qarap turǵansha jańaǵı kelinshek penen shıǵıp ketti (G.Izimbetov)."},
    { word: "Azna", meaning: "at. Adamlar otırıw ushın qayıqtıń ústindegi kese tartılǵan aǵashı.", experience: "Bir kisi, Egor ma deymen, ayaǵın aznaǵa tiredi («Sálem Oktyabr» T.). Otız kemeniń aznası Sóz xalıqtıń ǵaznası (qq.x.n.)."},
    { word: "Aznaw", meaning: "f. Kisnew, maldıń shuwlawı, qayǵılı dawıs shıǵarıw.", experience: "At qalǵanın ańlap, Nala tartıp aznadı («Alpamıs»)."},
    { word: "Azshılıq", meaning: "at. Az sanlı, az muǵdar.", experience: "El qurıldı shaqaplandı jurtshılıq, Xızmetkerler ádep qıldı azshılıq (Q.Irmanov)."},
    { word: "Azıq-túlik", meaning: "at. Azıq-awqat, kerek-jaraq.", experience: "Beldarshılar hám onıń bala-shaǵaları izli-izinen kelip, azıq-túliklerin arbaǵa salıp atır (K.Sultanov). Ekewiniń de ústinde ele tozıwı jete qoymaǵan áskeriy kiyimler, qollarında azıq-túligi (Q.Dosanov)."},
    { word: "Azıqshı", meaning: "at. Azıq beriwshi, azıq tarqatıwshı, azıqtı jetkeriwshi, azıq tasıwshı.", experience: "Azıqshını ishke kirgizbey, bendelerge qarawıllar úlestiretuǵın edi (T.Qayıpbergenov)."},
    { word: "Azımshıq", meaning: "kel. Ádewir, bir talay, oǵada, keskinsiz, az emes, biraz, táwir-aq, bir qıylı.", experience: "Biz bul jerge azımshıq miynet etkenimiz joq (Ó.Xojaniyazov). Bılshıyǵan dep betindi, Azımshıq emes sın taqtı («Qırq qız»)."},
    { word: "Azınawlaq", meaning: "r. Azǵana, kóp emes, jarım-jartı, shamalı, bolar-bolmas, kemirek.", experience: "...azınawlaq kún generaldıń jerinde erksiz jumıs isleydi (Q.Dosanov)."},
    { word: "Azıp-tozıw", meaning: "f. Boldırıw, júdep qalıw, moy beriw, albıraw.", experience: "Kúni-túni tınım tappay zır juwırıp júrgen záberdes kelinshek tórt-bes aydın ishinde-aq azıp-tozıp qaldı (A. Bekimbetov)."},
    { word: "Azıw.I", meaning: "at. Tańlay tis, úlken tis, ótkir, mıqlı, awızdıń eki qaptalında awqat jew ushın eń kereklisi.", experience: "Azıw tislerinen álle qashan ayırılıp qalǵan (J.Aymurzaev)."},
    { word: "Azıw.II", meaning: "f. Boldırıw, júdew, arıqlaw, buzılıw.", experience: "Zaman qısletinen sarǵaydım azdım. Bolar ma dep jaqtı kúnler xalıq ushın (Berdaq). Aq kewilliniń atı azbaydı, tonı tozbaydı (qq.x.n.)."},
    { word: "Azıwday", meaning: "kel. Azıwǵa usaǵan, azıw sıyaqlı mıqlı.", experience: "Jetimlerden hám biy, bay balalarınan qay-naqay azıwday eliw atlı (T.Qayıpbergenov)."},
    { word: "Azıwlasıw", meaning: "f. Ayqasıw, urısıw, qarsılasıw, ashshılasıw, dushpan menen sınasıw, tislesiw, shayqasıw.", experience: "Hesh waqta shoshqa shoshqanı, Azıwlasıp jarǵan emes (Berdaq)."},
    { word: "Azot", meaning: "Tógin, dáris ushın paydalanılatuǵın ximiyalıq element.", experience: "Azottıń, fosfordıń hár gektarǵa qansha ekenin aytıp otırmayman (Q. Dosanov)."},
    { word: "Azsınıw", meaning: "Kemissiniw, kewli pitpew.", experience: "Azsınıp tursız ba aǵa, jigitlerdiń de tabısın kóremiz (K. Sultanov)."},
    { word: "Azbıray", meaning: "Qural-ásbap, qural-sayman, kerek-jaraq.", experience: ""},
    { word: "Azıq", meaning: "Awqat bolatuǵın nárseler.", experience: "Altı qız minip arbaǵa, azıǵın salıp dorbaǵa, aytıw-mereke barmaǵa, qızlar talap etken eken (Berdaq)."},
    { word: "Azıraq", meaning: "Azǵana, shamalı, kishkene, kóp emes.", experience: "Tamaqtan awıstırıp tuqımǵa saqlaǵan azıraq arpa-jazlıq bar edi, - dedi Turımbet (N.Dákaraev)."},
    { word: "Azıw", meaning: "Tanlay tis, úlken tis, ótkir, mıqlı.", experience: "Azıw tislerinen álle qashan ayırılıp qalǵan (J.Aymurzaev)."},
    { word: "Azǵın", meaning: "Júdew, arıq, eti ketip súyegine taqalǵan, boldırǵan.", experience: "Betinde qan joq, azǵın (T. Qayıpbergenov)."},
    { word: "Aybana", meaning: "at. Qáwender, arqa súyer, tirenish, qorǵanısh, abay, súyenish, tirek.",},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "Argotexnika", meaning: "at. Awıl xojalıq eginlerin islewdiń sisteması, diyqanshılıq hám olardı rawajlandırıw sharaları, ilajları.", experience: "Barlıq agrotexnika quralların keńnen qollanıw zárúr (O. Berdimuratov)."},
    { word: "Aǵzam", meaning: "Ullı mártebeli, ullı dárejeli", experience: "Quda qálese patsha aǵzam puqaralarına miyrimin salar (K.Sultanov)."},
    { word: "Aǵıl-tegil", meaning: "Molshılıq, mol-molaqay, kóp, dım kóp, jetkilikli.", experience: "Bunnan basqa da onıń sútli sıyırı bolıp, may menen sút aǵıl-tegil edi (S.Ayniy)."},
    { word: "Ay", meaning: "Aspan denesi, jerdiń joldası, belgili bir muǵdar ishinde túnge jarıq berip turatuǵın aspan keńisligindegi dene.", experience: "«Esime túser meniń, Suw boyına kelgeniń, «Ay ne ushın jalǵız» dep, sırlı sawal bergeniń... (I.Yusupov)."},
    { word: "Aybalta", meaning: "Baltanıń qural ornına qollanılatuǵın ádette, patshalar qolına alıp otıratuǵın quralı, jaraq.", experience: "Sol waqıtları Surtaysha, Aybaltası qolında, Alarıp turdı ornınan («Qırq qız»)."},
    { word: "Aybaraq", meaning: "Bada-bad, aybat, abay-siyasat.", experience: "Qolǵa uslap jaw-jaraǵın, Salıp bular aybaraǵın, Siltedi barlıq jaraǵın, Qızdı baylap almaqshı eken (Berdaq)."},
    { word: "Aybat", meaning: "Túr-tús, qáhár, saltanat.", experience: "Buzaw iytlerge aybat etti, Perigúl jibermey, moynınan qatıp uslap tur (Ó.Ayjanov)."},
    { word: "Aybatlı", meaning: "Ǵayratlı, qáhárli.", experience: "Atam aybatlı kisi edi (S.Saliev)."},
    { word: "Aybınıw", meaning: "Tartınıw, batına almaw, qorqıw.", experience: "Gá bir qaytpalardan aydarlı ushan keme aydaǵan darǵashılar da aybınıp ótedi (K.Sultanov)."},
    { word: "Ayǵaq", meaning: "Belgi, gúwa, dálil, kórinis.", experience: "Asfalt jolın ıǵbalınıń ayǵaǵı... (I.Yusupov)."},
    { word: "Aydala", meaning: "Alanlıq, ashıqlıq, maydan, elsizlik, adamsız, elsiz, qula dúz.", experience: "Kewli tolıp óz isine Jumannıń, Aydalada kókti gezdi qıyalı (T.Seytjanov)."},
    { word: "Aydar", meaning: "Belgi, jas balalardıń tóbesine qoyılatuǵın bir tal shash, tulım.", experience: "Mamannıń qalpaǵın alıp aydarınan bir súydi (T.Qayıpbergenov)."},
    { word: "Aydın", meaning: "Ashıqlıq, kólat, jazıqlıq, tegislik, tuwra jol, ashıq, taza, keńislik.", experience: "Aydın kólden payda joq, Razı bolmasa kelinde («Er Ziy war»)."},
    { word: "Ayqas", meaning: "Urıs, jekpe-jek, jánjel, gúres.", experience: "Jańa turmıs ushın ayqas jolında, júr edim, ol maǵan jolıqtı sonda (I.Yusupov)."},
    { word: "Aylaw", meaning: "At jarısınıń belgili bir muǵdardaǵı shawıp keletuǵın yamasa shawıp ótetuǵın jer ólshemi.", experience: ""},
    { word: "Aytıs", meaning: "Folklorlıq keyingi janr.", experience: "Usınday házil aytıstan keyin Berdaq penen Ótesh shayır ekewi qattı dos boladı (I.Saǵitov)."},
    { word: "Ayıpker", meaning: "Gúnalı, ayıplı, qılmıslı, ayıpdar.", experience: "Joq men ayıpsız ayıpkermen (A.Bekimbetov)."},
    { word: "Aq jaǵal", meaning: "Ala, ılaqtıń, qozınıń túrine qaray ataw, bas betinde meni bar.", experience: "Japıraq múyiz aq jaǵal, Ol da keldi suw betke (I.Yusupov)."},
    { word: "Aqıy", meaning: "Biy, sher, ózin joqarı sanaytuǵın adam.", experience: "Astında bar torı atı, Belinde gá har polatı, Bolıstıń quyrıq qanatı, Aqsaqalıń aqiy eken (Ájiniyaz)."},
    { word: "Aqkóz", meaning: "Gódek, ańqaw, hadal, hesh nárse kórmegen.", experience: "Munday awır aqkóz batırlardı sol zamandaǵı Xiywa xanı Ispandiyar xan óltirtken (Q.Irmanov)."},
    { word: "Aqsawlaq", meaning: "Qamırdan arnawlı túrde, júdá juqa etip pisirilgen nannıń túri.", experience: ""},
    { word: "Aq siyne", meaning: "Kóksi, kókirek awız, jalańash dene, tóstiń ústi.", experience: "Meniń ózim erke bolsam, Qız jamılǵan kórpe bolsam, Kórpedegi búrge bolsam, Aqsiyneńde jatpas pa edim (Berdaq)."},
    { word: "Aq tal", meaning: "Terektiń túri, túri aq, taza tikensiz, báhárde minár hámme tereklerden burın bórtedi.", experience: "Bálent hawalı aq tallar yanlı Kulen bolıs (Berdaq)."},
    { word: "Aq tiken", meaning: "Bozda ósetuǵın tikenekli shóp.", experience: "Qashqın lám-mim. Aq tikenliktiń arası sılt etpeydi. Tıp-tınısh. Bir shóp qıymıldamaydı (Ó.Xojaniyazov)."},
    { word: "Aqtuba", meaning: "Jerdiń, kóldiń atı, geografiyalıq atama.", experience: "Aqtubanıń aqqan suwı ılaydı, Eki diyqan ún salısıp jılaydı, Qazı iyshanǵa bizdi satqan qudaydı, Diyqan ashtan óler boldı Qazı iyshan («Qazı iyshan»)."},
    { word: "Aq shabaq", meaning: "Balıqtıń bir túri, maydaraq boladı.", experience: "Barıp kórse qazaǵa, aq shabaq penen aqsazan, sıyǵanınsha tolıptı (A.Dabılov)."},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    // Bu yerda boshqa 1000 ta so‘zni qo‘shishingiz mumkin...
];

  function searchWord() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredWords = words.filter(word => word.word.toLowerCase().includes(searchTerm));
    displayResults(filteredWords);
  }

  document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchWord();
    }
  });

  function displayResults(wordsList) {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    if (wordsList.length === 0) {
      resultsContainer.innerHTML = "<p>Hesh qanday nátiyje tabılmadı.</p>";
      return;
    }

    wordsList.forEach(wordObj => {
      const wordCard = document.createElement("div");
      wordCard.classList.add("word-card");

      wordCard.innerHTML = `
        <div class="word-title">${wordObj.word}</div>
        <div class="word-details">
          <div class="meaning-box"><strong>Mánisi:</strong> ${wordObj.meaning}</div>
          <div class="example-box"><strong>Mısal:</strong> ${wordObj.experience}</div>
        </div>
      `;

      resultsContainer.appendChild(wordCard);
    });
  }
