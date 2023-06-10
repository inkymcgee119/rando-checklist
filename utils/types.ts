
declare global {
    interface Item {
        name: string;
        type: string;
        description: string;
        tags: Array<string>;
        isChecked: boolean;
        isStarred: boolean;
        count: number;
        destination: any;
    }

    interface Region {
        name: string;
        bgColor: string;
        dropdownColor: string;
        isCollapsed: boolean;
        showMQ: boolean;
        hasMQ: boolean;
        items: Array<Item>;
    }

    interface GameOptions {
        settings: any;
        tags: any;
        toggleSettings: any;
        toggleTags: any;
    }

    interface Resource {
        url: string;
        description: string;
    }

    interface GameInfo {
        value: string;
        icon: string;
        description: string;
        dir: string;
        hasEntranceRando: boolean;
        regions: string[];
        entranceRegions: string[];
        columns: any;
        options: GameOptions;
        entranceOptions: GameOptions;
        resources:  Resource[]
    }

    interface DropdownItem {
        description: string;
        icon: string;
        region: string;
        name: string;
        type: string;
    }

    interface DropdownItemGroup {
        description: string;
        items: DropdownItem[];
    }
}

export { };
