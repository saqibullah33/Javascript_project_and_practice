
// const namee=[]
// arr.forEach((val)=> {
// namee.push(val.name)
// } )

// console.log(namee)



        //return new array with even  number
// const arr1=[1,2,3,4,5,8,10]

// const evenNumber=arr1.filter((val)=> val%2===0)
// console.log(evenNumber)

// const arr=[
//     {
//         name:"saqib",
//         age:12,
//         city:"peshawar"
//         },{
//             name:"ahamad",
//             age:12,
//             city:"peshawar"
//             },{
//                 name:"osama",
//                 age:12,
//                 city:"islamabad"
//                 }

// ]

// const CityPesh=arr.filter((val)=> val.city==="peshawar")
// console.log(CityPesh)

// const course=[
//     {

//     Name:"saqib",
//     course: "javascript",
//     price: 2300
// },
// {

//     Name:"ahamd",
//     course: "javascript",
//     price: 2300
// },
// {

//     Name:"hadiya",
//     course: "C++",
//     price: 2999
// },

// {

//     Name:"osama",
//     course: "python",
//     price: 2999
// },
// ]

//now i want to get new array of student who has enrolled for javscript course


// const javascriptStudent=course.filter((val)=> val.course==="javascript")
// console.log(javascriptStudent)

// javascriptStudent.forEach((val)=> console.log(val.Name))



            //Map method

    // const newArr=[1,2,3,4,5]
    // const evenNum=newArr.map((val)=> val*2)
    
    // console.log(evenNum)
    // console.log(newArr)


    const course=[
    {

    Name:"saqib",
    course: "javascript",
    price: 2300
},
{

    Name:"ahamd",
    course: "javascript",
    price: 2300
},
{

    Name:"hadiya",
    course: "C++",
    price: 2999
},

{

    Name:"osama",
    course: "python",
    price: 2999
},
]


// const x=course.map((val)=> val.Name+ " khan")
// console.log(x)


        // reduce 

        // const n=[1,2,4,5]
        // // const total=n.reduce((acc,val)=> acc+val ,0)
        // // console.log(total)

        // const total=n.reduce(function (acc,val){
        //     return acc+val
        // },0)

        // console.log(total+1)



        const cart
        =[
            {
        
            Name:"saqib",
            course: "javascript",
            price: 2300
        },
        {
        
            Name:"ahamd",
            course: "javascript",
            price: 2300
        },
        {
        
            Name:"hadiya",
            course: "C++",
            price: 2999
        },
        
        {
        
            Name:"osama",
            course: "python",
            price: 2999
        },
        ]


                //finding total price of cart


const total=cart.reduce((acc,val)=> acc+val.price,0)
console.log("total price -> " + total)
