function getByUrlId<T extends { id?: number }>(data: T[]){

    const urlStrings = window.location.toString().split('/');
    const id = urlStrings.at(-1);

    const item = data?.find(item => item.id === Number(id));

    return { item };
};

export { getByUrlId };

