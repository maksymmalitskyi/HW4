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