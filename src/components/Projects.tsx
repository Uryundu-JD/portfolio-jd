import isn from '../assets/isn.png';
import investa from '../assets/investa.png';
import spanda from '../assets/spanda.png';
import freelance from '../assets/freelance.jpg';
import thesis from '../assets/thesis.jpg';
import points from '../assets/points.jpg';
import qrcode from '../assets/qrcode.jpg';
import games from '../assets/games.jpg';
import tipi from '../assets/tipi.jpg';
import moog from '../assets/moog.jpg';


const Projects = ({darkMode}) => {
    const projects = [
        {
            id:1,
            title:'Investa, InvestaFunds, and InvestaTrade',
            desc:`Responsible for developing and maintaining 
            key application features, including the Portfolio 
            module and Sponsor/Ads integration, ensuring functionality, 
            performance, and user engagement. Handled bug identification 
            and resolution to improve system stability and user experience. 
            Additionally, managed application deployment processes, ensuring 
            smooth releases and reliable production performance.`,
            image:investa,
            tags:['React Native', 'Typescript', 'Node.js', 'Azure', 'Firebase', 'Android', 'iOS', 'Huawei'],
            company:'Investagrams Inc.',
        },
        {
            id:2,
            title:'Idol Shopping Network',
            desc:`Designed and developed a full-featured e-commerce 
            mobile application from the ground up, covering all core 
            functionalities including product browsing, user authentication, 
            cart management, and checkout flow. Led the end-to-end development 
            lifecycle, from initial architecture and implementation to testing 
            and optimization. Successfully deployed the application to production, 
            ensuring scalability, performance, and a seamless user experience.`,
            image:isn,
            tags:['React Native', 'Node.js', 'Firebase', 'Android', 'iOS', 'Huawei'],
            company:'SunMoonTec',
        },
        {
            id:3,
            title:'Spanda',
            desc:`Developed an online massage service booking platform, 
            contributing to key user-facing and booking workflow features. 
            Implemented address pinning for precise location selection, along with 
            secure login and registration functionality. Built an efficient therapist 
            search system and an auto-selection feature to streamline booking. 
            Designed a dynamic service price computation module and a seamless 
            booking confirmation process, enhancing overall user experience and 
            operational efficiency.`,
            image:spanda,
            tags:['React Native', 'Node.js', 'Firebase', 'MapBox', 'Android', 'iOS', 'Huawei'],
            company:'SunMoonTec',
        },
        {
            id:4,
            title:'Endless Runner Games',
            desc:`Developed three engaging endless runner games using Unity 3D, 
            showcasing strong skills in game design, optimization, and interactive 
            gameplay systems. Successfully published one title on the 
            Google Play Console, managing the full deployment pipeline including 
            testing, optimization, and store compliance. Delivered two additional 
            games as commissioned projects, collaborating with clients to meet 
            specific requirements, implement custom features, and ensure high-quality 
            user experiences.`,
            image:games,
            tags:['Unity 3D', 'C#', 'Android'],
            company:'Freelance',
        },
        {
            id:5,
            title:'Music Player, Unit Converter, and Pedometer',
            desc:`Developed and deployed three independent mobile applications
            —a Music Player, a Pedometer, and a Unit Converter—each built as a 
            standalone product with its own functionality and user experience. 
            Demonstrated versatility in creating both utility and lifestyle apps, 
            focusing on performance, usability, and clean interface design. 
            Successfully published each application on the Google Play Console, 
            managing the full deployment lifecycle including testing, optimization, 
            and compliance with platform guidelines.`,
            image:freelance,
            tags:['React Native', 'Node.js', 'Firebase', 'Android'],
            company:'Freelance',
        },
        {
            id:6,
            title:'Tool Management',
            desc:`Designed and developed a locally hosted web-based 
            Tool Management Inventory System for laboratory equipment and gauges. 
            Implemented features for asset tracking, inventory monitoring, 
            and efficient data management, improving organization and accessibility 
            of tools. Focused on usability, reliability, and streamlined workflows 
            to support day-to-day laboratory operations.`,
            image:moog,
            tags:['Python', 'Django', 'Bootstrap', ],
            company:'MOOG Baguio',
        },
        {
            id:7,
            title:'Equipment Logbook',
            desc:`Designed and developed a locally hosted Equipment Logbook System 
            for laboratory assets. Built to reduce the risk of equipment loss. 
            Implemented features to display real-time status queues for calibration 
            and release, improving visibility, accountability, and workflow efficiency 
            within laboratory operations.`,
            image:tipi,
            tags:['Python', 'Django', 'Bootstrap', ],
            company:'TIPI Baguio',
        },
        {
            id:8,
            title:'Customer Store Credit',
            desc:`Designed and developed a Customer Store Credits system consisting 
            of a web and mobile application. Built a web-based admin platform for 
            efficient store credit management, monitoring, and updates. Developed a 
            cross-platform mobile app using React Native, enabling customers to 
            securely view and track their available credits in real time. Leveraged 
            Python and Django for backend services, ensuring reliable data handling, 
            scalability, and seamless integration between platforms.`,
            image:points,
            tags:['React Native', 'Python', 'Django', 'Bootstrap', 'Android'],
            company:'Freelance',
        },
        {
            id:9,
            title:'Contact Tracing Logbook',
            desc:`Developed a Contact Tracing Logbook system with QR code scanning 
            capabilities, delivered as an integrated web and mobile solution. Built 
            a web-based administration platform for managing user records, logs, and 
            schedules. Created a cross-platform mobile application using React Native, 
            enabling users to scan or input QR codes to access real-time schedules, 
            activity logs, and member information. Powered by Python and Django 
            on the backend, ensuring secure data processing, efficient tracking, 
            and seamless synchronization across platforms.`,
            image:qrcode,
            tags:['React Native', 'Python', 'Django', 'Bootstrap', 'Android'],
            company:'Freelance',
        },
        {
            id:10,
            title:'Integrating Augmented Reality for Baguio Museum Audio Guide System',
            desc:`Developed an innovative thesis project titled 
            “Integrating Augmented Reality for Baguio Museum Audio Guide System,” 
            focused on enhancing visitor engagement through immersive technology. 
            Designed and implemented an AR-based mobile experience featuring 
            interactive 3D models, synchronized audio guides, and embedded video 
            content to enrich museum tours. Utilized Unity for application 
            development and Blender 3D for creating and optimizing digital assets, 
            delivering an engaging and educational platform for cultural exploration.`,
            image:thesis,
            tags:['Unity 3D', 'C#', 'Blender 3D', 'Android'],
            company:'Thesis',
        },
    ]
    return (
        <section
        id='projects'
        style={{
            backgroundColor: darkMode ? '#111827' : '#f9fafb'
        }}
        className='relative py-24'>
            <div className='text-center mb-10' data-aos='fade-up'>
                <h2
                className='text-3xl sm:text-4xl font-bold mb-3'
                style={{
                    color: darkMode ? 'white' : '#1f2937'
                }}>
                My <span
                    style={{background:'linear-gradient(to right, #f97316, #f59e0b)',
                    WebkitBackgroundClip:'text',
                    backgroundClip:'text',
                    color:'transparent'}}
                    className='font-bold'>
                        Projects
                    </span>
                </h2>
                {/* <p
                className='max-w-xl mx-auto'
                style={{
                    color: darkMode ? '#d1d5db' : '#6b7280'
                }}>
                    Recent work:
                </p> */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2
            lg:grid-cols-3 gap-5 mb-12 m-3'>
                {projects.map((project, index) => (
                    <div
                    key={index}
                    style={{
                        background : darkMode
                        ? 'linear-gradient(to right, #1f2937, #111827)'
                        : 'linear-gradient(to right, #fff, #f9fafb)',
                        borderColor : darkMode ? '#374151' : '#e5e7eb',
                    }}
                    className='group rounded-xl border duration-300
                    over:border-orange-500/50 transition-all'
                    data-aos='fade-up'
                    data-aos-delay={index * 100}>
                        <div className='h-75 overflow-hidden rounded-t-xl'>
                            <img 
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover
                            group-hover:scale-110 transition-transform
                            duration-500'/>
                        </div>
                        <div className='p-4'>
                            <h3
                            className='text-lg font-bold mb-2'>
                                {project.title}
                            </h3>
                            <p
                            className='text-sm mb-3'
                            style={{
                                color: darkMode ? '#d1d5db' : '#6b7280' 
                            }}>
                                {project.desc}
                            </p>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {project.tags.map((tag, index) => (
                                    <span
                                    key={index}
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                        color: darkMode ? '#d1d5db' : '#4b5563'
                                    }}
                                    className='px-2 py-1 text-xs rounded-full'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                <span
                                style={{
                                    backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                }}
                                className='px-2 py-1 text-xs italic rounded-full text-orange-300'>
                                    {project.company}
                                </span>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        
        </section>
    );
}

export default Projects
