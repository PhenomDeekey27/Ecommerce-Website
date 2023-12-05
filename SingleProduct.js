let MainImg=document.getElementById("MainImg");
let SmallImg=document.getElementsByClassName("small-img");
for(let img of SmallImg)
{
    img.addEventListener("click",()=>
    {
      MainImg.src=img.src
    })
}
const bar=document.getElementById("bar")
const navbar=document.getElementById("Navlinks");
const mobile=document.getElementById("mobile");
const close=document.getElementById("close");

bar.addEventListener("click",()=>
{
   
    navbar.classList.add("active");
    mobile.style.display="none"
});

close.addEventListener('click',()=>
{
    navbar.classList.remove("active");
    mobile.style.display='flex'
})

