export const loadMenu = () => {
    const pageContent = document.getElementById("content");

    function Item(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    const sideItems = [
        new Item(
            "French Toast and Syrup", 
            "A slice of toast, your choice of bread, cooked in eggs, coupled with a serving of maple syrup.", 
            2
        ), 
        new Item(
            "Fresh Fruit",
            "A small bowl of fresh fruits, consisting of strawberries, blueberries, bananas, dragonfruit and oranges.",
            3
        )
    ]

    const mainItems = [
        new Item(
            "Pancakes",
            "A stack of Japanese fluffy pancakes, served with a side of maple syrup and serving of fruits.",
            4,
        ),
        new Item(
            "Beef Sandwich",
            "A 6 inch sandwich consisting of cheddar cheese, our secret sauce, lettuc, tomatoes and our freshly smoked brisket.",
            9,
        ),
        new Item(
            "Beef Lasagna",
            "6 layers of cheese, lasagna sheets and ground beef, topped with tomato sause. This lasagna is both mouth-watering and scrumptious.",
            8,
        )
    ]

    const drinkItems = [
        new Item(
            "Iced Lemon Tea",
            "Freshly squeezed lemon, mixed with honey syrup and a dash of lime",
            2,
        ),
        new Item(
            "Hot Chocolate",
            "Drink made with whole cream milk and melted chocolate.",
            3,
        )
    ]

    pageContent.innerHTML = `
        <div id="menu-title" class="title">Menu</div>
        <div id="side-items" class="menu"></div>
        <div id="main-items" class="menu"></div>
        <div id="drink-items" class="menu"></div>
    `

    const sideContent = document.getElementById("side-items");
    const mainContent = document.getElementById("main-items");
    const drinkContent = document.getElementById("drink-items");

    sideContent.innerHTML = `
        <div class="title">Side Dishes</div>
        <div>
        ${
            sideItems.reduce((acc, item) => {
                acc += `
                <div class="card">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-price">$${item.price}</div>
                </div>
                `
                return acc;
            }, ``)
        }
        </div>
    `

    mainContent.innerHTML = `
        <div class="title">Main Dishes</div>
        <div>
        ${
            mainItems.reduce((acc, item) => {
                acc += `
                <div class="card">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-price">$${item.price}</div>
                </div>
                `
                return acc;
            }, ``)
        }
        </div>
    `

    drinkContent.innerHTML = `
        <div class="title">Beverage</div>
        <div>
        ${
            drinkItems.reduce((acc, item) => {
                acc += `
                <div class="card">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-price">$${item.price}</div>
                </div>
                `
                return acc;
            }, ``)
        }
        </div>
    `
}