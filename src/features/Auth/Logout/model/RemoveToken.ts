

export const removeTokenFormCookie = () => {
    console.log('remove')
    document.cookie = `token=; max-age=-1; path=/`;


}