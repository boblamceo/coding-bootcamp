interface ModelAttributes<T> {
    set(value: T): void;
}

interface Sync {}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export class Model {}
