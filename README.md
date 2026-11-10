# CryptoCTF – kriptografijos CTF uždavinių platforma

## 1. Projekto aprašymas

**CryptoCTF** – internetinė platforma, kurioje registruoti naudotojai galės spręsti kriptografijos CTF (*Capture The Flag*) uždavinius. Išsprendęs uždavinį, naudotojas pateiks rastą atsakymą (*flag*). Sistema patikrins jį serveryje ir už teisingą sprendimą skirs uždaviniui nustatytą taškų skaičių. Naudotojo profilyje bus rodoma surinktų taškų suma ir išspręstų uždavinių istorija.

**Tiksliniai naudotojai:** besidomintys kriptografija, kibernetiniu saugumu ir CTF uždaviniais.

### Pagrindiniai naudojimo scenarijai

1. **Uždavinio sprendimas:** naudotojas prisijungia, pasirenka uždavinį, pateikia `flag`, gauna informaciją apie atsakymo teisingumą ir, jei atsakymas teisingas, vieną kartą gauna uždavinio taškus.
2. **Uždavinių administravimas:** administratorius prisijungia, prideda naują uždavinį, koreguoja jo duomenis arba pašalina uždavinį, patvirtinęs veiksmą.

## 2. Planuojamos funkcijos

- Registracija, prisijungimas ir atsijungimas.
- Naudotojų ir administratorių prieigos teisės.
- Kriptografijos uždavinių katalogas ir detalių peržiūra.
- Uždavinių paieška bei filtravimas pagal bent du kriterijus (pvz., kategoriją ir sunkumą).
- `Flag` pateikimas ir tikrinimas serveryje.
- Vienkartinis taškų skyrimas už kiekvieną teisingai išspręstą uždavinį.
- Profilis su surinktais taškais ir išspręstų uždavinių sąrašu.
- Administratoriaus uždavinių kūrimas, peržiūra, redagavimas ir šalinimas (CRUD).
- Spausdinti pritaikyta naudotojo rezultatų suvestinė.
- Pasirinktos sąsajos temos įsiminimas slapuku (be slaptų duomenų).
- Prie mobiliųjų ir didesnių ekranų prisitaikantis dizainas.

## 3. Naudotojų vaidmenys

Svečias - Peržiūrėti viešai prieinamą informaciją, atsidaryti registracijos ir prisijungimo puslapius.
Naudotojas - Peržiūrėti uždavinius, pateikti `flag`, matyti savo profilį ir rezultatus.
Administratorius - Naudotojo galimybės ir uždavinių valdymas (CRUD).

Prieigos teisės turi būti tikrinamos **serverio pusėje**, o ne vien paslepiant mygtukus naudotojo sąsajoje.

## 4. Planuojama duomenų bazė

Numatoma naudoti **reliacinę duomenų bazę** su šiomis pagrindinėmis lentelėmis:

| `users` | Naudotojų paskyros, slaptažodžių maišos ir vaidmenys. |
| `categories` | Kriptografijos uždavinių kategorijos. |
| `challenges` | Uždavinių pavadinimai, aprašymai, kategorijos, sunkumas, taškai ir saugiam atsakymo patikrinimui reikalingi duomenys. |
| `submissions` | Naudotojų pateikimų istorija ir tikrinimo rezultatai, nesaugant pateiktų slaptų reikšmių be būtinybės. |
| `solves` | Unikalūs teisingi sprendimai ir už juos paskirti taškai. |

Ryšiai: vienas naudotojas gali turėti daug pateikimų ir teisingų sprendimų; viena kategorija gali turėti daug uždavinių; vienas uždavinys gali turėti daug pateikimų ir teisingų sprendimų.

**Svarbi taisyklė:** tam pačiam naudotojui už tą patį uždavinį taškai suteikiami tik vieną kartą. Ši taisyklė turi būti užtikrinama ir duomenų bazės apribojimu (pvz., unikali `user_id` ir `challenge_id` pora lentelėje `solves`). Bendras taškų skaičius apskaičiuojamas pagal įskaitytus sprendimus.

Galutinė ER diagrama, lentelių laukai ir apribojimai bus pateikti projekto dokumentacijoje.

## 5. Technologijos ir priklausomybės

**Dar nepasirinkta / pildoma po komandos sprendimo:**

| Dalis | Technologija / versija |
| Kliento dalis | HTML, CSS, JavaScript (versijos / bibliotekos – patikslinti) |
| Serverio dalis | **TODO:** pasirinkti (pvz., PHP, Node.js arba ASP.NET) |
| Duomenų bazė | **TODO:** pasirinkti (pvz., MySQL, PostgreSQL arba SQLite) |
| Vietinis serveris ir įrankiai | **TODO:** nurodyti |
| Versijų valdymas | Git; **TODO:** įrašyti saugyklos adresą |

Tik pasirinkus technologijas bus įrašytos tikslios versijos ir diegimui reikalingos priklausomybės.

## 6. Projekto struktūra

Numatoma struktūra (gali keistis pagal pasirinktas technologijas):

CryptoCTF/
├── app/           # Programos ir serverio logika
├── public/        # Viešieji failai ir statiniai ištekliai
├── database/      # DB schema, migracijos, pradiniai duomenys
├── tests/         # Testai ir testavimo scenarijai
├── docs/          # ER diagrama, maketai, techninė ataskaita
└── README.md      # Projekto aprašymas ir instrukcijos
```

## 7. Vietinis diegimas ir paleidimas

**Ši dalis turi būti užbaigta, kai bus pasirinktos technologijos ir įgyvendinta paleidžiama versija. Kol kas tikslių veikiančių komandų nėra.**

Planuojami diegimo etapai:

1. Atsisiųsti arba nuklonuoti projekto saugyklą: **TODO – Git saugyklos URL**.
2. Įdiegti reikiamos versijos serverio aplinką ir priklausomybes: **TODO – tikslios komandos**.
3. Sukurti vietinį konfigūracijos failą pagal pateiktą pavyzdį (`.env.example` arba analogą), nurodyti DB prisijungimo duomenis ir kitus reikalingus nustatymus.
4. Sukurti duomenų bazę naudojant `database/` pateiktą schemą / migracijas: **TODO – tikslios komandos**.
5. Įkelti demonstracinius, neslaptus duomenis: **TODO – tikslios komandos**.
6. Paleisti serverį: **TODO – tiksli komanda ir vietinis adresas**.
7. Prisijungti demonstracine paskyra ir išbandyti pagrindinį scenarijų: **TODO – saugus paskyros sukūrimo būdas**.

**Sauga:** tikrų slaptažodžių, slaptų raktų ir vietinės `.env` konfigūracijos į Git nekelti. Demonstracinės paskyros instrukciją pateikti taip, kad nereikėtų viešinti realių prisijungimo paslapčių.

## 8. Saugumo principai

Planuojama taikyti:

- Slaptažodžių saugojimą naudojant adaptyvų maišymą (pvz., Argon2id arba bcrypt).
- Sesijų valdymą ir saugius sesijų slapukų nustatymus.
- Visų svarbių formų duomenų validavimą serveryje.
- Parametrizuotas DB užklausas arba saugiai sukonfigūruotą ORM (SQL injection prevencija).
- Saugų išvedamų duomenų kodavimą (XSS prevencija).
- CSRF apsaugą būseną keičiančioms užklausoms.
- Serverio pusės autorizavimą.
- `Flag` tikrinimą serveryje, neatskleidžiant teisingo atsakymo naršyklei.
- Klaidų pranešimus, neatskleidžiančius vidinių sistemos detalių.

Realios įgyvendinimo vietos ir saugumo testų rezultatai bus dokumentuoti projektui vystantis.

## 9. Testavimas

Bus sudaryta testavimo matrica, kurioje kiekvienam scenarijui nurodomas laukiamas ir faktinis rezultatas. Bus tikrinama:

- Registracija, prisijungimas, atsijungimas ir sesijos.
- Uždavinių CRUD operacijos ir susietų DB įrašų vientisumas.
- Teisingo ir klaidingo `flag` pateikimas, pakartotinio taškų skyrimo prevencija.
- Paieška, filtravimas, taškų apskaičiavimas ir spausdinama suvestinė.
- Netinkamos įvestys ir neleistinos prieigos bandymai.
- HTML bei CSS validavimas, prisitaikantis dizainas ir prieinamumas.
- Veikimas bent dviejose šiuolaikinėse naršyklėse (pavadinimus ir versijas įrašyti atlikus testus).
- Slapuku valdomas temos pasirinkimas; failų apdorojimas – jei tokia funkcija bus įgyvendinta.

**Testavimo komandos:** TODO – nurodyti pagal pasirinktas technologijas.

**Testavimo rezultatai:** TODO – pildyti tik atlikus testus.

Abu komandos nariai prisideda prie projekto, o darbas fiksuojamas nuosekliais Git įrašais. Abu turi gebėti paaiškinti visą programą.

## 10. Žinomi apribojimai

- Šiuo metu projektas yra planavimo stadijoje; veikiantis funkcionalumas dar nepatvirtintas.
- Pirmoji versija skirta kriptografijos uždaviniams, o ne savarankiškai paleidžiamoms virtualioms CTF laboratorijoms.
- Naudotojų kuriami uždaviniai ir vieši sprendimų aprašymai (*writeups*) nėra numatyti privalomoje pirmosios versijos apimtyje.
- **TODO:** vystant projektą įrašyti tikrus techninius apribojimus ir žinomas klaidas.

---

*Šis README yra pradinis projekto dokumentas. Prieš galutinį pateikimą visus `TODO` punktus būtina pakeisti tikra, patikrinta projekto informacija.*
