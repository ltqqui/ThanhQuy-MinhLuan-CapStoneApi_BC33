function getProduct() {
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    responseType: "json",
  });
  promise.then(function (result) {
    console.log(result.data);
    renderProduct(result.data.content);
  });
  promise.catch(function (err) {
    console.log("err");
  });
}
getProduct();

window.onload = function () {
  getProduct();
};

function renderProduct(arrProduct) {
  var html = "";
  for (var i = 0; i < arrProduct.length; i++) {
    var pr = arrProduct[i];
    html += `
    
    <div class="col">
            <div class="item">
                <div class="thumbnail">
          <img src="${pr.image}" alt="">
        <h3>${pr.name}</h3>
        <p>${pr.description}</p>
        <div class="btn" >
        <a href="../page/detail.html?Productid=${pr.id}">Buy now</a>

        <span>${pr.price}$</span>
        </div>
                </div>
            </div>
           </div>
        `;
  }
  document.querySelector("#render").innerHTML = html;
}