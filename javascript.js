document.querySelector(".profileName").innerHTML="Jinka"

let random=Math.floor(Math.random()*50+1);

document.querySelector(".numOfPost").innerHTML=random

document.querySelector(".follwerCount").innerHTML=Math.floor(Math.random()*10000+1)

document.querySelector(".followingCount").innerHTML=Math.floor(Math.random()*50+1)

fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user=data.results[0];
        document.querySelector(".profileName").innerHTML=user.name.first
        document.querySelector(".bioName").innerHTML=user.name.first+" "+user.name.last
        document.querySelector(".profilePic").src=user.picture.medium

        for(let i=0;i<random;i++){
            let img=document.createElement('img');
            img.src='https://source.unsplash.com/featured/30'+i
    
            document.querySelector('.posts').append(img);
        }
       

    })
})

