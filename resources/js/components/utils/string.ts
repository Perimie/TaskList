export const truncateText = (text:string, maxLegth =50) => {
    return text.length <= maxLegth ? text : text.substring(0, maxLegth) + '...';
}