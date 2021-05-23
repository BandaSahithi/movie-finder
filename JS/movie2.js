 function movie_find()
    	{
             movie_name=document.getElementById("movie_name").value;
              httpRequest= new XMLHttpRequest();
             url= "https://www.omdbapi.com/?i=tt3896198&apikey=97097bcc&t=";
              httpRequest.open("GET",url+movie_name);
              httpRequest.send();

              httpRequest.onreadystatechange =function(){
              	if(this.readyState==4 && this.status ==200)
              	{
                     movie_data=JSON.parse(this.responseText);
                     document.getElementById("input").innerHTML="Title:"

                     document.getElementById("output").innerHTML=movie_data.Title;
                     if(movie_data.Title ==null)
                          {alert("The movie you entered is not found pls try again");}
                      else{
                     document.getElementById("poster").src=movie_data.Poster;
                     document.getElementById("input2").innerHTML="Releasing Year:"
                     document.getElementById("year").innerHTML=movie_data.Released;
                     document.getElementById("input3").innerHTML="Rating:"
                     document.getElementById("rating").innerHTML=movie_data.Rated;
                     document.getElementById("input4").innerHTML="Genre:"
                     document.getElementById("genre").innerHTML=movie_data.Genre;
                     document.getElementById("input5").innerHTML="Actors:"
                     document.getElementById("actor").innerHTML=movie_data.Actors;
                     document.getElementById("input6").innerHTML="Directors:"
                     document.getElementById("director").innerHTML=movie_data.Director;
                     document.getElementById("input7").innerHTML="Writer:"
                     document.getElementById("writer").innerHTML=movie_data.Writer;
                     document.getElementById("input8").innerHTML="Language:"
                     document.getElementById("language").innerHTML=movie_data.Language;
                     document.getElementById("input9").innerHTML="Awards:"
                     document.getElementById("awards").innerHTML=movie_data.Awards;
                     document.getElementById("input10").innerHTML="Plot:"
                     document.getElementById("plot").innerHTML=movie_data.Plot;
                     document.getElementsByClassName("dclass2")[0].style.border= "2px solid red";
                     document.getElementsByClassName("dclass2")[0].style.backgroundColor="lightgray";
                     document.getElementsByClassName("dclass1")[0].style.top = "150px";
                     document.getElementsByClassName("dclass2")[0].style.top = "420px";
                   }
            
              	}
              }
       
    	}
  