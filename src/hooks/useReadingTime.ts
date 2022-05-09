import removeMd from "remove-markdown"

const getCharacterLength = (str: string) => [...str].length

const useReadingTime = (markdownText: string, wordsPerMinute = 400) => {
  const charCount = getCharacterLength(
    removeMd(markdownText).replaceAll(/\s/g, "")
  )
  return { minutes: Math.round(charCount / wordsPerMinute) }
}

export default useReadingTime
