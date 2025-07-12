const box_1 = document.querySelector('.box-1');
const box_2 = document.querySelector('.box-2');
const box_3 = document.querySelector('.box-3');

const color_1 = document.querySelector('.color-1');
const color_2 = document.querySelector('.color-2');
const color_3 = document.querySelector('.color-3');



const book_notification = document.querySelector('.book-details');


function alrettoClick1()
{
    book_notification.textContent = "Your Hotel reservation is inactive now to activate it, please sign up first!";
}


box_1.addEventListener('click', alrettoClick1);


function alrettoClick2()
{
    book_notification.textContent = "Your Conference is inactive now to activate it, please sign up first!";
}


box_2.addEventListener('click', alrettoClick2);


function alrettoClick3()
{
    book_notification.textContent = "Your International Sport is inactive now to activate it, please sign up first!";
}


box_3.addEventListener('click', alrettoClick3);



function changeColor_1()
{
    color_1.style.backgroundColor = "blue";
};

color_1.addEventListener('mouseover', changeColor_1);

function Color_revert_1()
{
    color_1.style.backgroundColor = "#ffffff";
};

color_1.addEventListener('mouseout', Color_revert_1);


function changeColor_2()
{
    color_2.style.backgroundColor = "blue";
};

color_2.addEventListener('mouseover', changeColor_2);

function Color_revert_2()
{
    color_2.style.backgroundColor = "#ffffff";
};

color_2.addEventListener('mouseout', Color_revert_2);


function changeColor_3()
{
    color_3.style.backgroundColor = "blue";
};

color_3.addEventListener('mouseover', changeColor_3);

function Color_revert_3()
{
    color_3.style.backgroundColor = "#ffffff";
};

color_3.addEventListener('mouseout', Color_revert_3);
