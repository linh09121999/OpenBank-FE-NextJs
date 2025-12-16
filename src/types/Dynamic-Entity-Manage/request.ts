import { FooBar } from "../type";

export interface ReqDynamicEntity {
    FooBar: FooBar;
    hasPersonalEntity: boolean;
}

export interface ReqSystemLevelDynamicEntity {
    FooBar: FooBar;
}