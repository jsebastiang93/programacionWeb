var temp;
var text="";

const a = document.querySelector('#letra_a');
const b = document.querySelector('#letra_b');
const c = document.querySelector('#letra_c');
const d = document.querySelector('#letra_d');
const e = document.querySelector('#letra_e');
const f = document.querySelector('#letra_f');
const g = document.querySelector('#letra_g');
const h = document.querySelector('#letra_h');
const i = document.querySelector('#letra_i');
const j = document.querySelector('#letra_j');
const k = document.querySelector('#letra_k');
const l = document.querySelector('#letra_l');
const m = document.querySelector('#letra_m');
const n = document.querySelector('#letra_n');
const o = document.querySelector('#letra_o');
const p = document.querySelector('#letra_p');
const q = document.querySelector('#letra_q');
const r = document.querySelector('#letra_r');
const s = document.querySelector('#letra_s');
const t = document.querySelector('#letra_t');
const u = document.querySelector('#letra_u');
const v = document.querySelector('#letra_v');
const w = document.querySelector('#letra_w');
const x = document.querySelector('#letra_x');
const y = document.querySelector('#letra_y');
const z = document.querySelector('#letra_z');
const cs_1 = document.querySelector('#casilla_1');
const cs_2 = document.querySelector('#casilla_2');
const cs_3 = document.querySelector('#casilla_3');
const cs_4 = document.querySelector('#casilla_4');
const cs_5 = document.querySelector('#casilla_5');
const cs_6 = document.querySelector('#casilla_6');
const cs_7 = document.querySelector('#casilla_7');
const cs_8 = document.querySelector('#casilla_8');
const cs_9 = document.querySelector('#casilla_9');
const borrar = document.querySelector('#borrar');

function validarTexto(text){
    //alert(text);
    if(text === "papa"){
        alert("Escribiste: "+text);
    } else if(text === "mama"){
        alert("Escribiste: "+text);
    } else if(text === "oso"){
        alert("Escribiste: "+text);
    }
}

a.addEventListener('click', (event) => {
    temp = document.getElementById("letra_a").src;
    text=text+"a";
    console.log(text);

});
b.addEventListener('click', (event) => {
    temp = document.getElementById("letra_b").src;
    text=text+"b";
    console.log(text);
});
c.addEventListener('click', (event) => {
    temp = document.getElementById("letra_c").src;
    text=text+"c";
    console.log(text);
});
d.addEventListener('click', (event) => {
    temp = document.getElementById("letra_d").src;
    text=text+"d";
    console.log(text);
});
e.addEventListener('click', (event) => {
    temp = document.getElementById("letra_e").src;
    text=text+"e";
    console.log(text);
});
f.addEventListener('click', (event) => {
    temp = document.getElementById("letra_f").src;
    text=text+"f";
    console.log(text);
});
g.addEventListener('click', (event) => {
    temp = document.getElementById("letra_g").src;
    text=text+"g";
    console.log(text);
});
h.addEventListener('click', (event) => {
    temp = document.getElementById("letra_h").src;
    text=text+"h";
    console.log(text);
});
i.addEventListener('click', (event) => {
    temp = document.getElementById("letra_i").src;
    text=text+"i";
    console.log(text);
});
j.addEventListener('click', (event) => {
    temp = document.getElementById("letra_j").src;
    text=text+"j";
    console.log(text);
});
k.addEventListener('click', (event) => {
    temp = document.getElementById("letra_k").src;
    text=text+"k";
    console.log(text);
});
l.addEventListener('click', (event) => {
    temp = document.getElementById("letra_l").src;
    text=text+"l";
    console.log(text);
});
m.addEventListener('click', (event) => {
    temp = document.getElementById("letra_m").src;
    text=text+"m";
    console.log(text);
});
n.addEventListener('click', (event) => {
    temp = document.getElementById("letra_n").src;
    text=text+"n";
    console.log(text);
});
o.addEventListener('click', (event) => {
    temp = document.getElementById("letra_o").src;
    text=text+"o";
    console.log(text);
});
p.addEventListener('click', (event) => {
    temp = document.getElementById("letra_p").src;
    text=text+"p";
    console.log(text);
});
q.addEventListener('click', (event) => {
    temp = document.getElementById("letra_q").src;
    text=text+"q";
    console.log(text);
});
r.addEventListener('click', (event) => {
    temp = document.getElementById("letra_r").src;
    text=text+"r";
    console.log(text);
});
s.addEventListener('click', (event) => {
    temp = document.getElementById("letra_s").src;
    text=text+"s";
    console.log(text);
});
t.addEventListener('click', (event) => {
    temp = document.getElementById("letra_t").src;
    text=text+"t";
    console.log(text);
});
u.addEventListener('click', (event) => {
    temp = document.getElementById("letra_u").src;
    text=text+"u";
    console.log(text);
});
v.addEventListener('click', (event) => {
    temp = document.getElementById("letra_v").src;
    text=text+"v";
    console.log(text);
});
w.addEventListener('click', (event) => {
    temp = document.getElementById("letra_w").src;
    text=text+"w";
    console.log(text);
});
x.addEventListener('click', (event) => {
    temp = document.getElementById("letra_x").src;
    text=text+"x";
    console.log(text);
});
y.addEventListener('click', (event) => {
    temp = document.getElementById("letra_y").src;
    text=text+"y";
    console.log(text);
});
z.addEventListener('click', (event) => {
    temp = document.getElementById("letra_z").src;
    text=text+"z";
    console.log(text);
});

cs_1.addEventListener('click', (event) => {
    document.getElementById("casilla_1").src = temp;
    validarTexto(text);
});
cs_2.addEventListener('click', (event) => {
    document.getElementById("casilla_2").src = temp;
    validarTexto(text);
});
cs_3.addEventListener('click', (event) => {
    document.getElementById("casilla_3").src = temp;
    validarTexto(text);
});
cs_4.addEventListener('click', (event) => {
    document.getElementById("casilla_4").src = temp;
    validarTexto(text);
});
cs_5.addEventListener('click', (event) => {
    document.getElementById("casilla_5").src = temp;
    validarTexto(text);
});
cs_6.addEventListener('click', (event) => {
    document.getElementById("casilla_6").src = temp;
    validarTexto(text);
});
cs_7.addEventListener('click', (event) => {
    document.getElementById("casilla_7").src = temp;
    validarTexto(text);
});
cs_8.addEventListener('click', (event) => {
    document.getElementById("casilla_8").src = temp;
    validarTexto(text);
});
cs_9.addEventListener('click', (event) => {
    document.getElementById("casilla_9").src = temp;
    validarTexto(text);
});


borrar.addEventListener('click', (event) => {
    document.getElementById("casilla_1").src = "src/gris.png";
    document.getElementById("casilla_2").src = "src/gris.png";
    document.getElementById("casilla_3").src = "src/gris.png";
    document.getElementById("casilla_4").src = "src/gris.png";
    document.getElementById("casilla_5").src = "src/gris.png";
    document.getElementById("casilla_6").src = "src/gris.png";
    document.getElementById("casilla_7").src = "src/gris.png";
    document.getElementById("casilla_8").src = "src/gris.png";
    document.getElementById("casilla_9").src = "src/gris.png";
    temp = 0;
    text = "";
});