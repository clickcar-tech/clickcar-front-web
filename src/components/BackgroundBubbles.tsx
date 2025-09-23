export function BackgroundBubbles({ isNavbarOpened, isPopUpOpened }: { isNavbarOpened: boolean, isPopUpOpened: boolean }) {
  const gradient = 'linear-gradient(180deg, #F2E3FC 0%, #FFD65C 25%, #FFBF00 50%, #FFA500 75%, #D18700 100%)';
  const style = {
    background: gradient,
    backdropFilter: 'blur(100px)',
    maxWidth: '100vw',
  };
  return (
    <div style={style} className={`overflow-x-hidden ${isNavbarOpened || isPopUpOpened ? 'hidden' : ''} animate-slideandSpinInfiniteRightToLeft w-[24vw] h-[24vw] absolute z-0 shadow-bubbleShadow opacity-50 blur-xl transform translate-x-[50vw] rounded-full overflow-hidden`}></div>
  );
}
