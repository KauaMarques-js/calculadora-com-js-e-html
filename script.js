let display = document.querySelector('#disp')
function x(operador){
    display.value += operador
}

function menos(operador){
    display.value += operador
}
function mais(operador){
    display.value += operador
}
function divisao(operador){
    display.value += operador
}
function igual(){
    try{
    display.value = eval(display.value)
    }catch (e){
        display.value = "Erro"
    }
}
function poten(operador){
    display.value += operador
}
function sete(){
    display.value += 7
}
function oito(){
    display.value += 8
}
function nove(){
    display.value += 9
}
function quatro(){
    display.value += 4
}
function cinco(){
    display.value += 5
}
function seis(){
    display.value += 6
}
function um(){
    display.value += 1
}
function dois(){
    display.value += 2
}
function tres(){
    display.value += 3
}
function zero(){
    display.value += 0
}
function ac(){
    display.value = ''
}
function c(){
    display.value = display.value.slice(0, -1)
}