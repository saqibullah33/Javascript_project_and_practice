
//         // creating element using Javscript

// function CreateElement(Name,ClsName,Id,bgColor,pading,InerHTML)
// {
//     let E=document.createElement(Name);
//     E.classname=ClsName;
//     E.id=Id;
//     E.style.backgroundColor=bgColor;
//     E.style.padding= pading;
//     E.style.margin= "7px"
//     let child=document.createTextNode(InerHTML)
//     E.appendChild(child)
//     document.body.appendChild(E)
// }

// CreateElement("div","saqib","d","orange", "12px" ,"helllo ")
// CreateElement("div","saqib","d","blue", "12px" ,"helllo ")
// CreateElement("div","saqib","d","pink", "12px" ,"helllo ")
// CreateElement("div","saqib","d","purple", "12px" ,"helllo ")
// CreateElement("div","saqib","d","green", "12px" ,"helllo ")


        //2nd way creating element already having parent ul


        function CreateLi(name){
            let parent=document.querySelector('.ul');
            const li=document.createElement('li');
            li.appendChild(document.createTextNode(name))
            parent.appendChild(li)
        }


        

        CreateLi("javascript")
        CreateLi("C++")
        CreateLi("python")


        //edit

        // select javascript
       
        // const secLang=document.querySelector('li:nth-child(2)')
        // console.log(secLang)
        // secLang.innerHTML="mojo"

        //edit optimize way

        // const firstLang = document.querySelector("li:first-child")
        // firstLang.outerHTML = '<li>Ruby</li>'

        //another way

        // const firstLang = document.querySelector("li:first-child")
        // const li=document.createElement('li')
        // li.textContent="Dart";
        // firstLang.replaceWith(li)

        // const lastChild=document.querySelector('li:nth-child(4)')
        // const li=document.createElement('li')
        // li.textContent="python"
        // lastChild.replaceWith(li)


        //deleting

        const lastChild=document.querySelector('li:nth-child(4)')
        lastChild.remove()

