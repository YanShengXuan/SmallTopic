filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("anti");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


// ******************************************************

var totalPrice = 0;

function addToShopCart(nameId, priceId, sizeId, countId){
    const name = document.getElementById(nameId).innerText;
    const price = parseInt(document.getElementById(priceId).innerText.replace("NT. ",""))
    const size = document.getElementById(sizeId).value;
    const count = parseInt(document.getElementById(countId).value);

    if(size === "0" || count === 0){
        return alert("請確認商品尺寸或數量是否正確");
    }

    console.log(name);
    console.log(price);
    console.log(size);
    console.log(count);


    const itemTotal = price * count;
    totalPrice += itemTotal;

    const shopCartItem = document.getElementById("shopCartItem");
    const itemDiv = document.createElement("div");

    itemDiv.className = "border-top py-2";
    itemDiv.innerHTML = `
        <p>${name}</p>
        <p>尺寸：${size}</p>
        <p>數量：${count}</p>
        <p>小計：${itemTotal}元</p>
    `;
    shopCartItem.appendChild(itemDiv);
    document.getElementById("totalPrice").innerText = totalPrice;

    document.getElementById(sizeId).value = "0";
    document.getElementById(countId).value = "0";
}

// ******************************************************

function clearShopCart(){
    totalPrice = 0;
    document.getElementById("shopCartItem").innerHTML = "";
    document.getElementById("totalPrice").innerText = totalPrice;
    alert("功能未開放");
}