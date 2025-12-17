import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';

const placeholder = '/images/placeholder.png'; 

const SingleProjectCard = ({ project }) => {
  const { name, description, tags, tools, code, demo, image, role } = project;

  // Truncate description function (to avoid cutting off mid-word)
  const truncateDescription = (text, length) => {
    if (text.length <= length) return text;
    return text.slice(0, text.lastIndexOf(' ', length)) + '...';
  };

  // Ensure that image src is not an empty string
  const imageUrl = image && image !== "" ? image : placeholder;

  return (
    <div className="flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
        <Image
          src={imageUrl}  
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 bg-gradient-to-b from-[#1a1a2e] to-[#0b0b1a]">
        {/* Title and Role */}
        <div>
          <h3 className="text-white text-xl font-bold">{name}</h3>
          {role && <p className="text-purple-400 text-sm mt-1">{role}</p>}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mt-3 flex-1 overflow-hidden">
          {truncateDescription(description, 150)}  {/* Truncate description */}
        </p>

        {/* Tools */}
        {tools?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="bg-purple-600 text-white text-xs px-2 py-1 rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-shadow shadow-md hover:shadow-purple-400/50"
            >
              <FaPlay />
            </Link>
          )}
          {code && (
            <Link
              href={code}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-shadow shadow-md hover:shadow-gray-400/50"
            >
              <FaCode />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
