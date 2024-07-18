import mainTxt from '../../assets/images/mainTxt.png'
import character from '../../assets/images/character.png'
// import arrowRight from '../../assets/images/arrowRight.png'
import truck from '../../assets/images/truck.png'
import munuh from '../../assets/images/munuh-profile.png'
import tigim from '../../assets/images/tigim-profile.png'
import kori from '../../assets/images/kori-profile.png'

import Carousel from './Carousel'
import Footer from '../../components/layout/Footer'

const Home = () => {
  return (
    <section>
        {/* <button className='fixed bg-white w-[275px] h-[60px] rounded-full shadow-btn bottom-[65px] flex items-center left-1/2 transform -translate-x-1/2 '>
            <span className='mr-[25px]'>나만의 도시락 만들러 가기</span>
            <img src={arrowRight} aria-hidden/>
        </button> */}
        <article className='bg-white h-[100vh]'>
            <div className='inner w-[1590px] flex mx-auto pt-[230px] border-2 justify-between'>
                <div>
                    <h2 className='mb-[26px]'><img src={mainTxt} alt='도시락도 ROCK이다!'/></h2>
                    <p className='text-[30px] mb-[80px] font-medium'>나만의 '맛' 으로, 커스터마이즈의 즐거움을 경험해 보세요.</p>
                    <p className='text-[20px] leading-10'>
                        매일 같은 도시락이 주는 지루함을 바꿀 준비 되셨나요?<br/>
                        <span className='bg-secondary p-1 font-medium'>당신의 취향과 영양에 맞춰 특별히 제작된 도시락</span>으로,<br/>
                        하루를 즐거움으로 가득 채워보세요!
                    </p>
                </div>

                <img src={character} aria-hidden/>
            </div>
        </article>
        <article className='bg-primary'>
            <div className='inner mx-auto w-[1590px] pt-[112px] mb-[330px]'>
                <div className='text-center mb-[190px]'>
                    <p className='text-secondary text-[20px] font-medium mb-[40px]'>메뉴 선택도 A TO Z</p>
                    <h3 className='text-white text-[35px] font-semibold'>"밥食으로 만드는 나만의 맛있는 이야기, 도시락"</h3>
                </div>
                <div className='flex items-center'>
                    <div className='preView w-[864px] h-[485px] rounded-[19px] border-4 border-black bg-white'></div>
                    <p className='text-white text-[20px] leading-10 ml-[60px]'>
                        도시락도 락이다는 당신만을 위한 <span className='text-secondary'>맞춤 도시락 서비스</span>입니다.<br/>
                        저희는 바쁜 현대인의 일상속에서 건강과 맛을 동시에 챙기고<br/>
                        개인의 알레르기 여부를 반영하여 완벽한 도시락을 제공합니다.<br/>
                        이제는 저희 서비스를 통해 <span className='text-secondary'>간편하게 주문하고 나만의 도시락</span>을 받아보세요.<br/>
                        도시락 하나로 매일 새로운 즐거움을 느끼는 하루를 시작 하실 수 있습니다.
                    </p>
                </div>
            </div>
            <div className='relative flex items-center pb-[270px]'>
                <img className='absolute right-0' src={truck} aria-hidden/>
                <div className='inner mx-auto w-[1590px]'>
                    <p className='text-white text-[20px] leading-10'>
                        바쁜 일상 속에서도 건강하고 신선한 식사를 놓치지 마세요!<br/>
                        저희만의 <span className='text-secondary'>새벽배송</span> 서비스로 이른 새벽, 신선한 재료로 만든 나만의 커스텀 도시락이 출근 전에 도착합니다.<br/>
                        가벼운 클릭 한번으로 <span className='text-secondary'>새벽의 신선함</span>을 담은 도시락을 내일 아침 <span className='text-secondary'>당신의 식탁</span>에서 받아보실 수 있습니다.<br/>
                        빠른 배송과 간편함이 당신의 바쁜 하루에 여유를 선사할 것입니다.<br/>
                        지금 주문하시고 하루의 시작을 더 특별하게 만들어 보세요!
                    </p>
                </div>
            </div>
        </article>
        <article className='pb-[200px]'>
            <div className='inner mx-auto w-[1590px] border-2 pt-[200px]'>
                <div className='text-center'>
                    <span className='block w-[60px] h-[9px] rounded-full bg-secondary mx-auto mb-[30px]'/>
                    <h4 className='text-3xl font-semibold mb-[37px]'>오늘의 인기 도시락</h4>
                    <p className='text-xl'>오늘 가장 인기있는 도시락입니다.</p>
                </div>
            </div>
            <Carousel/>
            <div className='inner mx-auto w-[1590px] border-2 pt-[200px]'>
                <div className='text-center mb-[120px]'>
                    <span className='block w-[60px] h-[9px] rounded-full bg-secondary mx-auto mb-[30px]'/>
                    <h4 className='text-3xl font-semibold mb-[37px]'>도시락도 락이다와 함께한 후기</h4>
                    <p className='text-xl'>고객님들의 생생한 후기를 만나보세요!</p>
                </div>
                <div className='flex w-[1435px] justify-between mx-auto'>
                    <ul>
                        <li className='bg-secondary bg-opacity-30 w-[660px] h-[245px] rounded-[18px] backdrop-blur-[50px] flex items-center justify-center mb-[45px]'>
                            <div className='flex items-center w-full'>
                                <div className='text-center w-[175px]'>
                                    <img src={munuh} className='mb-[30px] mx-auto' aria-hidden/>
                                    <span className='text-lg'><b className='text-xl font-semibold'>노*인</b>님</span>
                                </div>
                                <p className='text-lg'>
                                    제가 다이어트를 하느라고 시중에 있는 도시락은 맘에 안들고<br/>
                                    그렇다고 샐러드만 먹기에는 양에 안차는 느낌이었는데<br/>
                                    칼로리 낮은 반찬들만 담아서 주문하니까<br/>
                                    편리하고 다이어트에도 효과본것같아욤.
                                </p>
                            </div>
                        </li>
                        <li className='bg-secondary bg-opacity-30 w-[660px] h-[245px] rounded-[18px] backdrop-blur-[50px] flex items-center justify-center mb-[45px]'>
                            <div className='flex items-center w-full'>
                                <div className='text-center w-[175px]'>
                                    <img src={kori} className='mb-[30px] mx-auto' aria-hidden/>
                                    <span className='text-lg'><b className='text-xl font-semibold'>조*재</b>님</span>
                                </div>
                                <p className='text-lg'>
                                    저같은 경우에는 전생에 육식공룡인가 싶을정도로<br/>
                                    고기가 아니면 식사를 안한다 주의였는데<br/>
                                    도시락도 락이다 에서 제가 좋아하는 고기 메뉴만<br/>
                                    가득 담아서 주문할 수 있어서 좋아요.
                                </p>
                            </div>
                        </li>
                        <li className='bg-secondary bg-opacity-30 w-[660px] h-[245px] rounded-[18px] backdrop-blur-[50px] flex items-center justify-center mb-[45px]'>
                            <div className='flex items-center w-full'>
                                <div className='text-center w-[175px]'>
                                    <img src={tigim} className='mb-[30px] mx-auto' aria-hidden/>
                                    <span className='text-lg'><b className='text-xl font-semibold'>박*웅</b>님</span>
                                </div>
                                <p className='text-lg'>
                                    알레르기가 많아서 ... 매번 알레르기 유발음식이 있는지 없는지<br/>
                                    확인하느라 스트레스 받고 신경쓰였는데<br/>
                                    여기서는 제 알레르기 음식 제외하고 주문시킬 수 있어서<br/>
                                    안심되고 좋습니다. 또 시켜먹을게요.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul className='mt-[85px]'>
                        <li className='bg-secondary bg-opacity-30 w-[660px] h-[245px] rounded-[18px] backdrop-blur-[50px] flex items-center justify-center mb-[45px]'>
                            <div className='flex items-center w-full'>
                                <div className='text-center w-[175px]'>
                                    <img src={munuh} className='mb-[30px] mx-auto' aria-hidden/>
                                    <span className='text-lg'><b className='text-xl font-semibold'>이*주</b>님</span>
                                </div>
                                <p className='text-lg'>
                                    자취를 하다보니 매번 배달음식이나 시리얼같은것만 먹다가<br/>
                                    밥다운 밥을 먹어야할것같아서 주문해봤어요.<br/>
                                    제가 원하는 구성대로 시켜먹을 수 있어서 너무 좋아요!<br/>
                                    배송도 빠르고 좋았어요!<br/>
                                    앞으로도 자주 시켜먹을것 같아요.
                                </p>
                            </div>
                        </li>
                        <li className='bg-secondary bg-opacity-30 w-[660px] h-[245px] rounded-[18px] backdrop-blur-[50px] flex items-center justify-center mb-[45px]'>
                            <div className='flex items-center w-full'>
                                <div className='text-center w-[175px]'>
                                    <img src={kori} className='mb-[30px] mx-auto' aria-hidden/>
                                    <span className='text-lg'><b className='text-xl font-semibold'>이*성</b>님</span>
                                </div>
                                <p className='text-lg'>
                                    동물을 너무 사랑해서 비건을 시작했습니다.<br/>
                                    그래서 알아보던 도중 도시락도 락이다에서는 <br/>
                                    제가 원하는 메뉴들로만 도시락을 구성할 수 있다는걸 <br/>
                                    알게되어 주문해봤는데 앞으로도 종종 시켜먹을것같네요. <br/>
                                    감사합니다. ^^
                                </p>
                            </div>
                        </li>
                        <li className='bg-secondary bg-opacity-30 w-[660px] h-[245px] rounded-[18px] backdrop-blur-[50px] flex items-center justify-center mb-[45px]'>
                            <div className='flex items-center w-full'>
                                <div className='text-center w-[175px]'>
                                    <img src={tigim} className='mb-[30px] mx-auto' aria-hidden/>
                                    <span className='text-lg'><b className='text-xl font-semibold'>홍*빈</b>님</span>
                                </div>
                                <p className='text-lg'>
                                    이제 편의점의 모든 도시락을 다 섭렵했습니다.<br/>
                                    매번 먹던 도시락 먹고 또 먹는 중 이였는데<br/>
                                    저만의 도시락을 만들어 먹을 수 있다니.. <br/>
                                    신박해서 한번 시켜봤는데 좋네요 :)<br/>
                                    이제 매일 새로운 구성으로 질림 없이 밥을 먹고있습니다. <br/>
                                    저와 같은 분들이 계시다면 진심 추천입니다
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
        <Footer/>
    </section>
  )
}

export default Home;
