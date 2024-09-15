

// array methods 
/* 
friends.sort();
friends.reverse();


 friends.push()
 friends.pop()


 friends.unshift( "hammmmadaa" )
 friends.shift(  )


  friends.splice(   2    ,    3  ) // remove

 friends.splice(   3    ,    0   ,   "ali"   ) // add 


  friends.splice(   3    ,    1   ,   "ali"   ) // add    + remove (update)



 friends.includes( "ali" )
  friends.indexOf("usama"   , 3 )
  friends.lastIndexOf("usama"   , 3 )


   friends.join(  " "  )

*/
 
            //  0           1       2           3          4                5


var productNameInput=document.getElementById("productName")
var productPriceInput=document.getElementById("productPrice")
var productCategoryInput=document.getElementById("productCategory")
var productDescriptionInput=document.getElementById("productDescription")
var productImageInput=document.getElementById("productImage")
var productSearchInput=document.getElementById("productsearch")
var btnAdd=document.getElementById("btnAdd")
var btnUpdate=document.getElementById("btnUpdate")
var index= 0;

var productlist=[];



if(localStorage.getItem("productcontainer")!== null){
   productlist=JSON.parse(localStorage.getItem('productcontainer'));
   displayData();
}


//add=========
function addproduct(){
   if(validationName()==true){
      var product={
         name:productNameInput.value,
         price:productPriceInput.value,
         category:productCategoryInput.value,
         description:productDescriptionInput.value,
         image:productImageInput.files[0]?.name ?`images/${productImageInput.files[0].name}`:'images/1.jpg',
      };
      productlist.push(product);
      localStorage.setItem("productcontainer",JSON.stringify(productlist));
      displayData();
      clearform();
      console.log(productlist);
   }
}


//clear ===========

function clearform(){
   productNameInput.value=null;
   productPriceInput.value=null;
   productCategoryInput.value=null;
   productDescriptionInput.value=null;
   productImageInput.value=null;
}


// delet======
function deletItem(indexItem){
productlist.splice( indexItem , 1);
localStorage.setItem("productcontainer",JSON.stringify(productlist));
displayData();
console.log(productlist)
}


//data============
function displayData(){
   var term = productSearchInput.value;
   var cartona="";
   for(var i=0; i<productlist.length;i++){
  if(productlist[i].name.toLowerCase().includes(term.toLowerCase())==true){
   cartona+=`
   <tr>
   <td>${i}</td>
   <td>${productlist[i].name}</td>
   <td>${productlist[i].price}</td>
   <td>${productlist[i].category}</td>
   <td>${productlist[i].description}</td>
   <td>
     <img width="100px" src="${productlist[i].image}" alt="product">
   </td>

   <td>
     <button class="btn btn-outline-warning btn-sm" onclick="setFormUpdate(${i})">Update</button>
     <button class="btn btn-outline-danger btn-sm" onclick="deletItem(${i})">Delete</button>
   </td>
 </tr>
   `
  }
   }
   document.getElementById("tabledata").innerHTML=cartona;

}


//updata====

function setFormUpdate(indexElement){
   productNameInput.value =productlist[indexElement].name
   productPriceInput.value =productlist[indexElement].price
   productCategoryInput.value =productlist[indexElement].category
   productDescriptionInput.value =productlist[indexElement].description

   btnAdd.classList.add('d-none');
   btnUpdate.classList.remove('d-none');
   index=indexElement;


}

function updateData(){
   var product={
      name:productNameInput.value,
      price:productPriceInput.value,
      category:productCategoryInput.value,
      description:productDescriptionInput.value,
      image:productImageInput.files[0]?.name ?`images/${productImageInput.files[0].name}`:'images/1.jpg',
   };
   productlist.splice( index ,   1  , product);
   localStorage.setItem("productcontainer",JSON.stringify(productlist));
   displayData();
   clearform();
}






//regex======== 
function validationName(){
   var text=productNameInput.value;
   var regex=/^[A-Z][a-z]{3,8}$/;
   var masagNameElement=document.getElementById(masagName)
   if(regex.test(text)==true){
productNameInput.classList.add('is-valid')
productNameInput.classList.remove('is-invalid')
// masagNameElement.classList.add('d-none')

return true;
   }
   else{

      productNameInput.classList.remove('is-valid')
      productNameInput.classList.add('is-invalid')
      // masagNameElement.classList.remove('d-none')
      return false
   }
}











