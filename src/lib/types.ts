// lib/types.ts
export interface ITodos {
  id: number;
  text: string;
  done: boolean;
}

export interface ITodos2 extends ITodos {
  date: Date;
}

export type Todos = {
  id: number;
  text: string;
  done: boolean;
}[];

export type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  // | 유니언이며 연결된 타입중 하나를 가질 수 있음
  disabled?: boolean;
};

export type Person = {
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};
