let topTo = document.querySelector(".top")
topTo.addEventListener("click", function (e) {
    scrollTo(0, 0);
})


let timer = null;
let moredeg = 0;
let listdom = document.querySelector(".map .list");
let teachdom = document.querySelector(".map .teacher")
let mapdom = document.querySelector(".map");

function init(num) {
    // 选择到每个item
    let items = document.querySelectorAll(".map .item");
    let count = items.length;
    let r = 250;
    let evdeg = 2 * Math.PI / count;
    for (let i = 0; i < count; i++) {
        let mydeg = num + i * evdeg;
        let el = items[i];
        let x = Math.sin(mydeg) * r;
        let y = -Math.cos(mydeg) * r;
        el.style.transform = `translate(${x}px, ${y}px)`;
    }
}

function start() {
    if (timer) {
        return;
    }
    timer = setInterval(function () {
        moredeg += 0.01;
        if (moredeg >= (2 * Math.PI)) {
            moredeg = moredeg % (2 * Math.PI);
        }
        init(moredeg);
    }, 16);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

start();

listdom.addEventListener("mouseenter", stop);
listdom.addEventListener("mouseleave", start);

mapdom.onmousemove = function (e) {
    let eX = e.clientX;
    if (eX < document.documentElement.clientWidth / 2) {
        teachdom.classList.add("left");
    }
    else {
        teachdom.classList.remove("left");
    }
}

