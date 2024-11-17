import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#5C3A2E",
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
      }}
    >
      {/* Logo Section */}
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "15px" }}
      >
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 59 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="fluent:spatula-spoon-28-regular">
              <path
                id="Vector"
                d="M41.14 9.53505C40.1391 10.5359 38.9822 12.2469 38.0193 14.2656C37.0563 16.2758 36.3462 18.4525 36.1376 20.3384C35.969 21.885 35.4043 23.6466 34.0136 24.9003L32.1972 26.5439L32.2183 26.5587L34.7469 28.7206L36.2177 27.0897C37.4735 25.7032 39.2309 25.1405 40.7733 24.9678C42.6592 24.7592 44.8359 24.049 46.844 23.0861C48.8605 22.121 50.5694 20.9663 51.5703 19.9675C52.9535 18.5844 53.7305 16.7084 53.7305 14.7523C53.7305 12.7963 52.9535 10.9203 51.5703 9.53715C50.1872 8.154 48.3112 7.37696 46.3551 7.37696C44.3991 7.37696 42.5231 8.1519 41.14 9.53505ZM38.5608 29.2073L37.149 30.7708L50.4662 42.1515L50.5104 42.1937C51.1953 42.8785 51.7386 43.6916 52.1092 44.5864C52.4798 45.4812 52.6706 46.4403 52.6706 47.4088C52.6706 48.3774 52.4798 49.3364 52.1092 50.2313C51.7386 51.1261 51.1953 51.9391 50.5104 52.624C49.8256 53.3089 49.0125 53.8521 48.1177 54.2228C47.2229 54.5934 46.2638 54.7842 45.2952 54.7842C44.3267 54.7842 43.3676 54.5934 42.4728 54.2228C41.578 53.8521 40.7649 53.3089 40.0801 52.624L40.0379 52.5819L29.0555 39.7241L17.1649 52.8769L17.1101 52.9338C16.5243 53.5387 15.8237 54.0204 15.0492 54.3508C14.2747 54.6812 13.442 54.8535 12.5999 54.8577C11.7579 54.8618 10.9236 54.6977 10.1459 54.3749C9.36816 54.0522 8.66276 53.5773 8.07109 52.9782C7.47942 52.3791 7.01341 51.6678 6.70041 50.8862C6.38741 50.1045 6.23372 49.2681 6.24839 48.4262C6.26305 47.5843 6.44576 46.7539 6.78579 45.9835C7.12582 45.2132 7.61632 44.5186 8.22849 43.9405L20.7049 32.6652H15.751C14.2147 32.6651 12.7413 32.055 11.6547 30.9689L3.8056 23.1282C3.26722 22.5901 2.84015 21.9512 2.54877 21.248C2.2574 20.5448 2.10742 19.791 2.10742 19.0298C2.10742 18.2686 2.2574 17.5149 2.54877 16.8117C2.84015 16.1085 3.26722 15.4696 3.8056 14.9314L12.8242 5.91287C13.9109 4.82622 15.3847 4.21575 16.9215 4.21575C18.4583 4.21575 19.9321 4.82622 21.0188 5.91287L28.8574 13.7514C29.3958 14.2895 29.8229 14.9285 30.1143 15.6317C30.4058 16.3349 30.5558 17.0886 30.5558 17.8498V22.9512C30.5558 23.2083 30.5761 23.4612 30.6169 23.7098L31.8959 22.553C32.4965 22.0093 32.8715 21.1117 32.9958 19.9907C33.2529 17.6475 34.1042 15.1211 35.1662 12.898C36.2282 10.6834 37.5683 8.6353 38.9043 7.29937C39.8827 6.32105 41.0443 5.54503 42.3227 5.01561C43.601 4.4862 44.9712 4.21377 46.3548 4.21387C47.7385 4.21397 49.1086 4.48659 50.3869 5.01618C51.6651 5.54578 52.8266 6.32196 53.8049 7.30042C54.7833 8.27888 55.5593 9.44046 56.0887 10.7188C56.6181 11.9972 56.8905 13.3673 56.8904 14.751C56.8903 16.1346 56.6177 17.5047 56.0881 18.783C55.5585 20.0613 54.7823 21.2228 53.8039 22.2011C52.4701 23.5349 50.424 24.875 48.2094 25.9349C45.9885 26.999 43.462 27.8503 41.121 28.1074C40.0021 28.2338 39.1066 28.6068 38.5629 29.2073M24.4451 34.3277C24.3213 34.1796 24.1876 34.0402 24.0447 33.9105L10.3799 46.252C9.78694 46.845 9.45383 47.6491 9.45383 48.4877C9.45383 49.3262 9.78694 50.1304 10.3799 50.7234C10.9728 51.3163 11.777 51.6494 12.6156 51.6494C13.4541 51.6494 14.2583 51.3163 14.8512 50.7234L26.9842 37.2988L24.4451 34.3277ZM18.7832 8.14433C18.5386 7.89968 18.2482 7.7056 17.9286 7.57319C17.609 7.44078 17.2664 7.37263 16.9205 7.37263C16.5745 7.37263 16.2319 7.44078 15.9123 7.57319C15.5927 7.7056 15.3023 7.89968 15.0577 8.14433L6.03917 17.1629C5.79451 17.4075 5.60043 17.6979 5.46802 18.0175C5.33561 18.3371 5.26746 18.6797 5.26746 19.0256C5.26746 19.3716 5.33561 19.7141 5.46802 20.0337C5.60043 20.3533 5.79451 20.6437 6.03917 20.8883L13.8904 28.7311C14.3835 29.2242 15.0535 29.5023 15.751 29.5023H20.8397C21.982 29.502 23.1108 29.7494 24.1483 30.2274C25.1858 30.7054 26.1073 31.4027 26.8493 32.2711L42.3579 50.4284C43.1481 51.2189 44.22 51.6631 45.3377 51.6633C46.4554 51.6635 47.5274 51.2196 48.3179 50.4294C49.1084 49.6392 49.5526 48.5673 49.5528 47.4496C49.553 46.3319 49.1092 45.2599 48.319 44.4694L30.1638 28.9566C29.2958 28.2154 28.5986 27.295 28.1203 26.2587C27.642 25.2224 27.3938 24.0947 27.393 22.9533V17.8477C27.393 17.1482 27.1148 16.4781 26.6217 15.985L18.7832 8.14433ZM17.974 12.5799C17.6744 12.3007 17.2782 12.1487 16.8688 12.156C16.4594 12.1632 16.0687 12.329 15.7792 12.6186C15.4896 12.9081 15.3238 13.2988 15.3165 13.7082C15.3093 14.1176 15.4613 14.5139 15.7405 14.8134L21.0083 20.0813C21.153 20.2366 21.3275 20.3611 21.5213 20.4475C21.7152 20.5339 21.9244 20.5803 22.1366 20.584C22.3488 20.5878 22.5596 20.5488 22.7564 20.4693C22.9532 20.3898 23.1319 20.2715 23.282 20.1214C23.4321 19.9713 23.5504 19.7926 23.6299 19.5958C23.7093 19.399 23.7484 19.1882 23.7446 18.9761C23.7409 18.7639 23.6944 18.5546 23.6081 18.3607C23.5217 18.1669 23.3972 17.9924 23.2419 17.8477L17.974 12.5799ZM10.4726 17.8477C10.7689 17.5518 11.1706 17.3855 11.5894 17.3855C12.0082 17.3855 12.4098 17.5518 12.7062 17.8477L17.974 23.1156C18.1293 23.2603 18.2538 23.4347 18.3402 23.6286C18.4266 23.8224 18.473 24.0317 18.4768 24.2439C18.4805 24.4561 18.4415 24.6669 18.362 24.8637C18.2825 25.0604 18.1642 25.2392 18.0141 25.3893C17.8641 25.5393 17.6853 25.6576 17.4885 25.7371C17.2918 25.8166 17.081 25.8556 16.8688 25.8519C16.6566 25.8482 16.4473 25.8017 16.2535 25.7153C16.0596 25.629 15.8851 25.5044 15.7405 25.3492L10.4726 20.0813C10.1766 19.785 10.0104 19.3833 10.0104 18.9645C10.0104 18.5457 10.1766 18.144 10.4726 17.8477ZM42.143 16.3306C42.143 15.9114 41.9765 15.5095 41.6801 15.2131C41.3837 14.9167 40.9817 14.7502 40.5626 14.7502C40.1435 14.7502 39.7415 14.9167 39.4451 15.2131C39.1487 15.5095 38.9822 15.9114 38.9822 16.3306C38.9822 17.8674 39.5927 19.3413 40.6795 20.428C41.7662 21.5147 43.24 22.1252 44.7769 22.1252C45.196 22.1252 45.598 21.9587 45.8944 21.6623C46.1907 21.366 46.3572 20.964 46.3572 20.5449C46.3572 20.1257 46.1907 19.7238 45.8944 19.4274C45.598 19.131 45.196 18.9645 44.7769 18.9645C43.323 18.9645 42.143 17.7845 42.143 16.3306Z"
                fill="white"
              />
            </g>
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: "22px",
              left: "28px",
            }}
          >
            <g id="noto:cookie">
              <path
                id="Vector"
                d="M4.12234 9.21936L3.02406 9.47202C3.02406 9.47202 1.50039 11.8233 1.16781 14.3241C0.95898 15.8941 0.951245 17.9437 1.09562 18.9647C1.24257 19.9856 1.76851 22.159 2.59609 23.6904C3.39273 25.1651 4.16875 25.7451 5.01695 26.2582C5.38046 26.4773 5.70531 27.2276 6.2725 27.5911C6.80359 27.9314 7.50484 27.9984 7.50484 27.9984C7.50484 27.9984 9.44359 31.0432 13.6382 31.5717C18.5598 32.1905 20.9678 29.9681 20.9678 29.9681C20.9678 29.9681 22.9375 29.963 24.7963 29.1663C26.882 28.2717 27.9958 26.4103 27.9958 26.4103C27.9958 26.4103 30.6074 24.1622 31.435 21.4706C32.1002 19.3101 32.1182 15.2032 31.6077 13.2696C31.0973 11.336 30.1098 9.6989 29.3261 8.6496C28.7022 7.81429 21.7361 4.1121 20.8956 3.7821C20.0577 3.45468 12.2537 2.94421 11.9624 3.16335C11.6711 3.38507 4.12234 9.21936 4.12234 9.21936Z"
                fill="#AC5811"
              />
              <path
                id="Vector_2"
                d="M6.83973 5.09173C5.02215 6.57158 4.08114 7.34501 3.13754 9.19611C2.19395 11.0472 2.49817 13.5042 2.66832 14.4117C2.8359 15.3192 3.14012 17.0697 3.3077 17.9437C3.47528 18.8202 3.92129 20.8982 5.15621 22.1847C6.88614 23.9868 8.45364 24.6081 8.45364 24.6081C8.45364 24.6081 9.72465 26.5778 12.7952 27.7045C16.8325 29.1843 18.6501 27.0316 20.197 26.4592C21.7439 25.8869 23.595 25.8534 25.1779 24.7422C26.7583 23.631 28.5089 22.2852 29.6536 19.4596C30.7982 16.634 30.5611 15.3888 30.5946 14.6824C30.6281 13.976 30.5275 10.578 29.2153 8.49228C27.903 6.40658 26.3252 5.15361 25.7168 4.75658C24.371 3.88259 19.5654 1.79173 18.3562 1.55712C17.1445 1.32251 12.8236 1.68861 11.1091 2.39501C9.39465 3.10142 6.83973 5.09173 6.83973 5.09173Z"
                fill="url(#paint0_radial_91_4831)"
              />
              <path
                id="Vector_3"
                d="M14.5098 18.4234C14.2236 18.3332 13.922 17.9078 13.8498 16.9977C13.7492 15.7009 14.7057 15.3426 14.7057 15.3426C14.7057 15.3426 15.8453 15.0409 16.6471 14.7548C17.3921 14.4892 17.9284 14.1489 17.9284 14.1489C17.9284 14.1489 18.0006 12.7593 18.4621 12.3494C18.9261 11.9395 19.7434 11.9755 20.6535 12.0812C21.561 12.187 23.0228 12.7928 22.8088 13.3445C22.5948 13.8962 22.3447 14.448 21.4733 14.9481C20.6019 15.4457 19.978 15.9098 19.532 16.3016C19.086 16.6961 18.2687 17.1911 16.9152 17.6912C15.5617 18.1914 14.9223 18.5523 14.5098 18.4234ZM6.84502 6.82445C5.98909 6.64914 4.77995 8.50281 4.55565 9.1164C4.32877 9.73 4.09674 11.2253 4.07096 11.9085C4.03745 12.7567 4.02198 13.5534 4.37776 14.2005C4.65104 14.7006 5.31362 14.9816 5.90917 14.466C6.50471 13.9504 7.53854 12.5376 7.81182 12.3391C8.0851 12.1405 8.88432 11.8776 8.56979 10.5782C8.44088 10.0471 7.13377 8.94883 7.06932 8.79929C7.00745 8.65234 7.32971 6.925 6.84502 6.82445ZM12.8959 4.4964C12.9294 4.99398 13.3367 5.79062 13.7776 6.22117C14.4376 6.86312 17.4643 9.0339 18.2481 8.91015C19.0318 8.7864 19.8852 7.37875 20.1353 6.98687C20.3853 6.595 20.8829 6.04328 21.0789 5.7932C21.2748 5.54312 21.7904 4.97336 21.365 4.40359C20.9371 3.83383 19.8697 3.46 19.1581 3.40586C18.4466 3.35172 17.3406 2.89023 16.397 2.92633C15.4534 2.96242 12.8082 3.2125 12.8959 4.4964ZM25.3534 11.1351C25.4127 11.6765 26.1732 11.7951 26.7791 12.1869C27.3849 12.5788 27.7949 12.9887 28.1507 12.8805C28.5064 12.7748 28.9911 12.205 28.8803 11.2073C28.7385 9.92593 27.9367 8.28625 26.8152 8.34039C26.1371 8.3739 26.2299 9.55211 26.2299 9.55211C26.2299 9.55211 25.3173 10.8154 25.3534 11.1351Z"
                fill="#FFC86E"
              />
              <path
                id="Vector_4"
                d="M10.6916 7.79353C10.6916 7.79353 8.26042 7.77807 8.30425 8.02041C8.35066 8.26275 8.56206 9.06197 9.19628 9.09291C9.8305 9.12385 10.6478 9.18315 11.0396 9.06197C11.4315 8.9408 12.5195 8.06424 12.5195 7.67236C12.5195 7.28049 12.0812 6.70557 12.0812 6.70557L10.6916 7.79353ZM14.1643 12.2511C14.1643 12.2511 14.136 12.2692 14.0947 12.3027C13.9735 12.4032 13.7415 12.6378 13.8317 12.9008C13.9529 13.2488 14.6619 13.8985 15.358 13.8985C16.0541 13.8985 16.4305 13.2488 16.5517 12.826C16.6728 12.4032 16.611 12.1454 16.611 12.1454L14.1643 12.2511ZM8.74253 14.2311C8.74253 14.2311 8.31972 14.3832 8.33519 14.6539C8.35066 14.9246 8.45636 15.4248 9.00034 15.9533C9.54948 16.487 10.3461 16.6339 11.0706 16.438C11.795 16.2421 12.3235 15.6981 12.2642 14.9736C12.205 14.2492 11.5089 13.6897 11.5089 13.6897L8.74253 14.2311ZM5.61527 18.2349C5.61527 18.2349 5.16152 18.3406 5.20792 18.6423C5.25433 18.9439 5.76737 19.8953 6.58206 19.7896C7.39675 19.6838 8.68323 18.748 8.68323 18.3845C8.68323 18.021 8.03355 17.5388 8.03355 17.5388L5.61527 18.2349ZM11.1737 22.0119C11.1737 22.0119 11.0061 22.9864 12.321 23.3422C14.5124 23.9326 14.7392 22.6023 14.7392 22.6023L11.1737 22.0119ZM19.7821 22.4631C19.7821 22.4631 19.1942 23.0509 19.862 23.5124C20.5297 23.9738 21.2903 24.1311 22.007 24.0512C22.7237 23.9713 23.2135 23.3989 23.2135 23.3989L19.7821 22.4631ZM25.2683 15.9353C25.2683 15.9353 24.1597 16.4947 25.0182 17.4615C25.6705 18.1988 27.1632 18.0493 27.7743 17.6342C28.1739 17.3635 28.2925 16.884 28.1429 16.6417C27.9908 16.3993 25.2683 15.9353 25.2683 15.9353ZM20.9783 9.53119C20.9783 9.53119 20.919 10.7971 22.6257 10.7558C25.0131 10.6965 24.7114 9.21408 24.7114 9.21408L20.9783 9.53119Z"
                fill="#CF701E"
              />
              <path
                id="Vector_5"
                d="M22.0819 7.94557C22.0819 7.94557 20.963 8.64167 20.8418 8.92784C20.7206 9.21401 20.4628 10.1215 21.7622 10.0622C23.0615 10.0029 24.3609 9.95651 24.7992 9.428C25.2375 8.89948 25.1318 8.41479 24.9513 8.02292C24.7708 7.63104 23.7551 6.14862 22.9481 6.16667C22.4196 6.17698 22.0819 7.94557 22.0819 7.94557Z"
                fill="#593329"
              />
              <path
                id="Vector_6"
                d="M22.9429 6.16194C22.9429 6.16194 22.2339 6.0717 21.6126 7.17514C20.9938 8.27858 20.834 8.936 20.834 8.936C20.834 8.936 22.0947 8.94116 22.8501 8.85092C23.6055 8.76069 24.1185 8.29147 24.1185 8.29147C24.1185 8.29147 23.5023 6.29858 22.9429 6.16194Z"
                fill="#925849"
              />
              <path
                id="Vector_7"
                d="M14.3627 11.3152C14.3627 11.3152 13.7439 11.274 13.6975 11.5137C13.6511 11.7561 13.7878 12.3722 13.9992 12.6429C14.2106 12.9136 14.8448 13.5195 15.479 13.3983C16.1132 13.2772 16.4896 12.6558 16.5953 12.4418C16.6907 12.2407 16.7939 12.0242 16.6134 11.7535C16.4303 11.4802 14.3627 11.3152 14.3627 11.3152Z"
                fill="#593329"
              />
              <path
                id="Vector_8"
                d="M15.2834 10.3485C14.7574 10.2918 13.489 11.2998 13.7159 11.6453C13.9685 12.0243 14.0123 11.7845 14.7084 12.1326C15.2834 12.4187 15.5334 12.6843 15.8944 12.6379C16.2553 12.5915 16.6859 11.9959 16.6111 11.7536C16.5363 11.5112 15.9949 10.4233 15.2834 10.3485Z"
                fill="#925849"
              />
              <path
                id="Vector_9"
                d="M9.33011 6.26729L8.09261 7.12323C8.09261 7.12323 8.0462 7.70331 8.30401 8.02042C8.56183 8.33753 8.63659 8.53347 9.84573 8.53347C11.0549 8.53347 12.1867 8.36847 12.3981 7.50737C12.6095 6.64628 12.2382 6.09456 12.0114 5.77745C11.7845 5.46034 9.33011 6.26729 9.33011 6.26729Z"
                fill="#593329"
              />
              <path
                id="Vector_10"
                d="M9.34588 4.92434C9.06744 5.04293 8.41002 5.93754 8.25791 6.32942C8.1058 6.72129 8.07229 7.13895 8.09291 7.1441C8.34299 7.20598 9.8151 7.34262 10.4648 7.23692C11.1145 7.13121 11.643 6.84504 11.8544 6.46606C12.022 6.16442 12.0091 5.76481 12.0091 5.76481C12.0091 5.76481 11.5682 4.97074 10.9624 4.7284C10.3591 4.48606 9.45158 4.87793 9.34588 4.92434Z"
                fill="#925949"
              />
              <path
                id="Vector_11"
                d="M8.30935 14.2877C8.30935 14.2877 8.20622 14.445 8.40216 14.7466C8.5981 15.0483 8.98224 15.4092 9.55716 15.5768C10.1321 15.7418 10.5394 15.9687 10.9158 15.9248C11.2948 15.8784 12.0347 15.5768 12.0631 14.5352C12.094 13.4937 11.8826 13.009 11.4289 12.5552C10.9751 12.1015 10.6477 12.1788 10.6477 12.1788L8.30935 14.2877Z"
                fill="#593329"
              />
              <path
                id="Vector_12"
                d="M8.441 13.3237C8.28116 13.5918 8.16257 14.4632 8.3585 14.6592C8.55444 14.8551 9.73265 14.868 10.042 14.8345C10.354 14.801 11.3723 14.3214 11.3878 13.9579C11.4033 13.5944 11.2073 13.1123 11.2073 12.9318C11.2073 12.7513 11.4342 12.3285 10.8155 12.1764C10.1967 12.0243 8.771 12.7642 8.441 13.3237Z"
                fill="#925849"
              />
              <path
                id="Vector_13"
                d="M6.39869 17.2371C6.39869 17.2371 5.42674 17.4769 5.36486 17.8095C5.30557 18.1421 5.44479 18.4772 5.77736 18.7943C6.10994 19.1114 6.35229 19.444 6.60752 19.4131C6.86533 19.3821 7.54338 18.7789 7.75479 18.5829C7.96619 18.387 8.26783 18.0389 8.23947 17.7528C8.21111 17.4666 8.08736 17.1778 7.81666 16.951C7.54854 16.7241 6.39869 17.2371 6.39869 17.2371Z"
                fill="#593329"
              />
              <path
                id="Vector_14"
                d="M6.64118 16.3763C6.18743 16.3866 5.83938 16.9357 5.68985 17.1317C5.53774 17.3276 5.28251 17.7968 5.38821 17.8716C5.49391 17.9464 5.9322 17.9928 6.1436 18.1294C6.35501 18.266 6.67212 18.4774 6.91446 18.2815C7.1568 18.0856 7.36821 17.5416 7.48938 17.3611C7.61055 17.1806 7.82196 16.9538 7.82196 16.9538C7.82196 16.9538 7.36563 16.3608 6.64118 16.3763Z"
                fill="#925849"
              />
              <path
                id="Vector_15"
                d="M12.1866 20.0164C12.0964 20.1221 10.8125 21.1637 10.8125 21.1637C10.8125 21.1637 10.8589 22.0712 11.1451 22.2826C11.4313 22.494 12.3233 22.7956 12.8982 22.9168C13.4731 23.0379 14.4992 23.1746 14.757 23.0689C15.0148 22.9632 15.2855 22.4037 15.301 21.6793C15.3165 20.9548 15.0587 20.4134 14.7725 20.0808C14.4863 19.7483 14.2569 19.6245 14.2569 19.6245L12.1866 20.0164Z"
                fill="#593329"
              />
              <path
                id="Vector_16"
                d="M13.8937 21.3753C14.0613 21.1871 14.2572 19.6222 14.2572 19.6222C14.2572 19.6222 13.0945 18.7301 12.6098 18.6708C12.1251 18.6115 11.5528 18.6554 11.3852 18.8358C11.2202 19.0163 10.5705 19.666 10.6298 20.0888C10.6891 20.5116 10.8103 21.1613 10.8103 21.1613C10.8103 21.1613 13.5456 21.7697 13.8937 21.3753Z"
                fill="#925849"
              />
              <path
                id="Vector_17"
                d="M19.5292 22.1202C19.5292 22.1202 19.3823 23.0999 20.4599 23.2856C21.5376 23.4686 22.4322 23.7135 22.8988 23.6156C23.3655 23.5176 23.8295 22.8937 23.8785 22.4399C23.9275 21.9862 23.9533 21.3313 23.8785 21.1534C23.6826 20.6816 22.7751 19.39 22.3342 19.2534C22.0867 19.1786 21.8521 19.2198 21.8521 19.2198L19.5292 22.1202Z"
                fill="#593329"
              />
              <path
                id="Vector_18"
                d="M20.2281 20.4031C19.746 20.9368 19.4985 21.7076 19.5243 22.115C19.5501 22.4991 21.378 22.3315 21.5945 22.2001C21.8111 22.0686 22.2829 21.4808 22.2984 21.2848C22.3138 21.0889 22.1643 20.4753 22.1385 20.0963C22.1127 19.7173 22.1024 19.2017 21.8936 19.2146C21.6848 19.2275 20.9139 19.6451 20.2281 20.4031Z"
                fill="#925849"
              />
              <path
                id="Vector_19"
                d="M26.4102 13.752C26.4102 13.752 26.8356 13.8138 27.359 14.1284C27.97 14.4945 28.6094 15.4277 28.5604 16.1883C28.5114 16.9488 27.8488 17.2917 27.0419 17.3046C26.2349 17.3175 25.446 17.2737 25.299 16.856C25.1521 16.4384 26.4102 13.752 26.4102 13.752Z"
                fill="#593329"
              />
              <path
                id="Vector_20"
                d="M25.7656 14.0071C25.6392 14.1825 25.3118 14.7187 25.201 15.4045C25.0901 16.0903 25.1649 16.874 25.4098 17.0107C25.6547 17.1447 27.0031 15.982 27.0753 15.8582C27.15 15.7345 26.6447 13.8602 26.4849 13.7751C26.325 13.69 25.9254 13.788 25.7656 14.0071Z"
                fill="#925849"
              />
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_91_4831"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(16.5422 14.8489) scale(13.7161)"
              >
                <stop offset="0.507" stop-color="#F29F58" />
                <stop offset="0.715" stop-color="#F09D56" />
                <stop offset="0.826" stop-color="#EB9550" />
                <stop offset="0.914" stop-color="#E18745" />
                <stop offset="0.99" stop-color="#D47436" />
                <stop offset="1" stop-color="#D27133" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div
        style={{
          color: "#FFC86E",
          fontSize: 18,
          fontFamily: "Poppins, sans-serif", // Đảm bảo font chữ được áp dụng
          fontWeight: "800",
          wordWrap: "break-word",
        }}
      >
        CookCook
      </div>

      {/* Navigation Links */}
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "300px" }}
      >
        <NavLink to="/News" style={{ marginRight: "10px" }}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="emojione-monotone:newspaper">
              <path
                id="Vector"
                d="M38.4628 16.2742C39.1165 14.5085 39.3053 12.8248 38.8356 11.3137C38.6189 11.3334 38.3953 11.3433 38.1651 11.3433C31.2838 11.3433 19.1215 2.69153 18.201 1.34375C14.4083 6.86858 6.45866 11.1162 2.86547 15.8798C1.41154 17.8074 0.684569 19.2418 2.13112 21.4469L17.2812 40.9132C17.9645 41.8383 19.3036 41.9136 20.257 41.0603C20.257 41.0603 32.6813 25.1174 41.6568 20.1845C40.9823 18.8669 39.8596 17.5521 38.4628 16.2742ZM17.0172 36.7878L16.954 36.8315L16.8969 36.8812C16.6655 37.0891 16.4598 37.3239 16.2842 37.5807L3.15707 20.7146C2.21174 19.2519 2.47982 18.4819 3.87127 16.6383C5.44951 14.5468 7.97173 12.5164 10.6424 10.367C13.4186 8.13238 16.2781 5.83187 18.3784 3.21425C21.8453 6.06703 31.5424 12.3659 37.8171 12.5963C38.5696 19.9849 23.2495 32.4408 17.0172 36.7878Z"
                fill="#FFC86E"
              />
              <path
                id="Vector_2"
                d="M13.4329 9.51241L30.3675 22.7819L30.9708 22.2418L13.8736 9.11735L13.4329 9.51241ZM18.9516 16.5758L12.0206 10.7762C12.0206 10.7762 9.60855 12.3161 6.68724 15.6937L12.8362 22.0509L18.9516 16.5758ZM3.7666 18.8528L16.8467 34.8844L19.2621 32.723L5.31662 16.7787C5.31662 16.7787 4.1012 17.4365 3.7666 18.8528ZM18.4229 19.7719L26.0211 26.6721L28.4352 24.5107L20.5238 17.8914L18.4229 19.7719ZM14.221 23.5338L21.193 30.9943L23.6064 28.8335L16.3219 21.6532L14.221 23.5338ZM18.7165 7.22669L17.6919 10.1037L18.3342 10.5713L21.5961 7.65065L20.9579 7.24887L18.7104 9.26113L19.7041 6.45673L19.0376 6.03613L15.9289 8.81904L16.4859 9.22418L18.7165 7.22669ZM21.5081 12.8859L22.1303 12.3276L20.2322 10.9784L21.0929 10.2085L22.7786 11.3628L23.3773 10.8259L21.6727 9.68777L22.3836 9.05218L24.2709 10.273L24.8836 9.7254L22.2741 8.07796L18.9698 11.0362L21.5081 12.8859ZM23.5298 14.3586L26.1091 12.7965L26.9537 12.2617L26.3933 12.986L24.7338 15.2375L25.5354 15.8213L30.4992 13.2689L29.5572 12.6743L26.8354 14.2317L26.1407 14.6523L26.607 14.0388L28.2202 11.8304L27.3145 11.2593L24.7983 12.8187L24.1298 13.2413L24.59 12.6561L26.1138 10.5014L25.2646 9.96526L22.8049 13.8306L23.5298 14.3586ZM32.8595 14.5831C32.2487 14.1994 31.6783 14.016 31.1448 14.0267C30.6163 14.0384 30.1811 14.1974 29.8394 14.5038C29.4636 14.8397 29.3375 15.1884 29.4611 15.5499C29.5328 15.7662 29.7655 16.0816 30.1592 16.4959L30.567 16.9245C30.8102 17.1776 30.9663 17.3837 31.0353 17.5427C31.1025 17.7039 31.0698 17.8437 30.9372 17.9619C30.7106 18.1635 30.4161 18.2024 30.0537 18.0788C29.8284 17.9938 29.6162 17.8773 29.4235 17.7328C29.0405 17.46 28.8544 17.1973 28.8591 16.944C28.8618 16.8056 28.9375 16.6471 29.0862 16.4683L28.2054 15.8542C27.8076 16.209 27.6583 16.6063 27.7572 17.0461C27.8574 17.4903 28.198 17.9283 28.7892 18.3597C29.3785 18.7917 29.965 19.0228 30.5415 19.0483C31.124 19.0732 31.6037 18.92 31.9733 18.5874C32.3361 18.2631 32.4655 17.9158 32.3616 17.5454C32.2958 17.3082 32.111 17.032 31.8127 16.7176L31.1442 16.0121C30.8902 15.7465 30.7375 15.5611 30.6859 15.4558C30.6053 15.2955 30.6344 15.1535 30.7733 15.0299C30.9242 14.8946 31.118 14.8388 31.3545 14.8626C31.5941 14.8863 31.8445 14.9821 32.1056 15.1501C32.3435 15.3033 32.5094 15.4619 32.6033 15.6254L33.0522 14.7793C33.0665 14.5787 32.9768 14.3963 32.8595 14.3586Z"
                fill="#FF745A"
              />
            </g>
          </svg>
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFC86E" : "#F4A950",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: isActive ? "bold" : "normal",
            fontFamily: "Poppins, sans-serif",
          })}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/OurStory"
          style={({ isActive }) => ({
            color: isActive ? "#FFC86E" : "#F4A950",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: isActive ? "bold" : "normal",
            fontFamily: "Poppins, sans-serif", // Áp dụng font cho các link
          })}
        >
          Our Story
        </NavLink>
        <NavLink
          to="/Recipes"
          style={({ isActive }) => ({
            color: isActive ? "#FFC86E" : "#F4A950",
            textDecoration: "none",
            margin: "0 15px",
            fontSize: "16px",
            fontWeight: isActive ? "bold" : "normal",
            fontFamily: "Poppins, sans-serif", // Áp dụng font cho các link
          })}
        >
          Recipes
        </NavLink>
        <div style={{ marginLeft: "4px" }}>
          <svg
            width="42"
            height="30"
            viewBox="0 0 45 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                id="Vector"
                d="M22.5 7.65625C22.5 7.28329 22.3518 6.9256 22.0881 6.66188C21.8244 6.39816 21.4667 6.25 21.0938 6.25C20.7208 6.25 20.3631 6.39816 20.0994 6.66188C19.8357 6.9256 19.6875 7.28329 19.6875 7.65625V27.3438C19.6875 27.7167 19.8357 28.0744 20.0994 28.3381C20.3631 28.6018 20.7208 28.75 21.0938 28.75C21.4667 28.75 21.8244 28.6018 22.0881 28.3381C22.3518 28.0744 22.5 27.7167 22.5 27.3438V7.65625ZM32.3438 10.1256C36.5119 6.13187 45.8297 14.0406 32.3438 23.125C18.8578 14.0406 28.1756 6.12906 32.3438 10.1256ZM7.03125 9.0625C6.65829 9.0625 6.3006 9.21066 6.03688 9.47438C5.77316 9.7381 5.625 10.0958 5.625 10.4688C5.625 10.8417 5.77316 11.1994 6.03688 11.4631C6.3006 11.7268 6.65829 11.875 7.03125 11.875H15.4688C15.8417 11.875 16.1994 11.7268 16.4631 11.4631C16.7268 11.1994 16.875 10.8417 16.875 10.4688C16.875 10.0958 16.7268 9.7381 16.4631 9.47438C16.1994 9.21066 15.8417 9.0625 15.4688 9.0625H7.03125ZM7.03125 14.6875C6.65829 14.6875 6.3006 14.8357 6.03688 15.0994C5.77316 15.3631 5.625 15.7208 5.625 16.0938C5.625 16.4667 5.77316 16.8244 6.03688 17.0881C6.3006 17.3518 6.65829 17.5 7.03125 17.5H15.4688C15.8417 17.5 16.1994 17.3518 16.4631 17.0881C16.7268 16.8244 16.875 16.4667 16.875 16.0938C16.875 15.7208 16.7268 15.3631 16.4631 15.0994C16.1994 14.8357 15.8417 14.6875 15.4688 14.6875H7.03125ZM7.03125 20.3125C6.65829 20.3125 6.3006 20.4607 6.03688 20.7244C5.77316 20.9881 5.625 21.3458 5.625 21.7188C5.625 22.0917 5.77316 22.4494 6.03688 22.7131C6.3006 22.9768 6.65829 23.125 7.03125 23.125H15.4688C15.8417 23.125 16.1994 22.9768 16.4631 22.7131C16.7268 22.4494 16.875 22.0917 16.875 21.7188C16.875 21.3458 16.7268 20.9881 16.4631 20.7244C16.1994 20.4607 15.8417 20.3125 15.4688 20.3125H7.03125Z"
                fill="#FFC86E"
              />
              <path
                id="Vector_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 6.25C0 4.75816 0.592632 3.32742 1.64752 2.27252C2.70242 1.21763 4.13316 0.625 5.625 0.625H39.375C40.8668 0.625 42.2976 1.21763 43.3525 2.27252C44.4074 3.32742 45 4.75816 45 6.25V28.75C45 30.2418 44.4074 31.6726 43.3525 32.7275C42.2976 33.7824 40.8668 34.375 39.375 34.375H5.625C4.13316 34.375 2.70242 33.7824 1.64752 32.7275C0.592632 31.6726 0 30.2418 0 28.75V6.25ZM5.625 3.4375C4.87908 3.4375 4.16371 3.73382 3.63626 4.26126C3.10882 4.78871 2.8125 5.50408 2.8125 6.25V28.75C2.8125 29.4959 3.10882 30.2113 3.63626 30.7387C4.16371 31.2662 4.87908 31.5625 5.625 31.5625H39.375C40.1209 31.5625 40.8363 31.2662 41.3637 30.7387C41.8912 30.2113 42.1875 29.4959 42.1875 28.75V6.25C42.1875 5.50408 41.8912 4.78871 41.3637 4.26126C40.8363 3.73382 40.1209 3.4375 39.375 3.4375H5.625Z"
                fill="#FFC86E"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Profile Image Section */}
      <div
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        <img
          alt="Profile "
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
          }}
          src="https://placehold.co/40x40"
        />
      </div>
    </div>
  );
};

export default Navbar;
