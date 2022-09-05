window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParams = urlParams.get('Productid');
  console.log('params', myParams)

  function getProductDetail() {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParams,

      method: "GET",
      responseType: "json",
    });
    promise.then(function (result) {
      console.log(result.data);
      renderProductDetail(result.data.content);
    });
    promise.catch(function (err) {
      console.log("err");
    });
  }


  getProductDetail();
}





function renderProductDetail(arrProduct) {
  var pr = arrProduct;
  var html = `
    <div class="left">
    <img src=${pr.image} alt=${pr.alias}} />
  </div>
  <div class="right">
    <h2>${pr.name}</h2>
    <p class="product-desc">
     ${pr.description}
    </p>
    <h4 class="size-text">Available Size</h4>
    <div class="size">
    ${Array(7)
      .join(0)
      .split(0)
      .map(
        (item, i) => `
    <a href="#">${pr.size[i]}</a>
  `
      )
      .join("")}
    </div>
    <h3 class="price">${pr.price}$</h3>
    <div class="group-input">
          <button onclick="increaseInput" class="disable">+</button>
          <input id="number" type="text" value="1" class="input" />
          <button onclick="reduceInput" class="disable">-</button>
        </div>
        <div class="group-button">
          <button type="button">Add to cart</button>
  </div>
            `;
  document.querySelector("#renderDetail").innerHTML = html;
}