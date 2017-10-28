/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface Framework7
{
    router: boolean;
    material: boolean;
}

declare var Framework7:Framework7;