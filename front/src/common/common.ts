export const updatejpegFileName = (fileName: string, size: number) => {
    if (!fileName || !fileName.endsWith(".jpeg")) return fileName;
    return fileName.replace(/\.jpeg$/, `_w${size}.jpeg`);
};
