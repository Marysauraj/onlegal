const CategoryIcon = ({ category }) => {
  switch (category) {
    case "inmuebles":
      return <PropertyIcon />;
    case "compraventa":
      return <TransactionIcon />;
    case "internet":
      return <EntrepreneurshipIcon />;
    case "familia":
      return <FamilyIcon />;
    default:
      return <DefaultIcon />;
  }
};

export default CategoryIcon;

const PropertyIcon = () => {
  return (
    <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24.5" fill="#E9E8F3" />
      <path
        d="M12 14.9608C12 14.4241 12.4237 13.9831 12.96 13.9616L24.5 13.5L36.04 13.9616C36.5763 13.9831 37 14.4241 37 14.9608V38C37 38.5523 36.5523 39 36 39H13C12.4477 39 12 38.5523 12 38V14.9608Z"
        fill="white"
      />
      <path
        d="M14.8464 9H34.0774L39.9238 18.3655H29.4256L24.4619 13.6591L19.4982 18.3655H9L14.8464 9Z"
        fill="#357FEE"
      />
      <path
        d="M21 39V31.2741C21 29.4738 22.5749 28 24.5 28C26.4251 28 28 29.4729 28 31.2741V39"
        fill="#357FEE"
      />
      <path d="M15 22H18V26H15V22Z" fill="#357FEE" />
      <path d="M15 30H18V35H15V30Z" fill="#357FEE" />
      <path d="M31 30H34V35H31V30Z" fill="#357FEE" />
      <path d="M31 22H34V26H31V22Z" fill="#357FEE" />
      <path
        d="M24.4618 18.8901C25.6618 18.8901 26.6345 19.8629 26.6345 21.0638C26.6345 22.2638 25.6618 23.2365 24.4618 23.2365C23.2618 23.2365 22.2891 22.2638 22.2891 21.0638C22.2882 19.8629 23.2618 18.8901 24.4618 18.8901Z"
        fill="#357FEE"
      />
    </svg>
  );
};

const TransactionIcon = () => {
  return (
    <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24.5" fill="#E9E8F3" />
      <path
        d="M35.795 16.665V39.148C35.795 39.786 35.257 40.324 34.619 40.324H15.176C14.538 40.323 14 39.794 14 39.147V10.176C14 9.529 14.529 9 15.176 9H28.13"
        fill="white"
      />
      <path
        d="M35.665 16.665H29.176C28.529 16.665 28 16.136 28 15.489V9L35.665 16.665Z"
        fill="#357FEE"
      />
      <path
        d="M22.3198 25.8873L22.3198 28.3322L17.3077 24.1657L22.3198 20L22.3198 22.4449L33 22.4449L33 25.8873L22.3198 25.8873ZM27.9879 34.5551L27.9879 37L33 32.8334L27.9879 28.6678L27.9879 31.1127L17.3077 31.1127L17.3077 34.5551L27.9879 34.5551Z"
        fill="#357FEE"
      />
    </svg>
  );
};

const EntrepreneurshipIcon = () => {
  return (
    <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24.5" fill="#E9E8F3" />
      <path
        d="M19.8867 33.4073L18.1223 23.9163C16.6357 24.9238 14.7689 25.6657 13.6626 26.9397C10.1699 30.9618 12.806 34.885 15.5868 38.3354L19.8867 33.4073Z"
        fill="#357FEE"
      />
      <path
        d="M30.5176 33.4073L32.282 23.9163C33.7686 24.9238 35.6354 25.6657 36.7417 26.9397C40.2344 30.9618 37.5983 34.885 34.8175 38.3354L30.5176 33.4073Z"
        fill="#357FEE"
      />
      <path
        d="M25.3109 34.0661L25.2236 34.0679L19.782 34.1834C18.9509 29.1918 17.3893 22.9491 17.2852 18.0333C17.1935 13.7254 20.2098 9.93357 24.6704 8.05353L24.7136 8.03589C29.3489 9.74212 32.4711 13.4554 32.5611 17.7087C32.6652 22.6245 31.3709 28.928 30.7525 33.9505L25.3109 34.0661Z"
        fill="white"
      />
      <path
        d="M29.2949 36.3772L21.219 36.5492L19.8665 39.2559C19.5816 39.7323 20.3429 40.2555 20.897 40.2431L29.8587 40.0526C30.4127 40.0411 31.1264 39.5003 30.8459 39.0221L29.2949 36.3772Z"
        fill="white"
      />
      <circle cx="25.2242" cy="21.7913" r="2.25541" fill="#357FEE" />
      <circle cx="25.2242" cy="27.8055" r="2.25541" fill="#357FEE" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.8545 14.2118L18.1465 14.2118C18.2813 13.9035 18.4327 13.6012 18.5995 13.3057L18.5924 13.3057C18.6111 13.2719 18.6324 13.2394 18.6538 13.207C18.6708 13.181 18.6879 13.155 18.7036 13.1284C18.8068 12.9537 18.9136 12.7817 19.0274 12.6123C19.0891 12.5205 19.1527 12.4296 19.2179 12.3397C19.3344 12.1782 19.4561 12.0194 19.5832 11.8624C19.5933 11.8497 19.6035 11.837 19.6136 11.8243C19.6704 11.7532 19.727 11.6823 19.7861 11.6127C19.9378 11.4345 20.0984 11.2616 20.2634 11.0904C20.2858 11.0672 20.3074 11.0437 20.329 11.0201C20.3566 10.99 20.3841 10.96 20.4134 10.9307C20.6313 10.7128 20.8607 10.502 21.0989 10.2973C21.1364 10.265 21.1759 10.2337 21.2154 10.2023C21.2417 10.1814 21.2681 10.1605 21.2938 10.1394C21.4747 9.99027 21.6591 9.84382 21.8496 9.70355C21.9191 9.6526 21.9901 9.60314 22.061 9.55368C22.0847 9.53719 22.1083 9.52071 22.1319 9.50416C22.3057 9.38242 22.4822 9.26508 22.6639 9.15039C22.6834 9.13828 22.703 9.12613 22.7225 9.11398C22.8054 9.0624 22.8885 9.01069 22.9727 8.96071C23.165 8.8469 23.3618 8.73751 23.562 8.63164C23.5944 8.61441 23.6265 8.59707 23.6585 8.57977C23.7216 8.54571 23.7844 8.51178 23.8488 8.47901C24.1426 8.3308 24.4425 8.18964 24.7513 8.05907C24.7557 8.05731 24.7592 8.05554 24.7628 8.05378L24.8051 8.03613C25.1298 8.15612 25.4456 8.28757 25.7544 8.42696C25.8192 8.45582 25.8824 8.48664 25.9458 8.51759C25.9775 8.533 26.0091 8.54845 26.0411 8.56371C26.252 8.6634 26.4593 8.76662 26.6622 8.87513C26.7681 8.9316 26.8722 8.99071 26.9763 9.04982C27.1668 9.15745 27.3521 9.27037 27.5347 9.38595C27.5557 9.39927 27.5766 9.41255 27.5975 9.42582C27.6736 9.47409 27.7496 9.52228 27.825 9.5721C28.0226 9.70531 28.214 9.84382 28.4011 9.98498C28.428 10.0052 28.4553 10.0251 28.4826 10.0449C28.5243 10.0753 28.5661 10.1056 28.6066 10.1376C28.8563 10.3343 29.0972 10.5373 29.3265 10.749C29.3519 10.7717 29.3757 10.7958 29.3997 10.8199C29.4157 10.836 29.4317 10.8522 29.4483 10.8681C29.6327 11.0428 29.8118 11.221 29.982 11.4054C30.0358 11.4632 30.0869 11.5221 30.1382 11.5812C30.1535 11.5987 30.1687 11.6163 30.1841 11.6339C30.3208 11.79 30.454 11.9479 30.5802 12.1094C30.6464 12.1941 30.7108 12.2788 30.7743 12.3652C30.896 12.532 31.0116 12.7005 31.1228 12.8725C31.1396 12.8991 31.1581 12.9249 31.1766 12.9506C31.1967 12.9787 31.2168 13.0067 31.2348 13.0357L31.2277 13.0357C31.464 13.4161 31.6736 13.8086 31.8545 14.2118Z"
        fill="#357FEE"
      />
    </svg>
  );
};

const FamilyIcon = () => {
  return (
    <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24.5" fill="#E9E8F3" />
      <mask
        id="mask0"
        masktype="alpha"
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="39"
        height="39"
      >
        <circle cx="24.5" cy="24.5" r="19.5" fill="#E9E8F3" />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M29.175 10.051C31.681 10.051 33.7141 12.0828 33.7141 14.5901C33.7141 16.2835 32.7869 17.7604 31.4118 18.5392C30.7375 18.9367 29.9524 19.1644 29.1121 19.1644C26.606 19.1644 24.5742 17.1327 24.5742 14.6253C24.5742 12.932 25.5014 11.4563 26.8752 10.6763C27.5495 10.2787 28.3358 10.051 29.175 10.051Z"
          fill="#357FEE"
        />
        <path
          d="M17.937 8.51611C20.5198 8.51611 22.6132 10.6095 22.6132 13.1923C22.6132 14.9373 21.6571 16.4583 20.2405 17.2622C19.546 17.671 18.7358 17.9063 17.8715 17.9063C15.2887 17.9063 13.1953 15.8129 13.1953 13.2301C13.1953 11.4851 14.1502 9.96415 15.5655 9.16024C16.2612 8.75137 17.0714 8.51611 17.937 8.51611Z"
          fill="#357FEE"
        />
        <path
          d="M23.1027 23.6872C23.1203 22.3084 24.1154 21.1485 25.4766 20.9233C29.3817 20.2766 38.0472 19.1947 38.9681 20.1156C40.0142 21.1616 47.1488 30.9056 49.5236 34.1599C49.945 34.7374 49.7952 35.5427 49.2003 35.9393L47.5398 37.0463C46.9709 37.4255 46.2033 37.2811 45.8113 36.721L38.3919 26.1216C38.2334 25.8951 37.8786 26.0448 37.929 26.3166L41.4842 45.2769H22.6133C22.6133 45.2769 23.0272 29.7184 23.1027 23.6872Z"
          fill="white"
        />
        <path
          d="M24.6392 22.9235C24.6216 21.4956 23.6265 20.2954 22.2652 20.0614C18.3602 19.3934 9.69466 18.2724 8.77375 19.2261C7.72165 20.315 0.510473 30.5141 -1.82241 33.8243C-2.22498 34.3955 -2.08012 35.1798 -1.50503 35.5768L0.179885 36.74C0.75563 37.1374 1.54504 36.9888 1.93686 36.4092L9.34995 25.4434C9.50846 25.2094 9.86324 25.3642 9.81291 25.6447L6.25762 45.2768H25.1286C25.1286 45.2768 24.7147 29.1685 24.6392 22.9235Z"
          fill="white"
        />
        <path
          d="M23.6796 25.8823C25.8989 25.8823 27.6992 27.6814 27.6992 29.9018C27.6992 31.4015 26.8776 32.7098 25.6598 33.4005C25.0623 33.7528 24.3665 33.9541 23.623 33.9541C21.4038 33.9541 19.6035 32.155 19.6035 29.9345C19.6035 28.4349 20.4238 27.1278 21.6416 26.4371C22.2392 26.0849 22.9361 25.8823 23.6796 25.8823Z"
          fill="#357FEE"
        />
        <path
          d="M24.0754 36.2855C22.0272 36.2855 20.0999 35.8968 18.4141 35.2136V45.2781H29.7366V35.2136C28.0521 35.8955 26.1247 36.2855 24.0754 36.2855Z"
          fill="#357FEE"
        />
        <path
          d="M23.8714 35.2122C19.409 35.2122 15.5577 33.3457 13.7153 30.6366C13.3732 30.1335 12.5488 30.2006 12.5488 30.809C12.5488 35.3254 17.6176 38.9864 23.8714 38.9864C30.1252 38.9864 35.194 35.3254 35.194 30.809C35.194 30.202 34.3689 30.1346 34.0275 30.6365C32.1852 33.3456 28.3338 35.2122 23.8714 35.2122Z"
          fill="#357FEE"
        />
      </g>
    </svg>
  );
};

const DefaultIcon = () => {
  return (
    <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24.5" fill="#E9E8F3" />
      <path
        d="M35.9858 16.665V39.148C35.9858 39.786 35.4478 40.324 34.8098 40.324H15.176C14.538 40.323 14 39.794 14 39.147V10.176C14 9.529 14.529 9 15.176 9H28"
        fill="white"
      />
      <path
        d="M36 16.665H29.176C28.529 16.665 28 16.136 28 15.489V9L36 16.665Z"
        fill="#357FEE"
      />
      <rect x="17" y="20" width="16" height="2" rx="1" fill="#357FEE" />
      <rect x="17" y="24" width="16" height="2" rx="1" fill="#357FEE" />
      <rect x="17" y="28" width="16" height="2" rx="1" fill="#357FEE" />
    </svg>
  );
};