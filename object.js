const data =  {
  id: 1,
  name: "Leanne Graham" ,
  username: "Bret",
  email: "Sincere@april.biz" ,
  address: {
    street: "Kulas Light" ,
    suite: "Apt. 556",
    city: "Gwenborough" ,
    zipcode: "92998-3874" ,
  },
  phone: "1-770-736-8031 x56442" ,
  website: "hildegard.org" ,
}

const changeData = {
  ...data,
  name: 'Andria Bakti',
  email: 'andr@gmail.com',
  hobby: 'main game'
}

data.name = 'Andria'
console.log(data.name)
// console.log('Ini changeData: ', changeData);

const {city, street, suite, zipcode} = data.address
console.log(data.address.city);
console.log(data.address.street);
