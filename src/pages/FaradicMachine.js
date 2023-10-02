import React from 'react'
import ServicesBanner from '../components/ServicesBanner'

const FaradicMachine = () => {
  return (
    <div className="container mx-auto p-8">
      <ServicesBanner />
      <h1 className="text-3xl font-semibold mb-4 text-center">Faradic Machine</h1>
      <h2 className="text-xl font-semibold mb-2">How does Faradic Slimming work?</h2>

      <p className='p-2 m-2'>
      Faradics treatment or electrical muscle stimulation (EMS) uses the application of electrical pulses, 
      which are applied on the body to stimulate the muscles to contract resulting in a tightening and toning effect.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
      Benefits.
      </h2>

      <p className='p-2 m-2'>
        • Increased circulation brings fresh oxygen and nutrients to the muscles 
          and removes waste products thus improving the appearance and functioning of the muscle
      </p>

      <p className='p-2 m-2'>
        • Muscular contraction improves the tone of the muscle
      </p>

      <p className='p-2 m-2'>
        • Sensory nerve ending are initially stimulated producing a tingling sensation at the beginning of the treatment
      </p>

      <p className='p-2 m-2'>
        • Motor nerves are stimulated resulting in muscle contraction
      </p>

      <p className='p-2 m-2'>
        • Blood supply increases therefore bringing fresh oxygen and nutrients to the area
      </p>

      <p className='p-2 m-2'>
        • Waste products are more efficiently removed from the area
      </p>

      <p className='p-2 m-2'>
        • Vasodilation of the blood vessels improves the colour of the skin under the pads
      </p>

      <p className='p-2 m-2'>
        • Muscle contractions improve the lymphatic circulation in the area, which assists with the removal of the waste products.
      </p>

    </div>
  )
}

export default FaradicMachine
