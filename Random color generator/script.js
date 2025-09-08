const getColor = () => {
    // ------Color code are in Hex code------- //

    const ranNumber = Math.floor(Math.random() * 16777215);
    const ranCode = "#" + ranNumber.toString(16);
    document.body.style.backgroundColor = ranCode;
    document.getElementById("color-code").innerText = ranCode;
}

document.getElementById("btn").addEventListener(
    "click" , getColor
)

//Init call
getColor();