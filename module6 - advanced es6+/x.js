var global = "golbal";

function a (){
  let global = "local"
  console.log('a', global)
}

function b (){
  const global = "cons local"
  console.log('b', global);
}

a();
b();
console.log('global',global)

getFullName = (first,last) =>{ return `Hello, ${first}, ${last} ! have a good day`}
console.log(getFullName('william', 'wong'))


// good hands-on 1
let user = [
  {
    firstName : "john",
    lastName :"doe",
  },
  (user)=> {
    //console.log('i set the user: ', user)
  }
]

let [newUser, setUser] = user;
//console.log(newUser);
setUser({firstName:"dman", lastName:"dafu"});

let [fruit1, fruit2, fruit3 ] = ["apple", "banana", "orange","cherrie"];
console.log(fruit1)


// good hands-on 2

let usePromise = fetch("https://");
userPromise.then((response) => {
  return response.json();
}).then(resData=>{
  console.log(resData)
}).catch(error=>{
  console.log(error)
})
