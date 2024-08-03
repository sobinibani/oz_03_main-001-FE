/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useRef, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Logo from '../../assets/images/dosirockLogo.png';
import iconOrderHistory from '../../assets/images/orderHistory.png';
import iconLogout from '../../assets/images/logout.png';
import axios from 'axios';

const Header = () => {
  const location = useLocation();
  const orderPaths: string[] = ['/order', '/orderDetail', '/orderHistory'];
  const CommunityPaths: string[] = ['/community'];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const token1 = sessionStorage.getItem('accessToken');

  return (
    <>
      {location.pathname === '/' ? <div className='h-[42px] bg-white' /> : null}

      <header className='sticky left-0 right-0 top-0 z-50 bg-white'>
        <div className='inner mx-auto flex h-[75px] w-[95%] items-center justify-between headerBreak:w-[1775px]'>
          <div className='flex items-center'>
            <h1>
              <Link to='/'>
                <img
                  src={Logo}
                  className='w-[118px]'
                  alt='도시락도 락이다 홈'
                />
              </Link>
            </h1>
            <Link
              to='/order'
              className={`ml-[58px] text-lg font-medium hover:text-primary ${orderPaths.includes(location.pathname) ? '!font-bold text-primary' : ''}`}
            >
              주문하기
            </Link>
            <Link
              to='/community'
              className={`ml-[62px] text-lg font-medium hover:text-primary ${CommunityPaths.includes(location.pathname) ? '!font-bold text-primary' : ''}`}
            >
              커뮤니티
            </Link>
          </div>
          {token1 ? (
            <div className='relative' ref={dropdownRef}>
              <button
                className='flex h-[38px] items-center rounded-full bg-white px-[20px] font-medium hover:bg-background'
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                }}
              >
                <span className='mr-[10px]'>
                  <span className='userName font-semibold'>내정보</span>
                </span>
                {isDropdownOpen ? <IoChevronUp /> : <IoChevronDown />}
              </button>
              {isDropdownOpen && <UserMenu />}
            </div>
          ) : (
            <button className='h-[38px] w-[85px] rounded-full bg-border font-medium hover:bg-gray20'>
              <Link to='/login'>로그인</Link>
            </button>
          )}
        </div>
      </header>
    </>
  );
};

const UserMenu = () => {
  // 페이지 이동을 위한 네비게이트
  const navigate = useNavigate();
  const handleLogout = async () => {
    sessionStorage.removeItem('accessToken');
    // sessionStorage.removeItem('refresh_token');
    // sessionStorage.removeItem('user');
    navigate('/');
    try {
      const accessToken = sessionStorage.getItem('accessToken');
      await axios.post(
        'https://api.dosirock.store/v1/users/logout',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        } // URL 확인
        // {}, // 빈 요청 본문
        // {
        //   withCredentials: true, // 쿠키를 포함한 요청
        // }
      );
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  return (
    <ul className='absolute left-1/2 top-[50px] w-[160px] -translate-x-1/2 overflow-hidden rounded-lg border border-background bg-white shadow-box'>
      <li className='relative hover:bg-background'>
        <img
          src={iconOrderHistory}
          alt=''
          aria-hidden
          className='absolute left-[20px] top-1/2 -translate-y-1/2'
        />
        <Link
          to='/orderhistories'
          className='w-[160px] pl-[50px] text-[15px] leading-[50px]'
        >
          주문내역
        </Link>
      </li>
      <li className='relative hover:bg-background'>
        <img
          src={iconLogout}
          alt=''
          aria-hidden
          className='absolute left-[20px] top-1/2 -translate-y-1/2'
        />
        <div
          onClick={handleLogout}
          className='w-[160px] pl-[50px] text-[15px] leading-[50px]'
        >
          로그아웃
        </div>
      </li>
    </ul>
  );
};

export default Header;
