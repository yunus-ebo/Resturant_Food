export const imageUrI = (path) => {
    // if(!path) return "";
    return `${import.meta.env.VITE_API_URI}${path}`;
}