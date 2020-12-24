//============== Data
const cars = [
    {
        id: 1,
        brand: 'Marca_1',
        model: 'Modelo_1',
        color: 'Default',
        year: 2020,
        price: 1300000
    },
    {
        id: 2,
        brand: 'Marca_2',
        model: 'Modelo_2',
        color: 'Default',
        year: 2020,
        price: 2300000
    },
    {
        id: 3,
        brand: 'Marca_3',
        model: 'Modelo_3',
        color: 'Default',
        year: 2020,
        price: 3300000
    },
    {
        id: 4,
        brand: 'Marca_4',
        model: 'Modelo_4',
        color: 'Default',
        year: 2020,
        price: 4300000
    },
    {
        id: 5,
        brand: 'Marca_5',
        model: 'Modelo_5',
        color: 'Default',
        year: 2020,
        price: 5300000
    },

];
//============== Print All
const printCars = ()=> {
    const container = document.getElementById('container-cars');
    let html = '';
    let selectCarImg ;
    cars.forEach((car) => {
        selectCarImg = carSelect();
        html += `<tr>
                        <td> ${car.brand} </td>
                        <td> ${car.model} </td>
                        <td> ${car.color} </td>
                        <td> ${car.year} </td>
                        <td> $${car.price} </td>
                        ${selectCarImg}
                        <td>
                            <button onclick = "updateCar(${car.id})" class = " btn btn-info ">
                                Update  
                            </button>
                            <button onclick = "deleteCar(${car.id})" class = " btn btn-danger">
                                Delete
                            </button>
                            
                             
                        </td>
                        
                </tr>`;

    });
    console.log(html,container);
    container.innerHTML = html;
}
function carSelect () {
    let imgCar = '<td><img src="images/img1.jpg" class="img-adapted"></td>';
    let randomNumber = Math.round(Math.random()*5);
    if(randomNumber === 1){
         imgCar = '<td><img src="images/img1.jpg" class="img-adapted"></td>';
    } else if(randomNumber === 2) {
        imgCar = '<td><img src="images/img2.jpg" class="img-adapted"></td>';
    }else if(randomNumber === 3) {
        imgCar = '<td><img src="images/img3.jpg" class="img-adapted"></td>';
    } else if(randomNumber === 4) {
        imgCar = '<td><img src="images/img4.jpg" class="img-adapted"></td>';
    }
    return imgCar;
}

//============== Delete
const deleteCar = (id) => {
    const index = cars.findIndex((car) => car.id == id);
    cars.splice(index,1);
    printCars();
    alert(`The car with the id ${id} is going to be eliminated`)
}

//============== Add

const addCar = () => {
    const inputBrand = document.getElementById('brand');
    const brand = inputBrand.value;

    const inputModel = document.getElementById('model');
    const model = inputModel.value;

    const inputColor = document.getElementById('color');
    const color = inputColor.value;

    const inputYear = document.getElementById('year');
    const year = inputYear.value;

    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;

    const id =  cars.length + 1;

    const newCar = {
        id,
        brand:brand,
        model:model,
        color:color,
        year:year,
        price:price
    }
    cars.push(newCar);
    printCars();
    document.getElementById('form-cars').reset();
}

//============== Update
const updateCar = (id) => {
    let option = prompt("Edit: \n 1. Brand    2. Model   3. Color   4. year   5. price        6. Photograpy (not available) ");
    if(option == 1) {
        let newBrand = prompt(`Current: ${cars[id-1].brand}. \n What is the new brand?`);
        cars[id-1].brand = newBrand;
    } else if(option == 2) {
        let newModel = prompt(`Current: ${cars[id-1].model}. \n What is the new Model? `);
        cars[id-1].model = newModel;
    } else if(option == 3) {
        let newColor = prompt(`Current: ${cars[id-1].color}. \n What is the new Color? `);
        cars[id-1].color = newColor;
    } else if(option == 4) {
        let newYear = prompt(`Current: ${cars[id-1].year}. \n What is the new Year?`);
        cars[id-1].year = newYear;
    } else if(option == 5) {
        let newPrice = prompt(`Current: $${cars[id-1].price} \n What is the new Price?`);
        cars[id-1].price = newPrice;
    } else {
        alert("This option is not Exist.");
    }

    printCars();
}

printCars();

// function showCard() {
//     document.getElementById('carCard').classList.toggle('hide')
// }
//============== Menu
function showCard() {
    let cardDiv = document.getElementById('carCard');
    if(cardDiv.style.display === "none") {
        cardDiv.style.display = "block";
    }else {
        cardDiv.style.display = "none";
    }
}