const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle')
const progress=document.getElementById('progress')

let activeCircles=1;

next.addEventListener('click',()=>{
    activeCircles++

    // console.log(activeCircles,circles.length);
    if(activeCircles > circles.length){
        activeCircles=circles.length
    }

    update()
})

prev.addEventListener('click',()=>{
    activeCircles--

    // console.log(activeCircles);
    if(activeCircles < 1){
        activeCircles=1
    }

    update()
})

function update(){

    circles.forEach((circle, idx)=>{
        if(idx< activeCircles){
            circle.classList.add('active')
        }
        else circle.classList.remove('active')
    })

    progress.style.width = (activeCircles-1)/(circles.length-1)*100+'%'

    if(activeCircles===1) prev.disabled=true
    else if(activeCircles=== circles.length) next.disabled = true
    else{
        prev.disabled = false
        next.disabled = false
    }
}

