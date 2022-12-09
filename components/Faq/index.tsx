import { withTranslation } from 'react-i18next';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

interface FaqProps {
  job_description: any,
  role: any,
  locale?: any,
  t?: any,
  seo: any
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Faq = (props: FaqProps) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.t('faq')}
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            <Disclosure as="div" className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">{props.t('first_question', { role: props.seo[props.locale].first_role })}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <span className="font-medium text-gray-900">This is an example and it exists a lot of job description.</span>
                    <p className="text-base text-gray-500">{props.job_description[props.locale][0]}</p>
                    <p className='font-medium text-gray-900 mt-2'>{props.t('responsability')}</p>
                    <ul className='list-inside mt-2'>
                      {props.job_description[props.locale][1].responsability.map((data: any, i: any) => (
                        <li className='list-disc' key={i}>
                          {data}
                        </li>
                      )
                      )}
                    </ul>
                    <p className='font-medium text-gray-900 mt-2'>{props.t('qualification')}</p>
                    <ul className='list-inside mt-2'>
                      {props.job_description[props.locale][1].qualifications.map((data: any, i: any) => (
                        <li className='list-disc' key={i}>
                          {data}
                        </li>
                      )
                      )}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Faq)