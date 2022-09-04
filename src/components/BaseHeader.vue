<template>
  <nav
    class="navbar is-primary is-spaced has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div id="navbarBasicExample" class="navbar-item is-active">
      <div class="navbar-start">
        <router-link to="/management" class="navbar-item">管理</router-link>

        <router-link to="/roll" class="navbar-item">点名</router-link>
      </div>
    </div>
  </nav>
  <hr />
</template>

<style scoped>
hr {
  margin: 0;
}
</style>
