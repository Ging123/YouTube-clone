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

  videoTitle: [],

  channelName: []
}

function putDataOfTheVideosOnTheGrid() {
  const gridContainer = document.getElementById("gridContainerForTheVideos");
  const len = YoutubeVideos.imageSrc.length;
  const videosContainer = new Array(len);
  const videoImageContainer = new Array(len);
  const videoImage = new Array(len);
  const videoImageSrc = YoutubeVideos.imageSrc;

  for(let i = 0; i < len; i++) {
    videosContainer[i] = createNewElement("section", "", "videoContainer");
    //Create the video image container and its data
    videoImageContainer[i] = createNewElement("div", "", "videoImageContainer")
    videoImage[i] = createNewImage("", videoImageSrc[i]);
    
    videoImageContainer[i].appendChild(videoImage[i]);
    videosContainer[i].appendChild(videoImageContainer[i]);
    videosContainer[i].appendChild(videoImageContainer[i]);
    //Append all element that was created
    gridContainer.appendChild(videosContainer[i]);
  }
}



putDataOfTheVideosOnTheGrid();