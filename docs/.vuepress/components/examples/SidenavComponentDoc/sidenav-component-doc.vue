<template>
<div class="pt-4">
   <button class="btn btn-success" @click="opened = !opened">Sidenav bottom</button>
  <sidenav-component :opened="opened" @eventOpened="opened = $event">
    <div class="container">
      <div class="row">
        <div class="col-12">
            <button class="btn btn-success" @click="opened2 = !opened2">Sidenav direta</button>
        </div>
      </div>
    </div>
  </sidenav-component>
  <button class="btn btn-success" @click="opened2 = !opened2">Sidenav direta</button>
  <sidenav-component :opened="opened2" @eventOpened="opened2 = $event" :side="'right'">
  </sidenav-component>
</div>
</template>

<script>
export default {
  data () {
    return {
      opened: true,
      opened2: false
    }
  }
}
</script>