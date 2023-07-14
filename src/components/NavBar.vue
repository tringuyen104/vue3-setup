<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-auto bg-light sticky-top">
          <div
            class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top"
          >
            <RouterLink
              to="/"
              class="nav-link py-3 px-2"
              v-bind:title="$t('about')"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
            <font-awesome-icon icon="fa-solid fa-t" size="3x"/>
            </RouterLink>
            <ul
              class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center"
            >
              <li class="nav-item">
                <RouterLink
                  to="/"
                  class="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home"
                >
                  <font-awesome-icon icon="fa-solid fa-house" size="2x" />
                </RouterLink>
              </li>
              <li>
                <!-- <a
                href="/about"
                class="nav-link py-3 px-2"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Dashboard"
              >
                <font-awesome-icon icon="fa-regular fa-calendar" size="2x" />
              </a> -->

                <RouterLink
                  to="/about"
                  class="nav-link py-3 px-2"
                  v-bind:title="$t('about')"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home"
                >
                  <font-awesome-icon icon="fa-regular fa-calendar" size="2x" />
                </RouterLink>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Orders"
                >
                  <font-awesome-icon
                    icon="fa fa-solid fa-table-cells-large"
                    size="2x"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Products"
                >
                  <font-awesome-icon icon="fa fa-regular fa-heart" size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <font-awesome-icon icon="fa-solid fa-users" size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm p-3 min-vh-100">
          <div class="w-75 site-content-position">
            <RouterView />
          </div>
        </div>
      </div>
  </div>
</template>
<style lang="scss"></style>
