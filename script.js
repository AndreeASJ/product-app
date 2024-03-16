class Product {
    constructor(name, price, quantity, date){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }
}

class UI{
    showMessage(message, cssClass){
        const element = document.createElement('div');
        element.className = `alert alert-${cssClass} mt-2`;
        element.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000) //Callback function
    }
    
} 

document.getElementById('product-form').addEventListener('submit', function(e){  //Callback event
    e.preventDefault();
    const ui = new UI();
    ui.showMessage('Product added successfully', 'success');
});
