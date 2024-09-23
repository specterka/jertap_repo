import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 40 40">
        <path
          d="M25.5488 15.685C25.551 16.165 25.3068 16.3216 24.9214 16.128C24.236 15.7839 23.5527 15.4343 22.8842 15.0592C22.5781 14.8875 22.3307 14.8635 22.012 15.0473C21.36 15.4235 20.6855 15.7622 20.0082 16.0932C19.8609 16.165 19.602 16.2145 19.5073 16.1373C19.389 16.041 19.3233 15.7942 19.3463 15.6279C19.458 14.8211 19.6206 14.0214 19.7317 13.2147C19.7536 13.0565 19.6726 12.8325 19.5587 12.7156C19.0151 12.1573 18.4347 11.6343 17.89 11.0771C17.7586 10.9428 17.602 10.6748 17.6557 10.559C17.7285 10.4025 17.9814 10.2714 18.1763 10.2372C18.945 10.1018 19.7241 10.023 20.4928 9.88927C20.6543 9.861 20.8492 9.7202 20.9269 9.57668C21.2915 8.90638 21.6064 8.20944 21.971 7.53913C22.0723 7.35267 22.2896 7.09879 22.4435 7.10586C22.6094 7.11292 22.8114 7.36408 22.9138 7.55381C23.2707 8.21379 23.5992 8.88898 23.9206 9.56689C24.023 9.7838 24.1566 9.87785 24.3975 9.90667C25.1727 9.99963 25.9469 10.1056 26.7161 10.2383C26.9022 10.2704 27.1612 10.3894 27.2143 10.5318C27.2641 10.6656 27.13 10.9249 27.0019 11.057C26.4391 11.6338 25.8417 12.1769 25.2762 12.751C25.1787 12.8499 25.1152 13.0478 25.1355 13.1853C25.2609 14.0416 25.4152 14.8956 25.5488 15.685Z"
          fill="url(#paint0_linear_1930_59)"
        />
        <path
          d="M33.4206 9.36635C32.3109 3.35919 26.4461 -0.619136 20.3772 0.492054C15.1098 1.45266 11.2549 6.07084 11.2456 11.8807C11.2648 13.7638 11.9426 15.9014 13.3031 17.8079C16.0624 21.6824 18.8316 25.5525 21.5954 29.427C22.0788 30.1001 22.7807 30.1001 23.2641 29.4319C26.029 25.5569 28.8075 21.6916 31.5526 17.8123C33.3588 15.261 33.9895 12.4265 33.4206 9.36635ZM22.4347 19.2882C18.2431 19.2882 14.8448 15.9144 14.8448 11.7524C14.8448 7.5903 18.2425 4.21595 22.4347 4.21595C26.6263 4.21595 30.0245 7.58975 30.0245 11.7524C30.024 15.9139 26.6263 19.2882 22.4347 19.2882Z"
          fill="url(#paint1_linear_1930_59)"
        />
        <path
          d="M3.73241 29.9505C3.21558 29.4677 2.74966 28.8936 2.37463 28.25C2.06037 27.7368 1.39134 27.5655 0.864653 27.8678C0.347821 28.1695 0.175362 28.8442 0.479767 29.3574C0.965939 30.1826 1.56435 30.9274 2.23283 31.5509C2.44581 31.7423 2.719 31.8429 2.9829 31.8429C3.2769 31.8429 3.5709 31.7222 3.78333 31.4906C4.19833 31.0475 4.17807 30.3631 3.73241 29.9505Z"
          fill="url(#paint2_linear_1930_59)"
        />
        <path
          d="M19.6129 30.5546C18.9439 30.3132 18.3258 30.1724 17.7175 30.1219C17.4136 30.1018 17.1092 30.0817 16.7955 30.0817C16.1977 30.0615 15.6907 30.5448 15.6808 31.1483C15.6704 31.7523 16.1571 32.2453 16.7654 32.2551C17.0189 32.2649 17.2822 32.2752 17.5357 32.2953C17.9513 32.3356 18.3871 32.4361 18.8634 32.6074C18.9953 32.6476 19.1169 32.6677 19.2384 32.6677C19.6945 32.6677 20.11 32.3959 20.2721 31.9534C20.4741 31.3799 20.1801 30.7558 19.6129 30.5546Z"
          fill="url(#paint3_linear_1930_59)"
        />
        <path
          d="M13.4712 30.3736C12.6806 30.5248 11.9004 30.6955 11.1405 30.877L10.9582 30.9173C10.3702 31.0581 10.0056 31.6419 10.1375 32.2252C10.2591 32.7286 10.7151 33.0706 11.2117 33.0706C11.2927 33.0706 11.3737 33.0603 11.4652 33.0402L11.6475 32.9999C12.4074 32.8189 13.1274 32.658 13.8566 32.527C14.4545 32.4161 14.8498 31.8425 14.7386 31.2592C14.6368 30.6656 14.0592 30.273 13.4712 30.3736Z"
          fill="url(#paint4_linear_1930_59)"
        />
        <path
          d="M8.02912 31.4901C7.32997 31.5608 6.64068 31.4901 5.98205 31.289C5.40445 31.1079 4.78633 31.4298 4.61387 32.0033C4.43156 32.5768 4.74582 33.1808 5.33327 33.3619C6.03242 33.5831 6.77208 33.694 7.51229 33.694C7.75537 33.694 7.99846 33.6837 8.24209 33.6636C8.83995 33.6032 9.28616 33.0699 9.22539 32.4659C9.16462 31.8728 8.63738 31.4298 8.02912 31.4901Z"
          fill="url(#paint5_linear_1930_59)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1930_59"
            x1="17.6448"
            y1="7.10571"
            x2="27.225"
            y2="7.10571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_DARK} />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1930_59"
            x1="11.2456"
            y1="0.305908"
            x2="33.6233"
            y2="0.305908"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_DARK} />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1930_59"
            x1="0.329407"
            y1="27.7185"
            x2="4.08117"
            y2="27.7185"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_LIGHT} />
            <stop offset="1" stopColor={PRIMARY_DARK} />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1930_59"
            x1="15.6807"
            y1="30.0811"
            x2="20.3358"
            y2="30.0811"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_MAIN} />
            <stop offset="1" stopColor={PRIMARY_DARK} />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1930_59"
            x1="10.1105"
            y1="30.3579"
            x2="14.7573"
            y2="30.3579"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_MAIN} />
            <stop offset="1" stopColor={PRIMARY_DARK} />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1930_59"
            x1="4.56219"
            y1="31.2385"
            x2="9.23093"
            y2="31.2385"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={PRIMARY_MAIN} />
            <stop offset="1" stopColor={PRIMARY_DARK} />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;