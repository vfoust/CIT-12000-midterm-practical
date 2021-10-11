var wrapperEle = document.body.querySelector(".wrapper")
var number = document.body.querySelector(".number")
var num= 5
var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

for(var i=0; i<list.length; i++){
    var ele = document.createElement("div");
    var nameEle=document.createElement("h2");
    var ageEle=document.createElement("h4");
    nameEle.innerHTML=list[i].name;
    ageEle.innerHTML=list[i].age;

    if(list[i].age>25){
        nameEle.style.color = 'green';
        ageEle.style.color = 'green';

    }
    ele.appendChild(nameEle);
    ele.appendChild(ageEle);

    wrapperEle.appendChild(ele);
    }


number.innerHTML=num;
document.body.querySelector(".increase1").addEventListener("click", function () {
    number.innerHTML = ""
    num= (num+1)
    number.innerHTML=num;
})