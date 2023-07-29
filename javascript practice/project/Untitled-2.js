let img=document.querySelector(".img-fluid")
        let name=document.querySelector(".card-title")
        let text=document.querySelector(".card-text")

        img.setAttribute('src',data.avatar_url)
        name.innerHTML=data.name;
        text.innerHTML=data.bio