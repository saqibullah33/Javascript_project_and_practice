//

const arr=[12,3,4,4,6]

const obj={
    name:"saqib",
    class:"34"
}

// for (const value of arr) {
//     // console.log(value)
    
// }

// for (const val of obj) {
//     // console.log(val) not working
// }


        // Map

        // const map =new Map()
        // map.set("namee","saqib")
        // map.set("class","3rd")

        // // console.log(map)

        // for (const [value,key] of map) {
        //     console.log(value + "-> " + key)
            
        // }



        //for off not working with array and object
        // const myObject = {
        //     game1: 'NFS',
        //     game2: 'Spiderman'
        // }
        
        // for (const [key, value] of myObject) {
        //     console.log(key, ':-', value);
            
        // }



        //for in

        



        // const arr1=[12,3,4,4,6]
        // for (const key in arr1) {
        //   console.log(`value at index ${key} is ${arr1[key]}`)
        // }


        // const myObject =[
        //     {

        //         js: 'javascript',
        //         cpp: 'C++',
        //         rb: "ruby",
        //         swift: "swift by apple"
        //     },
        //     {

        //         js: 'jscript',
        //         cpp: 'C++',
        //         rb: "ruby",
        //         swift: "swift by apple"
        //     }
        // ] 
        
        // for (const key in myObject) {
        //     console.log(`value at index ${key} is ${myObject[key].js}`);
        // }


        // forEach loop new call back function


           const arr1=[12,3,4,2,6]
        // arr1.forEach((val)=> console.log(val))

        // arr1.forEach((val,index)=> console.log(index + "-> " + val))
       
       
       const obj1=[{

        js: 'jscript',
        cpp: 'C++',
        rb: "ruby",
        swift: "swift by apple"
}] 
let value
obj1.forEach((val)=>{
   value= val.js
});
  console.log(value)

  document.getElementById('h1').innerHTML=value;
