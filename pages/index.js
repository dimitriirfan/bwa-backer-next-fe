import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import Button from '../components/Button'
import CampaignCard from '../components/cards/CampaignCard'
import OwnerCard from "../components/cards/OwnerCard"
import Header from '../components/Header'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OwnerPicture from "../components/images/OwnerPicture";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation("home") 
  return (
    <>
      <div className='lg:h-screen bg-cover text-white flex flex-col'
        style={{
          backgroundImage: `url('/mainBackgroundImage.png')`,
        }}
      >
        <Header />
        <div className='container mx-auto flex flex-col lg:flex-row flex-grow py-16 lg:py-36 px-8 gap-4'>
          <div className='flex flex-col gap-2 lg:gap-8 lg:w-3/6 lg:mt-12'>
            <p className='text-3xl  sm:text-5xl leading-tight'>
              {t("hero-main-h1")}
            </p>
            <p className='lg:text-2xl font-light'>
              {t("hero-main-h2")}
            </p>
            <Button type="primary-rounded" className="inline-flex place-self-start">
              {t("hero-button")}
            </Button>
          </div>
          <div className='mt-12 lg:mt-0 lg:w-3/6 flex'>
            <div className='flex flex-col gap-4 lg:relative z-50'>
              <CampaignCard className="relative z-10 border shadow-lg lg:shadow-2xl" />
              <motion.div 
                className='p-6 lg:absolute bg-white border shadow-lg md:shadow-2xl md:py-6 md:pr-12 md:pl-24 text-gray-600 rounded-2xl cursor-pointer -right-48 top-10 z-0'
                whileHover={{
                  x: 140
                }}  
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <p>Why we fit for you:</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2">
                      <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
                      <p>Easy Money Transaction</p>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
                      <p>Special Services & Product</p>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
                      <p>Private Equity Shareholders</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <OwnerCard className="border shadow-lg lg:absolute top-60 -right-48 z-0 lg:shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cover text-gray-900 flex ">
        <div className='container mx-auto flex flex-col py-12 gap-8 px-8'>
          <div className="flex justify-between items-center">
            <div className="sm:text-2xl font-semibold">
              <p>{t("campaign-title-top")}</p>
              <p>{t("campaign-title-bottom")}</p>
            </div>
            <div className="sm:text-lg font-semibold">
              <a className="cursor-pointer hover:border-b border-gray-900">{t("campaign-view-all")}</a>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            <CampaignCard className="border" />
            <CampaignCard className="border" />
            <CampaignCard className="border" />
            <CampaignCard className="border" />
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto flex flex-col py-12 gap-8 px-8">
          <div className="sm:text-2xl font-semibold">
            <p>{t("testimony-title-top")}</p>
            <p>{t("testimony-title-bottom")}</p>
          </div>
          <div>
            <div className="py-8 md:py-16 lg:px-32 flex flex-col gap-4">
              <p className="text-3xl md:text-4xl font-light">{'"Funding at bwabacker is very easy and comfortable. Just need to find an idea, click and already funding."'}</p>
              <div className="mt-4">
                <p className="text-2xl font-semibold text-gray-900">Shopie Nicole</p>
                <p className="text-lg text-gray-400">Project Manager</p>
              </div>
              <div className="flex gap-4">
                <OwnerPicture className="w-16 sm:w-24" src="/images/sample-owner-1.png"/>
                <OwnerPicture className="w-16 sm:w-24" src="/images/sample-owner-2.png"/>
                <OwnerPicture className="w-16 sm:w-24" src="/images/sample-owner-3.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:h-screen bg-cover flex flex-col"
        style={{
          backgroundImage: `url('/images/footer-background.png')`
        }}
      >
        <div className="container mx-auto flex flex-col pt-16 lg:pt-64 px-8 gap-12 sm:gap-32 ">
          <div className="text-center text-2xl md:text-5xl text-white font-bold self-center lg:w-2/3">
            <p className="mb-8"> {t("footer-title")}</p>
            <Button type="primary-rounded" className="inline-flex place-self-start text-xl">
              {t("footer-start")}
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 justify-between text-white gap-8">
            <div className="col-span-2 sm:col-span-1">
              <div className='text-2xl font-medium'>
                bwabacker.
              </div>
              <p className="font-light">Helps people execute their bright ideas</p>
            </div>
            <div>
              <p className="font-semibold text-lg">{t("footer-explore")}</p>
              <nav className="flex flex-col font-light mt-6 gap-3.5">
                <a className="cursor-pointer hover:text-orange-400">{t("footer-explore-1")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-explore-2")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-explore-3")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-explore-4")}</a>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-lg">{t("footer-investor")}</p>
              <nav className="flex flex-col font-light mt-6 gap-3.5">
                <a className="cursor-pointer hover:text-orange-400">{t("footer-investor-1")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-investor-2")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-investor-3")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-investor-4")}</a>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-lg">{t("footer-office")}</p>
              <nav className="flex flex-col font-light mt-6 gap-3.5">
                <a className="cursor-pointer hover:text-orange-400">{t("footer-office-1")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-office-2")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-office-3")}</a>
                <a className="cursor-pointer hover:text-orange-400">{t("footer-office-4")}</a>
              </nav>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  )
}
