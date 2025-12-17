export interface ReqCustomView {
    name?: string;
    description: string;
    metadata_view: string;
    is_public: boolean;
    which_alias_to_use: string;
    hide_metadata_if_alias_used: boolean;
    allowed_actions: string[];
}
