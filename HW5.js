let obj = {
    age: 33,
    weight: 87,
    height: 186,

    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

obj.getInfo();

obj.sex = 'male';

obj.getInfo(); 

// 7.1 вже здав. Доздаю 7.2


var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  services['Розбити скло'] = "200 грн";
  
  var serviceMethods = {
    price: function() {
      let total = 0;
      for (let key in services) {
        total += parseInt(services[key]);
      }
      return total;
    },
    
    minPrice: function() {
      let prices = Object.values(services).map(price => parseInt(price));
      return Math.min(...prices);
    },
    
    maxPrice: function() {
      let prices = Object.values(services).map(price => parseInt(price));
      return Math.max(...prices);
    }
  };
  
  console.log("Загальна вартість послуг: " + serviceMethods.price() + " грн");
  console.log("Мінімальна ціна: " + serviceMethods.minPrice() + " грн");
  console.log("Максимальна ціна: " + serviceMethods.maxPrice() + " грн");  