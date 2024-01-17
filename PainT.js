const canvas = document.querySelector("canvas")
const context = canvas.getContext('2d')
const brushWidth = document.querySelector('#brush-width')
const colorPicker = document.querySelector('#color-picker')
const brush = document.querySelector('#brush')
const eraser = document.querySelector('#eraser')
const clearBtn = document.querySelector('#clear')
const saveBtn = document.querySelector('#save')


window.addEventListener("load" , function(){
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    context.fillStyle = 'white'
    context.fillRect(0,0,canvas.width,canvas.height)
})

let isDrawing = false

function startDraw(){
    isDrawing = true
    context.beginPath()
    context.lineWidth = currenWidth
}

function drawing(e){
    if(!isDrawing) {
        return
    }
    context.lineTo(e.offsetX , e.offsetY)
    context.stroke()
    context.strokeStyle = currenColor
}

function endDraw(){
    isDrawing = false
}

canvas.addEventListener("mousedown", startDraw)
canvas.addEventListener("mousemove", drawing )
canvas.addEventListener("mouseup"  , endDraw)


/* width and color */
let currenWidth = 7
brushWidth.addEventListener("change", function(){
    currenWidth = brushWidth.value
})
let currenColor =""
colorPicker.addEventListener('change', function(){
    currenColor = colorPicker.value 
})


/* active class and eraser */
eraser.addEventListener('click', function(){
    eraser.firstElementChild.classList.add('active')
    brush.firstElementChild.classList.remove('active')
    currenColor = 'white'
})
brush.addEventListener('click', function(){
    brush.firstElementChild.classList.add('active')
    eraser.firstElementChild.classList.remove('active')
    currenColor = colorPicker.value
})


/* clear and save */
clearBtn.addEventListener('click' , function(){
    context.fillRect(0,0,canvas.width,canvas.height)
})
saveBtn.addEventListener('click', function(){
    let link = document.createElement('a')
    link.download = 'Drawing.jpg'
    link.href = canvas.toDataURL()
    link.click()
})

