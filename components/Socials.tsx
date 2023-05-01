import { socials } from '../constants';
import Icons from './Icons';

const Socials = () => (
  <div className="flex gap-4">
    {socials.map((social) => (
      <Icons
        key={social.name}
        type={social.name}
        color="w-[24px] h-[24px] object-contain cursor-pointer dark:fill-primary-gray fill-black"
      />

      // {social.url}
    ))}
  </div>
);

export default Socials;
