
  const words = [
    { word: "Abay", meaning: "at. Qorǵanısh, saqlıq, es, abay-siyasat.", experience: "Sen bilmeysen meniń jayım, Onıń menen teń qudayım, Kerek emes bos abayıń, Tek tur, dedi Aydos baba (Berdaq)." },
    { word: "Abaylamay", meaning: "r. Sezbey, serlemey, bilmey.", experience: "Oksananıń qaysı esikke kirip ketkenin abaylamay da qaldım (M.Nızanov)." },
    { word: "Abzal", meaning: "r.Jaqsı, durıs, táwir.", experience: "Bul kúyikten frontka ketkenim abzal ǵoy (K.Sultanov)."},
    { word: "Abısın", meaning: "at.Eki aǵayın jigittiń úlkeniniń kelinshegi kishkenesiniń kelinshegine abısın boladı.", experience: "Biziń abısın gáptiń posgellesin aytadı (K.Sultanov)." },
    { word: "Abadan", meaning: "kel. Jetkilikli, mol, kóp, qurǵın, barshılıq.", experience: "Xalıq shaǵlap mustaqıl Ózbekstanda, Dúnya tınısh, eller abadan bolsın (I. YUsupov). Ádira qalǵır tuwǵan jer, Bolmaǵan soń abadan (Jiyen jıraw)."},
    { word: "Abay-siyasat", meaning: "at. Kózabaǵa qır kórsetiwshilik.", experience: "Shopanlarǵa kelip, abay-siyasat qılıp, túsingenlerine násiyat aytıp, xannan kelgen jasawıl ne dep turıptı (Ó.Xojaniyazov)."},
    { word: "Abat", meaning: "kel. Barshılıq, molshılıq, toqshılıq, qurǵınlıq, qurǵınlılıq, juqnalılıq, jetkiliklilik, mol, bar, aǵıl-tegil, esap-sansız, tawsılmaytuǵın.", experience: "Jiyenge haq názer saldı, Mal dúnyası abat boldı (Berdaq). Eki dúnyası birdey abat bolsın jigittiń! (T. Qayıpbergenov)."},
    { word: "Abbazı", meaning: "at. Burınǵı Xiywa xanlıǵınıń tusındaǵı pul birligi.", experience: "Bárshesi eki abbazı. Bayǵa bolmas kóbi-azı, Bolsın biyshara razı, Haqısın bergil shermende (Ótesh shayır)."},
    { word: "Abbreviatura", meaning: "at. Sózlerdiń jazıwdaǵı shártli túrde qısqartılıwı, sonday-aq, eki yamasa bir neshe sózlerden qısqartılıp alınǵan sóz.", experience: "QMU, AQSh, BMSh, MPJ, TashMAU."},
    { word: "Abzac", meaning: "at. Tekst basındaǵı yáki onıń ayırım pikir bildirilgen bólegindegi birinshi sózdiń birinshi háribin jazıwda onǵa qaray jasalǵan sál sheginis, taza joldan baslanǵan jazıw, bir taza joldan ekinshi taza jolǵa shekemgi aralıq, jazıwdaǵı eń dáslepki jol.", experience: "Abzactan jazıw."},
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
    { word: "Aǵawız", meaning: "Pispegen, shala, waqtı jetpegen, shiyki, tolmaǵan.", experience: "Sen qaraqalpaq, egin qazaq bolǵanda, ketpenlep qalǵanda ekkende, (Kúnxoja)."},
    { word: "Aǵartıw II.", meaning: "f. Sawatlandırıw, túsindiriw, oqıtıw, sawatın ashıw, bilimlendiriw.", experience: "Xalıq bárhama ádiwleydi senińdey, Aǵartıwdıń tuńǵısh qarlıǵashların (I. Yusupov). Shayır sózi menen oqıtıwshınıń kewlin, kózqarasınaǵartadı (G.Esemuratov)."},
    { word: "Aǵartıwshı", meaning: "at. 1. Aq etiwshi, háklewshi, tazalawshı. 2. Aǵartıw jumısın júrgiziwshi, xalıq arasında úgit-násiyat aparıwshı, sawatlandırıw isi menen shuǵıllanıwshı.",},
    { word: "Aǵawız", meaning: "kel. Pispegen, shala, waqtı jetpegen, shiyki, waqtı tolmaǵan.", experience: "Sen qaraqalpaq, qazaq bolǵanda, Ketpenlep egin ekkende, Ketpenlep ekken eginiń, Ortada aǵawız qalǵanda (Kunxoja)."},
    { word: "Aǵash", meaning: "at. Terek, ádette, terektiń úlkeygeni, quwraǵı, qurılıs hám xojalıq islerinde paydalanılatuǵın shiyki zattıń túrine aytıladı.", experience: "Qonıp ǵarǵaday aǵashqa, Dúnyanıń máwsimin kórdim (Ótesh shayır). Aǵash ergenektin ekewi de tabaldırıqqa shekem naǵısqa sırǵıp tur (K.Sultanov). Oń qaptalda aǵash kát (N.Dáwqaraev)."},
    { word: "Aǵza", meaning: "at. 1. Múshe. Adam yamasa haywan aǵzası. 2. Qanday da bir topar, aymaq hám t. b. jasawshı, oǵan tiyisli adam. Shańaraq aǵzası. 3. Qanday da bir mákeme, shólkem, jıyın aǵzası.",},
    { word: "Aǵla", meaning: "kel. Jaqsı, artıqmash, ayrıqsha, artıq, ziyada, zıyat.", experience: "Súysen miyriń qanıp ol intizarıń, Bul dunya beyishten aǵla kórindi (Berdaq). Bul aqılıń bárinen de aǵla bolǵan eken (Q.Ayımbetov)."},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    { word: "", meaning: "", experience: ""},
    
    { word: "Adır", meaning: "kel.Tegis emes, jol túspegen, ısılmaǵan.", experience: "Adır-adır tawlardan, Ardaqlay berip qashadı, Gúdir-gúdir qumlardan, Gúdirleydi basadı («Máspatsha»)." },
    { word: "Argotexnika", meaning: "at. Awıl xojalıq eginlerin islewdiń sisteması, diyqanshılıq hám olardı rawajlandırıw sharaları, ilajları.", experience: "Barlıq agrotexnika quralların keńnen qollanıw zárúr (O. Berdimuratov)."},
    { word: "Aǵzam", meaning: "Ullı mártebeli, ullı dárejeli", experience: "Quda qálese patsha aǵzam puqaralarına miyrimin salar (K.Sultanov)."},
    { word: "Aǵıl-tegil", meaning: "Molshılıq, mol-molaqay, kóp, dım kóp, jetkilikli.", experience: "Bunnan basqa da onıń sútli sıyırı bolıp, may menen sút aǵıl-tegil edi (S.Ayniy)."},
    { word: "Azǵın", meaning: "Júdew, arıq, eti ketip súyegine taqalǵan, boldırǵan.", experience: "Betinde qan joq, azǵın (T. Qayıpbergenov)."},
    { word: "Azot", meaning: "Tógin, dáris ushın paydalanılatuǵın ximiyalıq element.", experience: "Azottıń, fosfordıń hár gektarǵa qansha ekenin aytıp otırmayman (Q. Dosanov)."},
    { word: "Azsınıw", meaning: "Kemissiniw, kewli pitpew.", experience: "Azsınıp tursız ba aǵa, jigitlerdiń de tabısın kóremiz (K. Sultanov)."},
    { word: "Azbıray", meaning: "Qural-ásbap, qural-sayman, kerek-jaraq.", experience: ""},
    { word: "Azıq", meaning: "Awqat bolatuǵın nárseler.", experience: "Altı qız minip arbaǵa, azıǵın salıp dorbaǵa, aytıw-mereke barmaǵa, qızlar talap etken eken (Berdaq)."},
    { word: "Azıraq", meaning: "Azǵana, shamalı, kishkene, kóp emes.", experience: "Tamaqtan awıstırıp tuqımǵa saqlaǵan azıraq arpa-jazlıq bar edi, - dedi Turımbet (N.Dákaraev)."},
    { word: "Azıw", meaning: "Tanlay tis, úlken tis, ótkir, mıqlı.", experience: "Azıw tislerinen álle qashan ayırılıp qalǵan (J.Aymurzaev)."},
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
    { word: "Abaq", meaning: "Jılımnıń etegi, sheti, jiyegi.", experience: "Ara-tura salǵan jılım, abaǵım, maylaǵanda úyip keler qabaǵıń (S.Nurımbetov)."},
    { word: "Abıray", meaning: "Ataq, dańq, mártebe.", experience: "Qalqozshılar arasında, rayon aldında iskerlik kútá abıray (K.Dosanov)."},
    { word: "Abaysız", meaning: "Ańlamastan, bayqawsız, bayqamastan, dıqqatsız, sersiz, ańsız, bilmesten, ǵapılda.", experience: "Sonda abaysız kelip demde, birew kózin bastı áste (I.Yusupov)."},
    { word: "Abajur", meaning: "Kúshli jaqtılıq kózdi qamastırmawı hám tiyisli orınǵa ǵana toplanıp túsiwi ushın lampanıń ústine ornatılǵan (gezleme, qaǵaz t. b. nárselerden jasalǵan) qaplama, shıra.", experience: ""},
    { word: "Abonent", meaning: "Abonementke iye bolǵan adam, abonementi bar kisi. Telefonnıń abonenti.", experience: ""},
    { word: "Abort", meaning: "Balanı waqtınan burın operaciya jolı menen alıp taslaw usılı, boydan túsiriw jolı.", experience: ""},
    { word: "Absolyut", meaning: "Idealistlik filosofiya túsiniginde álemniń máńgilik ózgermeytuǵın dáslepki negizi (ruwx, sana).", experience: ""},
    { word: "Abır-sabır", meaning: "Ala topalan, apır-tapır, patırat, ersili-qarsılı, tártipsiz.", },
    { word: "Avans", meaning: "Islegen is haqısınıń ushınan alıw, tolıq emes, belgili muǵdarı, raschyottan burınıraq alatuǵın aqsha.", experience: ""},
    { word: "Avariya", meaning: "Mashina mexanizminiń bir jeriniń buzılıwı, qıyralıw, sátsizlik", experience: ""},
    { word: "Aviabaza", meaning: "Skladları, ońlaw ustaxanaları hám ózlerine tiyisli úskeneler menen támiyinlengen belimleri bar aerodrom.", experience: ""},
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
