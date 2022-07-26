import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import Button from '../components/Button'
import CampaignCard from '../components/cards/CampaignCard'
import OwnerCard from "../components/cards/OwnerCard"
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-cover text-white flex flex-col'
        style={{
          backgroundImage: `url('/mainBackgroundImage.png')`,
        }}
      >
        <Header />
        <div className='container mx-auto flex flex-col lg:flex-row flex-grow py-16 md:py-36 px-8 gap-4'>
          <div className='flex flex-col gap-2 sm:gap-8 md:w-3/6 md:mt-12'>
            <p className='text-3xl  sm:text-5xl leading-tight'>
              Kami siap membantu startup untuk memulai & mendanai kebutuhan mereka
            </p>
            <p className='sm:text-2xl font-light'>
              Danai ide terbaik Anda untuk menjadi produk nyata dan jadilah kontributor
            </p>
            <Button type="primary-rounded" className="inline-flex place-self-start">
              Temukan Project
            </Button>
          </div>
          <div className='mt-12 sm:mt-0 md:w-3/6 flex'>
            <div className='flex flex-col gap-4 sm:relative z-50'>
              <CampaignCard className="relative z-10 border shadow-lg sm:shadow-2xl" />
              <motion.div 
                className='p-6 sm:absolute bg-white border shadow-lg sm:shadow-2xl sm:py-6 sm:pr-12 sm:pl-24 text-gray-600 rounded-2xl cursor-pointer -right-48 top-10 z-0'
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
              <OwnerCard className="border shadow-lg sm:absolute top-60 -right-48 z-0 sm:shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
