import { contact } from '../data/content'

const labels = { linkedin: 'LinkedIn', twitter: 'X / Twitter', instagram: 'Instagram', facebook: 'Facebook' }

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-sm ${className}`}>
      {Object.entries(contact.socials).map(([name, url]) => (
        <li key={name}>
          <a href={url} target="_blank" rel="noreferrer" className="link-underline text-muted transition-colors hover:text-fg">
            {labels[name]}
          </a>
        </li>
      ))}
    </ul>
  )
}
