const carJulia = {
color: 'black',
name: 'Mazda',
maxSpeed: 156,
model: 'RX-7'
};


const carVasyl = {
    
    color: 'red',
    name: 'Audi',
    maxSpeed: 200,
    model: 'TT'
  };

  const carAndrew = {
    color: 'blue',
    name: 'BMW',
    maxSpeed: 300,
    model: 'X5'
};

const carDima = {
    color: 'blue',
    name: 'MyCar',
    maxSpeed: '220',
    model:'mustang'
};

const carOlena = {
    color: 'white',
    name: 'audi',
    maxSpeed: '180',
    model:'A6'
};

const objects ={
    carOlena,
    carDima,
    carAndrew,
    carVasyl,
    carJulia
}
  console.log(objects);

  const filtered = objects.filter(function(item) {

    return +item.maxSpeed > 200;
    /// 
  });

  console.log(filtered);