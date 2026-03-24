import mobiledev from '../assets/mobiledev.png';
import gamedev from '../assets/gamedev.png';
import webdev from '../assets/webdev.png';
import triDmodel from '../assets/3dmodel.png';
import calibration from '../assets/calibration.png';
import pcb from '../assets/pcb.png';

type Props = {
    darkMode: boolean;
};

type skill = {
    name: string;
    image: string;
    level: number;
    color: string;
};

const Skills = ({darkMode}: Props) => {
    const skills: skill[] = [
        {name: 'Mobile Application Development', image:mobiledev, level:100,
        color:'from-teal-500 to-cyan-500'},
        {name: 'Game Development', image:gamedev, level:100,
        color:'from-indigo-500 to-blue-500'},
        {name: 'Web Development', image:webdev, level:100,
        color:'from-blue-500 to-cyan-500'},
        {name: '3D modeling', image:triDmodel, level:100,
        color:'from-green-500 to-emerald-500'},
        {name: 'Equipment Calibration', image:calibration, level:100,
        color:'from-orange-500 to-amber-500'},
        {name: 'PCB Drafting', image:pcb, level:100,
        color:'from-red-500 to-orange-500'},
    ]
    return (
        <section
        id='skills'
        style={{backgroundColor: darkMode ? '#111827' : '#f9fafb'}}
        className='py-14 relative overflow-hidden'>
            <div className='py-14 relative overflow-hidden'>
                <div className='text-center mb-20' data-aos='fade-up'>
                    <h1
                    className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    style={{color: darkMode ? 'white' : '#1f2937'}}
                    >My <span
                    style={{background:'linear-gradient(to right, #f97316, #f59e0b)',
                        WebkitBackgroundClip:'text',
                        backgroundClip:'text',
                        color:'transparent'}}
                    >Skills</span>
                    </h1>
                    <p
                    className='text-lg max-w-2xl mx-auto leading-relaxed p-2'
                    style={{
                        color: darkMode ? '#d1d5db' : '#4b5563'
                    }}
                    >
                        I am a versatile developer skilled in mobile, web, and game app development. 
                        I also excel in 3D modeling, calibration, and PCB drafting, combining software, 
                        hardware, and design expertise to deliver efficient and innovative solutions. 
                    </p>
                </div>
                <div
                className='flex flex-wrap -m-1'
                data-aos='fade-up'
                data-aos-delay='200'>
                    {skills.map((skill, index) => (
                        <div
                        key={index}
                        className='p-4 lg:w-1/3 md:w-1/2 w-full'
                        data-aos='fade-up'
                        data-aos-delay={`${300+index*100}`}
                        >
                            <div
                            style={{
                                background: darkMode 
                                    ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                                    : 'linear-gradient(to bottom right, #fff, #f3f4f6)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='h-full p-6 rounded-2xl border hover:border-orange-500/50
                            transition-all duration-300 hover:-translate-y-2 group 
                            hover:shadow-[0_0_30px_rgb(255,0,0,0.15)]'
                            >
                                <div className='flex items-center mb-6'>
                                    <div style={{
                                        background: darkMode 
                                            ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                                            : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                                    }}
                                    className='w-16 h-16 rounded-xl p-3 flex
                                    items-center justify-center
                                    group-hover:scale-110 transition-transform
                                    duration-300'>
                                        <img src={skill.image} alt={skill.name} 
                                        className='w-full h-full object-contain'/>
                                    </div>
                                    <h3
                                    className='text-xl font-bold ml-4'
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937' 
                                    }}>
                                        {skill.name}
                                    </h3>
                                </div>
                                
                                <div className='w-full rounded-full h-3 overflow-hidden'
                                style={{color: darkMode ? '#374151' : '#e5e7eb'}}
                                >
                                    <div
                                    className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                    style={{width:`${skill.level}%`}}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Skills
