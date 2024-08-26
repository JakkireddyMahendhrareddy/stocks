let a=document.getElementById("images1");
let bulb=document.getElementById("bulb");
let isLiked=true;


function LikeButton(){

    if(isLiked){
        a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
        isLiked=false;
        bulb.style.backgroundColor="";
    
    }
    else
    {
        a.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
        isLiked=true;
        bulb.style.backgroundColor="blue";
   
    }
}