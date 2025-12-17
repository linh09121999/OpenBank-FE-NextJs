export interface ReqPermissionToASystemView {
    permission_name: string;
    extra_data: string[]
}

export interface ReqSystemView {
    name?: string;
    description: string;
    metadata_view: string;
    is_public: boolean;
    which_alias_to_use: string;
    hide_metadata_if_alias_used: boolean;
    allowed_actions: string[];
    can_grant_access_to_views: string[];
    can_revoke_access_to_views: string[]
}
