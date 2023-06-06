<template>
  <el-dropdown class="feature-dropdown" trigger="click">
    <el-icon class="user-action icon" >
      <Grid/>
    </el-icon>
    <template #dropdown>
      <div class="container">
        <el-dropdown-item>
          <div  class="feature-icon">
            <svg class="icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.7966 5.82096V29.6712H4V1H21.8101" fill="white"></path><path d="M13 6H19" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 12H10" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6 14H10" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6 18H10" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6 20H10" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 8H22" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 12H25" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 14H25" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 17H25" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 19H25" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 24H25" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 27H25" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 4H19M6 4V8H10V4H6Z" stroke="#94AAAD" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9973 1.00488V5.78283H26.7966L21.9973 1.00488Z" fill="#94AAAD"></path>
            </svg>
          </div>
          <div class="title">Resume Builder</div>
        </el-dropdown-item>
        <el-dropdown-item >
          <div class="feature-icon" >
            <svg class="icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_7)"><path d="M28.8187 4.99687C28.7311 4.89976 28.6241 4.82206 28.5046 4.76878C28.3851 4.71549 28.2558 4.68781 28.125 4.6875H25.0406L25.3125 1.96875C25.3247 1.83807 25.3093 1.70628 25.2673 1.58193C25.2253 1.45758 25.1576 1.34343 25.0687 1.24688C24.9811 1.14976 24.8741 1.07206 24.7546 1.01878C24.6351 0.965495 24.5058 0.937809 24.375 0.9375H5.625C5.49418 0.937809 5.36487 0.965495 5.24539 1.01878C5.12591 1.07206 5.0189 1.14976 4.93125 1.24688C4.84235 1.34343 4.77472 1.45758 4.73273 1.58193C4.69075 1.70628 4.67533 1.83807 4.6875 1.96875L4.95937 4.6875H1.875C1.74418 4.68781 1.61487 4.71549 1.49539 4.76878C1.37591 4.82206 1.2689 4.89976 1.18125 4.99687C1.09235 5.09343 1.02472 5.20758 0.982734 5.33193C0.940745 5.45628 0.925335 5.58807 0.9375 5.71875L1.71562 13.4063C1.78558 14.1024 2.11251 14.7475 2.63257 15.2155C3.15262 15.6836 3.82847 15.941 4.52812 15.9375H6.50625C7.02236 17.1608 7.79749 18.2578 8.77827 19.1528C9.75904 20.0478 10.9222 20.7196 12.1875 21.1219V27.1875H10.3125C10.0639 27.1875 9.8254 27.2863 9.64959 27.4621C9.47377 27.6379 9.375 27.8764 9.375 28.125C9.375 28.3736 9.47377 28.6121 9.64959 28.7879C9.8254 28.9637 10.0639 29.0625 10.3125 29.0625H19.6875C19.9361 29.0625 20.1746 28.9637 20.3504 28.7879C20.5262 28.6121 20.625 28.3736 20.625 28.125C20.625 27.8764 20.5262 27.6379 20.3504 27.4621C20.1746 27.2863 19.9361 27.1875 19.6875 27.1875H17.8125V21.1219C19.0778 20.7196 20.241 20.0478 21.2217 19.1528C22.2025 18.2578 22.9776 17.1608 23.4937 15.9375H25.4906C26.1903 15.941 26.8661 15.6836 27.3862 15.2155C27.9062 14.7475 28.2332 14.1024 28.3031 13.4063L29.0625 5.71875C29.0747 5.58807 29.0593 5.45628 29.0173 5.33193C28.9753 5.20758 28.9076 5.09343 28.8187 4.99687V4.99687ZM4.50937 14.0625C4.27616 14.0637 4.05087 13.9779 3.87752 13.8219C3.70417 13.6658 3.59519 13.4508 3.57187 13.2188L2.91562 6.5625H5.14687L5.82187 13.2563C5.84803 13.527 5.88871 13.7961 5.94375 14.0625H4.50937ZM26.4187 13.2188C26.3954 13.4508 26.2865 13.6658 26.1131 13.8219C25.9397 13.9779 25.7145 14.0637 25.4812 14.0625H24.0562C24.1113 13.7961 24.152 13.527 24.1781 13.2563L24.8531 6.5625H27.0844L26.4187 13.2188Z" fill="white"></path><path d="M27.45 15.1406C27.9234 14.6786 28.2189 14.0645 28.2844 13.4063L28.6688 9.65625L29.0625 5.71875C29.0763 5.61609 29.0763 5.51204 29.0625 5.40938C29.0264 5.25784 28.9558 5.11668 28.8563 4.99688C28.7644 4.89494 28.6513 4.81441 28.525 4.76095C28.3986 4.70749 28.2621 4.68242 28.125 4.6875H25.0406L25.3125 1.96875C25.3263 1.86609 25.3263 1.76204 25.3125 1.65938C25.2764 1.50784 25.2058 1.36668 25.1063 1.24688C25.0144 1.14494 24.9013 1.06441 24.775 1.01095C24.6486 0.957494 24.5121 0.932421 24.375 0.9375H15V29.0625H19.6875C19.9361 29.0625 20.1746 28.9637 20.3504 28.7879C20.5262 28.6121 20.625 28.3736 20.625 28.125C20.625 27.8764 20.5262 27.6379 20.3504 27.4621C20.1746 27.2863 19.9361 27.1875 19.6875 27.1875H17.8125V21.1313C19.0788 20.7279 20.2424 20.0547 21.2233 19.158C22.2041 18.2614 22.9788 17.1626 23.4938 15.9375H25.4906H25.6781C26.3447 15.8908 26.9728 15.6083 27.45 15.1406ZM24.0563 14.0625C24.1113 13.7961 24.152 13.527 24.1781 13.2563L24.2906 12.1875L24.8531 6.5625H27.0844L26.4188 13.2188C26.4014 13.3865 26.3391 13.5464 26.2384 13.6817C26.1378 13.817 26.0025 13.9226 25.8469 13.9875C25.7369 14.0325 25.6189 14.0549 25.5 14.0531H24.0563V14.0625Z" fill="#B7C9CC"></path><path d="M21.0748 0.541031L22.8299 2.31969L25.0639 1.20009L23.9147 3.41897L25.6698 5.19763L23.2044 4.79031L22.0552 7.00918L21.6807 4.53857L19.2153 4.13125L21.4493 3.01164L21.0748 0.541031Z" fill="white"></path></g>
              <defs>
                <clipPath id="clip0_1_7">
                  <rect width="30" height="30" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="title">Practice & Contests</div>
        </el-dropdown-item>
        <el-dropdown-item >
          <div class="feature-icon" >
            <svg class="icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.05662" y="1.28209" width="24.2178" height="8.31123" rx="1.66667" fill="white"></rect><rect width="24.2278" height="8.30796" rx="1.66667" transform="matrix(1 0 -0.00681589 0.999977 2.05662 10.8755)" fill="#E7EEEF"></rect><rect x="2.05662" y="20.4653" width="24.2178" height="8.31123" rx="1.66667" fill="#94AAAD"></rect>
            </svg>
          </div>
          <div class="title">Application Tracker</div>
        </el-dropdown-item>
        <el-dropdown-item >
          <div class="feature-icon" >
            <svg class="icon" width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8618 0H3.53393C2.1005 0 0.938477 1.81496 0.938477 4.05383V24.1382C0.938477 26.3771 2.1005 28.1921 3.53393 28.1921H23.8618C25.2953 28.1921 26.4573 26.3771 26.4573 24.1382V4.05383C26.4573 1.81496 25.2953 0 23.8618 0Z" fill="white"></path><path d="M24.9895 1.12768H4.66161C3.22818 1.12768 2.06616 2.98644 2.06616 5.27932V25.8484C2.06616 28.1412 3.22818 30 4.66161 30H24.9895C26.4229 30 27.585 28.1412 27.585 25.8484V5.27932C27.585 2.98644 26.4229 1.12768 24.9895 1.12768Z" fill="#B7C9CC"></path><path d="M19.328 19.3512L20.4486 20.4788L21.1514 21.1831L21.7465 21.7821L22.2525 22.2904L23.2236 23.2647C23.3925 23.4352 23.4868 23.6651 23.4861 23.9045C23.4854 24.144 23.3898 24.3734 23.2199 24.5429C23.137 24.6272 23.0381 24.6941 22.9289 24.7398C22.8197 24.7855 22.7024 24.809 22.584 24.809C22.4655 24.809 22.3482 24.7855 22.239 24.7398C22.1298 24.6941 22.0309 24.6272 21.948 24.5429L18.0514 20.6295" fill="white"></path><path d="M18.6667 18.0429L19.9619 19.3461L18.0205 21.2936L16.7263 19.9923" fill="white"></path><path d="M17.6865 19.0431C19.3107 17.4114 19.3036 14.759 17.6707 13.1187C16.0379 11.4784 13.3975 11.4713 11.7733 13.103C10.1492 14.7347 10.1562 17.3871 11.7891 19.0274C13.422 20.6677 16.0624 20.6748 17.6865 19.0431Z" stroke="white" stroke-width="0.686186" stroke-linejoin="round">
            </path>
            </svg>
          </div>
          <div class="title">Job Board</div>
        </el-dropdown-item>
      </div>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">


import {Grid} from "@element-plus/icons-vue";
</script>
<style scoped>
.container {
  width: 300px;
}
.user-action {
  align-self: center;
  padding: 0 20px;

}
.user-action:hover {
  cursor: pointer;
  font-size: 1.9rem;
}
.icon {
  color: #ffffff;
  font-size: 1.7rem;
  align-self: center;
  margin: 0 auto;
}
.feature-icon {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #576871;
  display: flex;
}
.title {
  font-size: 17px;
  margin: 0 auto;
}
</style>
