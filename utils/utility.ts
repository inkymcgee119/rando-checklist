
export function isTauri(): boolean {
    return !!(<any>window).__TAURI_IPC__;
}

export function stringCompareCaseInsensitive(a: string, b: string): boolean {
    if (!a || !b)
        return false;

    return a.toUpperCase() == b.toUpperCase();
}

export function assignCardColumns(regions: Region[], colNum: number): Region[][] {

    if (!regions || regions.length == 0) {
        return [];
    }
    let height = Math.floor(regions.reduce((acc:number, x:any) => acc + x.items.length + 2, 0) / colNum); // + 2 to approx the header size
    let results: Region[][];
    let currCol;

    do {
        results = [];
        currCol = 0;
        let runningHeight = 0;

        for (let region of regions) {
            let cardHeight = region.items.length + 2;

            // if overflowing, start new col
            if (runningHeight + cardHeight > height && results[currCol] && results[currCol].length > 0) {
                currCol++;
                runningHeight = cardHeight;
            }
            else
                runningHeight += cardHeight; // otherwise add to the current column

            // assign col to be used by layout
            if (results[currCol])
                results[currCol].push(region);
            else
                results[currCol] = [region];
        }

        // there was overflow, increase size and try again
        if (currCol >= colNum)
            height += 1;
    } while (currCol >= colNum)

    return results;
}

