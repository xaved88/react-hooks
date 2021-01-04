export type DispatchCallbackType = (event: DispatchEvent) => void;

class DispatchService {
    private readonly listeners: Map<number, DispatchCallbackType> = new Map<number, DispatchCallbackType>();
    private readonly typeMap: Map<string, number[]> = new Map<string, number[]>();
    private idCounter: number = 0;

    listen(type: string, callback: DispatchCallbackType): number {
        if (!this.typeMap.has(type)) {
            this.typeMap.set(type, []);
        }

        const id: number = ++this.idCounter;
        this.typeMap.get(type)?.push(id);
        this.listeners.set(id, callback);

        return id;
    }

    clean(id: number): void {
        if (!this.listeners.has(id)) {
            return;
        }

        // delete from typeMap
        this.typeMap.forEach((values, type) => {
            const index = values.indexOf(id);
            if (index !== -1) {
                values.splice(index, 1);
                this.typeMap.set(type, values);
            }

        });

        this.listeners.delete(id);
    }

    dispatch(event: DispatchEvent): void {
        const ids = this.typeMap.get(event.type);
        if (!ids) {
            return;
        }

        ids.forEach(id => {
            const handler = this.listeners.get(id);
            if (handler) {
                handler(event);
            }
        });
    }
}

export class DispatchEvent {
    public readonly type: string;

    constructor(type: string) {
        this.type = type;
    }
}

export const Dispatch = new DispatchService();