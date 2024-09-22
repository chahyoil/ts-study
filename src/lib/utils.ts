export function printArray<T>(arr: T[]): void {
  for (const item of arr) {
    console.log(item);
  }
}

export function prinArray<T extends string | number>(arr: T[]): void {
  for (const item of arr) {
    console.log(item);
  }
}

export function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// export function printId(id: number | string) {
//   // string타입에만 유효한 메서드 사용불
//   console.log(id.toUpperCase());
// }

export function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 배열인 경우 Array.isArray()로 타입 확인
export function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입입니다
    console.log("Hello, " + x.join(" and "));
  } else {
    // 여기에서 'x'는 'string' 타입입니다
    console.log("Welcome lone traveler " + x);
  }
}
