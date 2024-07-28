import { BsTelegram, BsTwitter } from 'react-icons/bs';
import logo from '../../assets/logo.jpg';
import { BiLogoTelegram } from 'react-icons/bi';
{
  /* <BiLogoTelegram /> */
}
interface NavbarProps {}

const icons = [
  { icon: <BiLogoTelegram className="" />, link: 'https://t.me/b4bcommunityy' },
  { icon: <BsTwitter />, link: 'https://x.com/B4BSol' },
];

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex rounded-full bg-[#a0e482] p-3 justify-between items-center">
      <div className="flex gap-2 items-center">
        <img className="w-12 rounded-full" src={logo} />
        {/* <h1 className="text-[#f48015] font-bold text-2xl">BFB</h1> */}
      </div>
      <div className="flex gap-3">
        {icons.map((item) => (
          <a
            href={item.link}
            className="rounded-full bg-[#37ac2f] p-3 text-2xl text-white"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
