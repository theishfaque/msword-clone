import React from 'react'

const WordsCounter = ({countWords,countLetters}) => {

  return (
    <div className='w-screen h-auto flex gap-20 font-semibold pl-4'>
        <span>Words Count: {countWords}</span>
        <span>Letters Count: {countLetters}</span>
    </div>
  )
}

export default WordsCounter
