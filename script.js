//Take span elements from html doc in the form of array
let title=document.querySelectorAll('.title')
let brand=document.querySelectorAll('.brand')
let price=document.querySelectorAll('.price')
let rating=document.querySelectorAll('.rating')
let stock=document.querySelectorAll('.stock')



//fetch data from given api
fetch('https://dummyjson.com/products')
    .then((response)=>{return response.json()})//response object converts to data we need
    .then((response)=>{
        let arr=response.products //data in the form of array
        for(let i=0;i<arr.length;i++){
            title[i].innerText=arr[i].title //assign values to each span element
            brand[i].innerText=arr[i].brand
            price[i].innerText=arr[i].price + " $"
            rating[i].innerText=arr[i].rating
            stock[i].innerText=arr[i].stock
        }
    })
    .catch((error)=>{
        console.log(error)
    })