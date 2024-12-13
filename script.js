
let dataPro;
let tittle = document.getElementById('tittle');
let price = document.getElementById('price');
let tax = document.getElementById('tax');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood='create';
let tmp;

function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +tax.value+ +ads.value) - +discount.value;
        total.innerHTML= result;
        total.style.background='green';
    }else{
        total.innerHTML = '';
        total.style.background = 'red';
    }
}

if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product);
}
else{
    dataPro = [];
}

submit.onclick = function(){
    
    let newPro = {
        tittle: tittle.value.toLowerCase(),
        price:  price.value,
        tax : tax.value,
        ads : ads.value,
        discount : discount.value,
        total: total.innerHTML,
        count: count.value,
        category : category.value.toLowerCase()
    }
    if(tittle.value != '' && price.value!=''&& newPro.count<10){
        if(mood === 'create'){
            if (newPro.count>1){
            for (let i =0 ; i<newPro.count;i++){
                dataPro.push(newPro);
            }
            }
            else{
                dataPro.push(newPro);
        } 
    }
        else{
            dataPro[tmp]=newPro;
            mood='create';
            submit.innerHTML="Create";
            count.style.display="block";
        }
        clearData();
}


    localStorage.product=JSON.stringify(dataPro);
    
    showData();
    
}
function clearData(){
    tittle.value='';
    price.value='';
    tax.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}
function showData(){
    getTotal();
    let table='';
    for(let i=0 ; i< dataPro.length ;i++){

    
     table += `
        <tr>
                        <td>${i+1}</td>
                        <td>${dataPro[i].tittle}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].tax}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">Update</button></td>
                        <td><button onclick="deleteIteam(${i})" id="delete">delete</button></td>
                    </tr>
    `;
    }
    document.getElementById('tbody').innerHTML = table;
    let dtndeleteAll=document.getElementById("deleteAll");
    if(dataPro.length>0){
        dtndeleteAll.innerHTML=`
        <button onclick="deleteAll()" >Delete All(${dataPro.length})</button>
        `;
    }else{
        dtndeleteAll.innerHTML=``;
    }
}
function deleteIteam(i){
    dataPro.splice(i,1);
    localStorage.product=JSON.stringify(dataPro);
    showData();
}
function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}
function updateData(i){
    tittle.value = dataPro[i].tittle;
    price.value = dataPro[i].price;
    tax.value = dataPro[i].tax;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    category.value = dataPro[i].category;
    getTotal();
    count.style.display = 'none';
    submit.innerHTML="Update";
    mood='update';
    tmp = i;
    scroll({
        top:0,
        behavior:"smooth",
    })
}
let searchMood = 'title'; 
function search(id){
    let searcha = document.getElementById('search');
    
    if(id =='serachTitle'){
        searchMood = 'title';
        searcha.placeholder='search by title';
    }else{
        searchMood = 'category';
        searcha.placeholder='search by category';
    }
    searcha.focus();
    searcha.value='';
    showData();
}
function searchData(value){
    let table='';
    if(searchMood == 'title'){
        for(let i=0 ; i < dataPro.length; i++){
            if(dataPro[i].tittle.includes(value.toLowerCase())){
                table += `
                    <tr>
                        <td>${i}</td>
                        <td>${dataPro[i].tittle}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].tax}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">Update</button></td>
                        <td><button onclick="deleteIteam(${i})" id="delete">delete</button></td>
                    </tr>`;
    
            }
        };
    }
    else
    {
        for(let i=0 ; i < dataPro.length; i++){
            if(dataPro[i].category.includes(value.toLowerCase())){
                table += `
                    <tr>
                        <td>${i}</td>
                        <td>${dataPro[i].tittle}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].tax}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">Update</button></td>
                        <td><button onclick="deleteIteam(${i})" id="delete">delete</button></td>
                    </tr>
    `;
            };
        };
    }
    
    document.getElementById('tbody').innerHTML=table;
}


showData();