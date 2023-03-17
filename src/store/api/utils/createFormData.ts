import FormData from "form-data";

export const createFormDataGenerator = (file: File) => {
    const data = new FormData();
  
    data.append('generator.js', file);

    return data;
};

export const createFormDataImages = (file: File, fileName: string) => {
    const data = new FormData();
  
    data.append(fileName, file);

    return data;
};