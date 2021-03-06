import { IGridOptions } from "../main/IGridOptions";
import { FilterActionType } from "../models/FilterActionType";
import { GridOrderDirection } from "../models/GridOrderDirection";
import { IColumn } from "../models/IColumn";

export class ConfigStore<T> {
    public options: IGridOptions<T>;
    private focusableElement: HTMLElement;
    private defaultGridOptions: IGridOptions<T> = {
        animationTime: 200,
        chunkSize: 5,
        columns: [],
        containerElement: null,
        // manageColSettingsContainer: null,
        hybridFunction: (column: IColumn, row: T): string => {
            return "true";
        },
        keyColumn: "",
        // onColSettingsChange: (colConfig: IColumn[]): void => {
        //     // No Code
        // },
        onClickFilter: (column: string, value: any, actionType: FilterActionType): void => {
            // No code
        },
        onClickHeader: (column: string, direction: GridOrderDirection): void => {
            // No code
        },
        onPageSearch: (pageSize: number, pageIndex: number): void => {
            // No code
        },
        onSelect: (rows: T[]): void => {
            // No Code
        },
        showCaption: false,
        caption: "",
        summary: "",
    };
    constructor(options: IGridOptions<T>) {
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
        this.options.columns.sort((prev, next) => prev.order - next.order);
    }
    public set Options(options: IGridOptions<T>) {
        this.options = options;
    }
    public get Options(): IGridOptions<T> {
        return this.options;
    }
    public setFocusableElement = (element: HTMLElement): void => {
        this.focusableElement = element;
    }
    public getFocusableElement = (): HTMLElement => {
        return this.focusableElement;
    }
    public SetHiddenOnConfig = (bool: boolean, columnId?: string): void => {
        for (const col of this.Options.columns) {
            if (columnId === undefined) {
                col.hidden = bool;
            } else {
                if (col.id === columnId) {
                    col.hidden = bool;
                    break;
                }
            }
        }
    }
    private extendOptions = (inputOptions: IGridOptions<T>): IGridOptions<T> => {
        return this.options = jQuery.extend({}, this.defaultGridOptions, inputOptions);
    }
}
