const users = [
    {
        "name": "Armand",
        "phone": "1-840-875-5382",
        "city": "Berwick-upon-Tweed",
        "email": "et.netus.et@sit.co.uk",
        "country": "Laos"
    },
    {
        "name": "Julian",
        "phone": "1-517-394-4854",
        "city": "Vespolate",
        "email": "a.sollicitudin.orci@taciti.com",
        "country": "Romania"
    },
    {
        "name": "Kylie",
        "phone": "1-507-929-2678",
        "city": "Ziano di Fiemme",
        "email": "elit.pede.malesuada@venenatisamagna.co.uk",
        "country": "Lithuania"
    },
    {
        "name": "Palmer",
        "phone": "1-269-967-7071",
        "city": "Kamalia",
        "email": "nascetur.ridiculus@cursuset.co.uk",
        "country": "Spain"
    },
    {
        "name": "Myra",
        "phone": "1-493-214-0902",
        "city": "Bankura",
        "email": "ligula.consectetuer@aliquam.edu",
        "country": "American Samoa"
    },
    {
        "name": "Ella",
        "phone": "799-9559",
        "city": "Columbus",
        "email": "justo.eu@a.com",
        "country": "Saint Barthélemy"
    },
    {
        "name": "Ocean",
        "phone": "228-9974",
        "city": "Stalhille",
        "email": "dolor@at.com",
        "country": "Afghanistan"
    },
    {
        "name": "Jessamine",
        "phone": "1-973-421-8730",
        "city": "Linsmeau",
        "email": "Duis.gravida@orcisemeget.net",
        "country": "Macedonia"
    },
    {
        "name": "Aretha",
        "phone": "933-5788",
        "city": "Dessau",
        "email": "ut@hendreritid.com",
        "country": "Suriname"
    },
    {
        "name": "Blake",
        "phone": "863-0523",
        "city": "Independencia",
        "email": "non@luctussitamet.edu",
        "country": "Sint Maarten"
    },
    {
        "name": "Ingrid",
        "phone": "1-133-160-3283",
        "city": "Toledo",
        "email": "vehicula.aliquet.libero@sitamet.org",
        "country": "Lesotho"
    },
    {
        "name": "Christine",
        "phone": "1-300-898-7349",
        "city": "Limburg a.d. Lahn",
        "email": "tincidunt.congue.turpis@semeget.co.uk",
        "country": "Congo, the Democratic Republic of the"
    },
    {
        "name": "Rahim",
        "phone": "547-9358",
        "city": "Romeral",
        "email": "fermentum.risus.at@commodoauctor.edu",
        "country": "Peru"
    },
    {
        "name": "Raya",
        "phone": "1-165-829-0978",
        "city": "Anantapur",
        "email": "nunc.risus@imperdietnonvestibulum.org",
        "country": "Jersey"
    },
    {
        "name": "Grace",
        "phone": "644-7761",
        "city": "Koersel",
        "email": "pulvinar.arcu.et@necquamCurabitur.org",
        "country": "Denmark"
    },
    {
        "name": "Merritt",
        "phone": "222-3362",
        "city": "Munger",
        "email": "Duis.at@vitaediamProin.net",
        "country": "Zambia"
    },
    {
        "name": "Claudia",
        "phone": "1-747-549-9899",
        "city": "Meldert",
        "email": "non.lorem.vitae@duiCumsociis.ca",
        "country": "Belize"
    },
    {
        "name": "Alec",
        "phone": "1-375-824-9848",
        "city": "Morinville",
        "email": "blandit.enim@pretiumet.co.uk",
        "country": "Luxembourg"
    },
    {
        "name": "Abdul",
        "phone": "704-7094",
        "city": "Travo",
        "email": "magna.a@suscipit.com",
        "country": "Paraguay"
    },
    {
        "name": "Steven",
        "phone": "1-877-565-9928",
        "city": "Greymouth",
        "email": "nunc.nulla.vulputate@ligula.ca",
        "country": "Pakistan"
    },
    {
        "name": "Jermaine",
        "phone": "858-9592",
        "city": "Langenburg",
        "email": "quis@egetnisi.com",
        "country": "Mauritania"
    },
    {
        "name": "Rudyard",
        "phone": "1-112-792-1506",
        "city": "Oakham",
        "email": "sit.amet.consectetuer@mattisornarelectus.co.uk",
        "country": "Equatorial Guinea"
    },
    {
        "name": "Blaze",
        "phone": "864-9879",
        "city": "Cortil-Noirmont",
        "email": "Cras@Mauris.co.uk",
        "country": "Yemen"
    },
    {
        "name": "Ethan",
        "phone": "177-0155",
        "city": "Dumfries",
        "email": "Aliquam.adipiscing@magnaPhasellus.edu",
        "country": "Spain"
    },
    {
        "name": "Quintessa",
        "phone": "836-7675",
        "city": "Mobile",
        "email": "euismod.et.commodo@Loremipsum.co.uk",
        "country": "Turks and Caicos Islands"
    },
    {
        "name": "Yuli",
        "phone": "315-5748",
        "city": "Lugnano in Teverina",
        "email": "Nullam.nisl@intempus.net",
        "country": "Nicaragua"
    },
    {
        "name": "Rosalyn",
        "phone": "482-2396",
        "city": "Mayerthorpe",
        "email": "molestie.orci@sed.org",
        "country": "United States"
    },
    {
        "name": "Irene",
        "phone": "313-1154",
        "city": "Livingston",
        "email": "eget.laoreet.posuere@acurnaUt.org",
        "country": "Cyprus"
    },
    {
        "name": "Phyllis",
        "phone": "1-124-967-7897",
        "city": "Weesp",
        "email": "Donec.tincidunt@iaculisquis.ca",
        "country": "Lebanon"
    },
    {
        "name": "Wynter",
        "phone": "688-5675",
        "city": "Casper",
        "email": "eros.turpis@nuncacmattis.co.uk",
        "country": "Tuvalu"
    },
    {
        "name": "Perry",
        "phone": "120-1427",
        "city": "San José de Maipo",
        "email": "ipsum.leo.elementum@arcu.net",
        "country": "Afghanistan"
    },
    {
        "name": "Lunea",
        "phone": "792-4395",
        "city": "Virginal-Samme",
        "email": "Cras.eget@posuereenim.com",
        "country": "Mayotte"
    },
    {
        "name": "Christian",
        "phone": "373-5546",
        "city": "Birori",
        "email": "ultrices.sit@imperdieterat.co.uk",
        "country": "Nepal"
    },
    {
        "name": "Hermione",
        "phone": "446-3115",
        "city": "Walhain-Saint-Paul",
        "email": "Curae.Donec.tincidunt@infelis.com",
        "country": "Liberia"
    },
    {
        "name": "Robert",
        "phone": "139-8430",
        "city": "Rostock",
        "email": "eleifend@Nuncmauriselit.edu",
        "country": "Canada"
    },
    {
        "name": "Kaye",
        "phone": "1-933-831-9718",
        "city": "Tamines",
        "email": "augue.eu@velmauris.co.uk",
        "country": "Dominican Republic"
    },
    {
        "name": "Coby",
        "phone": "779-5202",
        "city": "Banff",
        "email": "Pellentesque@est.org",
        "country": "Bolivia"
    },
    {
        "name": "Ivy",
        "phone": "1-637-690-2233",
        "city": "Terlago",
        "email": "neque.Sed@dui.com",
        "country": "Belarus"
    },
    {
        "name": "Dara",
        "phone": "1-928-610-6357",
        "city": "Carbonear",
        "email": "consequat.auctor@Curabiturmassa.org",
        "country": "India"
    },
    {
        "name": "Eden",
        "phone": "372-3784",
        "city": "San Valentino in Abruzzo Citeriore",
        "email": "non@tellus.com",
        "country": "Korea, South"
    },
    {
        "name": "Christopher",
        "phone": "1-621-722-3856",
        "city": "Leamington",
        "email": "dolor@liberoProin.ca",
        "country": "Kenya"
    },
    {
        "name": "Sean",
        "phone": "633-2888",
        "city": "Maizeret",
        "email": "aliquet.diam@Donec.ca",
        "country": "Monaco"
    },
    {
        "name": "Freya",
        "phone": "1-269-134-4043",
        "city": "Piagge",
        "email": "libero@arcuVestibulum.edu",
        "country": "Georgia"
    },
    {
        "name": "Winifred",
        "phone": "824-9086",
        "city": "Winnipeg",
        "email": "dolor.nonummy@maurissit.ca",
        "country": "Netherlands"
    },
    {
        "name": "Winifred",
        "phone": "1-357-484-9996",
        "city": "Białystok",
        "email": "Sed.id@sem.org",
        "country": "Turkmenistan"
    },
    {
        "name": "Devin",
        "phone": "176-7989",
        "city": "Nadrin",
        "email": "arcu@anuncIn.co.uk",
        "country": "Costa Rica"
    },
    {
        "name": "Lionel",
        "phone": "658-2053",
        "city": "San Sebastiano al Vesuvio",
        "email": "rhoncus.id@netus.ca",
        "country": "Cook Islands"
    },
    {
        "name": "Jescie",
        "phone": "489-3740",
        "city": "Colchester",
        "email": "montes.nascetur@quisdiamPellentesque.ca",
        "country": "Cameroon"
    },
    {
        "name": "Keegan",
        "phone": "1-455-732-2302",
        "city": "Thorold",
        "email": "Aliquam@tortor.com",
        "country": "Gibraltar"
    },
    {
        "name": "Tashya",
        "phone": "323-4281",
        "city": "Grantham",
        "email": "convallis@nonloremvitae.co.uk",
        "country": "Iraq"
    },
    {
        "name": "Bradley",
        "phone": "123-1858",
        "city": "Ragogna",
        "email": "Fusce@Proinsedturpis.org",
        "country": "Suriname"
    },
    {
        "name": "Aquila",
        "phone": "1-285-558-3940",
        "city": "Thisnes",
        "email": "Nunc.sollicitudin@enimsit.co.uk",
        "country": "Seychelles"
    },
    {
        "name": "Arden",
        "phone": "1-443-619-6101",
        "city": "Pontedera",
        "email": "turpis@malesuadautsem.co.uk",
        "country": "Kiribati"
    },
    {
        "name": "Scarlett",
        "phone": "202-3725",
        "city": "Khanewal",
        "email": "ac.mi@ipsumporta.com",
        "country": "Gambia"
    },
    {
        "name": "Garrison",
        "phone": "179-0902",
        "city": "Adana",
        "email": "amet@aarcu.co.uk",
        "country": "Timor-Leste"
    },
    {
        "name": "Jeremy",
        "phone": "1-297-911-1048",
        "city": "Charlottetown",
        "email": "non.ante.bibendum@elitEtiam.org",
        "country": "Germany"
    },
    {
        "name": "Graiden",
        "phone": "1-329-829-4124",
        "city": "Matlock",
        "email": "ante.ipsum@semconsequatnec.edu",
        "country": "Sint Maarten"
    },
    {
        "name": "Caldwell",
        "phone": "1-490-295-2909",
        "city": "Mazenzele",
        "email": "arcu.Curabitur.ut@ac.edu",
        "country": "Angola"
    },
    {
        "name": "Ronan",
        "phone": "415-1291",
        "city": "Quillota",
        "email": "augue.ac@dolorsitamet.org",
        "country": "Angola"
    },
    {
        "name": "Uriah",
        "phone": "1-186-986-4369",
        "city": "Chiniot",
        "email": "a.felis@non.ca",
        "country": "Italy"
    },
    {
        "name": "Xerxes",
        "phone": "124-0993",
        "city": "Elmshorn",
        "email": "placerat.orci.lacus@elementum.edu",
        "country": "Niger"
    },
    {
        "name": "Baker",
        "phone": "815-8696",
        "city": "Wangaratta",
        "email": "sapien@Sedmalesuada.com",
        "country": "Nicaragua"
    },
    {
        "name": "Martena",
        "phone": "1-257-802-7705",
        "city": "Dresden",
        "email": "urna.convallis.erat@tinciduntaliquamarcu.org",
        "country": "Hong Kong"
    },
    {
        "name": "Nigel",
        "phone": "1-329-934-1601",
        "city": "San Sebastiano al Vesuvio",
        "email": "Fusce.feugiat.Lorem@Praesent.net",
        "country": "Saint Barthélemy"
    },
    {
        "name": "Cody",
        "phone": "217-6915",
        "city": "Hamburg",
        "email": "mollis.dui@netusetmalesuada.com",
        "country": "Aruba"
    },
    {
        "name": "Sasha",
        "phone": "412-9667",
        "city": "New Plymouth",
        "email": "eu.tempor@incursus.edu",
        "country": "Isle of Man"
    },
    {
        "name": "Oscar",
        "phone": "352-9558",
        "city": "Bridgnorth",
        "email": "vehicula.Pellentesque@dignissimtempor.co.uk",
        "country": "Uganda"
    },
    {
        "name": "Igor",
        "phone": "596-5464",
        "city": "Sasaram",
        "email": "elit.Aliquam@vulputate.edu",
        "country": "Slovenia"
    },
    {
        "name": "Rooney",
        "phone": "1-151-989-7697",
        "city": "Petacciato",
        "email": "Nam.nulla@vestibulummassa.com",
        "country": "Azerbaijan"
    },
    {
        "name": "Kiayada",
        "phone": "295-3648",
        "city": "Portland",
        "email": "nec@velvenenatisvel.edu",
        "country": "Rwanda"
    },
    {
        "name": "May",
        "phone": "618-0187",
        "city": "Marbais",
        "email": "ac.libero@acturpisegestas.co.uk",
        "country": "Myanmar"
    },
    {
        "name": "Dante",
        "phone": "1-617-993-6818",
        "city": "Aalbeke",
        "email": "facilisis@faucibuslectus.com",
        "country": "Bolivia"
    },
    {
        "name": "Dakota",
        "phone": "755-4504",
        "city": "Sprimont",
        "email": "feugiat@accumsanneque.co.uk",
        "country": "Grenada"
    },
    {
        "name": "Thor",
        "phone": "440-6728",
        "city": "Nieuwegein",
        "email": "lobortis.Class@ullamcorperDuis.net",
        "country": "Netherlands"
    },
    {
        "name": "Zenaida",
        "phone": "1-197-299-0518",
        "city": "Soria",
        "email": "aliquam.enim@molestieSed.com",
        "country": "Taiwan"
    },
    {
        "name": "Xyla",
        "phone": "1-770-150-4365",
        "city": "Kent",
        "email": "lacinia.orci@velitSed.org",
        "country": "Oman"
    },
    {
        "name": "Naida",
        "phone": "1-612-251-5172",
        "city": "A Coruña",
        "email": "lorem.vitae@risusNulla.edu",
        "country": "Ethiopia"
    },
    {
        "name": "Gabriel",
        "phone": "1-938-172-1889",
        "city": "Zittau",
        "email": "Aenean.massa.Integer@Maecenasiaculisaliquet.net",
        "country": "Tanzania"
    },
    {
        "name": "Christian",
        "phone": "1-608-262-9632",
        "city": "Bearberry",
        "email": "Aliquam.vulputate.ullamcorper@diamluctuslobortis.com",
        "country": "New Zealand"
    },
    {
        "name": "Rafael",
        "phone": "1-560-887-7669",
        "city": "Kaiserslauter",
        "email": "dolor.Quisque@dolor.org",
        "country": "Tanzania"
    },
    {
        "name": "Sawyer",
        "phone": "1-874-977-7046",
        "city": "Gaspé",
        "email": "lorem.lorem.luctus@nonarcu.edu",
        "country": "Afghanistan"
    },
    {
        "name": "Yardley",
        "phone": "729-4880",
        "city": "Alva",
        "email": "penatibus.et.magnis@diam.ca",
        "country": "Samoa"
    },
    {
        "name": "Benjamin",
        "phone": "1-297-658-8894",
        "city": "Chemnitz",
        "email": "risus.Duis@Nullaeu.com",
        "country": "Guernsey"
    },
    {
        "name": "Murphy",
        "phone": "1-946-772-1700",
        "city": "Hennigsdorf",
        "email": "consequat.auctor@aliquameuaccumsan.org",
        "country": "Comoros"
    },
    {
        "name": "Drake",
        "phone": "1-241-810-8454",
        "city": "Alvito",
        "email": "Vivamus.nisi.Mauris@lobortisrisus.co.uk",
        "country": "Lesotho"
    },
    {
        "name": "Holly",
        "phone": "1-210-512-4809",
        "city": "Grande Prairie",
        "email": "commodo@sociisnatoque.com",
        "country": "Armenia"
    },
    {
        "name": "Tanek",
        "phone": "297-7873",
        "city": "Galway",
        "email": "neque.In.ornare@magna.net",
        "country": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "name": "Raphael",
        "phone": "1-314-937-6893",
        "city": "Chilliwack",
        "email": "Phasellus@nisi.edu",
        "country": "Luxembourg"
    },
    {
        "name": "Kennedy",
        "phone": "438-9962",
        "city": "Wichita",
        "email": "neque.In.ornare@intempus.ca",
        "country": "Latvia"
    },
    {
        "name": "Allen",
        "phone": "1-927-362-0485",
        "city": "Maringá",
        "email": "risus.varius.orci@duilectus.net",
        "country": "Peru"
    },
    {
        "name": "Peter",
        "phone": "1-275-826-0469",
        "city": "Tilff",
        "email": "dui.nec.tempus@velsapienimperdiet.com",
        "country": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "name": "Anjolie",
        "phone": "1-272-772-0591",
        "city": "Kincardine",
        "email": "Fusce.fermentum@luctuslobortis.co.uk",
        "country": "Djibouti"
    },
    {
        "name": "Talon",
        "phone": "264-8357",
        "city": "Trivandrum",
        "email": "et.eros.Proin@maurisMorbi.co.uk",
        "country": "Greece"
    },
    {
        "name": "Wade",
        "phone": "610-3196",
        "city": "Borgone Susa",
        "email": "tempor.arcu.Vestibulum@lectuspedeultrices.net",
        "country": "Spain"
    },
    {
        "name": "Jenette",
        "phone": "490-7933",
        "city": "Gulfport",
        "email": "est@Aliquamornare.org",
        "country": "Indonesia"
    },
    {
        "name": "Murphy",
        "phone": "405-6421",
        "city": "Tarrasa",
        "email": "mus@in.edu",
        "country": "Hungary"
    },
    {
        "name": "Kamal",
        "phone": "441-5681",
        "city": "Reims",
        "email": "Donec.dignissim.magna@Integermollis.ca",
        "country": "Chad"
    },
    {
        "name": "Rudyard",
        "phone": "931-4171",
        "city": "La Cisterna",
        "email": "Duis.a.mi@acmattis.ca",
        "country": "Poland"
    },
    {
        "name": "Harper",
        "phone": "1-328-534-4012",
        "city": "Lacombe",
        "email": "magna@Vivamusnibh.co.uk",
        "country": "Tonga"
    },
    {
        "name": "Latifah",
        "phone": "1-223-335-7193",
        "city": "Vietri di Potenza",
        "email": "nulla.Cras.eu@quamquis.com",
        "country": "Lebanon"
    }
];

const getRandomUser = () => {
    let rand = users[Math.floor(Math.random() * users.length)];
    return rand
}

module.exports = getRandomUser;