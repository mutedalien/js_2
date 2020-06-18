'use strict';

class Menu {
    constructor() {
        this.menu = this.fetchMenu();
        this.size = this.menu.size;
        this.stuffing = this.menu.stuffing;
        this.topping = this.menu.topping;
        this.render();
    }

    fetchMenu() {
        return {
            size: [
                {"id": "sm", "price": 50, "calorie": 20, "text": "Маленький (50 RUB, 20 kcal)"},
                {"id": "lg", "price": 100, "calorie": 40, "text": "Большой (100 RUB, 40 kcal)"}
            ],
            stuffing: [
                {"id": "1", "price": 10, "calorie": 20, "text": "С сыром (+10 RUB, +20 kcal)"},
                {"id": "2", "price": 20, "calorie": 5, "text": "С салатом (+20 RUB, +5 kcal)"},
                {"id": "3", "price": 15, "calorie": 10, "text": "С картофелем (+15 RUB, +10 kcal)"}
            ],
            topping: [
                {"id": "1", "price": 15, "calorie": 0, "text": "Посыпать приправой (+15 RUB, +0 kcal)"},
                {"id": "2", "price": 20, "calorie": 5, "text": "Полить майонезом (+20 RUB, +5 kcal)"}
            ]
        }
    }
    render() {
        document.getElementById('size').insertAdjacentHTML("afterbegin", this._createHTML(this.size, "option"));
        document.getElementById('stuffing').insertAdjacentHTML("afterbegin", this._createHTML(this.stuffing, "option"));
        document.getElementById('topping').insertAdjacentHTML("afterbegin", this._createHTML(this.topping, "checkbox"));
    }
    
    _createHTML(section, tag = 'option') {
        switch (tag) {
            case "option":
                return section.map(item => `<option value="${item.id}">${item.text}</option>`).join('');
            case "checkbox":
                return section.map(item => `<input type="checkbox" name="topping" value="${item.id}" id="topping${item.id}">
                    <label for="topping${item.id}"> ${item.text}</label><br>`).join('');
        }
    }
}

class Burger {
    constructor(menu) {
        this.menu = menu;
        this.size = menu.size[0];
        this.stuffing = menu.stuffing[0];
        this.toppings = [];
        this.calculatePrice();
        this.calculateCalories();
    }

    changeIngredient(target) {
        let index = this.menu[target.name].findIndex(x => x.id === target.value);
        let ingredient = this.menu[target.name][index];

        switch (target.name) {
            case "size":
                this.size = ingredient;
                break;
            case "stuffing":
                this.stuffing = ingredient;
                break;
            case "topping":
                if (target.checked === true) {
                    this.addTopping(ingredient);
                } else {
                    this.removeTopping(ingredient);
                }
                break;
        }
        this.calculatePrice();
        this.calculateCalories();
    }

    addTopping(topping) {
            this.toppings.push(topping);
    }

    removeTopping(topping) {
            this.toppings.splice(this.toppings.indexOf(topping), 1);
    }

    calculatePrice() {
        let price = this.size.price + this.stuffing.price;
        this.toppings.forEach(item => price += item.price);
        document.querySelector('.price').innerText = price + " RUB";
    }

    calculateCalories() {
        let calorie = this.size.calorie + this.stuffing.calorie;
        this.toppings.forEach(item => calorie += item.calorie);
        document.querySelector('.calorie').innerText = calorie + " KCal";
    }
}

const menu = new Menu();
const burger = new Burger(menu);
document.getElementById('form').addEventListener('change', (event) => burger.changeIngredient(event.target));
