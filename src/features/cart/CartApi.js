export function addToCart(items) {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8080/cart",{
      method:"POST",
      body:JSON.stringify(items),
      headers:{"content-type":"application/json"}
    });
    const data = await res.json();
    resolve(data);
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const res = await fetch(" http://localhost:8080/cart?user="+userId);
    const data = await res.json();
    resolve({data});
  }); 
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8080/cart/"+update.id,{
      method:"PATCH",
      body:JSON.stringify(update),
      headers:{"content-type":"application/json"}
    });
    const data = await res.json();
    resolve(data);
  });
}