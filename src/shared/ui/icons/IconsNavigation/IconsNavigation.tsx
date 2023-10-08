import {
  ISpecialistIconProps,
  PROJECTS_VARIANT,
  SPECIALIST_VARIANT,
} from './IconsNavigation.declaration';

export const IconsNavigation = ({ color, variant }: ISpecialistIconProps) => {
  // const [color, setColor] = useState
  if (variant === SPECIALIST_VARIANT) {


    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="3 User">
          <path
            id="Stroke 1"
            d="M14.9062 7.08058C16.0688 6.91725 16.9638 5.92058 16.9663 4.71308C16.9663 3.52308 16.0988 2.53641 14.9613 2.34975"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 3"
            d="M16.4399 9.87524C17.5658 10.0436 18.3516 10.4377 18.3516 11.2502C18.3516 11.8094 17.9816 12.1727 17.3833 12.4011"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.90529 10.2198C7.22695 10.2198 4.93945 10.6257 4.93945 12.2465C4.93945 13.8665 7.21279 14.284 9.90529 14.284C12.5836 14.284 14.8703 13.8823 14.8703 12.2607C14.8703 10.639 12.5978 10.2198 9.90529 10.2198Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 7"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.90518 7.90658C11.6627 7.90658 13.0877 6.48241 13.0877 4.72408C13.0877 2.96658 11.6627 1.54158 9.90518 1.54158C8.14768 1.54158 6.72268 2.96658 6.72268 4.72408C6.71601 6.47575 8.13018 7.90075 9.88185 7.90658H9.90518Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 9"
            d="M4.90375 7.08058C3.74042 6.91725 2.84625 5.92058 2.84375 4.71308C2.84375 3.52308 3.71125 2.53641 4.84875 2.34975"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Stroke 11"
            d="M3.36967 9.87524C2.24384 10.0436 1.45801 10.4377 1.45801 11.2502C1.45801 11.8094 1.82801 12.1727 2.42634 12.4011"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    );
  }
  if (variant === PROJECTS_VARIANT) {
    return (
      <>
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Work">
            <path
              id="Stroke 1"
              d="M8.99577 12.8973V10.7832"
              stroke={color}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group 8">
              <path
                id="Stroke 2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.1582 3.44183C15.5665 3.44183 16.6998 4.5835 16.6998 5.99183V8.8585C14.6498 10.0585 11.9415 10.7835 8.9915 10.7835C6.0415 10.7835 3.3415 10.0585 1.2915 8.8585V5.9835C1.2915 4.57517 2.43317 3.44183 3.8415 3.44183H14.1582Z"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 4"
                d="M11.9124 3.43817V3.13317C11.9124 2.1165 11.0874 1.2915 10.0708 1.2915H7.92077C6.9041 1.2915 6.0791 2.1165 6.0791 3.13317V3.43817"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Stroke 6"
                d="M1.31201 11.9025L1.46951 13.9933C1.57618 15.4025 2.75035 16.4917 4.16285 16.4917H13.8287C15.2412 16.4917 16.4153 15.4025 16.522 13.9933L16.6795 11.9025"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </>
    );
  }
};
