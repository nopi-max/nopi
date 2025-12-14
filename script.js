function hitungCinta() {
    let nama1 = document.getElementById("nama1").value;
    let nama2 = document.getElementById("nama2").value;

    if (nama1 === "" || nama2 === "") {
        alert("Isi dulu kedua nama ya 💗");
        return;
    }

    let persen = Math.floor(Math.random() * 41) + 60;

    document.getElementById("hasil").innerText =
        `${nama1} 💖 ${nama2} = ${persen}% cocok!`;

    buatHati();
}

function buatHati() {
    const hearts = document.querySelector(".hearts");

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("span");
        heart.innerHTML = "💗";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        hearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
