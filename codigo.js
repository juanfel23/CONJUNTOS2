function trimmer(element) {
    element = element.split(" ");
    element = element.filter((value) => value);
    return element.join(" ");
}

function interseccion() {
    let a = document.querySelector(".interseccion__a").value; a = a.split(","); a = a.map((element) => trimmer(element));
    let b = document.querySelector(".interseccion__b").value; b = b.split(","); b = b.map((element) => trimmer(element));
    let c = a.filter((value) => b.includes(value));
    c = c.filter((element) => element);
    c = c.join(", ");
    document.querySelector(".interseccion_resultado").value = c;
}
function union() {
    let a= document.querySelector(".union__a").value; a = a.split(","); a = a.map((element) => trimmer(element));
    let b = document.querySelector(".union__b").value; b = b.split(","); b = b.map((element) => trimmer(element));
    let c = a;
    b.forEach((element) => {
        if (!a.includes(element)) {
            c.push(element);
        }
    });
    c = c.filter((element) => element);
    c = c.join(", ");
    document.querySelector(".union_resultado").value = c;
}

function diferencia() {
    let a = document.querySelector(".diferencia__a").value; a = a.split(","); a = a.map((element) => trimmer(element));
    let b = document.querySelector(".diferencia__b").value; b = b.split(","); b = b.map((element) => trimmer(element));
    let c = a.filter((value) => !b.includes(value));
    c = c.filter((element) => element);
    c = c.join(", ");
    let d = b.filter((value) => !a.includes(value));
    d = d.filter((element) => element);
    d = d.join(", ");
    document.querySelector(".diferencia__resultado--a").value = c;
    document.querySelector(".diferencia__resultado--b").value = d;
}

function complemento() {
    let a = document.querySelector(".complemento__a").value;  a = a.split(","); a = a.map((element) => trimmer(element));
    let b = document.querySelector(".complemento__b").value;  b = b.split(","); b = b.map((element) => trimmer(element));
    let c = b.filter((value) => !a.includes(value));
    c = c.filter((element) => element);
    c = c.join(", ");
    document.querySelector(".complemento__resultado").value = c;
}
function reiniciar(seccion) {
    document.querySelectorAll(seccion).forEach((element) => {
        element.value = "";
    });
}

function ejemplo(num, seccion) {
    switch (num) {
        case 1:
            document.querySelector(seccion + "__a").value = "a, b, c, d, e, f";
            document.querySelector(seccion + "__b").value = "c, d, e, f, g, h";
            break;
        case 2:
            document.querySelector(seccion + "__a").value = "1, 2, 3, 4, 5";
            document.querySelector(seccion + "__b").value = "4, 5, 6, 7, 8";
            break;
        case 3:
            document.querySelector(seccion + "__a").value = "a, e, i, o, u";
            document.querySelector(seccion + "__b").value = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
            break;
        case 4:
            document.querySelector(seccion + "__a").value = "1, 2, 3, 4, 5";
            document.querySelector(seccion + "__b").value = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
            break;
        default:
            break;
    }
}