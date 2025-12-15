interface ViewsAccountAccess {
    view_id: string;
    is_system: boolean;
}

export interface ReqUserwithAccountAccess {
    username: string;
    provider: string;
    views: ViewsAccountAccess[]
}

export interface ReqUserAccessToView {
    user_id: string;
    view_id: string
}