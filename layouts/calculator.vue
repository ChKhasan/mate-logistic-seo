<template lang="html">
  <div class="bg-color">
    <div class="header-back"></div>
    <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      :with-header="false"
      direction="ltr"
    >
      <div class="drawer_container">
        <div class="drawer_hadear">
          <img src="../assets/svg/image 2.svg" alt="" />
          <span @click="drawerClose">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1117 11.0767L28.8884 28.85M11.1117 28.85L28.8884 11.0767"
                stroke="url(#paint0_linear_997_2855)"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_997_2855"
                  x1="11.1117"
                  y1="28.85"
                  x2="28.8884"
                  y2="28.85"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#008AFF" />
                  <stop offset="1" stop-color="#005BA8" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <div class="d-flex flex-column justify-content-between body-control">
          <div class="drawer_body">
            <ul>
              <li>
                <a @click="drawerClose" href="#home-banner">{{
                  $store.state.translations["main.nav_howItWorks"]
                }}</a>
              </li>
              <li>
                <a @click="drawerClose" href="#howWeWork">{{
                  $store.state.translations["main.nav_howWeWork"]
                }}</a>
              </li>
              <li>
                <a @click="drawerClose" href="#ourServices">{{
                  $store.state.translations["main.nav_ourServices"]
                }}</a>
              </li>
              <li>
                <a @click="drawerClose" href="#coverageMap">{{
                  $store.state.translations["main.nav_coverageMap"]
                }}</a>
              </li>
              <li>
                <a @click="drawerClose" href="#newAndEvents">{{
                  $store.state.translations["main.nav_newsAndEvents"]
                }}</a>
              </li>
            </ul>
            <!-- <div class="drawer_lang">
              <nuxt-link
                :class="{
                  'is-activeLang':
                    ($route.path == '/' ? '/en' : $route.path) ==
                    `/${locale.code}`,
                }"
                v-for="locale in availableLocales"
                :to="switchLocalePath(locale.code)"
                >{{ locale.name }}</nuxt-link
              >
            </div> -->
          </div>
          <div class="drawer_footer">
            <a :href="`tel:${$store.state.staticInfo.nbm}`"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00501 11.9709C8.75501 12.6901 9.63417 13.2751 10.6058 13.6901L11.0383 13.8743L12.3675 12.5243C12.6975 12.1893 13.175 12.0443 13.6358 12.1409L16.8558 12.8151C17.4008 12.9309 17.79 13.4118 17.79 13.9684V16.2868C17.79 17.1159 17.1183 17.7876 16.2892 17.7876H15.5767C12.2983 17.7876 9.06334 16.7018 6.61667 14.5201C6.41501 14.3409 6.21917 14.1551 6.02834 13.9651L6.05917 13.9959C5.86834 13.8051 5.68334 13.6093 5.50417 13.4076C3.32167 10.9618 2.23584 7.72677 2.23584 4.44844V3.73594C2.23584 2.90677 2.90751 2.23511 3.73667 2.23511H6.05501C6.61167 2.23511 7.09251 2.62427 7.20834 3.16927L7.88334 6.38927C7.97917 6.84927 7.83501 7.32761 7.50001 7.65761L6.15001 8.98677L6.33417 9.41927C6.74917 10.3901 7.28501 11.2209 8.00501 11.9709Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $store.state.staticInfo.nbm }}</a
            >
            <div class="drawer_brands">
              <a :href="$store.state.staticInfo.instagram"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0104 6.98988L17.0124 6.99116M10.7555 21.246H13.2445C16.0447 21.246 17.4449 21.246 18.5144 20.7011C19.4552 20.2217 20.2201 19.4568 20.6995 18.516C21.2445 17.4464 21.2445 16.0463 21.2445 13.246V10.7571C21.2445 7.95682 21.2445 6.55669 20.6995 5.48713C20.2201 4.54632 19.4552 3.78141 18.5144 3.30205C17.4449 2.75708 16.0447 2.75708 13.2445 2.75708H10.7555C7.95523 2.75708 6.5551 2.75708 5.48554 3.30205C4.54473 3.78141 3.77983 4.54632 3.30046 5.48713C2.75549 6.55669 2.75549 7.95682 2.75549 10.7571V13.246C2.75549 16.0463 2.75549 17.4464 3.30046 18.516C3.77983 19.4568 4.54473 20.2217 5.48554 20.7011C6.5551 21.246 7.95523 21.246 10.7555 21.246ZM15.665 12.0019C15.665 14.025 14.025 15.665 12.0019 15.665C9.97884 15.665 8.33882 14.025 8.33882 12.0019C8.33882 9.97882 9.97884 8.3388 12.0019 8.3388C14.025 8.3388 15.665 9.97882 15.665 12.0019Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a :href="$store.state.staticInfo.facebook"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.002 21.2854C17.1301 21.2854 21.2874 17.1286 21.2874 12.001C21.2874 6.87333 17.1301 2.71655 12.002 2.71655C6.87377 2.71655 2.71655 6.87333 2.71655 12.001C2.71655 17.1286 6.87377 21.2854 12.002 21.2854ZM12.002 21.2854V13.2199M15.9806 7.62934L15.8433 7.58922C13.923 7.02819 12.002 8.46828 12.002 10.4688V13.2199M12.002 13.2199H15.3056M12.002 13.2199H9.30521"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a :href="$store.state.staticInfo.telegram"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.27843 16.7856V10.7747M11.5141 16.7856V15.1039M11.5141 15.1039V10.7747M11.5141 15.1039C11.5141 14.0447 12.1322 10.7747 14.2876 10.7747C15.6341 10.7747 16.7256 11.8662 16.7256 13.2127V16.7856M7.27466 7.21533L7.27674 7.21661M18.332 21.332H5.66797C4.01097 21.332 2.66797 19.989 2.66797 18.332V5.66797C2.66797 4.01097 4.01097 2.66797 5.66797 2.66797H18.332C19.989 2.66797 21.332 4.01097 21.332 5.66797V18.332C21.332 19.989 19.989 21.332 18.332 21.332Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a :href="$store.state.staticInfo.telegram"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0808 8.21701C19.0808 13.9166 14.8805 19.5111 8.99593 19.5111C5.84521 19.5111 2.69489 17.812 2.69489 17.812C3.98966 17.812 6.19639 17.302 8.09256 15.8713C7.14114 15.5547 5.57144 14.6735 4.05682 13.572M19.0808 8.21701C19.0808 7.44027 18.8431 6.71904 18.4366 6.12206M19.0808 8.21701L21.3114 7.28651M2.69489 4.49072C5.51038 8.17768 10.2019 9.40941 11.5909 9.19685C11.6155 8.881 11.6282 8.55449 11.6282 8.21701C11.6282 6.15904 13.2965 4.49072 15.3545 4.49072C16.6357 4.49072 17.7659 5.13735 18.4366 6.12206M18.4366 6.12206C18.876 6.21331 19.9416 6.01478 20.6887 4.49072M3.51579 9.3953C4.55792 10.2557 4.86998 10.543 5.98496 11.0754"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
    <Header :drawerOpen="drawerOpen" />
    <div class="calculator">
      <div class="container_xl position-relative">
        <div>
          <nuxt-link class="all-news-back-btn" :to="localePath(currentPath)"
            ><svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0383 5.43603C14.9729 5.42597 14.9066 5.42132 14.8403 5.42214H3.55262L3.79875 5.31368C4.03934 5.2058 4.25821 5.05897 4.44556 4.87985L7.61091 1.88098C8.02779 1.50395 8.09784 0.897436 7.7769 0.443911C7.40338 -0.039371 6.68706 -0.144304 6.17691 0.209574C6.1357 0.23818 6.09653 0.269362 6.05972 0.302916L0.335755 5.72582C-0.111572 6.14915 -0.111966 6.83586 0.334861 7.25965C0.335147 7.25993 0.335469 7.26023 0.335755 7.2605L6.05972 12.6834C6.5074 13.1064 7.23223 13.1054 7.6787 12.6813C7.71383 12.6479 7.74664 12.6124 7.7769 12.5749C8.09784 12.1214 8.02779 11.5149 7.61091 11.1379L4.45128 8.13359C4.28332 7.97429 4.09021 7.84072 3.87889 7.73772L3.53545 7.5913H14.7773C15.3621 7.61187 15.8752 7.22485 15.9851 6.68025C16.0863 6.08899 15.6624 5.53195 15.0383 5.43603Z"
                fill="#005BA8"
              />
            </svg>
            {{ $store.state.translations["calculator.toBack"] }}
          </nuxt-link>
        </div>
        <div class="calculator-container">
          <Nuxt :show="show" :leads="leads" />

          <div class="calculator-info">
            <div class="calculator-info-body">
              <div class="calculator-info-items">
                <span
                  >{{ $store.state.translations["calculator.info_distance"] }}
                </span>
                <div class="edit_input" v-if="activeEdit == 1">
                  <input type="text" />
                  <span @click="activeEdit = 0"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66699 6.646L17.333 17.31M6.66699 17.31L17.333 6.646"
                        stroke="#024E90"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                  ></span>
                </div>
                <p v-if="!(activeEdit == 1) && !skeleton">
                  {{ leads.distance }}
                </p>
                <el-skeleton-item v-else variant="text" style="width: 100%;" />
              </div>
              <div class="calculator-info-items">
                <span
                  >{{ $store.state.translations["calculator.info_date"] }}
                  <a-tooltip placement="top" color="red">
                    <template slot="title" color="red">
                      <span color="red" class="hover-info">{{
                        $store.state.translations["calculator.info_dateText"]
                      }}</span>
                    </template>
                    <a-button
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.65625 5V3.65625H6.34375V5H7.65625ZM7.65625 10.3438V6.34375H6.34375V10.3438H7.65625ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z"
                          fill="#9A999B"
                        />
                      </svg>
                    </a-button> </a-tooltip
                ></span>

                <div class="edit_input" v-if="activeEdit == 2">
                  <span class="close_edit" @click="activeEdit = 0">
                    <img :src="iconX" alt="" />
                  </span>
                  <a-date-picker
                    @change="onChangeDate"
                    :default-value="moment(leads.date, dateFormatList[0])"
                    :format="dateFormatList"
                  />
                </div>
                <el-skeleton-item
                  v-if="skeleton"
                  variant="text"
                  style="width: 100%;"
                />
                <p v-if="!(activeEdit == 2) && !skeleton">{{ leads.date }}</p>
                <div
                  class="edit-btn"
                  v-if="!(activeEdit == 2)"
                  @click="activeEdit = 2"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6123 2.6875L11.3936 3.90625L8.89355 1.40625L10.1123 0.1875C10.2373 0.0625 10.3936 0 10.5811 0C10.7686 0 10.9248 0.0625 11.0498 0.1875L12.6123 1.75C12.7373 1.875 12.7998 2.03125 12.7998 2.21875C12.7998 2.40625 12.7373 2.5625 12.6123 2.6875ZM0.799805 9.5L8.1748 2.125L10.6748 4.625L3.2998 12H0.799805V9.5Z"
                      fill="#9A999B"
                    />
                  </svg>
                </div>
              </div>
              <div class="calculator-info-items">
                <span
                  >{{ $store.state.translations["calculator.info_vehicle"] }}
                </span>
                <div class="edit_select" v-if="activeEdit == 3">
                  <div class="d-flex flex-column">
                    <el-select
                      v-model="editLeads.car_year"
                      class="mb-2"
                      filterable
                      placeholder="Select"
                    >
                      <el-option
                        class="edit-select"
                        v-for="item in years"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                    <el-select
                      class="mb-2"
                      filterable
                      v-model="editLeads.car_make"
                      :placeholder="
                        $store.state.translations['main.placeH_vehicleMake']
                      "
                      @focus="__GET_CAR_MAKES()"
                      :loading="!carMakes.length > 0"
                      loading-text="Loading..."
                    >
                      <el-option
                        class="edit-select"
                        v-for="item in carMakes"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                    <el-select
                      class="mb-2"
                      filterable
                      v-model="editLeads.vehicle"
                      :placeholder="
                        $store.state.translations['main.placeH_vehicleModel']
                      "
                      :disabled="editLeads.car_make == ''"
                      :loading="!carModles.length > 0"
                      loading-text="Loading..."
                    >
                      <el-option
                        class="edit-select"
                        v-for="item in carModles"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                    <div class="select-btns d-flex">
                      <div class="calculator-save-btn" @click="editAutoInfo">
                        Save
                      </div>
                      <div
                        class="calculator-cancel-btn mx-3"
                        @click="activeEdit = 0"
                      >
                        Cancel
                      </div>
                    </div>
                  </div>
                </div>
                <el-skeleton-item
                  v-if="skeleton"
                  variant="text"
                  style="width: 100%;"
                />
                <p v-if="!(activeEdit == 3) && !skeleton">
                  {{
                    `${leads.car_year} ${leads.vehicle?.name} ${leads.vehicle?.mark?.name}`
                  }}
                </p>

                <div
                  class="edit-btn"
                  v-if="!(activeEdit == 3)"
                  @click="activeEdit = 3"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6123 2.6875L11.3936 3.90625L8.89355 1.40625L10.1123 0.1875C10.2373 0.0625 10.3936 0 10.5811 0C10.7686 0 10.9248 0.0625 11.0498 0.1875L12.6123 1.75C12.7373 1.875 12.7998 2.03125 12.7998 2.21875C12.7998 2.40625 12.7373 2.5625 12.6123 2.6875ZM0.799805 9.5L8.1748 2.125L10.6748 4.625L3.2998 12H0.799805V9.5Z"
                      fill="#9A999B"
                    />
                  </svg>
                </div>
              </div>
              <div class="calculator-info-items">
                <span>{{
                  $store.state.translations["calculator.info_shipFrom"]
                }}</span>
                <div class="edit_select" v-if="activeEdit == 4">
                  <span class="close_edit" @click="activeEdit = 0">
                    <img :src="iconX" alt="" />
                  </span>
                  <el-select
                    v-model="editLeads.ship_from"
                    class="mb-2"
                    filterable
                    :loading="!cities.length > 0"
                    ref="selectInput"
                    :placeholder="
                      $store.state.translations['main.placeH_shipFrom']
                    "
                    popper-class="web-selects"
                    loading-text="Loading..."
                  >
                    <el-option
                      class="edit-select"
                      v-for="item in cities"
                      :key="item.id"
                      :label="`${item.state.name} ${item.name} ${item.zip}`"
                      :value="`${item.id}`"
                    >
                    </el-option>
                  </el-select>
                </div>
                <el-skeleton-item
                  v-if="skeleton"
                  variant="text"
                  style="width: 100%;"
                />

                <p v-if="!(activeEdit == 4) && !skeleton">
                  {{
                    `${leads.ship_from?.name}, ${leads.ship_from?.state.code} ${leads.ship_from?.zip}`
                  }}
                </p>
                <div
                  class="edit-btn"
                  @click="activeEdit = 4"
                  v-if="!(activeEdit == 4)"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6123 2.6875L11.3936 3.90625L8.89355 1.40625L10.1123 0.1875C10.2373 0.0625 10.3936 0 10.5811 0C10.7686 0 10.9248 0.0625 11.0498 0.1875L12.6123 1.75C12.7373 1.875 12.7998 2.03125 12.7998 2.21875C12.7998 2.40625 12.7373 2.5625 12.6123 2.6875ZM0.799805 9.5L8.1748 2.125L10.6748 4.625L3.2998 12H0.799805V9.5Z"
                      fill="#9A999B"
                    />
                  </svg>
                </div>
              </div>
              <div class="calculator-info-items">
                <span>{{
                  $store.state.translations["calculator.info_shipTo"]
                }}</span>

                <div class="edit_select" v-if="activeEdit == 5">
                  <span class="close_edit" @click="activeEdit = 0">
                    <img :src="iconX" alt="" />
                  </span>
                  <el-select
                    v-model="editLeads.ship_to"
                    class="mb-2"
                    filterable
                    :loading="!cities.length > 0"
                    ref="selectInput"
                    :placeholder="
                      $store.state.translations['main.placeH_shipFrom']
                    "
                    popper-class="web-selects"
                    loading-text="Loading..."
                  >
                    <el-option
                      class="edit-select"
                      v-for="item in cities"
                      :key="item.id"
                      :label="`${item.state.name} ${item.name} ${item.zip}`"
                      :value="`${item.id}`"
                    >
                    </el-option>
                  </el-select>
                </div>
                <el-skeleton-item
                  v-if="skeleton"
                  variant="text"
                  style="width: 100%;"
                />

                <p v-if="!(activeEdit == 5) && !skeleton">
                  {{
                    `${leads.ship_to?.name}, ${leads.ship_to?.state.code} ${leads.ship_to?.zip}`
                  }}
                </p>
                <div
                  class="edit-btn"
                  @click="activeEdit = 5"
                  v-if="!(activeEdit == 5)"
                >
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6123 2.6875L11.3936 3.90625L8.89355 1.40625L10.1123 0.1875C10.2373 0.0625 10.3936 0 10.5811 0C10.7686 0 10.9248 0.0625 11.0498 0.1875L12.6123 1.75C12.7373 1.875 12.7998 2.03125 12.7998 2.21875C12.7998 2.40625 12.7373 2.5625 12.6123 2.6875ZM0.799805 9.5L8.1748 2.125L10.6748 4.625L3.2998 12H0.799805V9.5Z"
                      fill="#9A999B"
                    />
                  </svg>
                </div>
              </div>
              <div class="calculator-info-items">
                <span>{{
                  $store.state.translations["calculator.info_vehicleCondition"]
                }}</span>
                <a-radio-group
                  v-model="editLeads.vehicle_runs"
                  @change="onChange"
                >
                  <div class="items-checkbox">
                    <el-skeleton-item
                      v-if="skeleton"
                      variant="text"
                      style="width: 80%;"
                    />
                    <a-radio
                      v-if="!skeleton"
                      :value="radio.code"
                      v-for="(radio, index) in vehicleCondition"
                      :key="index"
                    >
                      <p>{{ radio.name }}</p>
                    </a-radio>
                  </div>
                </a-radio-group>
              </div>
              <div class="calculator-info-items">
                <span>{{
                  $store.state.translations["calculator.info_transportType"]
                }}</span>
                <a-radio-group
                  v-model="editLeads.ship_via_id"
                  @change="onChange"
                >
                  <div class="items-checkbox">
                    <a-radio
                      v-if="!skeleton"
                      :value="radio.code"
                      v-for="(radio, index) in transportType"
                    >
                      <p>{{ radio.name }}</p>
                    </a-radio>
                    <el-skeleton-item
                      v-else
                      variant="text"
                      style="width: 80%;"
                    />
                  </div>
                </a-radio-group>
              </div>
              <div class="calculator-info-items">
                <span>{{
                  $store.state.translations["calculator.info_serviceType"]
                }}</span>
                <p>
                  {{
                    $store.state.translations["calculator.info_serviceTypeText"]
                  }}
                </p>
              </div>
              <div class="calculator-info-items">
                <span>{{
                  $store.state.translations["calculator.info_insurance"]
                }}</span>
                <p>
                  {{
                    $store.state.translations["calculator.info_insuranceText"]
                  }}
                </p>
              </div>
              <div class="calculator-info-items">
                <span>
                  {{ $store.state.translations["calculator.info_transitTime"] }}
                  <a-tooltip placement="top" color="red">
                    <template slot="title" color="red">
                      <span color="red" class="hover-info">
                        {{
                          $store.state.translations[
                            "calculator.info_transitTimeText"
                          ]
                        }}</span
                      >
                    </template>
                    <a-button
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.65625 5V3.65625H6.34375V5H7.65625ZM7.65625 10.3438V6.34375H6.34375V10.3438H7.65625ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z"
                          fill="#9A999B"
                        />
                      </svg>
                    </a-button> </a-tooltip
                ></span>
                <p>
                  {{
                    $store.state.translations[
                      "calculator.info_transitTimeOption"
                    ]
                  }}
                </p>
              </div>
            </div>
            <div class="calculator-info-footer">
              <div class="calculator-footer-items">
                <span>
                  {{ $store.state.translations["calculator.info_transitTime"] }}
                  <a-tooltip placement="top" color="red">
                    <template slot="title" color="red">
                      <span color="red" class="hover-info">
                        {{
                          $store.state.translations[
                            "calculator.info_transitTimeText2"
                          ]
                        }}</span
                      >
                    </template>
                    <a-button
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.65625 5V3.65625H6.34375V5H7.65625ZM7.65625 10.3438V6.34375H6.34375V10.3438H7.65625ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z"
                          fill="#9A999B"
                        />
                      </svg>
                    </a-button> </a-tooltip
                ></span>

                <h3>
                  ${{
                    $store.state.tarifType == 1
                      ? leads.price_first_tarif
                      : leads.price_second_tarif
                  }}
                </h3>
              </div>
              <div class="calculator-footer-items">
                <span>
                  {{
                    $store.state.translations["calculator.info_priceOption"]
                  }}</span
                >
                <p>
                  {{
                    $store.state.translations["calculator.info_priceOptionText"]
                  }}
                </p>
              </div>
              <div class="calculator-footer-items">
                <span></span>
                <!-- <b>$2729 Discounted cash price</b> -->
              </div>
            </div>
          </div>
          <div class="block-help block-help-mobile">
            <p>
              {{ $store.state.translations["calculator.text_contact"] }}
            </p>
            <div class="contact-us">
              <div class="contact-us-svg">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.1145 6.88048C30.9358 -2.29543 16.0564 -2.29323 6.88048 6.88552C-2.29544 16.0643 -2.29323 30.9436 6.88553 40.1195C16.0643 49.2954 30.9436 49.2932 40.1196 40.1145C44.5264 35.7063 47.0014 29.728 47 23.495C46.9987 17.2629 44.5219 11.2865 40.1145 6.88048ZM35.5899 32.7352C35.5889 32.7362 35.5879 32.7373 35.5868 32.7383V32.7305L34.3961 33.9133C32.8562 35.4727 30.6135 36.1143 28.4819 35.6053C26.3343 35.0305 24.2928 34.1155 22.4346 32.895C20.7083 31.7917 19.1085 30.502 17.6641 29.0488C16.3352 27.7296 15.1413 26.2811 14.0999 24.7248C12.9609 23.0503 12.0594 21.2261 11.4209 19.3042C10.689 17.0463 11.2955 14.5688 12.9876 12.9044L14.3819 11.5101C14.7696 11.1207 15.3995 11.1193 15.7888 11.5069C15.7898 11.5079 15.7909 11.509 15.7919 11.5101L20.1942 15.9124C20.5836 16.3 20.585 16.9299 20.1974 17.3192C20.1963 17.3202 20.1953 17.3213 20.1942 17.3224L17.6092 19.9074C16.8675 20.641 16.7742 21.8068 17.3899 22.649C18.3249 23.9322 19.3595 25.1396 20.4841 26.2602C21.738 27.5195 23.1011 28.665 24.5574 29.6834C25.3989 30.2704 26.5398 30.1714 27.2677 29.4484L29.7665 26.9104C30.1542 26.521 30.7841 26.5197 31.1734 26.9073C31.1744 26.9083 31.1754 26.9093 31.1765 26.9104L35.5867 31.3284C35.9762 31.716 35.9776 32.3458 35.5899 32.7352Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="contact-us-body">
                <h4>
                  {{ $store.state.translations["calculator.contact_title"] }}
                </h4>
                <p>
                  {{ $store.state.translations["calculator.contact_text"] }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <client-only>
      <modal name="modal_discount" width="590px" height="auto">
        <div class="modal_container">
          <div class="modal_header d-flex justify-content-between">
            <h5>{{ $store.state.translations["modal.discount_title"] }}</h5>
            <span @click="hide('modal_discount')"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66699 6.646L17.333 17.31M6.66699 17.31L17.333 6.646"
                  stroke="#024E90"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
          </div>
          <div
            class="modal_body modal-discount d-flex flex-column align-items-center"
          >
            <div class="d-flex flex-column align-items-center mt-lg-2 mb-4">
              <h6 class="discount-title">
                {{ $store.state.translations["modal.discount_title"] }}
              </h6>
              <p class="discount-text text-center">
                {{ $store.state.translations["modal.discount_text"] }}
              </p>
            </div>
            <div class="form-block w-100">
              <input type="text" placeholder="+998 (__) ___ __ __" />
              <span class="discount-timer"
                >0:{{
                  discountTimer.toString().length < 2
                    ? `0${discountTimer}`
                    : discountTimer
                }}
                sekund</span
              >
            </div>

            <div class="modal-discount-btn w-100">
              <div
                class="form-discount-btn form-btn"
                @click="hide('modal_discount')"
              >
                {{ $store.state.translations["modal.discount_btn_no"] }}
              </div>
              <div class="form-btn">
                {{ $store.state.translations["modal.discount_btn_yes"] }}
              </div>
            </div>
          </div>
        </div></modal
      >
    </client-only>
  </div>
</template>
<script>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import yearsData from "../helpers/yearsData";
import moment from "moment";
export default {
  layout: "defaut",
  name: "MyMap",
  data() {
    return {
      drawer: false,
      currentPath: "",
      activeEdit: 0,
      iconX: require("../assets/svg/x.svg"),
      dateFormatList: ["DD/MM/YYYY", "DD/MM/YY"],
      cities: [],
      allCities: [],
      discountTimer: 60,
      skeleton: false,
      vehicleCondition: [
        {
          code: "1",
          name: "Running",
        },
        {
          code: "0",
          name: "Non-running",
        },
      ],
      vehicle: 1,
      transportType: [
        {
          code: "1",
          name: "Open (-$190)",
        },
        {
          code: "2",
          name: "Enclosed",
        },
      ],
      transport: 0,
      dateValue: "01/01/2015",
      years: yearsData,
      value: "",
      shipFrom: "",
      shipTo: "",
      editLeads: {
        email: "",
        nbm: "",
        date: "",
        ship_to: "",
        ship_from: "",
        vehicle: "",
        car_year: "",
        vehicle_runs: 1,
        ship_via_id: 1,
        car_make: "",
      },
      leads: {},
      carMakes: [],
      carModles: [],
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
    routerName() {
      return this.$route.name;
    },
    editInformation(value) {
      this.editValue = value;
    },
    editProp() {
      console.log(this.activeEdit);
    },
  },
  methods: {
    moment,
    async __GET_CAR_MAKES() {
      this.carMakes = await this.$store.dispatch(
        "fetchCars/getCarMakes",
        this.$i18n.locale
      );
    },
    async __GET_CITIES() {
      this.cities = await this.$store.dispatch("fetchLocations/getCities", {
        state: null,
      });
      this.allCities = this.cities;
    },
    show(name) {
      this.$modal.show(name);
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    },
    hide(name) {
      this.$modal.hide(name);
      document.body.style.overflowY = "auto";
      document.body.style.height = "auto";
    },

    drawerOpen() {
      this.drawer = true;
    },
    onChangeDate(value, dateStrings) {
      this.leads.date = dateStrings;
      this.editLeads.date = dateStrings;
      if (dateStrings.length > 0) {
        this.__EDIT_LEADS();
      }
    },
    drawerClose() {
      this.drawer = false;
    },
    onChange(e) {
      console.log(this.editLeads.vehicle_runs);
      this.__EDIT_LEADS();
    },
    show(name) {
      this.$modal.show(name);
      this.drawer = false;
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    },
    async __GET_LEADS() {
      (this.skeleton = true),
        (this.leads = await this.$store.dispatch("fetchLead/getLead", {
          leadId: this.$route.params.index,
          currentLang: this.$i18n.locale,
        }));
      this.skeleton = false;
      console.log(this.leads);
      if (this.leads.ship_from.name) {
        this.$nuxt.$loading.finish();
        console.log(this.leads.vehicle.mark.id);
        this.forEdit();
      } else {
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
      }
    },
    editAutoInfo() {
      this.__EDIT_LEADS();
    },
    forEdit() {
      this.editLeads.email = this.leads.email;
      this.editLeads.nbm = this.leads.nbm;
      this.editLeads.date = this.leads.date;
      this.editLeads.ship_to = this.leads.ship_to.id;
      this.editLeads.ship_from = this.leads.ship_from.id;
      this.editLeads.vehicle = this.leads.vehicle.id;
      this.editLeads.car_year = this.leads.car_year;
      this.editLeads.vehicle_runs = this.leads.vehicle_runs;
      this.editLeads.ship_via_id = this.leads.ship_via_id;
      this.editLeads.car_make = this.leads.vehicle.mark.id;
    },
    async __EDIT_LEADS() {
      (this.skeleton = true),
        (this.leads = await this.$store.dispatch("fetchLead/editLead", {
          leadId: this.$route.params.index,
          currentLang: this.$i18n.locale,
          data: this.editLeads,
        }));
      this.activeEdit = 0;
      this.skeleton = false;
    },
    timer() {
      setTimeout(() => {
        if (this.discountTimer > 0) {
          this.discountTimer--;
          this.timer();
        } else {
          this.hide("modal_discount");
        }
      }, 1000);
    },
  },
  mounted() {
    if (process.browser) {
      if (!JSON.parse(localStorage.getItem("discount"))) {
        this.show("modal_discount");
        if (this.discountTimer == 60) {
          this.timer();
        }
        localStorage.setItem("discount", JSON.stringify(true));
      }
    }
    this.__GET_LEADS();
    this.__GET_CITIES();
    if (this.$route.fullPath.includes("transport")) {
      this.currentPath = `/calculator/delivery-details/${this.$route.params.index}`;
    }
    if (this.$route.fullPath.includes("choice-tarif")) {
      this.currentPath = `/calculator/transport/${this.$route.params.index}`;
    }
    if (this.$route.fullPath.includes("delivery-details")) {
      this.currentPath = "/";
    }
  },
  components: {
    Header,
    Footer,
  },
  watch: {
    async "editLeads.car_make"(val) {
      console.log(val);
      this.carModles = await this.$store.dispatch("fetchCars/getCarsModels", {
        langCode: this.$i18n.locale,
        paramsId: val,
      });
    },
    "editLeads.ship_to"(val) {
      this.cities = this.allCities.filter((item) => item.id != val);
      this.__EDIT_LEADS();
    },
    "editLeads.ship_from"(val) {
      this.cities = this.allCities.filter((item) => item.id != val);
      this.__EDIT_LEADS();
    },
    selectedLocations(_, oldVal) {
      if ((newVal = !oldVal)) {
        console.log(this.selectedLocations);
      }
    },
    dateValue(val) {
      if (val != "") {
        this.activeEdit = 0;
      }
    },
    shipTo(val) {
      this.activeEdit = 0;
    },
    shipFrom(val) {
      this.activeEdit = 0;
    },
    routerName(oldVal, newVal) {
      if (oldVal !== newVal) {
        if (this.$route.fullPath.includes("transport")) {
          this.currentPath = `/calculator/delivery-details/${this.$route.params.index}`;
        }
        if (this.$route.fullPath.includes("choice-tarif")) {
          this.currentPath = `/`;
        }
        if (this.$route.fullPath.includes("delivery-details")) {
          this.currentPath = `/calculator/choice-tarif/${this.$route.params.index}`;
        }
      }
    },
  },
};
</script>
<style lang="scss">
.edit-select {
  height: initial !important;
  padding: 0 10px !important;
  &::after {
    display: none !important;
  }
  span {
    font-size: 14px !important;
  }
}
.edit_select {
  input {
    background: #f4f8ff;
    border: none !important;
    border-radius: 6px;
    width: 100%;
    padding: 6px 13px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #024e90;
    &:focus {
      outline: none;
    }
  }
}
.el-select-dropdown__empty {
  display: none !important;
}
</style>
