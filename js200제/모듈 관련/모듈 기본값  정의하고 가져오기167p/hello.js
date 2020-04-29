//default 키워드를 사용하여 모듈에서 기본으로 내보내는 값을 정의할 수 있습니다.
export default 'hello';

export default function hello(name) {
    console.log('hello' + name);
};

export default class Hello {
    constructor(greeting) {
        this.greeting = greeting;
    }
    hi(name) {
        console.log(`${this.greeting} ${name}`);
    }
}