import localFont from 'next/font/local'

export const inter = localFont({
  src: [
    {
      path: '../assets/fonts/Inter/Inter-Black.ttf',
      weight: '900',
      style: 'black',
    },
    {
      path: '../assets/fonts/Inter/Inter-ExtraBold.ttf',
      weight: '800',
      style: 'extrabold',
    },
    {
      path: '../assets/fonts/Inter/Inter-SemiBold.ttf',
      weight: '700',
      style: 'semibold',
    },
    {
      path: '../assets/fonts/Inter/Inter-Bold.ttf',
      weight: '600',
      style: 'bold',
    },
    {
      path: '../assets/fonts/Inter/Inter-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../assets/fonts/Inter/Inter-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../assets/fonts/Inter/Inter-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../assets/fonts/Inter/Inter-ExtraLight.ttf',
      weight: '200',
      style: 'extralight',
    },
    {
      path: '../assets/fonts/Inter/Inter-Thin.ttf',
      weight: '200',
      style: 'thin',
    },
  ],
})