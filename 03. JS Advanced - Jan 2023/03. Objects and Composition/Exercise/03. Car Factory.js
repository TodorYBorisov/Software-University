function carFactory(order) {

    const modelcar = {
        model: null,
        engine: { power: null, volume: null },
        carriage: { type: null, color: null },
        wheels: [],
    };
    modelcar.model = order.model;

    const smallEngine = { power: 90, volume: 1800 };
    const normalengine = { power: 120, volume: 2400 };
    const monsterMngine = { power: 200, volume: 3500 };
    if (order.power <= 90) {
        modelcar.engine = smallEngine;
    } else if (order.power <= 120) {
        modelcar.engine = normalengine;
    } else if (order.power <= 200) {
        modelcar.engine = monsterMngine;
    }

     modelcar.carriage.color=order.color;
     modelcar.carriage.type=order.carriage;

    if (order.wheelsize % 2 === 0) {
        let wheel = --order.wheelsize;
        modelcar.wheels.push(wheel, wheel, wheel, wheel);
    }else{
        modelcar.wheels.push(order.wheelsize,order.wheelsize,order.wheelsize,order.wheelsize);
    }

    return modelcar;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 17
}
));