<template>
  <div id="app">
    <p>Hello!</p>
    <ul>
      <li>
        <router-link to="/">Navigate to Home</router-link>
      </li>
      <li>
        <router-link to="/item">Navigate to Item</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
