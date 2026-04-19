import './Projects.css'
import { playClick } from '../utils/sounds'

const projects = [
  {
    title: 'BMP Image Compressor/Decompressor',
    tech: ['C++', 'Linux', 'Huffman Coding', 'Bit-level Encoding/Decoding', 'Memory Management', 'POSIX System Calls'],
    description: 'A C++ tool for compressing and decompressing BMP images using Huffman coding.',
    image: '/bmpImage.png',
    imageClass: 'projectImage projectImage--contain',
    repo: 'https://github.com/Dav-03/BMP-Image-Compressor-Decompressor.git'
  },
  {
    title: 'LawnNotify',
    tech: ['Python', 'AWS Lambda', 'Amazon EventBridge', 'Amazon S3', 'AWS Secrets Manager', 'boto3', 'Gmail SMTP'],
    description: 'Serverless AWS system that automates client scheduling and payment reminders for a small landscaping business.',
    image: '/gg.png',
    imageClass: 'projectImage projectImage--contain',
    repo: 'https://github.com/Dav-03/LawnNotify.git'
  },
  {
    title: 'BMP Image Compressor/Decompressor',
    tech: ['C++', 'Linux', 'Huffman Coding', 'Bit-level Encoding/Decoding', 'Memory Management', 'POSIX System Calls'],
    description: 'A C++ tool for compressing and decompressing BMP images using Huffman coding.',
    image: '/bmpImage.png',
    imageClass: 'projectImage projectImage--contain',
    repo: 'https://github.com/Dav-03/BMP-Image-Compressor-Decompressor.git'
  },
  {
    title: 'LawnNotify',
    tech: ['Python', 'AWS Lambda', 'Amazon EventBridge', 'Amazon S3', 'AWS Secrets Manager', 'boto3', 'Gmail SMTP'],
    description: 'Serverless AWS system that automates client scheduling and payment reminders for a small landscaping business.',
    image: '/gg.png',
    imageClass: 'projectImage projectImage--contain',
    repo: 'https://github.com/Dav-03/LawnNotify.git'
  },
]

function Projects() {
  return (
    <div className="projectsContent">
      <h2 className="projectsTitle">Some things I’ve worked on</h2>

      <div className="projectsList">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCard"
            onClick={playClick}
          >
            <div className="projectImageWrap">
              <img
                src={project.image}
                alt={project.title}
                className={project.imageClass || 'projectImage'}
              />
            </div>

            <div className="projectInfo">
              <h3 className="projectName">{project.title}</h3>

              <div className="projectTechList">
                {project.tech.map((item) => (
                  <span key={item} className="techTag">
                    {item}
                  </span>
                ))}
              </div>

              <p className="projectDescription">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects