

function description_pahantudawa(){
    var pahantudawa="<h3>Pahantudawa</h3><p>Pahanthudawa Waterfall is another unique creation in Sri Lanka.The reason is due its natural location built in.The water that falls into this fall is in the shape of a wick of a lamp.site-seeing the falls is quite challenging as one must go through the stream and attend the steep valley upstream.</p>";
    document.getElementById("description").innerHTML=pahantudawa;
    }
    
    
    function description_bopath(){
    var bopath="<h3>Bopath Ella</h3><p>The Bopath Falls resembles in the shape of a bo (Ficus religiosa) tree and is the most comprehensively researched fall in Sri Lanka. Its source is from Kurugana River that later joins the Kaluganga River. Myth states that the Bopath falls hides a treasure vault which intensifies the strangeness of this place</p>";
    document.getElementById("description").innerHTML=bopath;
    }
    
    function description_mirissa(){
    var mirissa="<h3>Mirissa</h3><p>Mirissa a popular beach destinations in south coast famous for its nightlife beach ambience. The region is full of stunning sandy beaches, whale and dolphin watching,beach Sports, and fantastic enjoyment in pubs and restaurants. Mirissa has been growing trend over the past years and also becoming busier with increase of tourist </p>";
    document.getElementById("description").innerHTML=mirissa;
    }
    
    function description_ambuluwawa(){
    var ambuluwawa="<h3>Ambuluwawa </h3><p>The Ambuluwewa tower which is located in summit of mountain peak which has gained an increased popularity in recent times in especially due to the breathtaking scenarios you can experience when you climb to the top of it.This has been recognized internationally. It is also known for its lean spiral staircase which some tourists find it challenging to climb. </p>";
    document.getElementById("description").innerHTML=ambuluwawa;
    }
    
    function description_kandalama(){
    var kandalama="<h3>Kandalama</h3><p>Heritance Kandalama a Geoffrey Bawa architectural masterpiece, built with  fabulous views of the rock fortress of Sigiriya and abundance of nature. The hotel is nested within the impressive rock formations with a forest ambience which is close to heart of srilanka, close to five UNESCO World Heritage Sites.</p>";
    document.getElementById("description").innerHTML=kandalama;
    }
    
    
        var thumbnails = document.getElementById("thumbnails")
    var imgs = thumbnails.getElementsByTagName("img")
    var main = document.getElementById("main")
    var counter=0;

    function pagecolor(color){
        document.body.style.background=color; 
        }
        

for(let i=0;i<imgs.length;i++){
    let img=imgs[i]
   img.addEventListener("mouseover",function(){
    main.src=this.src
  })
    
  }