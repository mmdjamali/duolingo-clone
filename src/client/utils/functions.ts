export const isLatin = (text : string) => {
    return text?.split("").filter((item : string) => /[ء-ي]/.test(item)).length < text?.split("").filter((item : string) => /[a-zA-Z]/.test(item)).length
}