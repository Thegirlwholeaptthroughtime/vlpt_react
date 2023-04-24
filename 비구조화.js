const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};


const captinAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

function print(hero){
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다`
    console.log(text) 
}

function print2(hero){
    const {alias, name, actor} = hero;
    const text2 = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다`
    console.log(text2) 
}


function print3({alias, name, actor}){
    const text3 = `${alias}(${name})역할을 맡은 배우는 ${actor}입니다`
    console.log(text3) 
}
print3(ironMan)
print3(captinAmerica)