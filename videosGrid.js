const videosGridInfo = (function() { 
  var YoutubeVideos = {
  imageSrc: ["https://img.ibxk.com.br/2020/03/18/18185624349227.jpg?w=1120&h=420&mode=crop&scale=both",
  "https://rollingstone.uol.com.br/media/_versions/naruto-hinata-sakura-reproducao_widelg.jpg",
  "https://images7.alphacoders.com/928/thumb-1920-928770.jpg",
  "https://1.bp.blogspot.com/-7F9p0S0A1kM/WZxmMa9bzII/AAAAAAAAGnc/vVWT4ITzJpIqsVP9zriiKOwkNRpe0mbCgCLcBGAs/s640/Sonic%2BMania_20170816222752.jpg", "https://www.revistarap.com.br/wp-content/uploads/2021/01/12-fatos-sobre-a-criacao-de-Eminem.jpg", 
  "https://rap24horas.com.br/wp-content/uploads/2018/05/nogsa.png",
  "https://i0.wp.com/gatinhobranco.com/wp-content/uploads/2019/06/o-que-sao-praticas-cat-friendly-como-escolher-um-bom-veterinario.jpg?fit=1600%2C1006&ssl=1",
  "https://pbs.twimg.com/media/DP4B2cxVQAAfESz?format=jpg&name=small",
  "https://l3software.com.br/wp-content/uploads/2019/03/jscrambler.jpg",
  "http://terranerdica.com.br/wp-content/uploads/2020/03/demon-slayer_XdMRRmJ-750x375.jpg",
  "http://br.web.img3.acsta.net/r_640_360/newsv7/19/08/14/00/05/1724103.jpg",
  "https://thepixelglitch.files.wordpress.com/2020/10/animes-halloween.jpg?w=730",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1My-D1S-N5pYKiB3asx9y3vT-gMASfLOmzA&usqp=CAU",
  "https://ogimg.infoglobo.com.br/in/9951935-a99-3f4/FT1086A/652/xGTA-V-big.jpg.pagespeed.ic.tUMoxHtGRM.jpg",
  "https://meups.com.br/wp-content/uploads/2020/03/Sonic-the-Hedgehog-900x503.jpg",
  "https://rollingstone.uol.com.br/media/_versions/peaky-blinders-netflix_widelg.jpg",
  "https://miro.medium.com/max/7212/1*nkTk8S_0wxdHvrnMThGaTQ.jpeg",
  "https://conteudo.imguol.com.br/c/entretenimento/71/2020/05/03/elenco-de-breaking-bad-1588525152104_v2_1920x1080.jpg",
  "https://meunegocio.uol.com.br/blog/wp-content/uploads/2020/07/html-css-ou-javascript-qual-aprender-primeiro-1499777555318_600x320.jpg",
  "https://epicplay.com/wp-content/uploads/2019/06/hokuto-no-ken-manga-capa-2-1200x675.jpg.webp"
  ],

  channelImage: ["https://yt3.ggpht.com/ytc/AAUvwniNCBNLUI1jL2FH6YaYiWv5ao6qOPAotRybwvTmvQ=s68-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AAUvwnjlYzitJiEOjRtDwCuUdN0IFF443ubmpyMHqBtYLw=s900-c-k-c0x00ffffff-no-rj",
  "https://br.web.img2.acsta.net/r_640_360/newsv7/20/05/07/23/47/2428122.jpg",
  "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-05-09-12-11/dragon-ball-todas-as-transformacoes-son-goku-1589022707794.jpg/EG11/resize/1200x-1/dragon-ball-todas-as-transformacoes-son-goku-1589022707794.jpg",
  "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
  "https://lh3.googleusercontent.com/proxy/2UOGm3YjMpblaxhKaK0Yms-jnyKlKjYCujPgp-PAlhKSpgMCNcj6heYzX5QQ3dQRc4ZLGhvTITJyjvPCkXoreNbkf9W1ZqNNn5pMaEMJyAhk47XuB08Vxl57KNTvCEDjg1VAMg",
  "https://images.pexels.com/photos/1206059/pexels-photo-1206059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://exame.com/wp-content/uploads/2016/09/size_960_16_9_cavaleiros-do-zodiaco1.jpg",
  "https://screenshots.gamebanana.com/img/ss/maps/59cd8fe679a07.jpg",
  "https://defatoonline.com.br/wp-content/uploads/2020/06/undertale-e-um-jogo-indie-divertido-e-inteligente-que-subverte-as-regras-do-videogame-780x520.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqg6acr4tleOz5AsLXyfjPYDarNqlozerWQ&usqp=CAU",
  "data:image/jpeg;base64,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",
  "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2019/08/legiao_xhOWXFL2iDscw1_tRzvSqk9NufoE4eaMgBYImldZpT.png.jpeg",
  "https://images4.alphacoders.com/110/thumb-350-110584.jpg",
  "https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png",
  "https://ovicio.com.br/wp-content/uploads/2020/08/20200818-batman.jpg",
  "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/01/death-note-one-shot.jpg",
  "https://img.elo7.com.br/product/original/2D557EA/papel-de-parede-musical-piano-teclado-musica-gg846-adesivo-musical.jpg",
  "https://www.rollingstone.com/wp-content/uploads/2019/09/shutterstock_550988083.jpg?resize=1800,1200&w=450",
  "https://upload.wikimedia.org/wikipedia/commons/3/39/C_Hello_World_Program.png"],

  videoTitle: ["bleach ep 394", "naruto ep 300", "is FINAL FANTASY 7 good ?", "best SONIC game", "top BEST rappers", "BEST brazilians rappers",
  "teaching my cat how to fight", "I'm going to buy cigarettes", "how to get angry ?", "my top 10 animes(is naruto numeber 1 ?)", 
  "when gf tell that her dad is out", "this anime was made by satan", "speed running mario 64", "let´s play gta V", "was sonic made by jesus ?",
  "Me and my guys", "Got ep 4", "why this is a good ep", "learn html, css and js in 1 SECOND :O", "hokuto no ken op"],

  channelName: ["Good Animes", "animesss", "gaming123", "Jack124", "EminemFan3", "wrapRap66", "CatLover0", "beatPic00", "learnJs2077", 
  "AnimeartGamer", "Ben0301", "Kevin293", "Games Review", "SuchAGamer10", "JsGammerLol", "beManMan", "XxxTmxxX", "pianoLover", "arthur007",
  "animesAndProgramming"]
};


function putTheVideoImageContainerAndData() {
  const gridContainer = document.getElementById("gridContainerForTheVideos");
  const len = YoutubeVideos.imageSrc.length;
  const videosContainer = new Array(len);
  for(let i = 0; i < len; i++) {
    videosContainer[i] = createNewElement("section", "", "videoContainer");
    createAndPutTheVideosImage(videosContainer, i);
    createAndPutTheVideosInfo(videosContainer, i);
    gridContainer.appendChild(videosContainer[i]);
  }
}


function createAndPutTheVideosImage(videoContainer ,index) {
  const videoImageContainer = createNewElement("div", "", "videoImageContainer");
  const videoImage = createNewImage("", YoutubeVideos.imageSrc[index]);
  putTimeOnTheVideoImage(videoImageContainer);
  putWatchLaterAndAddToQueueOnImage(videoImageContainer);
  videoImageContainer.appendChild(videoImage);
  videoContainer[index].appendChild(videoImageContainer);
}


function putTimeOnTheVideoImage(videoImageContainer) {
  const time = createATimeDuration();
  const videoDuration = createNewElement("span", time, "videoTime");
  videoImageContainer.appendChild(videoDuration);
}


function createATimeDuration() {
  const duration = Math.floor(Math.random() * 3);
  let hours, fullTime;
  const minutes = Math.floor(Math.random() * 59 + 1);
  let seconds = Math.floor(Math.random() * 59 + 1);
  if(seconds < 10) {seconds = `0${seconds}`;}
  switch(duration) {
    case 0: //short duration
      fullTime = `0:${seconds}`;
      break;
    case 1: //medium duration
      fullTime = `${minutes}:${seconds}`;
      break;
    case 2: //long duration
      hours = Math.floor(Math.random() * 59 + 1);
      fullTime = `${hours}:${minutes}:${seconds}`;
      break;
  } 
  return fullTime;
}


function putWatchLaterAndAddToQueueOnImage(videoImageContainer) {
  const watchLaterContainer = createNewElement("div", "", "watchLaterIcone iconeBar");
  const addToQueueContainer = createNewElement("div", "", "addToQueueIcone iconeBar");
  const iconesText = new Array(2);
  const icones = new Array(2);
  iconesText[0] = createNewElement("div", "Watch later", "iconeText");
  iconesText[1] = createNewElement("div", "Add to queue", "iconeText");
  icones[0] = createNewElement("i", "", "fas fa-clock");
  icones[1] = createNewElement("i", "", "fas fa-outdent");
  watchLaterContainer.appendChild(iconesText[0]);
  watchLaterContainer.appendChild(icones[0]);
  addToQueueContainer.appendChild(iconesText[1])
  addToQueueContainer.appendChild(icones[1]);
  videoImageContainer.appendChild(watchLaterContainer);
  videoImageContainer.appendChild(addToQueueContainer);
}


function createAndPutTheVideosInfo(videosContainer, index) {
  const videoContainerInfos = createNewElement("div", "", "videoContainerInfos");
  const channelImage = createNewImage("channelImage", YoutubeVideos.channelImage[index]);
  const i = createNewElement("i", "", "fas fa-ellipsis-v threeDot");
  videoContainerInfos.appendChild(channelImage);
  putVideoInfos(videoContainerInfos, index);
  videoContainerInfos.appendChild(i);
  videosContainer[index].appendChild(videoContainerInfos);
}


function putVideoInfos(videoContainerInfos, index) {
  const videoInfos = createNewElement("div", "", "videoInfos");
  const videoTitle = createNewElement("div", YoutubeVideos.videoTitle[index], "videoTitle");
  const channelName = createNewElement("span", YoutubeVideos.channelName[index], "channelName");
  const viewsAndDataRelease = createNewElement("span",returnARandomView() + returnARandomData() , "viewsAndDataRelease");
  videoInfos.appendChild(videoTitle);
  videoInfos.appendChild(channelName);
  videoInfos.appendChild(viewsAndDataRelease);
  videoContainerInfos.appendChild(videoInfos);
}


function returnARandomView() {
  const quantity = Math.floor(Math.random() * 3);
  let views;
  switch(quantity) {
    case 0: // hundrer views
      views = `${Math.floor(Math.random() * 1000)} views • `;
      break;
    case 1: // K views
      views = `${Math.floor(Math.random() * 999 + 1)}K views • `;
      break;
    case 2: // milions views
      views = `${Math.floor(Math.random() * 999 + 1)}M views • `;
      break;
  }
  return views;
}


function returnARandomData() {
  const howMuchTimeHasPass = Math.floor(Math.random() * 4);
  let time;
  switch(howMuchTimeHasPass) {
    case 0: //day
      time = `${Math.floor(Math.random() * 5 + 1)} days ago`;
      break;
    case 1: // Weeks
      time = `${Math.floor(Math.random() * 3 + 1)} Weeks ago`;
      break;
    case 2: // Months
      time = `${Math.floor(Math.random() * 11 + 1)} Months ago`;
      break;
    case 3: // Years
      time = `${Math.floor(Math.random() * 19 + 1)} Years ago`;
      break;
  }
  return time;
}

putTheVideoImageContainerAndData();
}());