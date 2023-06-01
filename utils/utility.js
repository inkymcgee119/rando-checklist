
export function isTauri() {
    return !!window.__TAURI_IPC__;
}

export function stringCompareCaseInsensitive(a, b) {
    if (!a || !b)
        return false;

    return a.toUpperCase() == b.toUpperCase();
}

export function assignCardColumns(searchResults, colNum) {

    if (!searchResults || searchResults.length == 0) {
        return [];
    }
    let height = Math.floor(searchResults.reduce((acc, x) => acc + x.items.length + 2, 0) / colNum); // + 2 to approx the header size
    let results = [];
    let currCol = 0;

    do {
        results = [];
        currCol = 0;
        let runningHeight = 0;

        for (let region of searchResults) {
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

