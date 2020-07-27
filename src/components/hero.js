import React, { lazy, Suspense } from "react"
import Button from "./button"

import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
const Avatar = lazy(() => import("./avatar"))
const renderLoader = () => <p>Loading</p>

const Hero = () => {
  const isSSR = typeof window === "undefined"

  return (
    <section className="flex flex-wrap max-w-md px-6 py-16 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl md:py-24 lg:py-40">
      <div className="flex items-center justify-center w-full md:w-1/3">
        {!isSSR && (
          <Suspense fallback={renderLoader()}>
            <Avatar
              className="w-40 transition duration-500 ease-in-out transform sm:w-44 md:w-48 lg:w-64 hover:scale-110 avatar"
              alt="whydn avatar version"
            />
          </Suspense>
        )}
      </div>
      <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6">
        <div className="flex flex-col items-center text-primary dark:text-secondary md:items-start">
          <h1 className="mb-3 text-xl text-center text-gray-800 font-body md:text-2xl lg:text-2_5xl dark:text-secondary_light">
            <FormattedMessage id="hero.job_hi" />{" "}
            <span className="font-bold">
              <FormattedMessage id="author" />
            </span>
          </h1>
          <h2 className="mb-4 font-bold leading-tight text-center text-2_5xl md:text-left sm:text-3xl md:text-4xl lg:text-5xl">
            <FormattedMessage id="hero.job_dev" />
          </h2>
          <h3 className="w-full mb-6 text-xl text-center text-gray-800 font-body md:text-1xl lg:text-2xl dark:text-gray-100 md:text-left md:max-w-md lg:max-w-xl">
            <FormattedMessage id="hero.job_description" />
          </h3>
          <div className="flex flex-row items-center">
            <Button
              link="#contact"
              style={`mb-4 mr-4`}
              text={<FormattedMessage id="global.sendMail" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default injectIntl(Hero)
