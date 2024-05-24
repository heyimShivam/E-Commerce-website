const ImageTOBase64 = async (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);

    const data = await new Promise((res, rej) => {
        reader.onload = () => res(reader.result);

        reader.onerror = () => rej(reader.error);
    })

    return data;
}

export default ImageTOBase64;