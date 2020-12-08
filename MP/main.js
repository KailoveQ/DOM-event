const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')

let a =null
let n = 1
button1.onclick = () => {
    a=true
    console.log(a + '走冒泡')
}



button3.onclick=()=>{
    console.log('复位')
    location.reload();
}

level1.addEventListener('click', (e) => {
  const t = e.currentTarget
  setTimeout(()=>{  
    t.classList.remove('x')
  },n*1000)
  n+=1
  console.log(a)
},a)

level2.addEventListener('click', (e)=>{
  const t = e.currentTarget
  setTimeout(()=>{  
    t.classList.remove('x')
  },n*1000)
  n+=1
},a)

level3.addEventListener('click', (e)=>{
  const t = e.currentTarget
  setTimeout(()=>{  
    t.classList.remove('x')
  },n*1000)
  n+=1
},a)

level4.addEventListener('click', (e)=>{
  const t = e.currentTarget
  setTimeout(()=>{  
    t.classList.remove('x')
  },n*1000)
  n+=1
},a)

level5.addEventListener('click', (e)=>{
  const t = e.currentTarget
  setTimeout(()=>{  
    t.classList.remove('x')
  },n*1000)
  n+=1
},a)

level6.addEventListener('click', (e)=>{
  const t = e.currentTarget
  setTimeout(()=>{  
    t.classList.remove('x')
  },n*1000)
  n+=1
},a)

level7.addEventListener('click', (e)=>{
  const t = e.currentTarget
  setTimeout(()=>{  
    t.classList.remove('x')
  },n*1000)
  n+=1
},a)