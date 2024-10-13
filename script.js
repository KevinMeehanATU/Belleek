	fetch("https://belleekstock-default-rtdb.europe-west1.firebasedatabase.app/Stock.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.date}</td>
            <td>${product.productid}</td>
            <td>${product.quantity}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});