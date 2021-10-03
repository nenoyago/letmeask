import Lottie from 'react-lottie';
import lottieLoading from '../../assets/lottie_loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottieLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

export function LottieLoad() {
  return (
    <div style={container}>
      <Lottie options={defaultOptions} width={200} height={200} />
    </div>
  );
}
