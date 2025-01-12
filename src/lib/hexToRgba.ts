const hexToRgba = (hex: string) => {
    const sanitizedHex = hex.replace("#", "").trim();

    if (sanitizedHex.length === 3) {
        const r = parseInt(sanitizedHex[0] + sanitizedHex[0], 16);
        const g = parseInt(sanitizedHex[1] + sanitizedHex[1], 16);
        const b = parseInt(sanitizedHex[2] + sanitizedHex[2], 16);
        return { r, g, b };
    } else if (sanitizedHex.length === 6) {
        const r = parseInt(sanitizedHex.slice(0, 2), 16);
        const g = parseInt(sanitizedHex.slice(2, 4), 16);
        const b = parseInt(sanitizedHex.slice(4, 6), 16);
        return { r, g, b };
    }

    return { r: 0, g: 0, b: 0 };
}

export default hexToRgba
