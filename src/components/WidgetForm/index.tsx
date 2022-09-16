import { useState } from 'react'

import { BugBeetle, Lightbulb, NotePencil } from 'phosphor-react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    icon48: <BugBeetle size={48} />,
    icon24: <BugBeetle size={24} />
  },
  IDEA: {
    title: 'Ideia',
    icon48: <Lightbulb size={48} />,
    icon24: <Lightbulb size={24} />
  },
  OTHER: {
    title: 'Outro',
    icon48: <NotePencil size={48} />,
    icon24: <NotePencil size={24} />
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep onFeedbackSent={() => setFeedbackSent(true)} feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} />
          )}
        </>
      )
      }


      <footer className='text-xs text-neutral-400'>
        Feito com ❤ por{' '}
        <a className='underline underline-offset-2' href='https://github.com/brunonnalves' target='_blank'>
          Bruno
        </a>
      </footer>
    </div>
  )
}
