/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface ServiceParams {
    key: string;
    val: any;
}

interface Widget {
    id?: number;
    price: number;
    name: string;
    description: string;
}
