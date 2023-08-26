import fs from "fs"

export function getFile(path: string): { cssString: string } {
    const cssString = fs.readFileSync(path, "utf8")

    return {
        cssString
    }
}
