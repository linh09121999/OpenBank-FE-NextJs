export interface ResWebUiProp {
    name: string;
    value: string;
    web_ui_props_id?: string;
}

export interface ResWebUiProps {
    'webui-props': ResWebUiProp[]
}