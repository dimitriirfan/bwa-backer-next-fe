const CampaignCard = (props) => {
    return (
        <div className={`${props.className} bg-white place-self-start rounded-2xl`}>
            <div className='p-5 flex flex-col gap-4'>
              <img className="rounded-2xl" alt='hero campaign' src='/images/hero-campaign.png' />
              <div>
                <p className='text-gray-900 text-xl font-bold'>Auto Pilot Drone</p>
                <p className='text-gray-600'>Self driving drone, no worry to drive again</p>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
              </div>
              <div className='text-gray-600 flex justify-between'>
                <p>45%</p>
                <p className='text-gray-900 font-bold'>Rp.80.000.000</p>
              </div>
            </div>
          </div>
    )
}

export default CampaignCard