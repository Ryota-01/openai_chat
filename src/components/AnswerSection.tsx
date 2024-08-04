import React from 'react'

export default function AnswerSection() {
  console.log("answer!!");

  return (
    <div>
      <hr className='hr-line' />
      <div className='answer-container'>
        <div className='answer-section'>
          <p className='question'>Who is the founder of OpenAi?</p>
          <p className="answer">
          </p>
          <div className='copy-icon'>
            <i className="fa-solid fa-copy"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
