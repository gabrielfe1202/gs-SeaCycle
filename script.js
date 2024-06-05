document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = this.getAttribute('href').substring(1);
            const element = document.getElementById(id);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


const dataCarrossel = [
    {
        place: 'Switzerland Alps',
        title: 'SAINT',
        title2: 'ANTONIEN',
        description: 'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
        image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg'
    },
    {
        place: 'Japan Alps',
        title: 'NANGANO',
        title2: 'PREFECTURE',
        description: 'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
        image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg'
    },
    {
        place: 'Sahara Desert - Morocco',
        title: 'MARRAKECH',
        title2: 'MEROUGA',
        description: 'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
        image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg'
    },
    {
        place: 'Sierra Nevada - USA',
        title: 'YOSEMITE',
        title2: 'NATIONAL PARAK',
        description: 'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
        image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg'
    },
    {
        place: 'Tarifa - Spain',
        title: 'LOS LANCES',
        title2: 'BEACH',
        description: 'Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach\'s long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.',
        image: 'https://assets.codepen.io/3685267/timed-cards-5.jpg'
    },
    {
        place: 'Cappadocia - Turkey',
        title: 'Göreme',
        title2: 'Valley',
        description: 'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
        image: 'https://assets.codepen.io/3685267/timed-cards-6.jpg'
    },
]

const secCarrossel = document.getElementById("Tecnology");
const bacCarrossel = document.getElementById("cover")
const datCarrossel = document.getElementById("TecnologyData")
const titCarrossel = document.querySelector("#TecnologyData h1")
const desCarrossel = document.querySelector("#TecnologyData p")
const itens = document.querySelector(".itens")
var indiceCarrossel = 0

const texts = ["Texto Original", "Primeiro Texto", "Segundo Texto", "Terceiro Texto"];
let intervalId;
let progress = 0;


function ChangeCarrossel(id) {
    indiceCarrossel = id
    if (indiceCarrossel == dataCarrossel.length) {
        indiceCarrossel = 0
    }
    console.log(indiceCarrossel)
    let item = dataCarrossel[indiceCarrossel];

    const element = document.getElementById('animatedText');

    element.classList.add('hidden');
    desCarrossel.classList.add('hidden')
    bacCarrossel.style.transition = "none"
    bacCarrossel.classList.add('hiddenImg')

    setTimeout(() => {

        if (progress >= 100) {
            progress = 0
        }
        progress += 100 / dataCarrossel.length;
        let progressBar = document.getElementById('progress-bar');
        progressBar.style.width = progress + '%';


        element.innerText = item.title;
        element.classList.remove('hidden');

        desCarrossel.innerText = item.description;
        desCarrossel.classList.remove('hidden')

        bacCarrossel.style.transition = "transform 1s, opacity 1s"
        bacCarrossel.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`
        bacCarrossel.classList.remove('hiddenImg')

        document.getElementById("item" + indiceCarrossel).remove();
        itens.innerHTML += `<div class="item" id="item${indiceCarrossel}" style="background: url('${item.image}')"><p class="title" >${item.title}</p></div>`

    }, 500)
    setTimeout(() => {
        secCarrossel.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`
    }, 2500)
}


dataCarrossel.forEach((item,index) => itens.innerHTML += `<div class="item" id="item${index}" style="background: url('${item.image}')"><p class="title" >${item.title}</p></div>`)


ChangeCarrossel(indiceCarrossel)
setInterval(() => ChangeCarrossel(indiceCarrossel + 1), 8000)


document.querySelector('.containerItens').addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
        event.preventDefault();
        this.scrollLeft += event.deltaY;
    }
});
