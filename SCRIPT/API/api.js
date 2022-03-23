function getUser() {
  console.log(getUser)
  const config = {
    method: "get"
  };
  fetch('https://fakestoreapi.com/products/1', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/2', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/3', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/4', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/5', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/6', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/7', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/8', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/9', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })
    .catch(error => console.log("fetch 에러!"));


    fetch('https://fakestoreapi.com/products/10', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/11', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/12', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/13', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/14', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/15', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/16', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/17', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/18', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/19', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })

    fetch('https://fakestoreapi.com/products/20', config)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const title = document.createElement("div");
      const price = document.createElement("div");
      const description = document.createElement("div");
      const category = document.createElement("div");
      const image = document.createElement("img");
      image.src = 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
      title.textContent = data.title;
      price.textContent = data.price;
      description.textContent = data.description;
      category.textContent = data.category;
      const userInfo = document.getElementById("userInfo");
      userInfo.appendChild(image);
      userInfo.appendChild(title);
      userInfo.appendChild(price);
      userInfo.appendChild(description);
      userInfo.appendChild(category);

    })
    .catch(error => console.log("fetch 에러!"));
}
