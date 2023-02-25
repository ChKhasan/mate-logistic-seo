<template lang="html">
  <div class="location-map">
    <div class="container_xl">
      <div class="location-map-title">
        <h1>
          {{ $store.state.translations["loaction.title"] }}
        </h1>
        <p>
          {{ $store.state.translations["loaction.text"] }}
        </p>
      </div>
      <div class="location-map-grid">
        <div class="location-map-info">
          <div class="location-map-banner">
            <img src="../assets/images/Rectangle 23896.png" alt="" />
          </div>
          <div class="location-map-text">
            <p
              v-html="
                $store.state.translations['loaction.info']
                  ?.replace(
                    '(a)',
                    cities.find((item) => item.id == currentCities.ship_from)
                      ?.name
                  )
                  ?.replace(
                    '(b)',
                    cities.find((item) => item.id == currentCities.ship_to)
                      ?.name
                  )
              "
            ></p>
          </div>
        </div>
        <div class="location-map-form">
          <div class="location-map-shadow"></div>
          <div class="banner-form">
            <el-form
              label-position="top"
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
              action=""
            >
              <div class="form-title">
                <h2>
                  {{ $store.state.translations["main.banner_form_title"] }}
                </h2>
              </div>
              <div v-if="active == 1">
                <div class="form-block">
                  <label for="inputFrom">{{
                    $store.state.translations["main.form_label_email"]
                  }}</label>

                  <el-form-item prop="email" label-position="top">
                    <input
                      class="w-100"
                      type="email"
                      v-model="ruleForm.email"
                      id="inputFrom"
                      :placeholder="
                        $store.state.translations['main.placeH_email']
                      "
                      required
                    />
                  </el-form-item>
                </div>

                <div class="form-block">
                  <label for="inputFrom">{{
                    $store.state.translations["main.form_label_firstDate"]
                  }}</label>
                  <el-form-item prop="date" label-position="top">
                    <a-date-picker
                      class="w-100"
                      @change="onChangeDate"
                      :format="dateFormatList"
                      :placeholder="
                        $store.state.translations['main.placeH_firstDate']
                      "
                    />
                  </el-form-item>
                </div>

                <div class="form-block">
                  <label for="inputTo">{{
                    $store.state.translations["main.form_label_number"]
                  }}</label>

                  <el-form-item prop="nbm" label-position="top">
                    <the-mask
                      class="w-100"
                      type="text"
                      placeholder="(___) ___-____"
                      :mask="['(###) ###-####', '(###) ###-####']"
                      v-model="ruleForm.nbm"
                      label-position="top"
                    />
                  </el-form-item>
                </div>
              </div>
              <div v-if="active == 0">
                <div class="form-block">
                  <label for="">{{
                    $store.state.translations["main.form_label_shipFrom"]
                  }}</label>
                  <el-form-item prop="ship_from" label-position="top">
                    <el-select
                      v-model="ruleForm.ship_from"
                      class="mb-2 w-100"
                      filterable
                      :disabled="!cities.length > 0"
                      ref="selectInput"
                      :placeholder="`${
                        cities.find(
                          (item) => item.id == currentCities.ship_from
                        )?.name
                      } ${
                        cities.find(
                          (item) => item.id == currentCities.ship_from
                        )?.zip
                      }`"
                      popper-class="web-selects"
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
                  </el-form-item>
                </div>
                <div class="form-block">
                  <label for="">{{
                    $store.state.translations["main.form_label_shipTo"]
                  }}</label>
                  <el-form-item prop="ship_to" label-position="top">
                    <el-select
                      v-model="ruleForm.ship_to"
                      class="mb-2 w-100"
                      filterable
                      :disabled="!cities.length > 0"
                      ref="selectInput"
                      :placeholder="`${
                        cities.find((item) => item.id == currentCities.ship_to)
                          ?.name
                      } ${
                        cities.find((item) => item.id == currentCities.ship_to)
                          ?.zip
                      }`"
                      popper-class="web-selects"
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
                  </el-form-item>
                </div>
              </div>
              <div v-if="active == 2">
                <div class="form-block">
                  <label for="">{{
                    $store.state.translations["main.form_vehicleYear"]
                  }}</label>
                  <el-form-item prop="car_year" label-position="top">
                    <el-select
                      v-model="ruleForm.car_year"
                      class="banner-select w-100"
                      :placeholder="
                        $store.state.translations['main.placeH_vehicleYear']
                      "
                    >
                      <el-option
                        v-for="item in years"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="form-block">
                  <label for="inputFrom">{{
                    $store.state.translations["main.form_vehicleMake"]
                  }}</label>
                  <el-form-item prop="car_make" label-position="top">
                    <el-select
                      class="banner-select w-100"
                      v-model="ruleForm.car_make"
                      :placeholder="
                        $store.state.translations['main.placeH_vehicleMake']
                      "
                      @focus="__GET_CAR_MAKES()"
                      :loading="!carMakes.length > 0"
                      loading-text="Loading..."
                    >
                      <el-option
                        v-for="item in carMakes"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
                <div class="form-block">
                  <label for="inputTo">{{
                    $store.state.translations["main.form_vehicleModel"]
                  }}</label>
                  <el-form-item prop="vehicle" label-position="top">
                    <el-select
                      class="banner-select w-100"
                      v-model="ruleForm.vehicle"
                      :placeholder="
                        $store.state.translations['main.placeH_vehicleModel']
                      "
                      :disabled="ruleForm.car_make == ''"
                    >
                      <el-option
                        v-for="item in carModles"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>
              <p class="banner-form-info">
                {{ $store.state.translations["main.banner_form_text"] }}
              </p>
              <div
                class="banner-form-btn steps-action d-flex justify-content-end"
                :class="{ 'justify-content-between': active > 0 }"
              >
                <div
                  class="form-btn previos-btn"
                  @click="prev"
                  v-if="active > 0"
                >
                  Previos
                </div>
                <div
                  class="form-btn"
                  type="submit"
                  v-on:click="submitForm('ruleForm', 1)"
                  v-if="active == 0"
                  :class="activeDisabled"
                >
                  {{
                    active == 2
                      ? $store.state.translations["main.form_btn_lastStage"]
                      : $store.state.translations["main.form_btn_nextStage"]
                  }}<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9565 6.28711L18.6695 12.0001L12.9565 17.7131M5.35547 12.0001H18.6525"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div
                  class="form-btn"
                  type="submit"
                  v-on:click="submitForm('ruleForm', 2)"
                  v-if="active == 1"
                  :class="activeDisabled"
                >
                  {{
                    active == 2
                      ? $store.state.translations["main.form_btn_lastStage"]
                      : $store.state.translations["main.form_btn_nextStage"]
                  }}<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9565 6.28711L18.6695 12.0001L12.9565 17.7131M5.35547 12.0001H18.6525"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div
                  class="form-btn"
                  type="submit"
                  v-on:click="submitForm('ruleForm', 2)"
                  v-if="active == 2"
                  :class="activeDisabled"
                >
                  {{ $store.state.translations["main.form_btn_lastStage"] }}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9565 6.28711L18.6695 12.0001L12.9565 17.7131M5.35547 12.0001H18.6525"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="banner-steps">
                <div
                  class="banner-steps"
                  v-for="step in steps"
                  v-if="active == step"
                >
                  <el-steps :active="step + 1" finish-status="success">
                    <el-step
                      :title="$store.state.translations['main.step_location']"
                    ></el-step>
                    <el-step
                      :title="$store.state.translations['main.step_nameOrder']"
                    ></el-step>
                    <el-step
                      :title="$store.state.translations['main.step_truck']"
                    ></el-step>
                  </el-steps>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </div>

      <TitleSmall title="Map" />

      <div class="location-map-maps-grid" v-if="!skeletonMap">
        <div class="location-map-card">
          <el-skeleton-item
            v-if="skeleton_from"
            variant="text"
            style="width: 80%;"
          />
          <div
            class="lm-map"
            v-else
            v-html="currentCitiesData_from?.iframe"
          ></div>
          <div class="lm-body">
            <el-skeleton-item
              v-if="skeleton_from"
              variant="text"
              style="width: 80%;"
            />
            <h2 v-else class="lm-title">
              {{ currentCitiesData_from?.name }}
            </h2>
            <h6 class="lm-area">Tochka A</h6>
            <el-skeleton-item
              v-if="skeleton_from"
              variant="text"
              style="width: 80%;"
            />
            <div
              v-else
              class="lm-text"
              v-html="currentCitiesData_from?.text"
            ></div>
          </div>
        </div>
        <div class="location-map-card">
          <el-skeleton-item
            v-if="skeleton_from"
            variant="text"
            style="width: 80%;"
          />
          <div
            v-else
            class="lm-map"
            v-html="currentCitiesData_to?.iframe"
          ></div>
          <div class="lm-body">
            <el-skeleton-item
              v-if="skeleton_from"
              variant="text"
              style="width: 80%;"
            />
            <h2 v-else class="lm-title">
              {{ currentCitiesData_to?.name }}
            </h2>
            <h6 class="lm-area">Tochka B</h6>
            <el-skeleton-item
              v-if="skeleton_from"
              variant="text"
              style="width: 80%;"
            />
            <div
              v-else
              class="lm-text"
              v-html="currentCitiesData_to?.text"
            ></div>
          </div>
        </div>
        <!-- <LocationMapCard
          :currentCitiesData="currentCitiesData.from"
          :skeleton="skeleton_from"
          spaceType="A"
        />
        <LocationMapCard
          :currentCitiesData="currentCitiesData.to"
          :skeleton="skeleton_to"
          spaceType="B"
        /> -->
      </div>
      <div class="service-from-cards">
        <ServiceApplicationCard
          number="1"
          :title="$store.state.translations['service.appFormCard1_title']"
          :text="$store.state.translations['service.appFormCard1_text']"
        />
        <ServiceApplicationCard
          number="2"
          :title="$store.state.translations['service.appFormCard2_title']"
          :text="$store.state.translations['service.appFormCard2_text']"
        />
        <ServiceApplicationCard
          number="3"
          :title="$store.state.translations['service.appFormCard3_title']"
          :text="$store.state.translations['service.appFormCard3_text']"
        />
        <ServiceApplicationCard
          number="4"
          :title="$store.state.translations['service.appFormCard4_title']"
          :text="$store.state.translations['service.appFormCard4_text']"
        />
      </div>
      <div class="service-cards">
        <ServicesCard
          :title="$store.state.translations['service.servicesCard1_title']"
          :text="$store.state.translations['service.servicesCard1_text']"
        >
          <svg
            width="66"
            height="64"
            viewBox="0 0 66 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62.309 27.2347C62.0308 26.9976 61.8406 26.6755 61.7686 26.3194C61.6966 25.9634 61.7468 25.5937 61.9114 25.2691L62.8393 23.4927C63.1352 22.9085 63.3014 22.2685 63.3268 21.6156C63.3522 20.9627 63.2362 20.3119 62.9866 19.707C62.7322 19.1046 62.3491 18.5637 61.8635 18.1214C61.378 17.6791 60.8014 17.3458 60.1734 17.1443L58.2439 16.5182C57.8978 16.4031 57.6001 16.1776 57.3975 15.8772C57.195 15.5768 57.0989 15.2185 57.1245 14.8583L57.2866 12.8635C57.3374 12.2121 57.245 11.5574 57.0158 10.9446C56.7865 10.3318 56.4258 9.77524 55.9585 9.31322C55.4911 8.8512 54.9282 8.49463 54.3083 8.26801C53.6883 8.04138 53.0262 7.95006 52.3672 8.00032L50.3493 8.16049C49.9841 8.19099 49.6192 8.09817 49.3143 7.89717C49.0093 7.69618 48.7823 7.3989 48.6703 7.05389L48.0369 5.14646C47.8337 4.52629 47.497 3.95699 47.05 3.47773C46.6029 2.99848 46.0562 2.62063 45.4474 2.37019C44.8385 2.11975 44.182 2.00266 43.5231 2.02697C42.8641 2.05128 42.2182 2.21641 41.63 2.51101L39.8183 3.42832C39.4927 3.59248 39.1206 3.64298 38.7623 3.57161C38.404 3.50024 38.0806 3.31119 37.8447 3.03519L36.5191 1.57914C36.0891 1.08381 35.5558 0.686245 34.9559 0.413681C34.3559 0.141117 33.7034 0 33.0432 0C32.3829 0 31.7304 0.141117 31.1304 0.413681C30.5305 0.686245 29.9972 1.08381 29.5672 1.57914L28.2563 3.03519C28.0165 3.31021 27.6906 3.49823 27.3305 3.56944C26.9703 3.64066 26.5964 3.59099 26.268 3.42832L24.4711 2.51101C23.8801 2.21849 23.2327 2.05418 22.5723 2.02907C21.9118 2.00396 21.2536 2.11863 20.6416 2.36541C20.0323 2.61688 19.4852 2.9956 19.0378 3.47561C18.5903 3.95563 18.2532 4.5256 18.0494 5.14646L17.416 7.05389C17.3018 7.39747 17.0742 7.69323 16.7698 7.89385C16.4654 8.09447 16.1017 8.18836 15.737 8.16049L13.7191 8.00032C13.0607 7.95255 12.3996 8.04558 11.7809 8.27309C11.1621 8.50059 10.6002 8.85723 10.1334 9.31871C9.66656 9.7802 9.30581 10.3357 9.07568 10.9474C8.84554 11.5591 8.75144 12.2126 8.79976 12.8635L8.96177 14.8583C8.99263 15.2194 8.89873 15.5801 8.69542 15.8816C8.49211 16.1831 8.19139 16.4075 7.84239 16.5182L5.91294 17.1298C5.2881 17.3365 4.71536 17.6733 4.23331 18.1174C3.75126 18.5615 3.37111 19.1025 3.11847 19.7041C2.86584 20.3057 2.74659 20.9539 2.76877 21.6049C2.79095 22.2559 2.95404 22.8947 3.24705 23.4781L4.17495 25.2691C4.34101 25.591 4.39209 25.9589 4.31989 26.3131C4.2477 26.6673 4.05647 26.987 3.77728 27.2202L2.30441 28.5306C1.80336 28.9557 1.4012 29.4829 1.12549 30.076C0.849778 30.6691 0.707031 31.3142 0.707031 31.9669C0.707031 32.6196 0.849778 33.2647 1.12549 33.8578C1.4012 34.4509 1.80336 34.9781 2.30441 35.4032L3.77728 36.6991C4.05548 36.9362 4.24567 37.2583 4.3177 37.6144C4.38974 37.9704 4.3395 38.3401 4.17495 38.6647L3.24705 40.4411C2.95115 41.0253 2.78494 41.6653 2.75953 42.3182C2.73413 42.9711 2.85013 43.6219 3.09976 44.2268C3.35413 44.8292 3.73723 45.3701 4.22279 45.8124C4.70835 46.2547 5.2849 46.588 5.91294 46.7895L7.84239 47.4156C8.18852 47.5308 8.4862 47.7562 8.68878 48.0566C8.89135 48.357 8.98737 48.7153 8.96177 49.0755L8.79976 51.0703C8.75144 51.7212 8.84554 52.3747 9.07568 52.9864C9.30581 53.5981 9.66656 54.1536 10.1334 54.6151C10.6002 55.0766 11.1621 55.4332 11.7809 55.6607C12.3996 55.8882 13.0607 55.9813 13.7191 55.9335L15.737 55.7733C16.1022 55.7428 16.4671 55.8356 16.7721 56.0366C17.077 56.2376 17.304 56.5349 17.416 56.8799L18.0346 58.7873C18.2438 59.405 18.5844 59.9712 19.0337 60.4478C19.4829 60.9243 20.0302 61.3001 20.6388 61.5499C21.2473 61.7996 21.903 61.9175 22.5615 61.8956C23.22 61.8737 23.8662 61.7125 24.4563 61.4228L26.268 60.5055C26.5936 60.3413 26.9658 60.2908 27.3241 60.3622C27.6824 60.4336 28.0057 60.6226 28.2416 60.8986L29.5672 62.3547C29.9902 62.8628 30.5205 63.2734 31.121 63.5577C31.7214 63.8419 32.3775 63.9928 33.0432 64C33.7026 63.9989 34.3541 63.858 34.9538 63.5867C35.5534 63.3154 36.0872 62.9201 36.5191 62.4275L37.83 60.8986C38.0698 60.6236 38.3957 60.4356 38.7558 60.3644C39.116 60.2931 39.49 60.3428 39.8183 60.5055L41.6152 61.4228C42.2062 61.7153 42.8536 61.8796 43.5141 61.9047C44.1745 61.9298 44.8327 61.8152 45.4447 61.5684C46.054 61.3169 46.6011 60.9382 47.0485 60.4582C47.496 59.9782 47.8331 59.4082 48.0369 58.7873L48.6703 56.8799C48.7845 56.5363 49.0121 56.2406 49.3165 56.04C49.6209 55.8393 49.9846 55.7454 50.3493 55.7733L52.3672 55.9335C53.0262 55.9837 53.6883 55.8924 54.3083 55.6658C54.9282 55.4392 55.4911 55.0826 55.9585 54.6206C56.4258 54.1586 56.7865 53.602 57.0158 52.9892C57.245 52.3764 57.3374 51.7217 57.2866 51.0703L57.1245 49.0755C57.0937 48.7144 57.1876 48.3537 57.3909 48.0522C57.5942 47.7507 57.8949 47.5263 58.2439 47.4156L60.1734 46.8041C60.801 46.5976 61.3768 46.2608 61.862 45.8163C62.3472 45.3718 62.7306 44.8298 62.9866 44.2268C63.2374 43.6242 63.3529 42.9748 63.3249 42.3237C63.297 41.6725 63.1262 41.0352 62.8245 40.4557L61.9114 38.6647C61.7453 38.3428 61.6942 37.9749 61.7664 37.6207C61.8386 37.2665 62.0298 36.9468 62.309 36.7136L63.7819 35.4032C64.2829 34.9781 64.6851 34.4509 64.9608 33.8578C65.2365 33.2647 65.3793 32.6196 65.3793 31.9669C65.3793 31.3142 65.2365 30.6691 64.9608 30.076C64.6851 29.4829 64.2829 28.9557 63.7819 28.5306L62.309 27.2347ZM33.0432 52.3516C28.9649 52.3516 24.9782 51.1561 21.5872 48.9162C18.1963 46.6763 15.5533 43.4926 13.9926 39.7678C12.4319 36.043 12.0236 31.9443 12.8192 27.99C13.6149 24.0358 15.5787 20.4036 18.4625 17.5527C21.3463 14.7019 25.0204 12.7604 29.0204 11.9739C33.0203 11.1873 37.1663 11.591 40.9341 13.1339C44.702 14.6768 47.9224 17.2895 50.1882 20.6418C52.454 23.994 53.6633 27.9352 53.6633 31.9669C53.6633 37.3733 51.4908 42.5582 47.6238 46.3811C43.7568 50.2039 38.512 52.3516 33.0432 52.3516Z"
              fill="#2C67BE"
            />
            <path
              d="M33.0432 14.4943C29.5475 14.4943 26.1303 15.5191 23.2238 17.439C20.3172 19.3589 18.0519 22.0877 16.7141 25.2804C15.3764 28.4731 15.0264 31.9863 15.7084 35.3756C16.3903 38.765 18.0737 41.8783 20.5455 44.3219C23.0173 46.7655 26.1665 48.4296 29.595 49.1038C33.0235 49.778 36.5773 49.4319 39.8069 48.1095C43.0364 46.787 45.7968 44.5475 47.7389 41.6742C49.681 38.8008 50.7176 35.4227 50.7176 31.9669C50.7176 27.3329 48.8554 22.8887 45.5409 19.6119C42.2263 16.3352 37.7307 14.4943 33.0432 14.4943ZM42.9261 27.1765L31.1432 38.8249C31.0062 38.9614 30.8433 39.0697 30.6639 39.1436C30.4844 39.2175 30.2919 39.2556 30.0974 39.2556C29.903 39.2556 29.7105 39.2175 29.531 39.1436C29.3515 39.0697 29.1886 38.9614 29.0517 38.8249L23.1602 33.0007C22.8829 32.7265 22.7271 32.3547 22.7271 31.9669C22.7271 31.5792 22.8829 31.2073 23.1602 30.9331C23.4376 30.6589 23.8137 30.5049 24.2059 30.5049C24.5982 30.5049 24.9743 30.6589 25.2517 30.9331L30.0974 35.7381L40.8346 25.1089C41.112 24.8347 41.4881 24.6807 41.8804 24.6807C42.2726 24.6807 42.6488 24.8347 42.9261 25.1089C43.2034 25.3831 43.3593 25.755 43.3593 26.1427C43.3593 26.5305 43.2034 26.9023 42.9261 27.1765Z"
              fill="#2C67BE"
            />
          </svg>
        </ServicesCard>
        <ServicesCard
          :title="$store.state.translations['service.servicesCard2_title']"
          :text="$store.state.translations['service.servicesCard2_text']"
        >
          <svg
            width="64"
            height="66"
            viewBox="0 0 88 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.9993 29.362C33.1996 29.362 24.4436 38.142 24.4436 48.9729C24.4436 59.8038 33.1996 68.5838 43.9993 68.5838C54.7996 68.5838 63.5549 59.8038 63.5549 48.9729C63.5445 38.1465 54.7952 29.3725 43.9993 29.362ZM53.061 45.8035L43.2835 55.6086C42.3299 56.5656 40.7829 56.5664 39.8278 55.6101C39.8278 55.6093 39.827 55.6094 39.827 55.6086L34.9383 50.7061C33.9668 49.7655 33.94 48.2133 34.8779 47.2398C35.8158 46.2656 37.3629 46.2387 38.3344 47.1793C38.3545 47.1987 38.3746 47.2189 38.3948 47.2398L41.5553 50.4085L49.6045 42.3365C50.5424 41.3623 52.0902 41.3354 53.061 42.276C54.0324 43.2166 54.0593 44.768 53.1213 45.7422C53.102 45.7624 53.0818 45.7826 53.061 45.8028V45.8035Z"
              fill="#2C67BE"
            />
            <path
              d="M85.5553 14.6537C71.3372 14.6537 52.6218 9.84237 45.9571 0.926283C45.0669 -0.157852 43.4692 -0.312622 42.3873 0.580108C42.2613 0.684035 42.1458 0.799926 42.0421 0.926283C35.3774 9.84237 16.6621 14.6537 2.44399 14.6537C1.0945 14.6537 0 15.7513 0 17.1053V48.9729C0 75.9283 23.3417 92.1776 43.3267 97.9041C43.7666 98.032 44.2334 98.032 44.6733 97.9041C64.6583 92.1776 88 75.9283 88 48.9729V17.1053C87.9993 15.7513 86.9048 14.6537 85.5553 14.6537ZM43.9993 73.4864C30.4992 73.4864 19.5549 62.5112 19.5549 48.9729C19.5549 35.4347 30.4992 24.4595 43.9993 24.4595C57.5001 24.4595 68.4436 35.4347 68.4436 48.9729C68.428 62.5052 57.4934 73.4707 43.9993 73.4864Z"
              fill="#2C67BE"
            />
          </svg>
        </ServicesCard>
        <ServicesCard
          :title="$store.state.translations['service.servicesCard3_title']"
          :text="$store.state.translations['service.servicesCard3_text']"
        >
          <svg
            width="70"
            height="56"
            viewBox="0 0 70 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.3465 15.2099C45.3465 23.6101 38.5845 30.4198 30.243 30.4198C21.9016 30.4198 15.1396 23.6101 15.1396 15.2099C15.1396 14.2911 15.2205 13.3913 15.3755 12.5174L15.3887 12.4444C16.68 5.36459 22.8394 0 30.243 0C37.6467 0 43.8061 5.36459 45.0974 12.4444C45.261 13.3412 45.3465 14.2655 45.3465 15.2099ZM23.9114 17.252H28.684C29.0776 17.252 29.3352 17.6609 29.1627 18.0119L25.48 25.5073C25.2175 26.0417 25.9067 26.5326 26.333 26.1147L38.322 14.3631C38.6605 14.0312 38.4237 13.4588 37.9477 13.4588H32.3371C31.9685 13.4588 31.7113 13.096 31.836 12.7518L34.4435 5.55001C34.6423 5.00094 33.9295 4.58433 33.5418 5.02299L23.511 16.3752C23.2092 16.7168 23.4536 17.252 23.9114 17.252Z"
              fill="#2C67BE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.243 33.1852C40.1011 33.1852 48.0926 25.1374 48.0926 15.2099C48.0926 14.2694 48.0208 13.3459 47.8827 12.4444H56.3308C58.2266 12.4444 59.7634 13.9921 59.7634 15.9012V52.5432C59.7634 54.4523 58.2266 56 56.3308 56H4.15526C2.2595 56 0.722656 54.4523 0.722656 52.5432V15.9012C0.722656 13.9921 2.2595 12.4444 4.15526 12.4444H12.6034C12.4652 13.3459 12.3935 14.2694 12.3935 15.2099C12.3935 25.1374 20.385 33.1852 30.243 33.1852ZM12.3935 38.716C11.6352 38.716 11.0205 39.3351 11.0205 40.0988C11.0205 40.8624 11.6352 41.4815 12.3935 41.4815H48.7791C49.5374 41.4815 50.1521 40.8624 50.1521 40.0988C50.1521 39.3351 49.5374 38.716 48.7791 38.716H12.3935ZM11.0205 48.3951C11.0205 47.6314 11.6352 47.0123 12.3935 47.0123H48.7791C49.5374 47.0123 50.1521 47.6314 50.1521 48.3951C50.1521 49.1587 49.5374 49.7778 48.7791 49.7778H12.3935C11.6352 49.7778 11.0205 49.1587 11.0205 48.3951Z"
              fill="#2C67BE"
            />
            <path
              d="M62.5095 24.1975V44.2469H63.8826V47.7037C63.8826 49.231 65.1121 50.4691 66.6286 50.4691C68.1452 50.4691 69.3747 49.231 69.3747 47.7037V20.7407C69.3747 19.2135 68.1452 17.9753 66.6286 17.9753C65.1121 17.9753 63.8826 19.2135 63.8826 20.7407V24.1975H62.5095Z"
              fill="#2C67BE"
            />
          </svg>
        </ServicesCard>
        <ServicesCard
          :title="$store.state.translations['service.servicesCard4_title']"
          :text="$store.state.translations['service.servicesCard4_text']"
        >
          <svg
            width="50"
            height="56"
            viewBox="0 0 50 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.9996 16.7783C18.8634 16.7783 13.8884 21.7955 13.8884 27.9845C13.8884 34.1736 18.8634 39.1908 24.9996 39.1908C31.1362 39.1908 36.1107 34.1736 36.1107 27.9845C36.1048 21.798 31.1336 16.7843 24.9996 16.7783ZM30.1483 26.1734L24.5929 31.7763C24.0511 32.3232 23.1721 32.3236 22.6294 31.7772C22.6294 31.7768 22.629 31.7768 22.629 31.7763L19.8513 28.9749C19.2993 28.4374 19.2841 27.5505 19.817 26.9942C20.3499 26.4375 21.2289 26.4221 21.7809 26.9596C21.7923 26.9707 21.8038 26.9822 21.8152 26.9942L23.6109 28.8049L28.1844 24.1923C28.7173 23.6356 29.5967 23.6202 30.1483 24.1577C30.7002 24.6952 30.7155 25.5817 30.1826 26.1384C30.1716 26.1499 30.1601 26.1615 30.1483 26.173V26.1734Z"
              fill="#2C67BE"
            />
            <path
              d="M48.6109 8.37354C40.5325 8.37354 29.8988 5.62421 26.112 0.529305C25.6062 -0.0902014 24.6984 -0.178641 24.0837 0.33149C24.0121 0.390877 23.9465 0.4571 23.8876 0.529305C20.1008 5.62421 9.46708 8.37354 1.38863 8.37354C0.621876 8.37354 0 9.00073 0 9.77447V27.9845C0 43.3876 13.2623 52.6729 24.6175 55.9452C24.8674 56.0183 25.1326 56.0183 25.3825 55.9452C36.7377 52.6729 50 43.3876 50 27.9845V9.77447C49.9996 9.00073 49.3777 8.37354 48.6109 8.37354ZM24.9996 41.9922C17.3291 41.9922 11.1107 35.7207 11.1107 27.9845C11.1107 20.2484 17.3291 13.9769 24.9996 13.9769C32.6705 13.9769 38.8884 20.2484 38.8884 27.9845C38.8795 35.7173 32.6667 41.9832 24.9996 41.9922Z"
              fill="#2C67BE"
            />
          </svg>
        </ServicesCard>
        <ServicesCard
          :title="$store.state.translations['service.servicesCard5_title']"
          :text="$store.state.translations['service.servicesCard5_text']"
        >
          <svg
            width="70"
            height="56"
            viewBox="0 0 70 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M45.3465 15.2099C45.3465 23.6101 38.5845 30.4198 30.243 30.4198C21.9016 30.4198 15.1396 23.6101 15.1396 15.2099C15.1396 14.2911 15.2205 13.3913 15.3755 12.5174L15.3887 12.4444C16.68 5.36459 22.8394 0 30.243 0C37.6467 0 43.8061 5.36459 45.0974 12.4444C45.261 13.3412 45.3465 14.2655 45.3465 15.2099ZM23.9114 17.252H28.684C29.0776 17.252 29.3352 17.6609 29.1627 18.0119L25.48 25.5073C25.2175 26.0417 25.9067 26.5326 26.333 26.1147L38.322 14.3631C38.6605 14.0312 38.4237 13.4588 37.9477 13.4588H32.3371C31.9685 13.4588 31.7113 13.096 31.836 12.7518L34.4435 5.55001C34.6423 5.00094 33.9295 4.58433 33.5418 5.02299L23.511 16.3752C23.2092 16.7168 23.4536 17.252 23.9114 17.252Z"
              fill="#2C67BE"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.243 33.1852C40.1011 33.1852 48.0926 25.1374 48.0926 15.2099C48.0926 14.2694 48.0208 13.3459 47.8827 12.4444H56.3308C58.2266 12.4444 59.7634 13.9921 59.7634 15.9012V52.5432C59.7634 54.4523 58.2266 56 56.3308 56H4.15526C2.2595 56 0.722656 54.4523 0.722656 52.5432V15.9012C0.722656 13.9921 2.2595 12.4444 4.15526 12.4444H12.6034C12.4652 13.3459 12.3935 14.2694 12.3935 15.2099C12.3935 25.1374 20.385 33.1852 30.243 33.1852ZM12.3935 38.716C11.6352 38.716 11.0205 39.3351 11.0205 40.0988C11.0205 40.8624 11.6352 41.4815 12.3935 41.4815H48.7791C49.5374 41.4815 50.1521 40.8624 50.1521 40.0988C50.1521 39.3351 49.5374 38.716 48.7791 38.716H12.3935ZM11.0205 48.3951C11.0205 47.6314 11.6352 47.0123 12.3935 47.0123H48.7791C49.5374 47.0123 50.1521 47.6314 50.1521 48.3951C50.1521 49.1587 49.5374 49.7778 48.7791 49.7778H12.3935C11.6352 49.7778 11.0205 49.1587 11.0205 48.3951Z"
              fill="#2C67BE"
            />
            <path
              d="M62.5095 24.1975V44.2469H63.8826V47.7037C63.8826 49.231 65.1121 50.4691 66.6286 50.4691C68.1452 50.4691 69.3747 49.231 69.3747 47.7037V20.7407C69.3747 19.2135 68.1452 17.9753 66.6286 17.9753C65.1121 17.9753 63.8826 19.2135 63.8826 20.7407V24.1975H62.5095Z"
              fill="#2C67BE"
            />
          </svg>
        </ServicesCard>
      </div>
    </div>
    <div class="carousel-container">
      <div class="container_xl position-relative">
        <Title title="Feedbacks from clients" />
      </div>
      <div class="carousel-left"></div>
      <PartnersCarousel :reviews="reviews" />
      <div class="carousel-right"></div>
    </div>
  </div>
</template>
<script>
import LocationMapCard from "../components/cards/LocationMapCard.vue";
import ServiceApplicationCard from "../components/cards/ServiceApplicationCard.vue";
import PartnersCarousel from "../components/PartnersCarousel.vue";
import Title from "../components/Title.vue";
import TitleSmall from "../components/TitleSmall.vue";
import moment from "moment";
import yearsData from "../helpers/yearsData";
import ServicesCard from "../components/cards/ServicesCard.vue";
export default {
  head: {
    title: "Location",
  },
  data() {
    return {
      current: 0,
      active: 0,
      date: "01/01/2015",
      cities: [],
      carMakes: [],
      carMakesValue: "",
      carModles: [],
      allCities: [],
      dateFormatList: ["DD/MM/YYYY", "DD/MM/YY"],
      currentCities: {},
      skeleton_from: false,
      reviews: [],
      steps: [0, 1, 2],
      ruleForm: {
        email: "",
        nbm: "",
        date: "01/01/2015",
        ship_to: "",
        ship_from: "",
        vehicle: "",
        car_year: "",
        vehicle_runs: 1,
        ship_via_id: 1,
      },
      years: yearsData,
      rules: {
        nbm: [
          {
            min: 10,
            max: 10,
            message: "Length should be 10",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
        ],
        date: [
          {
            required: true,
            message: "Please enter date",
            trigger: "blur",
          },
        ],
        car_make: [
          {
            required: true,
            message: "Pleace enter transport",
            trigger: "change",
          },
        ],
        vehicle: [
          {
            required: true,
            message: "Pleace enter transport model",
            trigger: "change",
          },
        ],
        car_year: [
          {
            required: true,
            message: "Pleace enter transport model",
            trigger: "change",
          },
        ],
      },
      currentCitiesData_to: {},
      currentCitiesData_from: {},
      currentCitiesData: {
        to: {
          text: "text",
          name: "Tochka A",
          iframe: "map",
        },
        form: {
          text: "text",
          name: "Tochka B",
          iframe: "map",
        },
      },
    };
  },
  computed: {
    activeDisabled() {
      return {
        lastStage: this.active == 2,
      };
    },
  },
  async mounted() {
    this.__GET_CITIES();
    this.currentCities = await JSON.parse(
      localStorage.getItem("cities_from_map")
    );
    this.__GET_REVIEWS();
    this.__GET_CURRENT_CITY_TO();
    this.__GET_CURRENT_CITY_FROM();
  },
  methods: {
    async __GET_REVIEWS() {
      this.reviews = await this.$store.dispatch(
        "fetchGoogleApi/getReviews",
        this.$i18n.locale
      );
    },
    moment,
    reverse(val) {
      (this.active = val), console.log(this.active);
    },
    next() {
      this.active++;
    },
    prev() {
      this.active--;
    },
    async __GET_CITIES() {
      this.cities = await this.$store.dispatch("fetchLocations/getCities", {
        state: null,
      });
      this.allCities = this.cities;
    },
    async __GET_CAR_MAKES() {
      this.carMakes = await this.$store.dispatch(
        "fetchCars/getCarMakes",
        this.$i18n.locale
      );
    },
    async __GET_CURRENT_CITY_TO() {
      this.currentCitiesData_to = await this.$store.dispatch(
        "fetchLocations/getCurrentCity",
        {
          currentCity: this.currentCities.ship_to,
        }
      );
    },
    async __GET_CURRENT_CITY_FROM() {
      this.currentCitiesData_from = await this.$store.dispatch(
        "fetchLocations/getCurrentCity",
        {
          currentCity: this.currentCities.ship_from,
        }
      );
    },
    onChangeDate(value, dateStrings) {
      this.ruleForm.date = dateStrings;
    },
    async __POST_LEAD() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.leadCread = await this.$store.dispatch("fetchLead/postLead", {
        currentLang: this.$i18n.locale,
        data: this.ruleForm,
      });
      this.$nuxt.$loading.finish();
      if (this.leadCread.uuid) {
        localStorage.setItem("editData", JSON.stringify(this.ruleForm));
        this.$router.push(`/calculator/choice-tarif/${this.leadCread.uuid}`);
      }
    },
    async submitForm(ruleForm, val) {
      console.log(this.active);
      if (!this.ruleForm.ship_from) {
        this.ruleForm.ship_from = this.currentCities.ship_from;
      }
      if (!this.ruleForm.ship_to) {
        this.ruleForm.ship_to = this.currentCities.ship_to;
      }
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          this.nextStep(val);
        } else {
          return false;
        }
      });
    },

    async checkEmail() {
      const emailCorrect = await this.$store.dispatch(
        "fetchCheckEmail/getCheckEmail",
        this.ruleForm.email
      );
      return await emailCorrect;
    },
    nextStep(val) {
      if (this.active > 1) {
        this.__POST_LEAD();
      } else {
        this.active = val;
      }
    },
  },
  watch: {
    async carMakesValue(val) {
      this.carModles = await this.$store.dispatch("fetchCars/getCarsModels", {
        langCode: this.$i18n.locale,
        paramsId: val,
      });
      console.log(this.carMakesValue);
    },
    async "ruleForm.car_make"(val) {
      this.carModles = await this.$store.dispatch("fetchCars/getCarsModels", {
        langCode: this.$i18n.locale,
        paramsId: val,
      });
    },
    "ruleForm.ship_to"(val) {
      this.cities = this.allCities.filter((item) => item.id != val);
    },
    "ruleForm.ship_from"(val) {
      this.cities = this.allCities.filter((item) => item.id != val);
    },
  },
  components: {
    TitleSmall,
    LocationMapCard,
    ServiceApplicationCard,
    PartnersCarousel,
    Title,
    ServicesCard,
  },
};
</script>
<style lang=""></style>
