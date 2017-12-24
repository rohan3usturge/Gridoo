export interface IColumn {
    id: string;
    name: string;
    width: number;
    renderHybrid: boolean;
    hidden: boolean;
    sortable: boolean;
    filterable: boolean;
}