import { FooBar } from "../type";

export interface ResDynamicEntity {
    bankId: string;
    FooBar: FooBar;
    dynamicEntityId: string
    hasPersonalEntity: boolean;
    userId: string;
}

export interface ResSystemLevelDynamicEntity {
    FooBar: FooBar;
    dynamicEntityId: string
    hasPersonalEntity: boolean;
    userId: string;
}

export interface ResDynamicEntities {
    dynamic_entities: ResDynamicEntity[]
}