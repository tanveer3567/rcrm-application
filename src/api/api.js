// import { resolve } from "url";

export const EmployeeData = (searchQuery) =>{
        //1
        var promise = new Promise((resolve,reject) => {
//        2
            fetch(`http://localhost:3002/product?firstName=${searchQuery}`)
            .then(res => {
                //then is chained to whatever fetch is returning
                    // 4
                    // console.log(res.json())

                resolve (res.json());
             //json takes the response and converts to json 
            })
        // });
//        3
    })
    // console.log(promise)
    return promise;
}



export const Employees = () =>{
    //1
    var promise = new Promise((resolve,reject) => {
//        2
        fetch(`http://localhost:3002/products`)
        .then(res => {
            //then is chained to whatever fetch is returning
                // 4
                // console.log(res.json())

            resolve (res.json());
         //json takes the response and converts to json 
        })
    // });
//        3
})
// console.log(promise)
return promise;
}


// export default EmployeeData;//ES6 format of module.export