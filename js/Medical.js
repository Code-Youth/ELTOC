var unclicked = 1
console.log(unclicked)
var legs = 0
var activePart = ""

            function w(part){
                console.log("wwww")
                console.log(part)
                console.log(unclicked)
                if(unclicked == 1){
                    if(part.alt !== "legs"){
                document.getElementById(part.alt + "Img").style.visibility = "hidden"
                document.getElementById(part.alt + "Label").style.visibility = "visible"
                document.getElementById(part.alt + "Outline").style.visibility = "visible"
                        part.removeEventListener('mouseenter',mouseenter,false)
                        part.removeEventListener('mouseleave',mouseleave,false)
                activePart = part
                console.log(activePart)
                    unclicked=0
                    }
                    else{
                        document.getElementById(part.alt + "Img").style.visibility = "hidden"
                        document.getElementById(part.alt + "Label").style.visibility = "visible"
                        document.getElementById("kneesImg").style.visibility = "hidden"
                        part.removeEventListener('mouseenter',mouseenter,false)
                        part.removeEventListener('mouseleave',mouseleave,false)
                        activePart = part
                        console.log(activePart)
                            unclicked=0
                            legs = 1
                    }
            }
                else if(unclicked == 0){
                    if(part.alt !== "legs"){
                    console.log(activePart)
                    document.getElementById(activePart.alt + "Img").style.visibility = "visible"
                    document.getElementById(activePart.alt + "Label").style.visibility = "hidden"
                    document.getElementById(part.alt + "Img").style.visibility = "hidden"
                document.getElementById(part.alt + "Label").style.visibility = "visible"
                part.removeEventListener('mouseenter',mouseenter,false)
                        part.removeEventListener('mouseleave',mouseleave,false)
                        document.getElementById(activePart.alt + "Outline").style.visibility = "hidden"
                        activePart.addEventListener('mouseenter', mouseenter, false);
                        activePart.addEventListener("mouseleave",mouseleave,false)
               activePart = part
               if(legs == 1 && part.alt !== "knees"){
                document.getElementById("kneesImg").style.visibility = "visible"
               }
                }
                else{
                    document.getElementById(activePart.alt + "Img").style.visibility = "visible"
                    document.getElementById(activePart.alt + "Label").style.visibility = "hidden"
                    document.getElementById(part.alt + "Img").style.visibility = "hidden"
                document.getElementById(part.alt + "Label").style.visibility = "visible"
                document.getElementById("kneesImg").style.visibility = "hidden"
                part.removeEventListener('mouseenter',mouseenter,false)
                        part.removeEventListener('mouseleave',mouseleave,false)
                        document.getElementById(activePart.alt + "Outline").style.visibility = "hidden"
                        activePart.addEventListener('mouseenter', mouseenter, false);
                        activePart.addEventListener("mouseleave",mouseleave,false)
               activePart = part
               legs = 1
                }
            }
            }

            $(".bodyMap").on("click", function(e){
                e.preventDefault();
                console.log(e)
            });

            function listen(){
                for(let i = 0;i<document.getElementsByClassName("bodyMap").length;i++){
                    console.log(document.getElementsByClassName("bodyMap")[i])
                    document.getElementsByClassName("bodyMap")[i].addEventListener('mouseenter', mouseenter, false);
                    document.getElementsByClassName("bodyMap")[i].addEventListener("mouseleave",mouseleave,false)
                }
            }
            listen()
            function mouseenter(e) 
{
   console.log(e.path[0].alt)
   document.getElementById(e.path[0].alt + "Outline").style.visibility = "visible"
};
            function mouseleave(e)
            {
                console.log(e.path[0].alt)
   document.getElementById(e.path[0].alt + "Outline").style.visibility = "hidden"

            }