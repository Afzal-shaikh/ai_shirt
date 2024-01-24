import {motion , AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import state from '../store';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../config/motion';



const Home = () => {
    const snap = useSnapshot(state)
  return (
   <AnimatePresence>
        {snap.intro && (
            // This part is rendered when snap.intro is true, it moves out when it's false
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                <img src='./logo.png' 
                alt='logo'
                className='w-8 h-8 object-contain'
                />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text' style={{color : snap.color, textShadow: '0px 0px 1px white, 0px 0px 2px white'}}>
                            UNBRANDED<br className='x1:block '/> AI
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Create your unique shirt with our AI enabled design tool. <strong>MAKE IT YOURS.</strong>
                        </p>
                        <CustomButton 
                           type="filled"
                           title="Customize It"
                           handleClick = {()=> state.intro = false} 
                           customStyles = 'w-fit px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>

            </motion.section>
        )}
   </AnimatePresence>
  )
}

export default Home