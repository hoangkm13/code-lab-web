<template>
    <section v-loading.fullscreen.lock="loading" class="list-container left-pane">

        <div class="container">
            <div class="d-flex justify-content-between align-items-center content-header-wrapper">
                <div class="community-header-breadcrumb-items">
                    <ol itemtype="http://schema.org/BreadcrumbList" class="community-breadcrumb text-content ellipsis">
                        <li itemprop="itemListElement" itemtype="http://schema.org/ListItem" class="breadcrumb-item">
                            <span itemprop="name" class="breadcrumb-item-text"> Profile </span>
                            <meta itemprop="position" content="1" />
                        </li>
                    </ol>
                    <div class="page-label-wrapper text-headline">
                        <h1 class="page-label">Your Profile</h1>
                    </div>
                </div>
            </div>
            <div class="main-body" v-if="profileDetail">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <div class="profilepic">
                                        <ProfileAvatar v-if="!imageData" class="rounded-circle p-1 profilepic__image"
                                            style="height: 100%; font-size: 30px;" :name="profileDetail.username" size="l">
                                        </ProfileAvatar>

                                        <img v-if="!imagePreview" :src="imageData"
                                            class="rounded-circle p-1 profilepic__image" />
                                        <img v-if="imagePreview" :src="imagePreview"
                                            class="rounded-circle p-1 profilepic__image" />
                                        <div class="profilepic__content">
                                            <span class="profilepic__icon"><i class="fas fa-camera"></i></span>
                                            <span class="profilepic__text">Select image</span>
                                        </div>
                                        <input type="file" v-on:change="onFileSelected">
                                    </div>

                                    <div class="mt-3">
                                        <h4>{{ profileDetail.username }}</h4>
                                        <p class="text-secondary mb-1">Developer</p>
                                        <p class="text-muted font-size-sm">
                                            {{ profileDetail.country }}
                                        </p>
                                        <!-- <button class="btn btn-primary" style="margin-right: 10px">
                                        Follow
                                    </button>
                                    <button class="btn btn-outline-primary">Message</button> -->
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <div style="display: flex; flex-direction: column; gap: 10px">
                                    <ul class="list-group list-group-flush">
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-globe me-2 icon-inline">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path
                                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                                    </path>
                                                </svg>Website
                                            </h6>
                                            <span v-if="!isEdit" class="text-secondary">https://bootdey.com</span>
                                            <input v-if="isEdit" type="text" class="text-secondary website-input"
                                                :value="'https://bootdey.com'">
                                        </li>
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-github me-2 icon-inline">
                                                    <path
                                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                                    </path>
                                                </svg>Github
                                            </h6>
                                            <span v-if="!isEdit" class="text-secondary">{{ profileDetail.github }}</span>
                                            <input v-if="isEdit" type="text" class="text-secondary website-input"
                                                v-model="profileDetail.github">
                                        </li>
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-instagram me-2 icon-inline text-danger">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                </svg>Instagram
                                            </h6>
                                            <span v-if="!isEdit" class="text-secondary">bootdey.com</span>
                                            <input v-if="isEdit" type="text" class="text-secondary website-input"
                                                :value="'https://bootdey.com'">
                                        </li>
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 class="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewbox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    class="feather feather-facebook me-2 icon-inline text-primary">
                                                    <path
                                                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                                    </path>
                                                </svg>Facebook
                                            </h6>

                                            <span v-if="!isEdit" class="text-secondary">{{ profileDetail.facebook }}</span>
                                            <input v-if="isEdit" type="text" class="text-secondary website-input"
                                                v-model="profileDetail.facebook">
                                        </li>
                                    </ul>
                                    <button v-if="!isEdit" style="float: inline-end; padding: 8px; border-radius: 10px;"
                                        v-on:click="startEdit()">Edit</button>
                                    <button v-if="isEdit" style="float: inline-end; padding: 8px; border-radius: 10px;"
                                        v-on:click="startEdit()">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <form class="card-body">
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" style="display: flex; gap: 15px;">
                                        <input type="text" class="form-control"
                                            :value="profileDetail.firstName ? profileDetail.firstName : 'First name'" />
                                        <input type="text" class="form-control"
                                            :value="profileDetail.lastName ? profileDetail.lastName : 'Last name'" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" :value="profileDetail.email" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" :value="profileDetail.mobile" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Birth of Date:</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="date" class="form-control" v-model="profileDetail.birthOfDate" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Gender</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" style="display: flex; gap: 15px">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="Male" name="gender"
                                                v-model="selectedGender" id="flexRadioDefault1"
                                                :checked="selectedGender === 'Male'" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="Female" name="gender"
                                                v-model="selectedGender" id="flexRadioDefault2"
                                                :checked="selectedGender === 'Female'" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="Other" name="gender"
                                                v-model="selectedGender" id="flexRadioDefault2"
                                                :checked="selectedGender === 'Other'" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Other
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Country</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <select class="form-control" v-model="profileDetail.country">
                                            <option v-if="profileDetail.country == null || profileDetail.country == ''"
                                                value="">
                                                Select a country</option>
                                            <option v-for="country in countries" :key="country" :value="country"
                                                :selected="profileDetail.country == country">{{ country }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="button" class="btn btn-primary px-4" v-on:click="updateProfile()"
                                            value="Save Changes" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="d-flex align-items-center mb-3">Project Status</h5>
                                        <span v-if="listTopics">
                                            <span v-for="topic in listTopics">
                                                <p>{{ topic.topic.name }}</p>
                                                <div class="progress mb-3" style="height: 5px">
                                                    <div class="progress-bar" role="progressbar"
                                                        :style="{ width: (topic.userPoints / topic.totalPoints) * 100 + '%', backgroundColor: randomColor() }"
                                                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import profileApi from "@/api/profile-api";
import topicApi from "@/api/topic-api";
import { onMounted, ref } from "vue";
import ProfileAvatar from 'vue-avatar-3'

let profileDetail = ref();

const loading = ref(true)
const imageData = ref('');
const selectedGender = ref('Male');
const selectedFile = ref()
const imagePreview = ref('')
const isEdit = ref(false);
const cloneForm = ref();
const listTopics = ref();


const countries = [
    "Algeria", "Argentina", "Australia", "Azerbaijan", "Bangladesh", "Belgium", "Brazil", "Canada", "Chile",
    "China", "Colombia", "Croatia", "Czech Republic", "Denmark", "Ecuador", "Egypt", "Finland", "France", "Germany",
    "Greece", "Hungary", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Kazakhstan",
    "Malaysia", "Mexico", "Morocco", "Netherlands", "New Zealand", "Nigeria", "Norway", "Peru", "Philippines", "Poland",
    "Portugal", "Romania", "Russia", "Saudi Arabia", "Serbia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden",
    "Switzerland", "Thailand", "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Venezuela", "Vietnam"
]

async function getProfileDetail() {
    try {
        loading.value = true
        const response = await profileApi.getProfileDetail();
        profileDetail.value = await response.result;
        selectedGender.value = response.result.gender
        cloneForm.value = { ...profileDetail.value }

        console.log(response.result.avatar);
        
        if (response.result.avatar != null) {
            const byteArray = new Uint8Array(JSON.parse(response.result.avatar).map((byte: number) => byte < 0 ? byte + 256 : byte));
            const blob = new Blob([byteArray], { type: 'image/jpeg' });
            imageData.value = URL.createObjectURL(blob);
        }

        loading.value = false
    } catch (error) {
        console.error(error);
    }
}

async function getAllTopicsWithPoint() {
    try {
        const response = await topicApi.getAllTopicsWithPoint();
        listTopics.value = response.result
    } catch (error) {
        console.log(error);
    }
}

function onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (allowedTypes.includes(file.type)) {
            selectedFile.value = event.target.files?.[0] ?? null;
            imagePreview.value = URL.createObjectURL(selectedFile.value);
        } else {
            alert('Chỉ cho phép tải lên các tệp hình ảnh (JPEG, PNG)');
        }
    }
}


async function updateProfile() {
    try {
        const formData = new FormData();
        const profileDetailJson = JSON.stringify(profileDetail.value);
        const userDTO = new Blob([profileDetailJson], {
            type: 'application/json'
        });

        formData.append("UserDTO", userDTO);
        formData.append("avatarFile", selectedFile.value)
        const response = await profileApi.updateProfile(profileDetail.value.id, formData)
        console.log(response);
        await getProfileDetail();
    } catch (error) {
        console.error(error);
    }
}

function startEdit() {
    isEdit.value = !isEdit.value;
    if (isEdit.value == false && hasChanged()) {
        if (window.confirm("Do you want to cancel without saving?") == false) {
            cloneForm.value = { ...cloneForm.value }
        } else {
            updateProfile()
        }
    }
}

function randomColor() {
    const r = () => Math.floor(206 + 50 * Math.random()); // Adjust the range for brighter colors

    return `rgb(${r()}, ${r()}, ${r()})`;
}


function hasChanged() {
    console.log(profileDetail.value);

    for (const key in profileDetail.value) {
        if (profileDetail.value[key] !== cloneForm.value[key]) {
            return true;
        }
    }
    return false;
}

onMounted(async () => {
    await getAllTopicsWithPoint();
    await getProfileDetail();
});
</script>

<style scoped>
body {
    background: #f7f7ff;
    margin-top: 20px;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%),
        0 2px 6px 0 rgb(206 206 238 / 54%);
}

.me-2 {
    margin-right: 0.5rem !important;
}

.community-header-breadcrumb-items {
    margin-bottom: 20px;
}

.profilepic {
    position: relative;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    overflow: hidden;
}

.profilepic:hover .profilepic__content {
    opacity: 1;
}

.profilepic:hover .profilepic__image {
    opacity: .5;
}

input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.profilepic__content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: opacity .2s ease-in-out;
}

.profilepic__image {
    object-fit: cover;
    border: 1px solid;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity .2s ease-in-out;
}

.profilepic__icon {
    color: white;
    padding-bottom: 8px;
}

.website-input {
    width: 60%;
}
</style>
