import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import type { Todos } from "./lib/types";
import { ITodos, ITodos2 } from "./lib/types";
import { printArray, getValue, printId, welcomePeople } from "./lib/utils";
import type { Person } from "./lib/types";

const initTodos1: ITodos = {
  id: 1,
  text: "리액트 공부하기",
  done: false,
};

const initTodos2: ITodos2 = {
  id: 1,
  text: "리액트 공부하기",
  done: false,
  date: new Date(),
};

const initTodos: Todos = [
  {
    id: 1,
    text: "리액트 공부하기",
    done: false,
  },
  {
    id: 2,
    text: "백엔드도 열심히 해야지",
    done: false,
  },
  {
    id: 3,
    text: "넷플릭스 시청",
    done: false,
  },
];

const man: Person = {
  name: "bytefer",
  email: "bytefer@gmail.com",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

// type Person = typeof man;

const people: Person = {
  name: "bytefer",
  email: "bytefer@gmail.com",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

type Address = Person["address"];

const address: Address = {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  geo: {
    lat: "-37.3159",
    lng: "81.1496",
  },
};

const user = {
  id: 999,
  name: "admin",
} as const;

type Admin = typeof user;

// const admin: Admin = {
//   id: 888, // 에러발생 : 상수라서 타입의 값을 바꿀 수 없다.
//   name: "admin",
// };

printId("ossam");
printId(999);

welcomePeople(["홍길동", "이순신"]);
welcomePeople("홍길동");

export default function App() {
  const [toggle, setToggle] = useState(true);
  const [todos, setTodos] = useState(initTodos);
  const [firstName, setFirstName] = useState("ossam");
  const [fun, setFun] = useState<() => void>(() => {});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    // 타입 단언: ts가 타입을 못찾을 경우 타입을 알려줌
    const btn = e.target as HTMLButtonElement;
    console.log(btn.innerText);
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  // 제네릭매개변수 있는 함수사용시 타입추론이 될 경우 : 제네릭타입을 명시하지 않아도 됨
  // 제네릭매개변수 없는 함수사용시 타입추론이 되지 않을 경우 : 제네릭타입을 명시해야함
  printArray(["1", 2, 3]);
  printArray([1, 2, 3, 4, 5]);
  printArray<boolean | number>([true, false, true, false, 7, 8, 9]);
  printArray<string>(["A", "B", "C", "D", "E"]);
  printArray<() => void>([
    () => {},
    () => {
      console.log("hello");
    },
  ]);
  printArray([null, undefined, null, undefined, 1, 2, "33", () => {}]);
  const car = { color: "red", speed: 300, price: 20000000 };
  const color = getValue(car, "color");
  const speed = getValue(car, "speed");
  const price = getValue(car, "price");
  // const value = getValue(car, "value"); // 에러발생 : value는 car객체에 없는 속성
  console.log(color, speed, price);

  console.log(getValue<typeof car, "color">(car, "color")); // 타입추론이 자동으로 되기 때문에 타입을 명시해주지 않아도 됨

  return (
    <>
      <div>
        <Button onClick={handleToggle}>{toggle ? "Show" : "Hide"}</Button>
      </div>
      <div>
        <Button onClick={handleToggle} disabled={toggle}>
          {toggle ? "Show" : "Hide"}
        </Button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <div>
        <input type='text' value={firstName} onChange={handleChange} />
        <p>{firstName}</p>
        <button type='button' onClick={handleClick}>
          클릭
        </button>
      </div>
    </>
  );
}
