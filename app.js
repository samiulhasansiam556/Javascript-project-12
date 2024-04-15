

let t1 = document.querySelector(".t1");
let t2 = document.querySelector(".t2");
let t3 = document.querySelector(".t3");
let t4 = document.querySelector(".t4");
let t5 = document.querySelector(".t5");
let t6 = document.querySelector(".t6");
let t7 = document.querySelector(".t7");
let t8 = document.querySelector(".t8");

let samiul = t1.offsetTop;
let  rafi = t2.offsetTop;
let jerry = t3.offsetTop;
let sadiya = t4.offsetTop;


function myFunction() {


        var s = window.scrollY;

        if (s > samiul - 600) {
            t5.style.color = 'red';
            t1.style.transform = "translateX(0px)"; // Corrected syntax here
            t1.style.opacity= 0.9;
        } else {
            t5.style.color = 'blue';
            t1.style.transform = "translateX(-1000px)";
            t1.style.opacity= 0.3;
        }
       
        if(s>rafi-600){
            t6.style.color = 'red';
            t2.style.transform = "translateX(0px)";
            t2.style.opacity= 0.9;
        }
        else{
            t6.style.color = 'blue';
            t2.style.transform = "translateX(1000px)";
            t2.style.opacity= 0.3;

        }
        if (s > jerry-600) {
            t7.style.color = 'red';
            t3.style.transform = "translateX(0px)";
            t3.style.opacity= 0.9;
        }else{
            t7.style.color = 'blue';
            t3.style.transform = "translateX(-1000px)";
            t3.style.opacity= 0.3;

        }
       
        if(s>sadiya-600){
            t8.style.color = 'red';
            t4.style.transform = "translateX(0px)";
            t4.style.opacity= 0.9;
        }
        else{
            t8.style.color = 'blue';
            t4.style.transform = "translateX(1000px)";
            t4.style.opacity= 0.3;

        }

}

