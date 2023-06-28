
<template>
  <button @click="test">click</button>
  <div class="login-container">
    <div class="login-mid">
      <div class="login-logo">
        <img
          class="logo-img"
          src="https://hrcdn.net/fcore/assets/brand/hr-logo-new-black-green-2f615594d2.svg"
          alt="HackerRank"
        />
      </div>
      <div class="login-title">
        <h2 class="auth-category-title">For Developers</h2>
        <p class="auth-category-subtitle">
          Practice coding, prepare for interviews, and get hired.
        </p>
      </div>
      <div class="login-box">
        <el-tabs type="border-card" stretch>
          <el-tab-pane label="Sign up" class="login-tab">
            <el-form :model="signUpForm">
              <el-form-item>
                <el-input
                autocomplete="on"
                    v-model="signUpForm.name"
                  class="input-super-large"
                  :prefix-icon="User"
                  placeholder="First & Last name"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                v-model="signUpForm.email"
                  class="input-super-large"
                  :prefix-icon="Message"
                  placeholder="Email"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                v-model="signUpForm.password"
                  class="input-super-large"
                  :prefix-icon="Lock"
                  placeholder="Your password"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="signUpForm.checkbox" :label="true" size="large">
                  I agree to HackerRank's Terms of Service and Privacy Policy.
                </el-checkbox>
              </el-form-item>
            </el-form>

            <div class="login-button">
              <el-button size="large" color="#00751f"
                >Create An Account</el-button
              >
            </div>
          </el-tab-pane>
          <el-tab-pane label="Log in" class="login-tab">
            <el-form :model="loginForm">
              <el-form-item>
                <el-input
                v-model="loginForm.username"
                  autocomplete="on"
                  class="input-super-large"
                  :prefix-icon="User"
                  placeholder="Your username or email"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                v-model="loginForm.password"
                  class="input-super-large"
                  :prefix-icon="Lock"
                  placeholder="Your password"
                ></el-input>
              </el-form-item>
            </el-form>

            <div class="login-box-checkbox">
              <el-checkbox
                v-model="checkBox"
                label="Renember me"
                size="large"
              />
              <el-button link type="primary">Forgot your password?</el-button>
            </div>
            <div class="login-button">
              <el-button size="large"  color="#00751f" @click="login">Login</el-button>
            </div>
          </el-tab-pane>
          <div class="social-login">
            <div class="social-login-label">
              <span class="label-text">or connect with</span>
            </div>
            <div class="login-social">
              <span class="ui-text" aria-hidden="false"
                ><img
                  class="social-btn-icon"
                  alt="Login with Facebook"
                  src="https://hrcdn.net/fcore/assets/facebook-colored-af4249157d.svg"
              /></span>

              <span class="ui-text" aria-hidden="false"
                ><img
                  class="social-btn-icon"
                  alt="Login with Google"
                  src="https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg"
              /></span>

              <span class="ui-text" aria-hidden="false"
                ><img
                  class="social-btn-icon"
                  alt="Login with LinkedIn"
                  src="https://hrcdn.net/fcore/assets/linkedin-colored-1db195795c.svg"
              /></span>

              <span aria-hidden="false"
                ><img
                  class="social-btn-icon"
                  alt="Login with Github"
                  src="https://hrcdn.net/fcore/assets/github-colored-1db995054b.svg"
              /></span>
            </div>
          </div>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LoginApi from "@/api/login-api";
import { User, Message, Lock } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useUserStore } from "@/store/user";

import {useRouter} from "vue-router";
const userStore = useUserStore()
const signUpForm = ref({
  name: '',
  email:'',
  password: '',
  checkbox: false
})
const loginForm = ref({
  username: '',
  password: '',

})
let checkBox = ref(false)
let router = useRouter()
async function login() {
  await localStorage.removeItem("token")
  await userStore.signIn(loginForm.value)
  await router.push("/")
}
async function test() {
  localStorage.removeItem("token")
}
</script>
<style scoped>
:deep(.el-tabs__content){
    padding: 30px;
}
:deep(.el-form-item){
    margin-bottom: 8px
}
:deep(.el-icon) {
  width: 2em;
  height: 2em;
}
:deep(.el-icon svg) {
  color: black;
  height: 2em;
  width: 2em;
}
.auth-category-subtitle {
  font-size: 16px;
}
:deep(.el-tabs) {
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
}
:deep(.el-tabs__item) {
  height: 60px;
  border: none !important;
  font-weight: bold;
  font-size: 18px;
}
:deep(.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active) {
  color: #0e141e;
}
:deep(.el-tabs__header) {
  border: none !important;
}
.auth-category-title {
  color: #39424e;
  font-weight: bold;
  font-size: 26px;
  line-height: 1.4;
}
.social-login .label-text {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 30px;
  background: #fff;
}
.social-login .social-login-label::before {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -0.5px;
  width: 100%;
  border-top: 1px solid #b7c9cc;
  content: "";
}
.ui-text {
  padding-right: 30px;
  border-right: 1px solid #e7eeef;
}
.login-social {
  display: flex;
  justify-content: space-around;
}
.social-btn-icon {
  cursor: pointer;
  width: 44px;
  height: 44px;
}
.social-login .social-login-label {
  position: relative;
  margin: 30px 0 20px;
  color: #b7c9cc;
  text-align: center;
}
.social-login .social-btn-wrap {
  display: flex;
}
.login-box-checkbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-button {
  display: flex;
  justify-content: flex-end;
}
:deep(.login-button > button > span){
    font-size: 18px;
}
.login-tab {
  display: flex;
  flex-direction: column;
}
.input-super-large {
  height: 56px;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-mid {
  margin-top: 40px;
  width: 480px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.login-logo,
.login-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-title {
  flex-direction: column;
}
.logo-img {
  height: 30px;
}
</style>
