  {/* console.log("hello");
      document.getElementById('btn').addEventListener('click', ()=>{
console.log("hello world")
      } */}
        
      

    
      {/* <!-- function demo(num1,num2){
        if(typeof(num1)=="number" && typeof(num2)=="number"){
            console.log(num1+num2)
        }
    
        else{
            console.log("please enter interger value")
        }
      }

      demo(6,2)
     -->
      */}


{/* function calcCartPrice(...list) {

console.log(list)

}

calcCartPrice(20,203,30,39) */}



{/* <!-- function takeArray(arr){
    let total=0;
for(var i=0;i<7;i++)
    total+=(arr[i])

    console.log(total)
}

data=[2,2,3,5,6,7,8]
takeArray([2,4,7,6,7,0,2]) --> */}



// function list(num1,num2,...remaingList)
// {
//     console.log(num1+num2)
//   console.log(remaingList)
   
// }


// list(2,2,56,66,66)



        // scope of varible

       
// for(var a=5; a<8;a++){
//    console.log(a)
// }

// console.log("_______________________")

// for(var a=10; a<20;a++){
//     console.log(a)
// }
 


        // heap meomry

        // data={
        //     name: "saqib",
        //     class: "2nd year"
        // }

        // console.log(data.name)

        // otherRefrence=data;
        // otherRefrence.name="ahmad";

        // console.log("changing name after with other refrence -> " + otherRefrence.name)

        // chnaging name using other refrence 
    // function changeName(object){
    //     rObej=object;
    //     rObej.name="Namechanged Hehe"
    // }

    //  data={
    //         name: "saqib",
    //         class: "2nd year"
    //     }
    //     console.log("before calling function name is->  " + data.name)
    //     changeName(data)
    //     console.log("after calling function name is->  " + data.name)


            //for preimitive data type

    //          function changeName(data){
    //     rObej=data;
    //     rObej="Namechanged Hehe"
    // }



    // let namee="saqib"

    // console.log("before calling function name is->  " + namee)
    // changeName(namee)
    // console.log("after calling function name is->  " + namee)





        //event bubbling and stopping it
        //true parameter in addeventListner

        // let btn=document.getElementById('btn')
        // let div=document.getElementById('div')

        // // div.addEventListener('click', ()=>{
        // //     alert("div clicked")
        // // },true)

        // let x;
        // btn.addEventListener('click', (e)=>{
        //     console.log(e)
        //      console.log(e.screenX)
        //     console.log(e.altKey)
        //     alert("button clicked")
        // },true)



        // this keyword


    //     data={
    //                 name: "saqib",
    //                 class: "2nd year",
    //                 Show: ()=> console.log(this.data)
    //             }
    //     data.Show()


    //    let demo =()=> {
    //         var c=10;
    //         console.log(this)
    //     }

    //     demo()
        

    // object destructring 

       
    //  data={
    //                 namee: "saqib",
    //                 class: "2nd year",
    //                 Student_Information: "Peshawar",
    //                 Show: ()=> console.log(this.data)
    //             }

    //     const{Student_Information : info}=data;
    //     console.log(info)

       

    // console.log(null >=0) //true
    // console.log(null ==0)
    // console.log(null >0)

        // IIFE 

    //    (function show(num ){
    //         console.log("show i am IEFE " + num)
    //     }(4));


    function show(n){

      (n)
    }

    console.log(show(4))