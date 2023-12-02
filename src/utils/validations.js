export const isEmpty = target => {
  return target.length === 0
}

export function isValidUrl(url) {
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/

  return urlRegex.test(url)
}